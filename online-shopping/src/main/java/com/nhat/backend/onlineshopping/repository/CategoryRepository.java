package com.nhat.backend.onlineshopping.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nhat.backend.onlineshopping.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
	
	
}
