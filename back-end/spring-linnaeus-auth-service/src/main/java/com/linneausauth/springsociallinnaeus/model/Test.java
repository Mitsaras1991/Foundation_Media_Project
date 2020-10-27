package com.linneausauth.springsociallinnaeus.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "Test")
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "testID")
    private Long id;

    @Column(name = "dateTime")
    @Temporal(TemporalType.DATE)
    private Date date;
    @OneToOne
    @JoinColumn(name = "TherapyID", referencedColumnName = "therapyID")
    private Therapy therapyId;

    public Test() {
    }

    public Test(Date date, Therapy therapy) {
        this.date = date;
        this.therapyId = therapy;
    }

    public Long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public Therapy getTherapy() {
        return therapyId;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setTherapy(Therapy therapy) {
        this.therapyId = therapy;
    }
}
