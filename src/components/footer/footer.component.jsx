import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import './footer.styles.scss';

const Footer = () => 
	<div className="footer-container">
		<Link to='/'>
      		<Logo className='logo-container' />
    	</Link>
    	<p>Watch your favorite movie</p>
    </div>;

export default Footer;
