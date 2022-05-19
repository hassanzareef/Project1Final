package com.revature.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.services.UserService;
import io.javalin.http.Handler;
import com.revature.models.*;
import javax.servlet.http.HttpSession;


public class UserController {

    private UserService us;

    private ObjectMapper om;

    public UserController(UserService us){
        this.us = us;
        this.om = new ObjectMapper();
    }

    public Handler handleRegister = (ctx -> {
        RegisterObject ro = om.readValue(ctx.body(), RegisterObject.class);

        System.out.println(ro);

        us.registerUser(ro.username, ro.password, ro.first, ro.last, ro.email);
        ctx.status(201);
        ctx.result("User Created");
    });

    public Handler handleLogin = (ctx) -> {
        LoginObject lo = om.readValue(ctx.body(), LoginObject.class);

        User u = us.loginUser(lo.username, lo.password);

        if(u == null){
            ctx.status(403);
            ctx.result("Username or password was incorrect");
        } else {
            //ctx.req.getSession().setAttribute("loggedIn", u.getUsername());
            ctx.req.getSession().setAttribute("role", u.getRole());
            ctx.req.getSession().setAttribute("id", u.getUserId());
            ctx.result(om.writeValueAsString(u));
        }
    };

    public Handler handleUpdateUser = (ctx) -> {
        if(ctx.req.getSession().getAttribute("id") == null){
            ctx.status(401);
            ctx.result("You must be logged in");
        } else {
            UpdateUserObject uuo = om.readValue(ctx.body(), UpdateUserObject.class);
            User u = new User(uuo.username, uuo.password, uuo.first, uuo.last, uuo.email);
            u.setUserId((int)ctx.req.getSession().getAttribute("id"));
            u.setRole((int)ctx.req.getSession().getAttribute("role"));
            System.out.println(u);
            ctx.result(om.writeValueAsString(us.updateUserInfo(u)));
        }
    };

    public Handler handleDeleteUser = (ctx) -> {
        if(ctx.req.getSession().getAttribute("id") == null){
            ctx.status(401);
            ctx.result("You must be logged in");
        } else {
            int id = (int) ctx.req.getSession().getAttribute("id");
            //User u = new User();
            //u.setId(id);
            us.deleteUser(id);
            ctx.result("User deleted");
        }
    };

    public Handler handleReadUser = (ctx) -> {
        if(ctx.req.getSession().getAttribute("id") == null){
            ctx.status(401);
            ctx.result("You must be logged in");
        } else {
            int id = (int) ctx.req.getSession().getAttribute("id");
            ctx.result(om.writeValueAsString(us.viewUser(id)));
        }
    };

    public Handler handleViewAllUsers = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(401);
            ctx.result("You must login to view all users");
        } else {
            if(((int)ctx.req.getSession().getAttribute("role") == 2)){
                ctx.result(om.writeValueAsString(us.viewAllUser()));
                ctx.status(201);

            }else{
                ctx.result("You are not a manager");
                ctx.status(403);
            }
        }
    };

    public Handler handleLogout = (ctx) -> {
        if (ctx.req.getSession().getAttribute("id") == null) {
            ctx.status(401);
            ctx.result("You must login to logout");
        } else {
            HttpSession session = ctx.req.getSession();
            session.invalidate();
            ctx.result("User has been logged out");
        }
    };
}
