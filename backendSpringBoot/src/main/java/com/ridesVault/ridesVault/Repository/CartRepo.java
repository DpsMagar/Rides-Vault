package com.ridesVault.ridesVault.Repository;

import com.ridesVault.ridesVault.Models.Cart;
import com.ridesVault.ridesVault.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long> {

    // Find all cart items for a specific user
    List<Cart> findByUser(User user);

    // Alternative way if you only have userId (Spring automatically handles the JOIN)
    List<Cart> findByUserId(Long userId);
}
