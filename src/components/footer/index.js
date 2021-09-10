import React from 'react';
import logo from '../../logo_white.svg'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaDiscord
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  FooterIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './footerElements';

export default function Footer() {
  return (
    <>
    <FooterContainer>
      <FooterSubscription>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Destinations</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/'>Submit Video</FooterLink>
            <FooterLink to='/'>Ambassadors</FooterLink>
            <FooterLink to='/'>Agency</FooterLink>
            <FooterLink to='/'>Influencer</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/ '>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <FooterIcon src={logo}/>
          </SocialLogo>
          <WebsiteRights>AniComix © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/ryo.sonthai' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.youtube.com/watch?v=qVrfyj89TlY' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                'https://www.youtube.com/watch?v=qVrfyj89TlY'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://www.youtube.com/watch?v=qVrfyj89TlY' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='https://www.youtube.com/watch?v=qVrfyj89TlY' target='_blank' aria-label='LinkedIn'>
              <FaDiscord />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
    </>
  );
}
