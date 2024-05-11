package com.codecool.solarwatch.controller;

import com.codecool.solarwatch.exception.InvalidDateException;
import com.codecool.solarwatch.model.SolarWatch;
import com.codecool.solarwatch.service.SolarWatchService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
public class SolarWatchController {

    private final SolarWatchService solarWatchService;

    public SolarWatchController(SolarWatchService solarWatchService) {
        this.solarWatchService = solarWatchService;
    }

    @GetMapping("/solarwatch")
    public ResponseEntity<?> getSolarWatch(@RequestParam(defaultValue = "Budapest") String city, @RequestParam LocalDate date){
        if (date.isBefore(LocalDate.now())){
            return ResponseEntity.badRequest().body("Date cannot be in the past");
        }
        SolarWatch report = solarWatchService.getSolarWatchForCity(city, date);
        return ResponseEntity.ok(report);
    }
}
