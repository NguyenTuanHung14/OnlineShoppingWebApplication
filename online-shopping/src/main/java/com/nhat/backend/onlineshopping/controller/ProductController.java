package com.nhat.backend.onlineshopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nhat.backend.onlineshopping.exception.MyResourceNotFoundException;
import com.nhat.backend.onlineshopping.model.Product;
import com.nhat.backend.onlineshopping.repository.ProductsRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
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
		headers.add("Access-Control-Allow-Headers","Origin, X-Request-With, Content-Type,Accept" );
		headers.add("Access-Control-Expose-Headers","X-total-Count,Content-Range" );
		headers.add("Content-Range",String.format("%d", products.size()));
		return new ResponseEntity<List<Product>>(products, headers,HttpStatus.OK);
	}
	
	
	@PostMapping(path = "/products")
	public Product createProduct(@RequestBody Product product){
		return productsRepository.save(product);
	}
	// get product by id rest api
	 @GetMapping("/products/{id}")
	 public ResponseEntity<Product> getProductById(@PathVariable Long id){ 
		 	Product product = productsRepository.findById(id)
		 			.orElseThrow(() -> new MyResourceNotFoundException("Product not exist with id :"+id ));
	 		return ResponseEntity.ok(product);		
	 }
		// update product  rest api
	 @PutMapping("/products/{id}")
		 public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails){ 
		 Product product = productsRepository.findById(id)
				 .orElseThrow(() -> new MyResourceNotFoundException("Product not exist with id :"+id ));
		 product.setName(productDetails.getName());
		 product.setPrice(productDetails.getPrice());
		 product.setSize(productDetails.getSize());
		 product.setDescription(productDetails.getDescription());
		 
		
		 Product updatedProduct = productsRepository.save(product);
		return ResponseEntity.ok(updatedProduct);		
	 }
	 // delete product
	
}
