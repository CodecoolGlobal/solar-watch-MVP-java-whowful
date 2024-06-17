package com.codecool.solarwatch.service;

import com.codecool.solarwatch.exception.NotSupportedCityName;
import com.codecool.solarwatch.model.*;
import com.codecool.solarwatch.repository.CityRepository;
import com.codecool.solarwatch.repository.SolarDataRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Service
public class SolarWatchService {
    private static final String API_KEY = "55d7b2bae7a7cd01cf22089a1bd93ca6";
    private final RestTemplate restTemplate;
    private static final Logger logger = LoggerFactory.getLogger(SolarWatchService.class);
    private final CityRepository cityRepository;
    private final SolarDataRepository solarDataRepository;

    public SolarWatchService(RestTemplate restTemplate, CityRepository cityRepository, SolarDataRepository solarDataRepository) {
        this.restTemplate = restTemplate;
        this.cityRepository = cityRepository;
        this.solarDataRepository = solarDataRepository;
    }

    public SolarWatch getSolarWatchForCity(String city, LocalDate date) {
        if (!cityRepository.existsByName(city)) {
            saveCityToDb(city, date);
        }
        City selectedCity = getCityByName(city);
        return new SolarWatch(selectedCity.getSolarData().getSunrise(), selectedCity.getSolarData().getSunset(), city);
    }


    private void saveCityToDb(String city, LocalDate date) {
        String geocodeUrl = String.format("https://api.openweathermap.org/geo/1.0/direct?q=%s&appid=%s", city, API_KEY);
        ResponseEntity<GeocodeReport[]> geocodeResponse = restTemplate.getForEntity(geocodeUrl, GeocodeReport[].class);
        GeocodeReport[] geocodeObjects = geocodeResponse.getBody();
        if (geocodeObjects.length == 0){
            throw new NotSupportedCityName(city);
        }
        String solarWatchUrl = String.format("https://api.sunrise-sunset.org/json?lat=%s&lng=%s&date=%s", geocodeObjects[0].lat(), geocodeObjects[0].lon(), date);
        SolarWatchReport solarWatchResponse = restTemplate.getForObject(solarWatchUrl, SolarWatchReport.class);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("h:mm:ss a");
        String sunrise = solarWatchResponse.results().sunrise();
        String sunset = solarWatchResponse.results().sunset();

        SolarData solarData = new SolarData();
        solarData.setSunrise(LocalTime.parse(sunrise, formatter));
        solarData.setSunset(LocalTime.parse(sunset, formatter));
        solarDataRepository.save(solarData);
        logger.info("Solar data saved to DB");

        City newCity = new City();
        newCity.setCountry(geocodeObjects[0].country());
        newCity.setName(geocodeObjects[0].name());
        newCity.setLatitude(geocodeObjects[0].lat());
        newCity.setLongitude(geocodeObjects[0].lon());
        newCity.setState(geocodeObjects[0].state());
        newCity.setSolarData(solarData);
        cityRepository.save(newCity);
        logger.info("City saved to DB: {}", newCity.getName());
    }

    private City getCityByName(String cityName) {
        return cityRepository.findByName(cityName).orElseThrow(() -> new NotSupportedCityName(cityName));
    }
}
