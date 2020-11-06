package com.linneausauth.springsociallinnaeus.model;

import javax.persistence.*;

@Entity
@Table(name = "Note")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "noteID")
    private Long id;
    @OneToOne
    @JoinColumn(name = "Test_Session_ID", referencedColumnName = "test_SessionID")
    private TestSession testSession;

    @Column(name="note")
    private String note;
    @OneToOne
    @JoinColumn(name = "User_IDmed", referencedColumnName = "id")
    private User med;

    public Note() {
    }

    public Note(TestSession testSession, String note, User med) {
        this.testSession = testSession;
        this.note = note;
        this.med = med;
    }

    public Long getId() {
        return id;
    }

    public TestSession getTestSession() {
        return testSession;
    }

    public String getNote() {
        return note;
    }

    public User getMed() {
        return med;
    }

    public void setTestSession(TestSession testSession) {
        this.testSession = testSession;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public void setMed(User med) {
        this.med = med;
    }
}
