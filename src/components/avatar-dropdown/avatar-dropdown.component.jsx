import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { Menu, MenuItem, IconButton, Avatar } from '@material-ui/core';

import './avatar-dropdown.styles.scss';

const AvatarDropdown = ({ currentUser, signOutStart }) => {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleMenu} color='inherit' size='small'>
        {currentUser ? (
          <Avatar alt={currentUser.displayName} src={currentUser.photoURL} />
        ) : null}
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            history.push('/profile');
            handleClose();
          }}
        >
          {currentUser.displayName}
        </MenuItem>
        <MenuItem onClick={signOutStart}>Sign out</MenuItem>
      </Menu>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(AvatarDropdown);
