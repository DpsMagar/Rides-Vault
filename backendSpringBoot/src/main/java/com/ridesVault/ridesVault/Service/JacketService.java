package com.ridesVault.ridesVault.Service;

import com.ridesVault.ridesVault.Models.Jacket;
import com.ridesVault.ridesVault.Repository.JacketRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JacketService {

    @Autowired
    private JacketRepo jacketRepo;

    public List<Jacket> getAllJackets() {
        return jacketRepo.findAll();
    }

    public Optional<Jacket> getSingleJacket(Long key) {
        return jacketRepo.findById(key);
    }
}
