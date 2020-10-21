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

import com.nhat.backend.onlineshopping.model.UserAccount;
import com.nhat.backend.onlineshopping.repository.UserAccountRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserAccountController {

	@Autowired
	private UserAccountRepository useraccountRepository;
	
	// Get User
	@GetMapping(path="user_accounts")
	public ResponseEntity<List<UserAccount>> getUserAccount(){
		List<UserAccount> useraccounts = useraccountRepository.findAll();
		HttpHeaders headers = new HttpHeaders();
		headers.add("Access-Control-Allow-Origin","*");
		headers.add("Access-Control-Allow-Headers","Origin, X-Request-With, Content-Type,Accept" );
		headers.add("Access-Control-Expose-Headers","X-total-Count,Content-Range" );
		headers.add("Content-Range",String.format("%d", useraccounts.size()));

		return new ResponseEntity<List<UserAccount>>(useraccounts, headers, HttpStatus.OK);
		
	}
	
	@PostMapping(path="/user_account")
	public UserAccount createUserAccount(@RequestBody UserAccount useraccount) {
		return useraccountRepository.save(useraccount);
	}
	
}
