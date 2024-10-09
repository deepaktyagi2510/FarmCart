package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.dao.UserRepository;
import com.example.demo.model.User;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping("/")
	public String gethome() {
		return "This is user API";
	}
	
	@GetMapping("/{id}")
	public User getid(@PathVariable Long id) {
		return userRepo.findById(id).orElse(null);
	}
	
	@PostMapping("/")
		public User createUser(@RequestBody User u) {
			return userRepo.save(u);
		}
	@PostMapping("/login")
	public boolean loginUser(@PathVariable String email,@PathVariable String password) {
		User e;
		e= userRepo.findByEmail(email);
		if(e.getPassword().equals(password))
		return true;
		else {
			return false;
		}
	}
	
	@PutMapping("/{id}")
	public User updateUser(@PathVariable Long id,@RequestBody User u) {
		return u;
	}
	
	@DeleteMapping("/{id}")
	public String deleteUser(@PathVariable Long id) {
		userRepo.deleteById(id);
		return "Deleted Success";
	}

}
