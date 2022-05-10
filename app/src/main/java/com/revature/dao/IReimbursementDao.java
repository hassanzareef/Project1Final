package com.revature.dao;
import com.revature.models.Reimbursements;

import java.sql.Date;
import java.util.List;

public interface IReimbursementDao {

    public void createRequest(int author, double amount, String description, int type);
    public List<Reimbursements> viewPendingRequest(int id);

    public List<Reimbursements> viewResolvedRequest(int id);

    public List<Reimbursements> viewAllPendingRequests();

    public List<Reimbursements> viewAllResolvedRequests();

    public List<Reimbursements> viewRequestById(int id);

    public void approveRequest(int id);

    public void denyRequest(int id);



}
