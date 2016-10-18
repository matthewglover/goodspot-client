import React from 'react';
import AppBar from 'material-ui/AppBar';
import UserOptionsMenu from './user_options_menu';


const HeaderBar = (props) =>
  <AppBar
    {...props}
    title="Goodspot"
    showMenuIconButton={false}
    iconElementRight={<UserOptionsMenu />}
  />;

HeaderBar.muiName = 'AppBar';


export default HeaderBar;
