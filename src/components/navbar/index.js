import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {Button} from '../../globalStyles';
import logo from '../../logo_white.svg'
import * as ROUTES from '../../constants/routes'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './navbarElements';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const[scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 1){
      setScrollNav(true)
    } else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  })

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to={ROUTES.HOME} onClick={closeMobileMenu}>
              <NavIcon src={logo}/>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/anilive' onClick={closeMobileMenu}>
                  AniLive
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/aniparty' onClick={closeMobileMenu}>
                  AniParty
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/signup' onClick={closeMobileMenu}>
                  Sign Up
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink>
                    <Button to={ROUTES.SIGN_IN} primary>SIGN IN</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink>
                    <Button to={ROUTES.SIGN_IN} onClick={closeMobileMenu} fontBig primary>
                      SIGN IN
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}