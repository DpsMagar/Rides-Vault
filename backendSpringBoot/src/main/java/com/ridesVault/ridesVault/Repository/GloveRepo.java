package com.ridesVault.ridesVault.Repository;


import com.ridesVault.ridesVault.Models.Glove;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GloveRepo extends JpaRepository<Glove, Long> {
}
