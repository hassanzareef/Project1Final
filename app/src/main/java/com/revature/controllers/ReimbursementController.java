package com.revature.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.models.Reimbursements;
import com.revature.models.RequestObject;
import com.revature.models.User;
import com.revature.services.ReimbursementService;
import io.javalin.http.Handler;

public class ReimbursementController {

    private ReimbursementService rs;
    private ObjectMapper om;

    public ReimbursementController(ReimbursementService rs){
        this.rs = rs;
        this.om = new ObjectMapper();
    }


    public Handler handleCreateRequest = (ctx) -> {

        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(401);
            ctx.result("You must login to create request");
        } else {
            int userId = (int)(ctx.req.getSession().getAttribute("id"));
            RequestObject r = om.readValue(ctx.body(), RequestObject.class);

            ctx.result(om.writeValueAsString(rs.createRequest(userId, r.amount, r.description, r.type)));
            ctx.status(201);
        }

    };

    public Handler handleViewPendingRequest = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(401);
            ctx.result("You must login to create request");
        } else {
            int userId = (int)(ctx.req.getSession().getAttribute("id"));

            ctx.result(om.writeValueAsString(rs.viewPendingRequest(userId)));
            ctx.status(201);

        }

    };

    public Handler handleViewResolvedRequest = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(401);
            ctx.result("You must login to create request");
        } else {
            int userId = (int)(ctx.req.getSession().getAttribute("id"));



            ctx.result(om.writeValueAsString(rs.viewResolvedRequest(userId)));
            ctx.status(201);

        }

    };

    public Handler handleViewAllPendingRequests = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(401);
            ctx.result("You must login to create request");
        } else {
            if(((int)ctx.req.getSession().getAttribute("role") == 2)){
                ctx.result(om.writeValueAsString(rs.viewAllPendingRequests()));
                ctx.status(201);

            }else{
                ctx.result("You are not a manager");
                ctx.status(403);
            }


        }

    };

    public Handler handleViewAllResolvedRequests = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(401);
            ctx.result("You must login to create request");
        } else {
            if(((int)ctx.req.getSession().getAttribute("role") == 2)){
                ctx.result(om.writeValueAsString(rs.viewAllResolvedRequests()));
                ctx.status(201);

            }else{
                ctx.result("You are not a manager");
                ctx.status(403);
            }


        }

    };

    public Handler handleViewRequestById = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(401);
            ctx.result("You must login to create request");
        } else {
            if(((int)ctx.req.getSession().getAttribute("role") == 2)){
                int id = Integer.parseInt(ctx.pathParam("id"));
                ctx.result(om.writeValueAsString(rs.viewRequestById(id)));
                ctx.status(201);

            }else{
                ctx.result("You are not a manager");
                ctx.status(403);
            }


        }

    };

    public Handler handleApproveRequest = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(401);
            ctx.result("You must login to create request");
        } else {
            if(((int)ctx.req.getSession().getAttribute("role") == 2)){
                int id = Integer.parseInt(ctx.pathParam("id"));
                rs.approveRequest(id);
                ctx.status(201);
                ctx.result("Request Approved");

            }else{
                ctx.result("You are not a manager");
                ctx.status(403);
            }


        }

    };

    public Handler handleDenyRequest = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(401);
            ctx.result("You must login to create request");
        } else {
            if(((int)ctx.req.getSession().getAttribute("role") == 2)){
                int id = Integer.parseInt(ctx.pathParam("id"));
                rs.denyRequest(id);
                ctx.status(201);
                ctx.result("Request Denied");

            }else{
                ctx.result("You are not a manager");
                ctx.status(403);
            }


        }

    };
}
