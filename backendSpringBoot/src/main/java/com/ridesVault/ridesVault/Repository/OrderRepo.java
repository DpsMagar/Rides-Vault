package com.ridesVault.ridesVault.Repository;

import com.ridesVault.ridesVault.Models.Order;
import com.ridesVault.ridesVault.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepo extends JpaRepository<Order, Long> {
    List<Order> findByUser(User user);
//    List<Order> findAllById(List<Items> items);
}
