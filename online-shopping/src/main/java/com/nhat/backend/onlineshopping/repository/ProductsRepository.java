package com.nhat.backend.onlineshopping.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.PagingAndSortingRepository;
import com.nhat.backend.onlineshopping.model.Product;

@Repository
public interface ProductsRepository extends PagingAndSortingRepository<Product, Long> {
    }
