package com.ynov.chat.service;

import com.ynov.chat.model.Labels;
import com.ynov.chat.model.Product;
import com.ynov.chat.repository.LabelsRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class LabelsService {

    @Autowired
    private LabelsRepository labelsRepository;

    public Optional<Labels> getLabels(final Long id) {
        return labelsRepository.findById(id);
    }

    public Iterable<Labels> getLabels() {
        return labelsRepository.findAll();
    }

}
