package com.ridesVault.ridesVault.Repository;

import com.ridesVault.ridesVault.Models.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WishlistRepo extends JpaRepository<Wishlist, Long> {
    List<Wishlist> findByUserId(Long id);

    Wishlist findByName(String name);

    Optional<Wishlist> findByUserIdAndItemId(Long id, Integer itemId);
}
