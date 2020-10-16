package com.linneausauth.springsociallinnaeus.controller;

import com.linneausauth.springsociallinnaeus.model.TestSession;
import com.linneausauth.springsociallinnaeus.repository.TestSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestSessionController {
    @Autowired
    private TestSessionRepository sessionRepository;
    @GetMapping(value = "/testSessions")
    @PreAuthorize("hasAuthority('physician')" +
            " || hasAuthority('researcher')" )
    public List<TestSession> getTestSession(){
        return sessionRepository.findAll();
    }
}
