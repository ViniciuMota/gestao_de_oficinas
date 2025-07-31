package com.maratonalab.workshop_management.services;

import com.maratonalab.workshop_management.dto.RegisterDTO;
import com.maratonalab.workshop_management.dto.UserDTO;
import com.maratonalab.workshop_management.entities.User;
import com.maratonalab.workshop_management.entities.enums.UserRole;
import com.maratonalab.workshop_management.repositories.UserRepository;
import com.maratonalab.workshop_management.services.exceptions.ResourceNotFoundException;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private ModelMapper modelMapper;

//    @Test
//    void findAll_shouldReturnPageOfUserDTOs() {
//        // Arrange
//        Pageable pageable = Pageable.ofSize(10);
//        User user1 = new User("John", "Doe", "123-456-7890", "john.doe@example.com", "password", UserRole.USER);
//        User user2 = new User("Jane", "Smith", "987-654-3210", "jane.smith@example.com", "password", UserRole.ADMIN);
//
//
//
//        when(userRepository.findAll(pageable)).thenReturn(users);
//        when(modelMapper.map(any(), eq(UserDTO.class))).thenAnswer(invocation -> {
//            User user = invocation.getArgument(0);
//            UserDTO dto = new UserDTO();
//            dto.setId(user.getId());
//            dto.setFirstname(user.getFirstname());
//            dto.setLastname(user.getLastname());
//            return dto;
//        });
//
//        // Act
//        Page<UserDTO> result = userService.findAll(pageable);
//
//        // Assert
//        assertEquals(2, result.getTotalElements());
//        assertEquals(10, result.getSize());
//        assertEquals(0, result.getNumber());
//    }

    @Test
    void findById_shouldReturnUserDTO() {
        // Arrange
        long userId = 0;
        User user = new User("John", "Doe", "123-456-7890", "john.doe@example.com", "password", UserRole.USER);
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(modelMapper.map(any(), eq(UserDTO.class))).thenAnswer(invocation -> {
            User user2 = invocation.getArgument(0);
            UserDTO dto = new UserDTO();
            dto.setId(user2.getId());
            return dto;
        });

        // Act
        UserDTO result = userService.findById(userId);

        // Assert
        assertNotNull(result);
        assertEquals(userId, result.getId());
    }

    @Test
    void findById_shouldThrowResourceNotFoundException() {
        // Arrange
        long userId = 1;
        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> userService.findById(userId));
    }

    @Test
    void insert_shouldReturnUserRegisterDTO() {
        // Arrange
        RegisterDTO dto = new RegisterDTO("John", "Doe", "123-456-7890", "john.doe@example.com", "password", UserRole.USER);
        User user = new User("John", "Doe", "123-456-7890", "john.doe@example.com", "password", UserRole.USER);

        when(modelMapper.map(dto, User.class)).thenReturn(user);
        when(userRepository.save(user)).thenReturn(user);
        when(modelMapper.map(any(), eq(RegisterDTO.class))).thenAnswer(invocation -> {
            User user2 = invocation.getArgument(0);
            RegisterDTO dto2 = new RegisterDTO();
            dto2.setEmail(user2.getEmail());
            return dto2;
        });

        // Act
        RegisterDTO result = userService.insert(dto);

        // Assert
        assertNotNull(result);
        assertEquals("john.doe@example.com", result.getEmail());
    }
}