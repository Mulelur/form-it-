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
  const [toggleDrawer, setToggleDrawer] = React.useState<boolean>(true);

  // eslint-disable-next-line no-console
  console.log(toggleDrawer);
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
      <HeaderContainer setToggleDrawer={setToggleDrawer} account />
      <Settings>
        <NavSettingContainer />
        <Settings.Divider />
        {renderSettingsType()}
      </Settings>
    </>
  );
}
