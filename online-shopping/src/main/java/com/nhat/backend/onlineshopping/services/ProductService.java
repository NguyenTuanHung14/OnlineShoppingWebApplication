package com.nhat.backend.onlineshopping.services;
import com.nhat.backend.onlineshopping.repository.ProductsRepository;
import com.nhat.backend.onlineshopping.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ProductService {
    @Autowired
    ProductsRepository repository;

    public List<Product> getAllProduct(Integer pageNo, Integer pageSize)
    {
        Pageable paging = PageRequest.of(pageNo, pageSize);

        Page<Product> pagedResult = repository.findAll(paging);

        if(pagedResult.hasContent()) {
            return pagedResult.getContent();
        } else {
            return new ArrayList<Product>();
        }
    }
}
