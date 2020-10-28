package com.linneausauth.springsociallinnaeus.model;

import javax.persistence.*;

@Entity
@Table(name = "Therapy")
public class Therapy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "therapyID")
    private Long id;
    @OneToOne
    @JoinColumn(name = "patient", referencedColumnName = "id")
    private User patient;
    @OneToOne
    @JoinColumn(name = "med", referencedColumnName = "id")
    private User medical;
    @OneToOne
    @JoinColumn(name = "TH_LIST", referencedColumnName = "therapy_listID",nullable = false)
    private TherapyList therapyList;

    public Therapy() {
    }

    public Therapy(User patient, User medical, TherapyList therapyList) {

        this.patient = patient;
        this.medical = medical;
        this.therapyList = therapyList;
    }

    public Long getId() {
        return id;
    }

    public User getPatient() {
        return patient;
    }

    public User getMedical() {
        return medical;
    }

    public TherapyList getTherapyList() {
        return therapyList;
    }

    public void setPatient(User patient) {
        this.patient = patient;
    }

    public void setMedical(User medical) {
        this.medical = medical;
    }

    public void setTherapyList(TherapyList therapyList) {
        this.therapyList = therapyList;
    }
}
