import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Settings from '../../components/settings/Settings.components';

type Params = {
  settingsType: string;
};

export default function NavSettingContainer() {
  const { settingsType } = useParams<Params>();
  const [style, setStyle] = React.useState({
    width: '',
    left: ''
  });

  React.useEffect(() => {
    switch (settingsType) {
      case 'profile':
        setStyle({
          width: '9rem',
          left: '0'
        });
        break;
      case 'account-settings':
        setStyle({
          width: '12.9rem',
          left: '10rem'
        });
        break;
      case 'notifications':
        setStyle({
          width: '11rem',
          left: '26.5rem'
        });
        break;
      default:
        break;
    }
  }, [settingsType]);
  const history = useHistory();
  return (
    <>
      <Settings.Nav>
        <Settings.NavHeading>Settings</Settings.NavHeading>
        <Settings.NavList>
          <Settings.NavListItem
            onClick={() => {
              history.push(`/settings/profile`);
              setStyle({
                width: '9rem',
                left: '0'
              });
            }}
          >
            <Settings.NavLink>Profile</Settings.NavLink>
          </Settings.NavListItem>
          <Settings.NavListItem
            onClick={() => {
              history.push(`/settings/account-settings`);
              setStyle({
                width: '13rem',
                left: '9.9rem'
              });
            }}
          >
            Account Settings
          </Settings.NavListItem>
          <Settings.NavListItem
            onClick={() => {
              history.push(`/settings/notifications`);
              setStyle({
                width: '11rem',
                left: '26.5rem'
              });
            }}
          >
            <Settings.NavLink>Notifications</Settings.NavLink>
          </Settings.NavListItem>
        </Settings.NavList>
        <Settings.SegmentedControl>
          <Settings.SegmentedControlSegmentBackground style={style} />
        </Settings.SegmentedControl>
      </Settings.Nav>
    </>
  );
}
