package com.ridesVault.ridesVault.Repository;

import com.ridesVault.ridesVault.Models.Items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemsRepo extends JpaRepository<Items, Long> {

//    // Find all cart items for a specific user
//    List<Cart> findByUser(User user);
//
//    // Alternative way if you only have userId (Spring automatically handles the JOIN)
//    List<Cart> findByUserId(Long userId);
}
