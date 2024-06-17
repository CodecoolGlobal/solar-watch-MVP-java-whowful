package com.codecool.solarwatch.repository;

import com.codecool.solarwatch.model.SolarData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SolarDataRepository extends JpaRepository<SolarData, Long> {
}
