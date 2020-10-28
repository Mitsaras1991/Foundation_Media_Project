package com.linneausauth.springsociallinnaeus.controller;

import com.linneausauth.springsociallinnaeus.exception.ResourceNotFoundException;
import com.linneausauth.springsociallinnaeus.model.PatientTestSessionData;
import com.linneausauth.springsociallinnaeus.model.Test;
import com.linneausauth.springsociallinnaeus.model.User;
import com.linneausauth.springsociallinnaeus.repository.TestRepo;
import com.linneausauth.springsociallinnaeus.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PatientTestController {
    private static final Logger logger= LoggerFactory.getLogger(PatientTestController.class);
    @Autowired
    private TestRepo testRepo;
    @Autowired
    private UserRepository userRepository;
    @GetMapping(value = "/patient/{patientID}/tests")
    @PreAuthorize("hasAuthority('doctor')" +
            " || hasAuthority('researcher')" )
    public List<Test> getPatientsTest(@PathVariable(value = "patientID") Long patientID){
        logger.info("Patient Test");
        User user=userRepository.findById(patientID).orElseThrow(()->new ResourceNotFoundException("Patient",patientID.toString(),patientID));;
        logger.info(user.getEmail());
        List<Test> tests=testRepo.findAll();
        tests.forEach(t -> System.out.println(t.getDate()));
        return testRepo.findAllByTherapyIdPatient(user);
    }
}
