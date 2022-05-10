
package com.revature.models;

import java.util.Date;

public class Reimbursements{

    private int reimbursementId;
    private double amount;
    private Date subDate;
    private Date resDate;
    private String description;
    private int reimbursementAuthor;
    private int reimbursementResolver;
    private int reimbursementStatus;
    private int reimbursementType;


    public Reimbursements() {
    }


    public Reimbursements(int reimbursementId, double amount, Date subDate, Date resDate, String description, int reimbursmentAuthor, int reimbursementResolver, int reimbursementStatus, int reimbursementType) {
        this.reimbursementId = reimbursementId;
        this.amount = amount;
        this.subDate = subDate;
        this.resDate = resDate;
        this.description = description;
        this.reimbursementAuthor = reimbursmentAuthor;
        this.reimbursementResolver = reimbursementResolver;
        this.reimbursementStatus = reimbursementStatus;
        this.reimbursementType = reimbursementType;
    }

    public Reimbursements(double amount, String description, int reimbursementType) {
        this.amount = amount;
        this.description = description;
        this.reimbursementType = reimbursementType;
    }

    public int getReimbursementId() {
        return reimbursementId;
    }

    public void setReimbursementId(int reimbursementId) {
        this.reimbursementId = reimbursementId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Date getSubDate() {
        return subDate;
    }

    public void setSubDate(Date subDate) {
        this.subDate = subDate;
    }

    public Date getResDate() {
        return resDate;
    }

    public void setResDate(Date resDate) {
        this.resDate = resDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getReimbursmentAuthor() {
        return reimbursementAuthor;
    }

    public void setReimbursmentAuthor(int reimbursmentAuthor) {
        this.reimbursementAuthor = reimbursmentAuthor;
    }

    public int getReimbursementResolver() {
        return reimbursementResolver;
    }

    public void setReimbursementResolver(int reimbursementResolver) {
        this.reimbursementResolver = reimbursementResolver;
    }

    public int getReimbursementStatus() {
        return reimbursementStatus;
    }

    public void setReimbursementStatus(int reimbursementStatus) {
        this.reimbursementStatus = reimbursementStatus;
    }

    public int getReimbursementType() {
        return reimbursementType;
    }

    public void setReimbursementType(int reimbursementType) {
        this.reimbursementType = reimbursementType;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Reimbursements{" +
                "reimbursementId=" + reimbursementId +
                ", amount=" + amount +
                ", subDate=" + subDate +
                ", resDate=" + resDate +
                ", description='" + description + '\'' +
                ", reimbursmentAuthor=" + reimbursementAuthor +
                ", reimbursementResolver=" + reimbursementResolver +
                ", reimbursementStatus=" + reimbursementStatus +
                ", reimbursementType=" + reimbursementType +
                '}';
    }
}