package com.ridesVault.ridesVault.Repository;

import com.ridesVault.ridesVault.Models.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WishlistRepo extends JpaRepository<Wishlist, Long> {
    List<Wishlist> findByUserId(Long id);
}
