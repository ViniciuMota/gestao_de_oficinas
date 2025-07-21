package com.maratonalab.workshop_management.entities;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "tb_service_item")
public final class ServiceItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private double unitPrice;

    @OneToOne
    @JoinColumn(name = "service_order_id", unique = true)
    private ServiceOrder serviceOrder;

    public ServiceItem() {}

    public ServiceItem(String name, double unitPrice, ServiceOrder serviceOrder) {
        this.name = name;
        this.unitPrice = unitPrice;
        this.serviceOrder = serviceOrder;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public ServiceOrder getServiceOrder() {
        return serviceOrder;
    }

    public void setServiceOrder(ServiceOrder serviceOrder) {
        this.serviceOrder = serviceOrder;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        ServiceItem that = (ServiceItem) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
