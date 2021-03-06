package com.nhat.backend.onlineshopping.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Orders")
public class Orders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ordersId")
	private Long Id;
	
	@Column(name = "address")
	private String address;
	
	@JsonFormat(pattern="yyyy-MM-dd")
	@Column (name = "dateCreated")
	private Date dateCreated;
	

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "userAccountId")
	private UserAccount userAccount;

	@ManyToOne
	@JoinColumn(name = "discountCodeId")
	private DiscountCode discountCode;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(
				name = "OrderDetails",
				joinColumns = @JoinColumn(name = "orderId"),
				inverseJoinColumns = @JoinColumn(name = "productId"))
	@JsonIgnore
	private List<Product> products;
	
	public Orders() {
		
	}

	public Long getId() {
		return Id;
	}
	
	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}


	public UserAccount getUserAccount() {
		return userAccount;
	}

	public void setUserAccount(UserAccount userAccount) {
		this.userAccount = userAccount;
	}

	public DiscountCode getDiscountCode() {
		return discountCode;
	}

	public void setDiscountCode(DiscountCode discountCode) {
		this.discountCode = discountCode;
	}

}
