package com.ridesVault.ridesVault.Repository;


import com.ridesVault.ridesVault.Models.Pant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PantRepo extends JpaRepository<Pant, Long> {
}
