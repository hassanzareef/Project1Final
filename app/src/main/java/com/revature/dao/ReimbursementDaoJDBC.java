package com.revature.dao;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import com.revature.models.Reimbursements;
import com.revature.utils.ConnectionSingleton;

public class ReimbursementDaoJDBC implements IReimbursementDao {

    public ConnectionSingleton cs = ConnectionSingleton.getConnectionSingleton();
    @Override
    public Reimbursements createRequest(int author, double amount, String description, int type) {
        Connection c = cs.getConnection();

        String sql = "insert into reimbursement (amount, submitted_date, description, reimbursement_author, reimbursement_status, reimbursement_type) values (?, ?, ?, ?, ?, ?)";

        try{
            PreparedStatement ps = c.prepareStatement(sql);

            ps.setDouble(1, amount);
            ps.setDate(2, (new Date (System.currentTimeMillis())));
            ps.setString(3, description);
            ps.setInt(4, author);
            ps.setInt(5, 1);
            ps.setInt(6, type);

            ps.execute();
            return new Reimbursements(amount, description, type);
        }catch (SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    public List<Reimbursements> viewPendingRequest(int id){
        Connection c = cs.getConnection();

        String sql = "Select * from reimbursement WHERE reimbursement_author=? and reimbursement_status = 1";

        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setInt(1,id);
            ResultSet rs = ps.executeQuery();


            List<Reimbursements> result = new ArrayList<>();

            while(rs.next()){
                result.add(new Reimbursements(rs.getInt(1), rs.getDouble(2), rs.getDate(3),rs.getDate(4), rs.getString(5), rs.getInt(6), rs.getInt(7), rs.getInt(8), rs.getInt(9)));
            }
            return result;
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }

    }

    @Override
    public List<Reimbursements> viewResolvedRequest(int id) {
        Connection c = cs.getConnection();

        String sql = "Select * from reimbursement WHERE reimbursement_author=? and reimbursement_status = 2";

        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setInt(1,id);
            ResultSet rs = ps.executeQuery();


            List<Reimbursements> result = new ArrayList<>();

            while(rs.next()){
                result.add(new Reimbursements(rs.getInt(1), rs.getDouble(2), rs.getDate(3),rs.getDate(4), rs.getString(5), rs.getInt(6), rs.getInt(7), rs.getInt(8), rs.getInt(9)));
            }
            return result;
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Reimbursements> viewAllPendingRequests() {
        Connection c = cs.getConnection();

        String sql = "Select * from reimbursement WHERE reimbursement_status = 1";

        try{
            Statement s = c.createStatement();
            ResultSet rs = s.executeQuery(sql);


            List<Reimbursements> result = new ArrayList<>();

            while(rs.next()){
                result.add(new Reimbursements(rs.getInt(1), rs.getDouble(2), rs.getDate(3),rs.getDate(4), rs.getString(5), rs.getInt(6), rs.getInt(7), rs.getInt(8), rs.getInt(9)));
            }
            return result;
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Reimbursements> viewAllResolvedRequests() {
        Connection c = cs.getConnection();

        String sql = "Select * from reimbursement WHERE reimbursement_status = 2";

        try{
            Statement s = c.createStatement();
            ResultSet rs = s.executeQuery(sql);


            List<Reimbursements> result = new ArrayList<>();

            while(rs.next()){
                result.add(new Reimbursements(rs.getInt(1), rs.getDouble(2), rs.getDate(3),rs.getDate(4), rs.getString(5), rs.getInt(6), rs.getInt(7), rs.getInt(8), rs.getInt(9)));
            }
            return result;
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }
    @Override
    public List<Reimbursements> viewRequestById(int id){
        Connection c = cs.getConnection();

        String sql = "Select * from reimbursement WHERE reimbursement_author = ?";

        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setInt(1,id);
            ResultSet rs = ps.executeQuery();


            List<Reimbursements> result = new ArrayList<>();

            while(rs.next()){
                result.add(new Reimbursements(rs.getInt(1), rs.getDouble(2), rs.getDate(3),rs.getDate(4), rs.getString(5), rs.getInt(6), rs.getInt(7), rs.getInt(8), rs.getInt(9)));
            }
            return result;
        }catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public void approveRequest(int id) {
        Connection c = cs.getConnection();

        String sql = "update reimbursement SET reimbursement_status = 2  WHERE reimbursement_id = ?";

        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setInt(1,id);
            ps.execute();

        }catch(SQLException e){
            e.printStackTrace();

        }
    }

    @Override
    public void denyRequest(int id) {
        Connection c = cs.getConnection();

        String sql = "update reimbursement SET reimbursement_status = 3  WHERE reimbursement_id = ?";

        try{
            PreparedStatement ps = c.prepareStatement(sql);
            ps.setInt(1,id);
            ps.execute();

        }catch(SQLException e){
            e.printStackTrace();

        }
    }
}

