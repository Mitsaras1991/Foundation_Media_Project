package com.linneausauth.springsociallinnaeus.security.oauth2.user;

import com.linneausauth.springsociallinnaeus.model.Roles;
import com.linneausauth.springsociallinnaeus.repository.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Map;

public class GithubOAuth2UserInfo extends OAuth2UserInfo {
    private  final String Github_Role ="researcher";
    @Autowired
    private RolesRepository rolesRepository;
    public GithubOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);

    }

    @Override
    public String getId() {
        return ((Integer) attributes.get("id")).toString();
    }

    @Override
    public String getName() {
        return (String) attributes.get("name");
    }

    @Override
    public String getEmail() {
        return (String) attributes.get("email");
    }

    @Override
    public String getImageUrl() {
        return (String) attributes.get("avatar_url");
    }



    @Override
    public String getAuthority() {
        return Github_Role;
    }
}
