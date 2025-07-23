package com.maratonalab.workshop_management.services;

import com.maratonalab.workshop_management.entities.User;
import com.maratonalab.workshop_management.entities.dto.UserRegisterDTO;
import com.maratonalab.workshop_management.repositories.UserRepository;
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
    public Page<UserRegisterDTO> findAll(Pageable pageable) {
        Page<User> users = repository.findAll(pageable);
        return users.map(user -> modelMapper.map(user, UserRegisterDTO.class));
    }





}
