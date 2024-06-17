package com.codecool.solarwatch.service;

import com.codecool.solarwatch.model.GeocodeReport;
import com.codecool.solarwatch.model.SolarWatch;
import com.codecool.solarwatch.model.SolarWatchReport;
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

    public SolarWatchService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public SolarWatch getSolarWatchForCity(String city, LocalDate date){
        String geocodeUrl = String.format("https://api.openweathermap.org/geo/1.0/direct?q=%s&appid=%s", city, API_KEY);

        ResponseEntity<GeocodeReport[]> geocodeResponse = restTemplate.getForEntity(geocodeUrl, GeocodeReport[].class);
        GeocodeReport[] geocodeObjects = geocodeResponse.getBody();

        logger.info("Response from geocode API: {}", geocodeResponse);

        String solarWatchUrl = String.format("https://api.sunrise-sunset.org/json?lat=%s&lng=%s&date=%s", geocodeObjects[0].lat(), geocodeObjects[0].lon(), date);
        SolarWatchReport solarWatchResponse = restTemplate.getForObject(solarWatchUrl, SolarWatchReport.class);

        logger.info("Response from SolarWatch API: {}", solarWatchResponse);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("h:mm:ss a");
        String sunrise = solarWatchResponse.results().sunrise();
        String sunset = solarWatchResponse.results().sunset();

        return new SolarWatch(LocalTime.parse(sunrise, formatter), LocalTime.parse(sunset, formatter), city);
    }
}
