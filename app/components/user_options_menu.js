import React from 'react';
import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import LogoutButton from './logout_button';

const UserOptionsMenu = () =>
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <LogoutButton />
  </IconMenu>;

UserOptionsMenu.muiName = 'IconMenu';

export default UserOptionsMenu;
