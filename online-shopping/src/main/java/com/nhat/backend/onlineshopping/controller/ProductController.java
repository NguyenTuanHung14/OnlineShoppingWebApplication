package com.nhat.backend.onlineshopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nhat.backend.onlineshopping.model.Product;
import com.nhat.backend.onlineshopping.repository.ProductsRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProductController {
	
	@Autowired
	private ProductsRepository productsRepository;
	
	//get Products
	@GetMapping(path = "/products")
	public ResponseEntity<List<Product>> getProducts(){
		List<Product> products = productsRepository.findAll();
		HttpHeaders headers = new HttpHeaders();
		headers.add("Access-Control-Allow-Origin","*" );
		headers.add("Access-Control-Allow-Headers","Origin, X-Request-With, Content-Type,Accept" );
		headers.add("Access-Control-Expose-Headers","X-total-Count,Content-Range" );
		headers.add("Content-Range",String.format("%d", products.size()));
		return new ResponseEntity<List<Product>>(products, headers,HttpStatus.OK);
	}
	
	//create Products
	@PostMapping("/products")
	public Product createProducts(@RequestBody Product product) {
		return productsRepository.save(product);
	}
	
	
}
