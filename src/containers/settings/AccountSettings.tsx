import * as React from 'react';
import Button from '../../components/common/buttons/PrimaryButton';
import Settings from '../../components/settings/Settings.components';
import { InputFieldContainer } from '../fields/inputField';

export default function AccountSettings() {
  const email = 'rototndwamulelu@gmail.com';
  return (
    <>
      <Settings.Profile>
        <Settings.Title>Account settings</Settings.Title>
        <Settings.TitleSub>Email address</Settings.TitleSub>
        <Settings.Text>
          Your Email address is <Settings.TextBold>{email}</Settings.TextBold>{' '}
          <Settings.LinkAction>Change</Settings.LinkAction>
        </Settings.Text>
        <Settings.Line />
        <Settings.TitleSub>
          Password <Settings.LinkAction>Hide</Settings.LinkAction>
        </Settings.TitleSub>
        <Settings.Form>
          <Settings.FormGroup>
            <InputFieldContainer type="password">
              New password
            </InputFieldContainer>
            <InputFieldContainer type="password">
              Current password
            </InputFieldContainer>
          </Settings.FormGroup>
        </Settings.Form>
        <Settings.Text>
          Can&apos;t remember your current password?{' '}
          <Settings.LinkAction>Reset your password</Settings.LinkAction>
        </Settings.Text>
        <Settings.ButtonWapper>
          <Button type="submit" size="small">
            Save password
          </Button>
        </Settings.ButtonWapper>
        <Settings.Line />
        <Settings.TitleSub>Delete account</Settings.TitleSub>
        <Settings.Text>
          Would you like to delete your account?
          <br />
          This account contains 12 published projects. Deleting your account
          will
          <br />
          remove all the content associated with it.
        </Settings.Text>

        <Settings.LinkAction>I want to delete my account</Settings.LinkAction>
      </Settings.Profile>
    </>
  );
}
