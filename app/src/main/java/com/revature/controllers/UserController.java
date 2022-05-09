package com.revature.controllers;


import com.revature.models.RegisterObject;
import com.revature.services.UserService;
import io.javalin.http.Handler;


public class UserController {

    private UserService us;

    private ObjectMapper om;

    public UserController(UserService us){
        this.us = us;
        this.om = new ObjectMapper();
    }

    public Handler handleReigster = (ctx -> {
        RegisterObject ro = om.readValue(ctx.body(), RegisterObject.class);

        System.out.println(ro);

        us.registerUser(ro.username, ro.password, ro.first, ro.last, ro.email);
        ctx.status(201);
        ctx.result("User Created");


    });

}
