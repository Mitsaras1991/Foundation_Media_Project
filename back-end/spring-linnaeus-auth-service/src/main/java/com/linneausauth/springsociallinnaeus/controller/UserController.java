package com.linneausauth.springsociallinnaeus.controller;

import com.linneausauth.springsociallinnaeus.exception.ResourceNotFoundException;
import com.linneausauth.springsociallinnaeus.model.User;
import com.linneausauth.springsociallinnaeus.repository.UserRepository;
import com.linneausauth.springsociallinnaeus.security.CurrentUser;
import com.linneausauth.springsociallinnaeus.security.UserPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.io.File;
import java.io.IOException;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;
    private static final Logger logger= LoggerFactory.getLogger(UserController.class);
    @GetMapping("/user/me")
    @PreAuthorize("hasRole('ROLE_USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        logger.info("USER INFO");
       ClassPathResource resource=new ClassPathResource("data-files/data1.csv", this.getClass().getClassLoader());
      logger.info("Resource : " );
         User user=userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
        logger.info(user.getRole().getAuthority());
         return user;
    }
    @GetMapping("/user/you")
    @PreAuthorize("hasAuthority('physician')")

    public User getCurrenatUser(@CurrentUser UserPrincipal userPrincipal) {
        logger.info("USER INFO");
        User user=userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
        logger.info(user.getRole().getAuthority());
        return user;
    }
    @GetMapping(value = "/report/{reportName}", produces = "text/csv")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity generateReport(@PathVariable(value = "reportName") String reportName) {
        try {
            ClassPathResource resource=new ClassPathResource("data-files/"+reportName+".csv", this.getClass().getClassLoader());
            File file = resource.getFile();
            logger.info("Loading Test data" + resource.getFilename());
            return ResponseEntity.ok()
                    .header("Content-Disposition", "attachment; filename=" + reportName + ".csv")
                    .contentLength(file.length())
                    .contentType(MediaType.parseMediaType("text/csv"))
                    .body(new FileSystemResource(file));

        } catch ( IOException ex) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unable to generate report: " + reportName, ex);
        }
    }
}
