package com.ridesVault.ridesVault.Repository;

import com.ridesVault.ridesVault.Models.Jacket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface JacketRepo extends JpaRepository<Jacket, Long> {
}
