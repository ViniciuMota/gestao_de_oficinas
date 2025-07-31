package com.maratonalab.workshop_management.controllers;

import com.maratonalab.workshop_management.dto.UserDTO;
import com.maratonalab.workshop_management.dto.RegisterDTO;
import com.maratonalab.workshop_management.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<Page<UserDTO>> findAll(Pageable pageable) {
        return ResponseEntity.ok(userService.findAll(pageable));
    }

    // o RestExceptionHandler cuida das exceções que o Spring captura
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> findById(@PathVariable Long id) {
            UserDTO user = userService.findById(id);
            return ResponseEntity.ok().body(user);
    }
}
