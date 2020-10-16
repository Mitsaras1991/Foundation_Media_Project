package com.linneausauth.springsociallinnaeus.security.oauth2;

import com.linneausauth.springsociallinnaeus.model.AuthProvider;
import com.linneausauth.springsociallinnaeus.model.Roles;
import com.linneausauth.springsociallinnaeus.model.User;
import com.linneausauth.springsociallinnaeus.repository.RolesRepository;
import com.linneausauth.springsociallinnaeus.repository.UserRepository;
import com.linneausauth.springsociallinnaeus.security.UserPrincipal;
import com.linneausauth.springsociallinnaeus.security.oauth2.user.OAuth2UserInfo;
import com.linneausauth.springsociallinnaeus.security.oauth2.user.OAuth2UserInfoFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class OpeIdService extends OidcUserService {
    private  static final Logger logger = LoggerFactory.getLogger(OpeIdService.class);
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RolesRepository rolesRepository;
    @Override
    public OidcUser loadUser(OidcUserRequest userRequest) throws OAuth2AuthenticationException {
        OidcUser oidcUser = super.loadUser(userRequest);
        logger.info("Load Oidc Request %s");
                 Roles roles=rolesRepository.findById(new Long(1)).get();
        System.out.println(userRequest.getClientRegistration().getClientId());
        System.out.println(oidcUser.getAttributes());
        System.out.println(roles.getAuthority());

        return proccessAuth2User(userRequest, oidcUser);

    }

    private OidcUser proccessAuth2User(OAuth2UserRequest userRequest, OidcUser oidcUser) {
        OAuth2UserInfo userInfo= OAuth2UserInfoFactory.getOAuth2UserInfo(userRequest.getClientRegistration().getRegistrationId(),oidcUser.getAttributes());
         logger.info("Email " + userInfo.getEmail());
        Optional<User> userOptional=userRepository.findByEmail(userInfo.getEmail());
        User user;
        if(userOptional.isPresent()){
            user=userOptional.get();
            user=updateUser(user,userInfo);
            System.out.println(user.getId());
        }
        else user=registerUser(userRequest,userInfo);
        return UserPrincipal.createOpenId(user, oidcUser);
    }

    private User registerUser(OAuth2UserRequest userRequest, OAuth2UserInfo userInfo) {
        User userForRegister=new User();
       // userForRegister.setProvider(AuthProvider.valueOf(userRequest.getClientRegistration().getRegistrationId()));
        //userForRegister.setProviderId(userRequest.getClientRegistration().getClientId());
        Roles role=rolesRepository.findRolesByName(userInfo.getAuthority()).get();
        System.out.println(role.getAuthority());

        userForRegister.setName(userInfo.getName());
        userForRegister.setRole(role);
        System.out.println(userInfo.getEmail());
                System.out.println(userInfo.getImageUrl());
userForRegister.setImageUrl(userInfo.getImageUrl());
        userForRegister.setEmail(userInfo.getEmail());
        User user=userRepository.save(userForRegister);
        System.out.println(user.getEmail());
        return user;
    }

    private User updateUser(User user, OAuth2UserInfo userInfo) {
        user.setName(userInfo.getEmail());
        user.setRole(rolesRepository.findRolesByName(userInfo.getAuthority()).get());
        user.setImageUrl(userInfo.getImageUrl());
        return userRepository.save(user);
    }
}
