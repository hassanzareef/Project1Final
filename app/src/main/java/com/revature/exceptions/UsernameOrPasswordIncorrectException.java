package com.revature.exceptions;

public class UsernameOrPasswordIncorrectException extends Exception {

    public UsernameOrPasswordIncorrectException(){
        super("Username or Password incorrect");
    }

    public UsernameOrPasswordIncorrectException(String message){
        super(message);
    }
}