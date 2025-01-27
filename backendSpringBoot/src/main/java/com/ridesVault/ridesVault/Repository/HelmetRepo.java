package com.ridesVault.ridesVault.Repository;

import com.ridesVault.ridesVault.Models.Helmet;
import org.springframework.data.domain.Limit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface HelmetRepo extends JpaRepository<Helmet, Long> {
    Optional<Helmet> findById(Long id);
    Optional<Helmet> findByName(String name);
}
