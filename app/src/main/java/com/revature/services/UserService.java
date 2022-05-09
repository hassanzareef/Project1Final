package com.revature.services;

import com.revature.dao.IUserDao;
import com.revature.models.User;

public class UserService {

    private IUserDao ud;

    public UserService(IUserDao ud){
        this.ud = ud;
    }

    public void registerUser(String username, String password, String first, String last, String email){
        User register = new User(0, username, password, first, last, email);
        ud.createUser(register);
    }


}