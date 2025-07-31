package com.maratonalab.workshop_management.dto;

import com.maratonalab.workshop_management.entities.enums.UserRole;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public final class RegisterDTO {
    private long id;

    @Size(min = 3, max = 80, message = "Nome deve ter entre 3 a 80 caracteres")
    @NotBlank(message = "Campo requerido")
    private String firstname;

    @Size(min = 3, max = 80, message = "Sobrenome deve ter entre 3 a 80 caracteres")
    @NotBlank(message = "Campo requerido")
    private String lastname;

    @NotBlank(message = "Campo requerido")
    private String phone;

    @Email
    @NotBlank(message = "Campo requerido")
    private String email;

    @NotBlank(message = "Campo requerido")
    private String password;

    private UserRole role;

    public RegisterDTO() {}

    public RegisterDTO(String firstname, String lastname, String phone, String email, String password, UserRole role) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserRole getRole() {
        return role;
    }
}

