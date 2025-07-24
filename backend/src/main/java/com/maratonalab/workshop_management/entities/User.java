package com.maratonalab.workshop_management.entities;

import jakarta.persistence.*;

import java.util.*;

@Entity
@Table(name = "tb_user")
public final class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String firstname;
    private String lastname;
    private String phone;

    @Column(unique = true)
    private String email;

    private String password;

    @OneToMany(mappedBy = "owner")
    private final List<Vehicle> vehicles = new ArrayList<>();

    @OneToMany(mappedBy = "client")
    private final Set<ServiceOrder> serviceOrder = new HashSet<>();

    public User() {}

    public User(String firstname, String lastname, String phone, String email, String password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }

    public long getId() {
        return id;
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

    public List<Vehicle> getVehicles() {
        return vehicles;
    }

    public Set<ServiceOrder> getServiceOrder() {
        return serviceOrder;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && Objects.equals(firstname, user.firstname) && Objects.equals(lastname, user.lastname);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstname, lastname);
    }
}
