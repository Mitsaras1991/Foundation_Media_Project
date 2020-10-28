package com.linneausauth.springsociallinnaeus.controller;

import com.linneausauth.springsociallinnaeus.model.Note;
import com.linneausauth.springsociallinnaeus.model.TestSession;
import com.linneausauth.springsociallinnaeus.repository.NoteRepository;
import com.linneausauth.springsociallinnaeus.repository.TestSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestSessionController {
    @Autowired
    private NoteRepository noteRepository;
    @Autowired
    private TestSessionRepository sessionRepository;
    @GetMapping(value = "/testSessions")
    @PreAuthorize("hasAuthority('doctor')" +
            " || hasAuthority('researcher')" )
    public List<TestSession> getTestSession(){
        return sessionRepository.findAll();
    }

    @GetMapping(value = "/testSessions/{dataFile}/notes")
    @PreAuthorize("hasAuthority('doctor')" +
            " || hasAuthority('researcher')" )
    public List<Note> getTestSessionNotes(@PathVariable(value = "dataFile") String dataFile){
        List<Note> notes=noteRepository.findAllByTestSessionDataUrl(dataFile);
        notes.forEach(note -> System.out.println(note.getNote()));
        return noteRepository.findAllByTestSessionDataUrl(dataFile);
    }
    @GetMapping(value = "/testSessions/{patientId}/")
    @PreAuthorize("hasAuthority('doctor')" +
            " || hasAuthority('researcher')" )
    public List<TestSession> getTestSessionPatient(@PathVariable(value = "patientId") Long id){

        return sessionRepository.findAllByTestIdTherapyIdPatientId(id);
    }
}
