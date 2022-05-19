
package com.revature.models;
public class User {


    private int userId;
    private String username;
    private String password;
    private String email;
    private String first;
    private String last;
    private int role;


    public User() {
    }

    public User(int userId, String username, String password, String first, String last, String email, int role) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.first = first;
        this.last = last;
        this.role = role;
    }

    public User(int userId, String username, String password, String first, String last, String email) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.first = first;
        this.last = last;
        this.role = 1;
    }

    public User(String username, String password, String first, String last, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.first = first;
        this.last = last;
        this.role = 1;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirst() {
        return first;
    }

    public void setFirst(String first) {
        this.first = first;
    }

    public String getLast() {
        return last;
    }

    public void setLast(String last) {
        this.last = last;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "User{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", first='" + first + '\'' +
                ", last='" + last + '\'' +
                ", role=" + role +
                '}';
    }
}