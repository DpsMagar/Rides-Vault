package com.ridesVault.ridesVault.Repository;

import com.ridesVault.ridesVault.Models.Items;
import com.ridesVault.ridesVault.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemsRepo extends JpaRepository<Items, Long> {

    // Find all cart items for a specific user
    List<Items> findByUser(User user);

    // Alternative way if you only have userId (Spring automatically handles the JOIN)
    List<Items> findByUserId(Long userId);

//    List<Items> findAllById(List<Items> items);
}
