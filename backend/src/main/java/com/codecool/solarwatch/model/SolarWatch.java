package com.codecool.solarwatch.model;

import java.time.LocalDate;
import java.time.LocalTime;

public record SolarWatch(LocalTime sunrise, LocalTime sunset, String city, LocalDate date) {
}
