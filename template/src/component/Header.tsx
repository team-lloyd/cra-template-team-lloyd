import React from 'react';
import { HeaderLayout } from '../styled/layout/Header';
import { H6 } from '../styled/typo/Heading';
import { title } from '../config/app.json';

const Header: React.FC = function Header() {
  return (
    <HeaderLayout>
      <H6>{title}</H6>
    </HeaderLayout>
  );
};

export default Header;
