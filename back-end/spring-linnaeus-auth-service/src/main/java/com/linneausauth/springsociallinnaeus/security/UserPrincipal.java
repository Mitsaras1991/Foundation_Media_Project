package com.linneausauth.springsociallinnaeus.security;

import com.linneausauth.springsociallinnaeus.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.oidc.OidcUserInfo;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.*;

public class UserPrincipal implements OAuth2User, UserDetails,OidcUser {
    private Long id;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;
    private Map<String, Object> attributes;
    private OidcIdToken IdToken;
    private Map<String, Object> getClaims;
    private OidcUserInfo UserInfo;
    public UserPrincipal(Long id, String email,  Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.email = email;
        //this.password = password;
        this.authorities = authorities;
    }

    public static UserPrincipal create(User user) {
        List<GrantedAuthority> authorities =new ArrayList<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
        authorities.add(user.getRole());
authorities.stream().forEach(a->{
    System.out.println(a.getAuthority());
});
        return new UserPrincipal(
                user.getId(),
                user.getEmail(),

                authorities
        );
    }

    public static UserPrincipal create(User user, Map<String, Object> attributes) {
        UserPrincipal userPrincipal = UserPrincipal.create(user);

        userPrincipal.setAttributes(attributes);
        return userPrincipal;
    }

    public void setIdToken(OidcIdToken idToken) {
        IdToken = idToken;
    }

    public void setGetClaims(Map<String, Object> getClaims) {
        this.getClaims = getClaims;
    }

    public void setUserInfo(OidcUserInfo userInfo) {
        UserInfo = userInfo;
    }

    public static OidcUser createOpenId(User user, OidcUser oidcUser) {
        UserPrincipal userPrincipal =UserPrincipal.create(user,oidcUser.getAttributes());
        userPrincipal.setGetClaims(oidcUser.getClaims());
        userPrincipal.setIdToken(oidcUser.getIdToken());
        userPrincipal.setUserInfo(oidcUser.getUserInfo());
        return userPrincipal;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public void setAttributes(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    @Override
    public String getName() {
        return String.valueOf(id);
    }

    @Override
    public Map<String, Object> getClaims() {
        return this.getClaims;
    }

    @Override
    public OidcUserInfo getUserInfo() {
        return this.UserInfo;
    }

    @Override
    public OidcIdToken getIdToken() {
        return this.IdToken;
    }
}
