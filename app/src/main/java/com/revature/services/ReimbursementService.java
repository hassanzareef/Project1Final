package com.revature.services;

import com.revature.dao.IReimbursementDao;
import com.revature.dao.IUserDao;
import com.revature.models.Reimbursements;
import com.revature.models.User;
import com.revature.dao.UserDaoJDBC;

import java.util.List;

public class ReimbursementService {
    private IReimbursementDao rd;

    public ReimbursementService(IReimbursementDao rd){
        this.rd = rd;
    }

    public Reimbursements createRequest(int author, double amount, String description, int type){
        return rd.createRequest(author, amount,description, type);
    }

    public List<Reimbursements> viewPendingRequest(int id){
        return rd.viewPendingRequest(id);
    }

    public List<Reimbursements> viewResolvedRequest(int id){
        return rd.viewResolvedRequest(id);
    }

    public List<Reimbursements> viewAllPendingRequests(){
        return rd.viewAllPendingRequests();
    }

    public List<Reimbursements> viewAllResolvedRequests(){
        return rd.viewAllResolvedRequests();
    }

    public List<Reimbursements> viewRequestById(int id){
        return rd.viewRequestById(id);
    }

    public void approveRequest(int id){
        rd.approveRequest(id);
    }

    public void denyRequest(int id){
        rd.denyRequest(id);
    }
}
