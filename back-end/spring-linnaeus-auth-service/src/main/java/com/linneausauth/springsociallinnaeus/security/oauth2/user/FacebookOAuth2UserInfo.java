package com.linneausauth.springsociallinnaeus.security.oauth2.user;

import com.linneausauth.springsociallinnaeus.model.Roles;
import com.linneausauth.springsociallinnaeus.repository.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Map;
@Service
public class FacebookOAuth2UserInfo extends OAuth2UserInfo{
    @Autowired
    private RolesRepository rolesRepository;
    private final String Facebook_Role= "physician";

    public FacebookOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    @Override
    public String getId() {
        return (String) attributes.get("id");
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
        if(attributes.containsKey("picture")) {
            Map<String, Object> pictureObj = (Map<String, Object>) attributes.get("picture");
            if(pictureObj.containsKey("data")) {
                Map<String, Object>  dataObj = (Map<String, Object>) pictureObj.get("data");
                if(dataObj.containsKey("url")) {
                    return (String) dataObj.get("url");
                }
            }
        }
        return null;
    }



    @Override
    public String getAuthority() {
        return Facebook_Role;
    }
}
