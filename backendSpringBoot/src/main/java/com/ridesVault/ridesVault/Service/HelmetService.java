package com.ridesVault.ridesVault.Service;

import com.ridesVault.ridesVault.Models.Helmet;
import com.ridesVault.ridesVault.Repository.HelmetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HelmetService {
    @Autowired
    private HelmetRepo repo;

    public List<Helmet> getAllHelmets() {
        return repo.findAll();
    }
}
