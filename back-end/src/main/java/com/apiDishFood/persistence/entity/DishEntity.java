package com.apiDishFood.persistence.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "dish")
@Getter @Setter
public class DishEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dish_id", nullable = false, columnDefinition = "BIGINT")
    private long dishId;

    @Column(name = "dish_name", nullable = false, columnDefinition = "VARCHAR(50)", unique = true)
    private String dishName;

    @Column(name = "description", nullable = false, columnDefinition = "VARCHAR(150)")
    private String description;

    @Column(name = "price", nullable = false, columnDefinition = "DOUBLE")
    private double price;

}