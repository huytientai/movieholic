import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';


import SearchBox from '../search-box/search-box.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import AvatarDropdown from '../avatar-dropdown/avatar-dropdown.component';

import { IconButton } from '@material-ui/core';
import { Assessment } from '@material-ui/icons';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

import { OptionsContainer, OptionLink } from './header.styles';

import './header.styles.scss';

const Header = ({ currentUser, history }) => (
  <div className='header'>
    <Link to='/'>
      <Logo className='logo-container' />
    </Link>

    <SearchBox />
    <OptionsContainer>
      {currentUser ? (
        currentUser.isAdmin ? (
          <IconButton onClick={() => history.push('/administration')}>
            <Assessment style={{ fontSize: 27 }} />
          </IconButton>
        ) : null
      ) : null}
      {currentUser ? (
        <AvatarDropdown />
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
    </OptionsContainer>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(Header));
