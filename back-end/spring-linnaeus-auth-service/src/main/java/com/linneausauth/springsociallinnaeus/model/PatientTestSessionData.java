package com.linneausauth.springsociallinnaeus.model;

import javax.persistence.*;

@Entity
@Table(name = "PatientTestSessionData")
public class PatientTestSessionData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dataID")
    private Long id;
    @OneToOne
    @JoinColumn(name = "patientID", referencedColumnName = "id")
    private User patient;
    @OneToOne
    @JoinColumn(name = "tSessionID", referencedColumnName = "test_SessionID")
    private TestSession testSession;

    public PatientTestSessionData() {
    }

    public PatientTestSessionData(User patient, TestSession testSession) {
        this.patient = patient;
        this.testSession = testSession;
    }

    public Long getId() {
        return id;
    }

    public User getPatient() {
        return patient;
    }

    public TestSession getSession() {
        return testSession;
    }

    public void setPatient(User patient) {
        this.patient= patient;
    }

    public void setSession(TestSession session) {
        this.testSession = session;
    }
}
