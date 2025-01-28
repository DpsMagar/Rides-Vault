package com.ridesVault.ridesVault.Service;

import com.ridesVault.ridesVault.Models.Pant;
import com.ridesVault.ridesVault.Repository.PantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PantService {

    @Autowired
    PantRepo pantRepo;

    public List<Pant> getAllPants() {
        return pantRepo.findAll();
    }

    public Optional<Pant> getSinglePant(Long key) {

        return pantRepo.findById(key);
    }
}
