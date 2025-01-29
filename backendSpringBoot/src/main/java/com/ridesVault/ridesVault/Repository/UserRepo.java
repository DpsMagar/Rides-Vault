package com.ridesVault.ridesVault.Repository;

import com.ridesVault.ridesVault.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}
