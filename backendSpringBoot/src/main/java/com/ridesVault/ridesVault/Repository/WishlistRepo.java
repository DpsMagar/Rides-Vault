package com.ridesVault.ridesVault.Repository;

import com.ridesVault.ridesVault.Models.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WishlistRepo extends JpaRepository<Wishlist, Long> {
}
