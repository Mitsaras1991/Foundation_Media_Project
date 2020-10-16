package com.linneausauth.springsociallinnaeus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.linneausauth.springsociallinnaeus.model.Roles;

import java.util.Optional;

@Repository
public interface RolesRepository extends JpaRepository<Roles,Long> {
    Optional<Roles> findRolesByName(String name);
}
