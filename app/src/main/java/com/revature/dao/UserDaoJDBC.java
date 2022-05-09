package com.revature.dao;

import com.revature.models.User;
import com.revature.utils.ConnectionSingleton;

import java.sql.*;

public class UserDaoJDBC implements IUserDao {

    public ConnectionSingleton cs = ConnectionSingleton.getConnectionSingleton();

    public void createUser(User u){

        Connection c = cs.getConnection();

        String sql = "insert into users (username, password, first_name, last_name, email, role) values (?, ?, ?, ?, ?, ?)";

        try{
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setString(1, u.getUsername());
            ps.setString(2, u.getPassword());
            ps.setString(3, u.getFirst());
            ps.setString(4, u.getLast());
            ps.setString(5, u.getEmail());
            ps.setInt(6, u.getRole());

            ps.execute();

            return u;

        }catch (SQLException e){
            e.printStackTrace();
            return null;
        }
    }


}
