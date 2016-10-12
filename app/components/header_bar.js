import React from 'react';
import AppBar from 'material-ui/AppBar';
import UserOptionsMenu from './user_options_menu';


const HeaderBar = () =>
  <AppBar
    title="Title"
    iconElementRight={<UserOptionsMenu />}
  />;

HeaderBar.muiName = 'AppBar';


export default HeaderBar;
