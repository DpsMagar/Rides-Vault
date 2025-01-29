package com.ridesVault.ridesVault.Service;


import com.ridesVault.ridesVault.Models.Glove;
import com.ridesVault.ridesVault.Repository.GloveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class GloveService {

    @Autowired
    private GloveRepo gloveRepo;

    @Value("${upload.dir_glove}")
    private String uploadDir;

    public List<Glove> getAllGloves() {
        return gloveRepo.findAll();
    }

    public Glove postGlove(String name, String brand, String size, String color, Integer price, Integer stockQuantity, MultipartFile image) throws IOException {
        String sanitized_image_name=System.currentTimeMillis() + "_"+ image.getOriginalFilename().replaceAll(" ","_");

        Path path = Paths.get(uploadDir,sanitized_image_name);

        Files.createDirectories(path.getParent());
        image.transferTo(path);

        Glove glove= Glove.builder()
                .name(name)
                .brand(brand)
                .size(size)
                .color(color)
                .price(price)
                .stockQuantity(stockQuantity)
                .image_name(sanitized_image_name)
                .build();

        return gloveRepo.save(glove);



    }

    public Glove getGloveById(Long key) {
        return gloveRepo.findById(key).orElse(null);
    }
}
