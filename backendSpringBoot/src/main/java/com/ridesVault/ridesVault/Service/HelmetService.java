package com.ridesVault.ridesVault.Service;

import com.ridesVault.ridesVault.Models.Helmet;
import com.ridesVault.ridesVault.Repository.HelmetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.Optional;

@Service
public class HelmetService {
    @Autowired
    private HelmetRepo repo;

    public String FOLDER_PATH = "D:\\Rides Vault\\backendSpringBoot\\src\\main\\resources\\static\\Images\\Helmets";

    public List<Helmet> getAllHelmets() {
        return repo.findAll();
    }

    public String uploadImageToFileSystem(MultipartFile file) throws IOException {
        String filePath=FOLDER_PATH+file.getOriginalFilename();

        Helmet fileData=repo.save(Helmet.builder()
                .image_name(file.getOriginalFilename())
                .image_type("image/png")
                .image_path(filePath)
                .build());



        file.transferTo(new File(filePath));

        if (fileData != null) {
            return "file uploaded successfully : " + filePath;
        }
        return null;
    }

    public byte[] downloadImageFromFileSystem(String fileName) throws IOException {
        Optional<Helmet> fileData = repo.findByName(fileName);
        String filePath=fileData.get().getImage_path();
        byte[] images = Files.readAllBytes(new File(filePath).toPath());
        return images;
    }

    public Optional<Helmet> getHelmetsByKey(Long Key) {
        return repo.findById(Key);
    }
}
