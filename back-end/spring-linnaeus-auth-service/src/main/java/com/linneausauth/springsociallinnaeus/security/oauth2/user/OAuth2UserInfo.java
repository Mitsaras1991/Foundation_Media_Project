package com.linneausauth.springsociallinnaeus.security.oauth2.user;

import org.springframework.security.core.GrantedAuthority;

import java.util.Map;

public abstract class OAuth2UserInfo implements GrantedAuthority {
    protected Map<String, Object> attributes;

    public OAuth2UserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public abstract String getId();

    public abstract String getName();

    public abstract String getEmail();

    public abstract String getImageUrl();
}
