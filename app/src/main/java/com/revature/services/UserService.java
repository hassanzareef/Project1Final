package com.revature.services;

import com.revature.dao.IUserDao;
import com.revature.exceptions.UsernameOrPasswordIncorrectException;
import com.revature.models.User;

import java.util.List;

public class UserService {

    private IUserDao ud;

    public UserService(IUserDao ud){
        this.ud = ud;
    }

    public void registerUser(String username, String password, String first, String last, String email){
        User register = new User(0, username, password, first, last, email);
        ud.createUser(register);
    }

    public User loginUser(String username, String password) throws UsernameOrPasswordIncorrectException {

        User u = ud.readUserByUsername(username);

        if(u == null || !password.equals(u.getPassword())){
            throw new UsernameOrPasswordIncorrectException();
        } else {
            return u;
        }
    }

    public User updateUserInfo(User u){
        return ud.updateUser(u);
    }

    public void deleteUser(int id){
        ud.deleteUser(id);
    }

    public User viewUser(int id) { return ud.viewUserDao(id); }

    public List<User> viewAllUser() { return ud.viewAllUser(); }

}