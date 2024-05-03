package com.apiDishFood.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.apiDishFood.domain.service.DishService;
import com.apiDishFood.persistence.entity.DishEntity;

import java.util.List;

@RestController
@RequestMapping("/dish")
public class DishController {

    @Autowired
    private DishService dishService;

    @GetMapping("/all")    
    public List<DishEntity> listDishes() {
        return dishService.listDishes();
    }

    @GetMapping("/{dishId}")
    public DishEntity getDishById(@PathVariable long dishId) {
        return dishService.getDishById(dishId);
    }

    @PostMapping()    
    public void createDish(@RequestBody DishEntity dish) {
        dishService.createDish(dish);
    }

    @PutMapping("/{dishId}")
    public void updateDish(@PathVariable long dishId, @RequestBody DishEntity dish) {
        dishService.updateDish(dishId, dish);
    }

    @DeleteMapping("/{dishId}")
    public ResponseEntity<Void> deleteDish(@PathVariable long dishId) {
        dishService.deleteDish(dishId);
        return ResponseEntity.noContent().build();
    }
}
