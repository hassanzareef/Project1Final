package com.revature;

import com.revature.dao.IReimbursementDao;
import com.revature.models.Reimbursements;
import com.revature.models.User;
import com.revature.services.ReimbursementService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class ReimbursementTesting {

    @Before
    public void setupBeforeMethods(){
        MockitoAnnotations.openMocks(this);
    }

    @Mock
    static IReimbursementDao rd;

    @InjectMocks
    static ReimbursementService rs;

    @Test
    public void checkCreateRequest(){
        Reimbursements r = new Reimbursements(100, "Money", 1);
        when(rd.createRequest(anyInt(), anyDouble(), anyString(), anyInt())).thenReturn(r);
        rs.createRequest(0, 100, "Money", 1);
        verify(rd).createRequest(anyInt(), anyDouble(), anyString(), anyInt());
    }

    @Test
    public void checkViewPendingRequest(){
        List<Reimbursements> lr = new ArrayList<>();
        Reimbursements r = new Reimbursements(100, "Money", 1);
        lr.add(r);
        when(rd.viewPendingRequest(anyInt())).thenReturn(lr);
        rs.viewPendingRequest(1);
        verify(rd).viewPendingRequest(anyInt());
    }

    @Test
    public void checkViewResolvedRequest(){
        List<Reimbursements> lr = new ArrayList<>();
        Reimbursements r = new Reimbursements(100, "Money", 1);
        lr.add(r);
        when(rd.viewResolvedRequest(anyInt())).thenReturn(lr);
        rs.viewResolvedRequest(1);
        verify(rd).viewResolvedRequest(anyInt());
    }

    @Test
    public void checkViewAllPendingRequests(){
        List<Reimbursements> lr = new ArrayList<>();
        Reimbursements r = new Reimbursements(100, "Money", 1);
        lr.add(r);
        when(rd.viewAllPendingRequests()).thenReturn(lr);
        rs.viewAllPendingRequests();
        verify(rd).viewAllPendingRequests();
    }

    @Test
    public void checkViewAllResolvedRequests(){
        List<Reimbursements> lr = new ArrayList<>();
        Reimbursements r = new Reimbursements(100, "Money", 1);
        lr.add(r);
        when(rd.viewAllResolvedRequests()).thenReturn(lr);
        rs.viewAllResolvedRequests();
        verify(rd).viewAllResolvedRequests();
    }

    @Test
    public void checkViewRequestById(){
        List<Reimbursements> lr = new ArrayList<>();
        Reimbursements r = new Reimbursements(100, "Money", 1);
        lr.add(r);
        when(rd.viewRequestById(anyInt())).thenReturn(lr);
        rs.viewRequestById(1);
        verify(rd).viewRequestById(anyInt());
    }

}
