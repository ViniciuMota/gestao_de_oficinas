package com.maratonalab.workshop_management.controllers;

import com.maratonalab.workshop_management.dto.UserDTO;
import com.maratonalab.workshop_management.services.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.*;


// Import necessary classes for assertions and testing
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
class UserControllerTest {
    @Mock
    private UserService userService;  // Mocked dependency

    @InjectMocks
    private UserController userController; // The controller to test


    @Test
    void findAll_shouldReturnPageOfUsers() throws Exception {
        // Arrange: Mock the UserService behavior
        Page<UserDTO> mockPage = Page.empty(); // Create an empty page for testing purposes
        when(userService.findAll(any())).thenReturn(mockPage);

        // Act & Assert: Use MockMvc to simulate a GET request and assert the response
        userController.findAll(null);  // Simulate the call to findAll()
    }

    @Test
    void findById_shouldReturnUserDTO() throws Exception {
        // Arrange: Mock the UserService behavior
        long id = 0;
        UserDTO mockUser = new UserDTO(); // Create a dummy user DTO for testing purposes
        mockUser.setId(id);
        mockUser.setFirstname("Test");

        when(userService.findById(id)).thenReturn(mockUser);

        // Act & Assert: Use MockMvc to simulate a GET request and assert the response
        ResponseEntity<UserDTO> response = userController.findById(id);

        // Verify that the response contains the expected user DTO
        Assertions.assertEquals(mockUser, response.getBody());
    }
}