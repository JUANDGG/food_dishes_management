package com.apiDishFood.domain.repositoy;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.apiDishFood.persistence.entity.DishEntity;

@Repository
public interface DishRepository extends JpaRepository<DishEntity, Long> {
    @Query("SELECT d FROM DishEntity d WHERE lower(trim(d.dishName)) = lower(trim(:dishName))")
    List<DishEntity> findByName(@Param("dishName") String dishName);
}
