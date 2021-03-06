package com.linneausauth.springsociallinnaeus.repository;

import com.linneausauth.springsociallinnaeus.model.TestSession;
import com.linneausauth.springsociallinnaeus.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestSessionRepository extends JpaRepository<TestSession,Long> {
List<TestSession> findAllByTestIdTherapyIdPatientId(Long id);

}
