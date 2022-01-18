// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import Settings from '../../components/settings/Settings.components';
import Button from '../../components/common/buttons/PrimaryButton';

export default function NotificationsSettings() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <>
      <Settings.Profile>
        <Settings.Title>Notifications</Settings.Title>
        <Settings.TitleSub>Email notifications</Settings.TitleSub>
        <Settings.Spacer direction="bottom" />
        <Settings.TitleSub>
          Weekly newsletter <Switch {...label} defaultChecked />
        </Settings.TitleSub>
        <Settings.Text>
          A small text about what the newslettetrs might contain.
        </Settings.Text>
        <Settings.TitleSub>
          Account summary <Switch {...label} defaultChecked />
        </Settings.TitleSub>
        <Settings.Text>
          A small text about what the newslettetrs might contain.
        </Settings.Text>
        <Settings.Title>Website notifications</Settings.Title>
        <Settings.List>
          <Settings.ListItem>
            <Checkbox
              {...label}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            />{' '}
            <Settings.Text>New follower</Settings.Text>
          </Settings.ListItem>
          <Settings.ListItem>
            <Checkbox
              defaultChecked
              {...label}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            />{' '}
            <Settings.Text>Post like</Settings.Text>
          </Settings.ListItem>
        </Settings.List>
        <Settings.ButtonWapper>
          <Button type="button" size="small" color="secondary">
            Save changes
          </Button>
          <Settings.Spacer direction="right" />
          <Button type="button" size="small" color="tertiary">
            Cancel
          </Button>
        </Settings.ButtonWapper>
      </Settings.Profile>
    </>
  );
}
