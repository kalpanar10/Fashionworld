package daoimpl;

import java.util.List;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import dao.UserDAO;
import dto.Address;
import dto.Cart;
import dto.User;

@Repository("userDAO")
@Transactional
public class UserDAOImpl implements UserDAO {
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public boolean addUser(User user) {
		// TODO Auto-generated method stub
		try {
			sessionFactory.getCurrentSession().persist(user);
		} catch (Exception ex) {

		}
		return false;
	}

	@Override
	public boolean updateCart(Cart cart) {
		try {
			sessionFactory.getCurrentSession().update(cart);
		} catch (Exception ex) {

		}
		return false;
	}

	@Override
	public boolean addAddress(Address address) {
		try {
			sessionFactory.getCurrentSession().persist(address);
		} catch (Exception ex) {

		}
		return false;
	}

	public User getByEmail(String email) {
		String selectQuery = "FROM User WHERE email=:email";

		try {
			return sessionFactory.getCurrentSession().createQuery(selectQuery, User.class).setParameter("email", email)
					.getSingleResult();
		} catch (Exception ex) {
			ex.printStackTrace();
			return null;
		}
		
	}

	@Override
	public Address getBillingAddress(int userId) {
		String selectQuery = "FROM Address WHERE user = :user AND biling =:billing";
		try {
		return	sessionFactory.getCurrentSession()
				.createQuery(selectQuery,Address.class)
				.setParameter("user",userId)
			    .setParameter("billing",true)
			    .getSingleResult();
			
		}
		catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}
	

	@Override
	public List<Address> listShippingAddresses(int userId) {
		String selectQuery = "FROM Address WHERE user = :user AND shipping =:shipping";
		try {
		return	sessionFactory.getCurrentSession()
				.createQuery(selectQuery,Address.class)
				.setParameter("user",userId)
			    .setParameter("shipping",true)
			    .getResultList();
			
		}
		catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}

}
