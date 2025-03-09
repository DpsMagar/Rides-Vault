package com.ridesVault.ridesVault.Service;

import com.ridesVault.ridesVault.Dto.ItemsDTO;
import com.ridesVault.ridesVault.Models.Items;
import com.ridesVault.ridesVault.Models.User;
import com.ridesVault.ridesVault.Repository.ItemsRepo;
import com.ridesVault.ridesVault.Repository.UserRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ItemsService {

//    private final ItemsRepo itemRepository;
    private final UserRepo userRepository;
    private final ItemsRepo itemsRepo;


    public ItemsService(ItemsRepo itemRepository, UserRepo userRepository, ItemsRepo itemsRepo) {
//        this.itemRepository = itemRepository;
        this.userRepository = userRepository;
        this.itemsRepo = itemsRepo;
    }

    public Items addItem(ItemsDTO itemDTO) {

        User user = userRepository.findById(itemDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        System.out.println("Searching for item with name: " + itemDTO.getName());


        Items existingItem = itemsRepo.findByName(itemDTO.getName());
        System.out.println("Found item: " + existingItem);

        if (existingItem != null &&
                itemDTO.getItemId() != null &&
                itemDTO.getItemId().equals(existingItem.getItemId()) &&
                itemDTO.getUserId() != null &&
                itemDTO.getUserId().equals(existingItem.getUser().getId())) {
            existingItem.setQuantity(itemDTO.getQuantity() + existingItem.getQuantity());
            return itemsRepo.save(existingItem);
        }


        Items item = new Items();
        item.setUser(user);
        item.setName(itemDTO.getName());
        item.setQuantity(itemDTO.getQuantity());
        item.setItemType(itemDTO.getItemType());
        item.setPrice(itemDTO.getPrice());
        item.setImage(itemDTO.getImage());
        item.setTotalPrice(itemDTO.getTotalPrice());
        item.setItemId(itemDTO.getItemId());
        item.setImageLink(itemDTO.getImageLink());

        return itemsRepo.save(item);
    }


    public List<ItemsDTO> getItems() {


        return itemsRepo.findByUser(getAuthenticatedUser()).stream()
                .map(ItemsDTO::new)
                .collect(Collectors.toList());
    }

    private User getAuthenticatedUser(){
        System.out.println("Extracted Email: " + getLoggedInUsername());
        String username = getLoggedInUsername().split("Username=")[1].split(",")[0];


        return userRepository.findByEmail(username)
                .orElseThrow(()->new RuntimeException("User not found!!"));
    }

    private  String getLoggedInUsername(){
        Object principal= SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return (principal instanceof User) ? ((User) principal).getEmail() : principal.toString();
    }
//private String getLoggedInUsername() {
//    Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//    return (principal instanceof org.springframework.security.core.userdetails.User)
//            ? ((org.springframework.security.core.userdetails.User) principal).getUsername()  // Use getUsername() instead of getEmail()
//            : principal.toString();
//}

    public void deleteItem(Long key) {
        Optional<Items> item = itemsRepo.findById(key);

        if (item.isPresent()) {
            Items deletableItem = item.get();
            itemsRepo.delete(deletableItem);
        }
        else{
            throw new EntityNotFoundException("Item not found with id: " + key);
        }
//        itemRepository.deleteById(key);
    }
}
