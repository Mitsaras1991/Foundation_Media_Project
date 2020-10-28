package com.linneausauth.springsociallinnaeus.model;

import javax.persistence.*;
import javax.validation.constraints.Email;


@Entity
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "username" ,nullable = false)
    private String name;

    @Email
    @Column(name = "email",nullable = false)
    private String email;

    @Column(name = "image_url")
    private String imageUrl;

    @OneToOne
    @JoinColumn(name = "role_id", referencedColumnName = "role_ID")
    private Roles role;
    @Column(name = "email_verified", nullable = false)
    private boolean emailVerified = false;
    @Column(name = "Organization")
    private int OrganizationId=1;

    @Column(name = "lat")
    private Float latitude;
    @Column(name = "longitude")
    private Float longitude;
    public User() {
    }


    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Roles getRole() {
        return role;
    }

    public void setRole(Roles role) {
        this.role = role;
    }

    public Boolean getEmailVerified() {
        return emailVerified;
    }

    public void setEmailVerified(Boolean emailVerified) {
        this.emailVerified = emailVerified;
    }




}