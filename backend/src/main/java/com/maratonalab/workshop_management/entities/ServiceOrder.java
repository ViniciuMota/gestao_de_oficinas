package com.maratonalab.workshop_management.entities;

import com.maratonalab.workshop_management.entities.enums.ServiceOrderStatus;
import jakarta.persistence.*;

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

    @OneToOne(mappedBy = "serviceOrder", cascade = CascadeType.ALL)
    private ProductItem productItem;

    // aqui, eu pretendo colocar OneToOne de Vehicle e User
    // Também seria bom um payment method (O enum já está criado)

    public ServiceOrder() {}

    public ServiceOrder(String problemDescription, String vehicleCondition, ServiceOrderStatus status, int total, boolean isPaid, ProductItem productItem) {
        this.problemDescription = problemDescription;
        this.vehicleCondition = vehicleCondition;
        this.status = status;
        this.total = total;
        this.isPaid = isPaid;
        this.productItem = productItem;
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

    public ProductItem getProductItem() {
        return productItem;
    }

    public void setProductItem(ProductItem productItem) {
        this.productItem = productItem;
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
