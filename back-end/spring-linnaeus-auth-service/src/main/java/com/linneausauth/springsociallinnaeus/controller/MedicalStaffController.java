package com.linneausauth.springsociallinnaeus.controller;

import com.linneausauth.springsociallinnaeus.model.User;
import com.linneausauth.springsociallinnaeus.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MedicalStaffController {
    private static final Logger logger= LoggerFactory.getLogger(MedicalStaffController.class);
    private final Long PatientRoleId=new Long(1);
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/med/patients")
    @PreAuthorize("hasAuthority('doctor')" +
            " || hasAuthority('researcher')" )
    public List<User> getAllPatient(){
        logger.info("MEDICAL STAFF PATIENTS LIST VIEW");
        return userRepository.findAllByRoleId(PatientRoleId);
    }
}
