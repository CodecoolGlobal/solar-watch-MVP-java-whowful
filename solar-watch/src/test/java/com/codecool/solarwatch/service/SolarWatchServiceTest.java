package com.codecool.solarwatch.service;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SolarWatchServiceTest {

    @Test
    void shouldReturnCorrectString() {
        String API_KEY = "55d7b2bae7a7cd01cf22089a1bd93ca6";
        String city = "Budapest";
        String actual = String.format("https://api.openweathermap.org/geo/1.0/direct?q=%s&appid=%s", city, API_KEY);

        String expected = "https://api.openweathermap.org/geo/1.0/direct?q=Budapest&appid=55d7b2bae7a7cd01cf22089a1bd93ca6";

        assertEquals(expected, actual);
    }

    @Test
    void shouldReturnCorrectTimeFormat() {

    }

}