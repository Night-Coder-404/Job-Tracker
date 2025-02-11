package com.coding_wielder.Job_Tracker.security;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class CustomUserDetails implements UserDetails {
  private final UUID id;
  private final String username;
  private final String password;
  private final List<? extends GrantedAuthority> authorities;

  public CustomUserDetails(UUID id, String username, String password, List<? extends GrantedAuthority> authorities) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.authorities = authorities;
  }

  public UUID getId() {
    return id;
  }

  @Override
  public String getPassword() {
      return password;
  }

  @Override
  public String getUsername() {
      return username;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
      return authorities;
  }
}
