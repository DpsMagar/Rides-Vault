package com.ridesVault.ridesVault.Service;

import com.ridesVault.ridesVault.Dto.CartDTO;
import com.ridesVault.ridesVault.Models.Cart;
import com.ridesVault.ridesVault.Models.User;
import com.ridesVault.ridesVault.Repository.CartRepo;
import com.ridesVault.ridesVault.Repository.UserRepo;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartService {

    private final CartRepo cartRepository;
    private final UserRepo userRepository;

    public CartService(CartRepo cartRepository, UserRepo userRepository) {
        this.cartRepository = cartRepository;
        this.userRepository = userRepository;
    }

    public Cart addCart(CartDTO cartDTO) {
        Optional<User> userOptional = userRepository.findById(cartDTO.getUserId());
        if (userOptional.isEmpty()) {
            throw new RuntimeException("User not found");  // Handle this properly in production
        }

        User user = userOptional.get();

        Cart cart = new Cart();
        cart.setUser(user);
        cart.setName(cartDTO.getName());
        cart.setQuantity(cartDTO.getQuantity());
        cart.setItemType(cartDTO.getItemType());
        cart.setPrice(cartDTO.getPrice());
        cart.setImage(cartDTO.getImage());

        return cartRepository.save(cart);
    }

    public Object getCarts() {
        return cartRepository.findAll();
    }
}
