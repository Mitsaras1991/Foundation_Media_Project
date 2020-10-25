package com.linneausauth.springsociallinnaeus.model;

import javax.persistence.*;

@Entity
@Table(name = "Medicine")
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "medicineID")
    private Long id;
    @Column(name = "name")
    private String name;

    public Medicine() {
    }

    public Medicine(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
