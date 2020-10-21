package com.nhat.backend.onlineshopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nhat.backend.onlineshopping.exception.MyResourceNotFoundException;
import com.nhat.backend.onlineshopping.model.Category;
import com.nhat.backend.onlineshopping.model.Category;
import com.nhat.backend.onlineshopping.repository.CategoryRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/")
public class CategoryController {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@GetMapping(path = "/categories")
	public ResponseEntity<List<Category>> getCategories(){
		List<Category> catgories = categoryRepository.findAll();
		HttpHeaders headers = new HttpHeaders();
		headers.add("Access-Control-Allow-Headers","Origin, X-Request-With, Content-Type,Accept" );
		headers.add("Access-Control-Expose-Headers","X-total-Count,Content-Range" );
		headers.add("Content-Range",String.format("%d", catgories.size()));
		return new ResponseEntity<List<Category>>(catgories, headers,HttpStatus.OK);
	}
	
		@PostMapping(path = "/categories")
		public Category createCategory(@RequestBody Category category){
			return categoryRepository.save(category);
		}
	// get product by id rest api
	 @GetMapping("/categories/{id}")
	 public ResponseEntity<Category> getProductById(@PathVariable Long id){ 
		 	Category category = categoryRepository.findById(id)
		 			.orElseThrow(() -> new MyResourceNotFoundException("Category not exist with id :"+id ));
	 		return ResponseEntity.ok(category);		
	 }
		// update product  rest api
	 @PutMapping("/categories/{id}")
		 public ResponseEntity<Category> updateProduct(@PathVariable Long id, @RequestBody Category productDetails){ 
		 Category category = categoryRepository.findById(id)
				 .orElseThrow(() -> new MyResourceNotFoundException("Category not exist with id :"+id ));
		 category.setName(productDetails.getName());
		 
		
		Category updatedCategory = categoryRepository.save(category);
		return ResponseEntity.ok(updatedCategory);		
	 }

}
