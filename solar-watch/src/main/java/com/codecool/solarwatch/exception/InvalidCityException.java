package com.codecool.solarwatch.exception;

public class InvalidCityException extends RuntimeException{
    public InvalidCityException() {
        super("City name must be valid");
    }
}
