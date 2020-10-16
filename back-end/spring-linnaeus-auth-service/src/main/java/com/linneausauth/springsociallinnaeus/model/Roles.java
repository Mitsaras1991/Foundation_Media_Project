package com.linneausauth.springsociallinnaeus.model;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
@Table(name = "Security_Role")
public class Roles implements GrantedAuthority {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "role_ID")
    private Long id;
    @Column(name = "description")
    private String name;
    @Column(name = "kind")
    private String type;

    public Roles(String name, String type) {
        this.name = name;
        this.type = type;
    }

    public Roles() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String getAuthority() {
        return name;
    }


}
