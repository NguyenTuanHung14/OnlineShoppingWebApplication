//package com.nhat.backend.onlineshopping.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//import com.nhat.backend.onlineshopping.services.MyUserDetailsService;
//
//public class SecurityConfigurer extends WebSecurityConfigurerAdapter {
//	
//	@Autowired
//	private MyUserDetailsService myUserDetailService;
//
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(myUserDetailService);
//	}
//}
