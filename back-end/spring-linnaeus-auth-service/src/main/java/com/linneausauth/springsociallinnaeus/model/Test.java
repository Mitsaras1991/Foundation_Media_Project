package com.linneausauth.springsociallinnaeus.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "Test")
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "testID")
    private Long id;

    @Column(name = "da",columnDefinition="TIMESTAMP",nullable = false)
    private LocalDate date;
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "TherapyID", referencedColumnName = "therapyID")
    private Therapy therapyId;

    public Test() {
    }

    public Test(LocalDate date, Therapy therapy) {
        this.date = date;
        this.therapyId = therapy;
    }

    public Long getId() {
        return id;
    }

    public LocalDate getDate() {
        return date;
    }

    public Therapy getTherapy() {
        return therapyId;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setTherapy(Therapy therapy) {
        this.therapyId = therapy;
    }
}
