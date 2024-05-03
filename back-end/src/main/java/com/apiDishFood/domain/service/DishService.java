package com.apiDishFood.domain.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.apiDishFood.persistence.entity.DishEntity;


public interface DishService {

    Optional<DishEntity> findDishById(long dishId);
    List<DishEntity> listDishes();

    DishEntity getDishById(long dishId);

    void createDish(DishEntity dish);

    void updateDish(long dishId, DishEntity dish);

    ResponseEntity<Void> deleteDish(long dishId);
}