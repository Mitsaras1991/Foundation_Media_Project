package com.linneausauth.springsociallinnaeus.model;

import javax.persistence.*;

@Entity
@Table(name = "Therapy_List")
public class TherapyList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "therapy_listID")
    private Long id;
    @Column(name = "name")
    private String name;
    @OneToOne
    @JoinColumn(name = "MedicineID", referencedColumnName = "medicineID")
    private Medicine medicine;
    @Column(name = "Dosage")
    private String dosage;

    public TherapyList() {
    }

    public TherapyList(String name, Medicine medicine, String dosage) {
        this.name = name;
        this.medicine = medicine;
        this.dosage = dosage;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Medicine getMedicine() {
        return medicine;
    }

    public String getDosage() {
        return dosage;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMedicine(Medicine medicine) {
        this.medicine = medicine;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }
}
