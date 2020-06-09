import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/icons/cropped-logo.png';

import {
  FooterContainer,
  FooterLogoContainer,
  FooterDescription
} from './footer.styles';

const Footer = () => (
  <FooterContainer>
    <Link to='/'>
      <FooterLogoContainer src={Logo} alt='logo' />
    </Link>
    <FooterDescription>
      Create by HEDSPi students with &hearts;
    </FooterDescription>
  </FooterContainer>
);

export default Footer;
