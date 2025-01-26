package com.ridesVault.ridesVault.Repository;

import com.ridesVault.ridesVault.Models.Helmet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HelmetRepo extends JpaRepository<Helmet, Long> {
}
