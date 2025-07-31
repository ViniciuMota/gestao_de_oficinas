package com.maratonalab.workshop_management.services;

import com.maratonalab.workshop_management.dto.RegisterDTO;
import com.maratonalab.workshop_management.dto.UserDTO;
import com.maratonalab.workshop_management.entities.User;
import com.maratonalab.workshop_management.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import org.springframework.security.core.userdetails.UserDetailsService;


@Service
public class AuthenticationService implements UserDetailsService {
    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByEmail(username);
    }

    public void save(RegisterDTO data, String encryptedPassword) {
        User newUser = new User(
                data.getFirstname(),
                data.getLastname(),
                data.getPhone(),
                data.getEmail(),
                encryptedPassword,
                data.getRole()
        );
        repository.save(newUser);
    }
}
