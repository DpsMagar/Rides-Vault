package com.ridesVault.ridesVault.Controller;

import com.ridesVault.ridesVault.Dto.ItemsDTO;
import com.ridesVault.ridesVault.Service.ItemsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user/items")
public class ItemsController {

    private final ItemsService itemsService;

    public ItemsController(ItemsService itemsService) {
        this.itemsService = itemsService;
    }

    @PostMapping
    public ResponseEntity<?> addItem(@RequestBody ItemsDTO itemsDTO) {
        return ResponseEntity.ok(itemsService.addItem(itemsDTO));
    }

    @GetMapping
    public ResponseEntity<?> getAllItems() {
        return ResponseEntity.ok(itemsService.getItems());
    }

    @DeleteMapping("/{key}")
    public void deleteItem(@PathVariable Long key) {
         itemsService.deleteItem(key);
    }
}
