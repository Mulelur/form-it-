import * as React from 'react';
import Auth from '../../components/auth/auth.components';
import Button from '../../components/common/buttons/PrimaryButton';
import { InputFieldContainer } from '../../containers/fields/inputField';

export default function SignUp() {
  return (
    <Auth>
      <Auth.Header>
        <Auth.HeaderLogo>Fort It</Auth.HeaderLogo>
        <Auth.HeaderLink>New to Fortm It?</Auth.HeaderLink>
        <Auth.HeaderButton>Login to your account</Auth.HeaderButton>
      </Auth.Header>
      <Auth.Body>
        <Auth.Form>
          <Auth.Heading>Sign Up</Auth.Heading>
          <Button width="100%" type="button" color="tertiary">
            Sing In
          </Button>
          <Auth.Divider>or Sing in with Your email</Auth.Divider>
          <InputFieldContainer style={{ padding: '0.5rem 0' }} type="email">
            Email Address
          </InputFieldContainer>
          <InputFieldContainer style={{ padding: '0.5rem 0' }} type="password">
            Passsword
          </InputFieldContainer>
          <InputFieldContainer style={{ padding: '0.5rem 0' }} type="password">
            Confirm Passsword
          </InputFieldContainer>
          <Auth.Spacer />
          <Button width="100%" type="button" color="secondary">
            Sing Up
          </Button>
        </Auth.Form>
      </Auth.Body>
      <Auth.Footer>
        <Auth.CopyRight>© 2021 WebLinnk</Auth.CopyRight>
        <Auth.FooterLink>Terms</Auth.FooterLink>
        <Auth.FooterLink>Privacy</Auth.FooterLink>
        <Auth.FooterLink>Security</Auth.FooterLink>
        <Auth.FooterLink>Get in Touch</Auth.FooterLink>
      </Auth.Footer>
    </Auth>
  );
}
