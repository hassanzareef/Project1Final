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

        }catch (SQLException e){
            e.printStackTrace();
        }
    }

    @Override
    public User readUserByUsername(String username) {
        Connection c = cs.getConnection();
        String sql ="SELECT * FROM users WHERE username = ?";

        try {
            PreparedStatement p = c.prepareStatement(sql);
            p.setString(1, username);
            ResultSet rs = p.executeQuery();

            User result = null;
            while(rs.next()){
                result = new User(rs.getInt(1), rs.getString(2), rs.getString(3),
                        rs.getString(4), rs.getString(5), rs.getString(6), rs.getInt(7));
            }

            return result;

        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public User updateUser(User u) {
        Connection c = cs.getConnection();
        String sql = "UPDATE users " + "SET username = ?, " +
                "password = ?, " + "first_name = ?, " + "last_name = ?, " +
                "email = ? " + " WHERE user_id = ?";

        try{
            PreparedStatement p = c.prepareStatement(sql);

            p.setString(1, u.getUsername());
            p.setString(2, u.getPassword());
            p.setString(3, u.getFirst());
            p.setString(4, u.getLast());
            p.setString(5, u.getEmail());
            p.setInt(6, u.getUserId());

            p.execute();

            return u;

        } catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public void deleteUser(int id) {
        Connection c = cs.getConnection();
        String sql = "DELETE FROM users WHERE user_id = ?";

        try{
            PreparedStatement p = c.prepareStatement(sql);
            p.setInt(1, id);
            p.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }

    @Override
    public User viewUserDao(int id) {
        Connection c = cs.getConnection();
        String sql = "SELECT * FROM users WHERE user_id = ?";

        try{
            PreparedStatement p = c.prepareStatement(sql);
            p.setInt(1, id);
            ResultSet rs = p.executeQuery();
            User result = null;
            while(rs.next()) {
                result = new User(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4),
                        rs.getString(5), rs.getString(6), rs.getInt(7));
            }
            return result;

        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }
}
