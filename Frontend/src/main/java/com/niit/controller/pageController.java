package com.niit.controller;
 
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.niit.Exception.ProductNotFoundException;

import dao.CategoryDAO;
import dao.ProductDAO;
import dto.Category;
import dto.Product;

@Controller
public class pageController {
	private static final Logger logger = LoggerFactory.getLogger(pageController.class);
	@Autowired
	private CategoryDAO categoryDAO;
	@Autowired
	private ProductDAO productDAO;
@RequestMapping(value = { "/", "/home", "/index" })
	public ModelAndView index() {
		ModelAndView mv = new ModelAndView("page");
		mv.addObject("title","Home");
		logger.info("Inside pagecontroller index - info");
		logger.info("Inside pagecontroller index - debug");

		mv.addObject("categories",categoryDAO.list());
		mv.addObject("userClickHome",true);
		
		return mv;
	}

	@RequestMapping(value = { "/show/all/products" })
	public ModelAndView showAllProducts() {
		ModelAndView mv = new ModelAndView("page");
		mv.addObject("title", "All products");

		mv.addObject("categories", categoryDAO.list());
		mv.addObject("userClickAllProducts", true);

		return mv;
	}
	@RequestMapping(value = { "/show/category/{id}/products" })
	public ModelAndView showCategoryProducts(@PathVariable("id") int id) {
		ModelAndView mv = new ModelAndView("page");
		
		Category category = null;
		category = categoryDAO.get(id);
		mv.addObject("title",category.getName());
        mv.addObject("category",category);
		mv.addObject("categories", categoryDAO.list());
		mv.addObject("userClickCategoryProducts", true);

		return mv;
	}

	@RequestMapping(value = { "/about" })
	public ModelAndView about() {
		ModelAndView mv = new ModelAndView("page");
		mv.addObject("title", "About Us");
		mv.addObject("userClickAbout", true);

		return mv;
	}

	@RequestMapping(value = { "/contact" })
	public ModelAndView contact() {
		ModelAndView mv = new ModelAndView("page");
		mv.addObject("title", "Contact Us");
		mv.addObject("userClickContact", true);

		return mv;
	}
@RequestMapping(value = "/show/{id}/product") 
public ModelAndView showSingleProduct(@PathVariable int id) throws ProductNotFoundException
{
	Product product = productDAO.get(id);
	if(product == null)
		throw new ProductNotFoundException();
	ModelAndView mv = new ModelAndView("page");
	
	product.setViews(product.getViews() + 1);
	productDAO.update(product);
	mv.addObject("title",product.getName());
	mv.addObject("product",product);
	mv.addObject("userClickShowProduct", true);
	return mv;
	}


@RequestMapping(value = "/login")
public ModelAndView login(@RequestParam(name = "error", required = false) String error,
		@RequestParam(name = "logout", required = false) String logout) {
	ModelAndView mv = new ModelAndView("login");
	
	if(error != null)
	{
		mv.addObject("message", "Invalid Username and Password!");
	}
	
	if(logout != null)
	{
		mv.addObject("logout", "You have succesfully logged out");
	}
	
	mv.addObject("title", "Login");
	return mv;
}

@RequestMapping(value="/access-denied")
public ModelAndView accessDenied() {
	ModelAndView mv = new ModelAndView("error");
	mv.addObject("title","403-accessDenied");
	mv.addObject("errorTitle","not working");
	mv.addObject("errorDescription","not authorized");
	return mv;
}

@RequestMapping(value="/logout")
public String logout(HttpServletRequest request,HttpServletResponse response) {
	Authentication auth = SecurityContextHolder.getContext().getAuthentication();
			
	if(auth!=null) {
		new SecurityContextLogoutHandler().logout(request,response,auth);
	}
	return "redirect:/login?logout";
	
}


}

