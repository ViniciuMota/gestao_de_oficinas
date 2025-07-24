package com.maratonalab.workshop_management.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public final class LoginDTO {
    @Email
    @NotBlank(message = "Campo requerido")
    private final String email;

    @NotBlank(message = "Campo requerido")
    private final String password;

    public LoginDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
