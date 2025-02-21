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

    public CartService(CartRepo cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Cart addCart(CartDTO cartDTO) {



        Cart cart = new Cart();
        cart.setUser_id(cartDTO.getUserId());
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
