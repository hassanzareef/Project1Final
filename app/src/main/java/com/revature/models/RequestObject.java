package com.revature.models;

public class RequestObject {

    public double amount;
    public String description;
    public int type;


    @Override
    public String toString() {
        return "RequestObject{" +
                "amount=" + amount +
                ", description='" + description + '\'' +
                ", type=" + type +
                '}';
    }
}
