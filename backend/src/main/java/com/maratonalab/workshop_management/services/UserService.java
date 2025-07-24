package com.maratonalab.workshop_management.services;

import com.maratonalab.workshop_management.entities.User;
import com.maratonalab.workshop_management.dto.UserDTO;
import com.maratonalab.workshop_management.repositories.UserRepository;
import com.maratonalab.workshop_management.services.exceptions.ResourceNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    @Autowired
    private ModelMapper modelMapper;

    @Transactional(readOnly = true)
    public Page<UserDTO> findAll(Pageable pageable) {
        Page<User> users = repository.findAll(pageable);
        return users.map(user -> modelMapper.map(user, UserDTO.class));
    }

    @Transactional
    public UserDTO findById(long id) {
        User user = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Usuário com id: " + id + " não existe"));
        return modelMapper.map(user, UserDTO.class);
    }
}
