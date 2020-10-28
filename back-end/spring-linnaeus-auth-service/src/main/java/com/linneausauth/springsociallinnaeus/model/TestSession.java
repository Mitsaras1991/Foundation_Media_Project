package com.linneausauth.springsociallinnaeus.model;


import javax.persistence.*;

@Entity
@Table(name = "Test_Session")
public class TestSession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "test_SessionID")
    private Long id;
    @Column(name = "test_type")
    private Integer testType;
    @OneToOne
    @JoinColumn(name = "Test_ID", referencedColumnName = "testID")
    private Test testId;
    @Column(name = "DataURL")
    private String dataUrl;

    public TestSession() {
    }

    public TestSession(Integer testType, Test testId, String dataUrl) {
        this.testType = testType;
        this.testId = testId;
        this.dataUrl = dataUrl;
    }

    public Long getId() {
        return id;
    }

    public Integer getTestType() {
        return testType;
    }

    public Test getTestId() {
        return testId;
    }

    public String getDataUrl() {
        return dataUrl;
    }

    public void setTestType(Integer testType) {
        this.testType = testType;
    }

    public void setTestId(Test testId) {
        this.testId = testId;
    }

    public void setDataUrl(String dataUrl) {
        this.dataUrl = dataUrl;
    }
}
