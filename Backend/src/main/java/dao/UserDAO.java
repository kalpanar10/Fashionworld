package dao;

import java.util.List;

import dto.Address;
import dto.Cart;
import dto.User;


public interface UserDAO {

	User getByEmail(String email);
	boolean addUser(User user);
boolean updateCart(Cart cart);
	
	boolean addAddress(Address address);
//	boolean updateAddress(Address address);
	Address getBillingAddress(int userId);
	List<Address> listShippingAddresses(int userId);
	

	
}
