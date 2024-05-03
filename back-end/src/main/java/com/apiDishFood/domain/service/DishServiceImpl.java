package com.apiDishFood.domain.service;

import jakarta.transaction.Transactional;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.apiDishFood.domain.repositoy.DishRepository;
import com.apiDishFood.persistence.entity.DishEntity;


import java.util.List;
import java.util.Optional;



@Service
@Transactional
@Getter @Setter
public class DishServiceImpl implements DishService {

    @Autowired
    private DishRepository dishRepository;

    @Override
    public Optional<DishEntity> findDishById(long dishId) {
        return dishRepository.findById(dishId);
    }

    @Override
    public List<DishEntity> listDishes() {
        return dishRepository.findAll();
    }

    @Override
    public DishEntity getDishById(long dishId) {
        Optional<DishEntity> optionalDish = findDishById(dishId);
        if (optionalDish.isPresent()) {
            return optionalDish.get();
        } else {
            throw new RuntimeException("!Dish not found...");
        }
    }

    @Override
    public void createDish(DishEntity dish) {
        List<DishEntity> existingDishes = dishRepository.findByName(dish.getDishName());
        if (!existingDishes.isEmpty()) {
            throw new RuntimeException("!The dish you are trying to create already exists...");
        } else {
            dishRepository.save(dish);
        }
    }

    @Override
    public void updateDish(long dishId, DishEntity dish) {
        Optional<DishEntity> existingDish = findDishById(dishId);
        if (existingDish.isPresent()) {
            DishEntity currentDish = existingDish.get();
            if (!dish.getDescription().equals("")) {
                currentDish.setDescription(dish.getDescription());
                dishRepository.save(currentDish); // Save currentDish after changing the description
            }
            // If the description is empty, do nothing
        } else {
            throw new RuntimeException("!The dish you are trying to update does not exist...");
        }
    }

    @Override
    public ResponseEntity<Void> deleteDish(long dishId) {
        Optional<DishEntity> existingDish = findDishById(dishId);
        if (existingDish.isPresent()) {
            dishRepository.deleteById(dishId);
        } else {
            throw new RuntimeException("!The dish you are trying to delete has not been created yet...");
        }
        return ResponseEntity.noContent().build();
    }
}