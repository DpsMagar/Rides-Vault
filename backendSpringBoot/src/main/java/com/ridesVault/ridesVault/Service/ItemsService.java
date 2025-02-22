package com.ridesVault.ridesVault.Service;

import com.ridesVault.ridesVault.Dto.ItemsDTO;
import com.ridesVault.ridesVault.Models.Items;
import com.ridesVault.ridesVault.Models.User;
import com.ridesVault.ridesVault.Repository.ItemsRepo;
import com.ridesVault.ridesVault.Repository.OrderRepo;
import com.ridesVault.ridesVault.Repository.UserRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemsService {

    private final ItemsRepo itemRepository;
    private final UserRepo userRepository;
//    private final OrderRepo orderRepository;


    public ItemsService(ItemsRepo itemRepository, UserRepo userRepository, OrderRepo orderRepository) {
        this.itemRepository = itemRepository;
        this.userRepository = userRepository;
//        this.orderRepository = orderRepository;
    }

    public Items addItem(ItemsDTO itemDTO) {

        User user = userRepository.findById(itemDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));;

//        Order order = userRepository.findById(itemDTO.getUserId())
//                .orElseThrow(() -> new RuntimeException("User not found"));;


        Items item = new Items();
        item.setUser(user);
        item.setName(itemDTO.getName());
        item.setQuantity(itemDTO.getQuantity());
        item.setItemType(itemDTO.getItemType());
        item.setPrice(itemDTO.getPrice());
        item.setImage(itemDTO.getImage());

        return itemRepository.save(item);
    }

    public List<Items> getItems() {
        return itemRepository.findAll();
    }

    public void deleteItem(Long key) {
         itemRepository.deleteById(key);
    }
}
