import { NavLink } from 'react-router-dom';
import { ImgContainer, ImgStyle, Nav } from './authStyled';
import  phonebook  from '../../img/Phonebook.svg';

export const AuthNav = () => {
  return (
    <>
      <ImgContainer>
        <ImgStyle src={phonebook} alt='hiro image' />
      </ImgContainer>
    <Nav>
      <NavLink style={{textDecoration:'none', color:'blue'}} to="/register">
        Register
      </NavLink>
      <NavLink style={{textDecoration:'none', color:'blue'}} to="/login">
        Log In
      </NavLink>
    </Nav>
  </>
  );
};
