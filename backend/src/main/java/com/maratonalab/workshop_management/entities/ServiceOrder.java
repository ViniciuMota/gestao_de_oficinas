package com.maratonalab.workshop_management.entities;

import com.maratonalab.workshop_management.entities.enums.ServiceOrderStatus;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "tb_service_order")
public final class ServiceOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String problemDescription;
    private String vehicleCondition;
    private ServiceOrderStatus status;
    private int total;
    private boolean isPaid;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private User client;

    @OneToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @OneToMany(mappedBy = "serviceOrder")
    private final List<ProductItem> productItem = new ArrayList<>();

    @OneToOne(mappedBy = "serviceOrder", cascade = CascadeType.ALL)
    private ServiceItem serviceItem;

    // Também seria bom um payment method (O enum já está criado)

    public ServiceOrder() {}

    public ServiceOrder(String problemDescription, String vehicleCondition, ServiceOrderStatus status, int total, boolean isPaid, User client, Vehicle vehicle) {
        this.problemDescription = problemDescription;
        this.vehicleCondition = vehicleCondition;
        this.status = status;
        this.total = total;
        this.isPaid = isPaid;
        this.client = client;
        this.vehicle = vehicle;
    }

    public long getId() {
        return id;
    }

    public String getProblemDescription() {
        return problemDescription;
    }

    public void setProblemDescription(String problemDescription) {
        this.problemDescription = problemDescription;
    }

    public String getVehicleCondition() {
        return vehicleCondition;
    }

    public void setVehicleCondition(String vehicleCondition) {
        this.vehicleCondition = vehicleCondition;
    }

    public ServiceOrderStatus getStatus() {
        return status;
    }

    public void setStatus(ServiceOrderStatus status) {
        this.status = status;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public boolean isPaid() {
        return isPaid;
    }

    public void setPaid(boolean paid) {
        isPaid = paid;
    }

    public List<ProductItem> getProductItem() {
        return productItem;
    }

    public User getClient() {
        return client;
    }

    public void setClient(User client) {
        this.client = client;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public ServiceItem getServiceItem() {
        return serviceItem;
    }

    public void setServiceItem(ServiceItem serviceItem) {
        this.serviceItem = serviceItem;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        ServiceOrder that = (ServiceOrder) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
