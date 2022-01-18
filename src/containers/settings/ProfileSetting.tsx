import * as React from 'react';
import Button from '../../components/common/buttons/PrimaryButton';
import Settings from '../../components/settings/Settings.components';
import { InputFieldContainer } from '../fields/inputField';
import img from '../../assets/images/saeed-karimi-IK5gq8VuF-s-unsplash.jpg';

export default function ProfileSetting() {
  return (
    <>
      <Settings.Profile>
        <Settings.Title>Profile</Settings.Title>
        <Settings.Row>
          <Settings.ProfileImage image={img} />
          <Settings.Col>
            <Button size="medium" type="submit" color="secondary">
              Save
            </Button>
            <Settings.Spacer direction="bottom" />
            <Button size="medium" type="submit" color="primary">
              Save
            </Button>
          </Settings.Col>
        </Settings.Row>
        <Settings.Form>
          <Settings.FormGroup>
            <InputFieldContainer type="text">First Name</InputFieldContainer>
            <InputFieldContainer type="text">Last Name</InputFieldContainer>
          </Settings.FormGroup>
          <Settings.FormGroup>
            <InputFieldContainer type="text">Username</InputFieldContainer>
          </Settings.FormGroup>
          {/* <Settings.FormGroup>
                        <InputFieldContainer type='text' >
                            Email
                        </InputFieldContainer>
                    </Settings.FormGroup>
                    <Settings.FormGroup>
                        <InputFieldContainer type='password' >
                            Password
                        </InputFieldContainer>
                    </Settings.FormGroup> */}
          <Settings.FormGroup>
            <Settings.ButtonWapper>
              <Button size="medium" type="submit" color="secondary">
                Save
              </Button>
            </Settings.ButtonWapper>
          </Settings.FormGroup>
        </Settings.Form>
      </Settings.Profile>
    </>
  );
}
