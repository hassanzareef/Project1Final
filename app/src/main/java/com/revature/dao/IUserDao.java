package com.revature.dao;

import com.revature.models.User;
import java.util.List;

public interface IUserDao {
    //CRUD
    public void createUser(User u);

    //public List<User> readAllUsers();

    public User readUserByUsername(String username);

    public User updateUser(User u);

    public void deleteUser(int id);

    public User viewUserDao(int id);

    public List<User> viewAllUser();
}
