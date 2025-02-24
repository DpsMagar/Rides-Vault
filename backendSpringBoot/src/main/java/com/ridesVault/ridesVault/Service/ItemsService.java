package com.ridesVault.ridesVault.Service;

import com.ridesVault.ridesVault.Dto.ItemsDTO;
import com.ridesVault.ridesVault.Models.Items;
import com.ridesVault.ridesVault.Models.User;
import com.ridesVault.ridesVault.Repository.ItemsRepo;
import com.ridesVault.ridesVault.Repository.UserRepo;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ItemsService {

    private final ItemsRepo itemRepository;
    private final UserRepo userRepository;


    public ItemsService(ItemsRepo itemRepository, UserRepo userRepository) {
        this.itemRepository = itemRepository;
        this.userRepository = userRepository;
    }

    public Items addItem(ItemsDTO itemDTO) {

        User user = userRepository.findById(itemDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));




        Items item = new Items();
        item.setUser(user);
        item.setName(itemDTO.getName());
        item.setQuantity(itemDTO.getQuantity());
        item.setItemType(itemDTO.getItemType());
        item.setPrice(itemDTO.getPrice());
        item.setImage(itemDTO.getImage());
        item.setTotalPrice(itemDTO.getTotalPrice());

        return itemRepository.save(item);
    }

    public List<ItemsDTO> getItems() {


        return itemRepository.findByUser(getAuthenticatedUser()).stream()
                .map(ItemsDTO::new)
                .collect(Collectors.toList());
    }

    private User getAuthenticatedUser(){
        System.out.println("Extracted Email: " + getLoggedInUsername());

        return userRepository.findByEmail(getLoggedInUsername())
                .orElseThrow(()->new RuntimeException("User not found!!"));
    }

    private  String getLoggedInUsername(){
        Object principal= SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return (principal instanceof User) ? ((User) principal).getEmail() : principal.toString();
    }

    public void deleteItem(Long key) {
        itemRepository.deleteById(key);
    }
}
