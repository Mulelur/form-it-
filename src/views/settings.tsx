import * as React from 'react';
import { useParams } from 'react-router-dom';
import Settings from '../components/settings';
import {
  NavSettingContainer,
  ProfileSettingContainer,
  AccountSettingsContainer,
  NotificationsSettingsContainer
} from '../containers/settings';
import HeaderContainer from '../containers/layout/header';

type Params = {
  settingsType: string;
};

export default function SettingsView() {

  // eslint-disable-next-line no-console
  const { settingsType } = useParams<Params>();
  const renderSettingsType = () => {
    let view;
    switch (settingsType) {
      case 'profile':
        view = <ProfileSettingContainer />;
        break;
      case 'account-settings':
        view = <AccountSettingsContainer />;
        break;
      case 'notifications':
        view = <NotificationsSettingsContainer />;
        break;
      default:
        break;
    }
    return view;
  };

  return (
    <>
      <HeaderContainer account />
      <Settings>
        <NavSettingContainer />
        <Settings.Divider />
        {renderSettingsType()}
      </Settings>
    </>
  );
}
