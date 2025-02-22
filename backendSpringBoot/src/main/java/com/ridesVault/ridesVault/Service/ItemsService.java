package com.ridesVault.ridesVault.Service;

import com.ridesVault.ridesVault.Dto.ItemsDTO;
import com.ridesVault.ridesVault.Models.Items;
import com.ridesVault.ridesVault.Repository.ItemsRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemsService {

    private final ItemsRepo itemRepository;
    

    public ItemsService(ItemsRepo itemRepository) {
        this.itemRepository = itemRepository;
    }

    public Items addItem(ItemsDTO itemDTO) {



        Items item = new Items();
        item.setUser(itemDTO.getUserId());
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
