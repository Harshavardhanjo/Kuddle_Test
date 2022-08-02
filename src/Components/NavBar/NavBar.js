import React from 'react'
import { NavBarContainer, NavBarItemContainer, NavBarLogo,NavBarItem } from './NavBarElements'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../../StateProvider';

const NavBar = () => {
  const [{user}, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login')
  }
  return (
    <div>
        <NavBarContainer>
            <NavBarLogo>FitnessPro.</NavBarLogo>
            <NavBarItemContainer>
                <NavBarItem>{user}</NavBarItem>
                <NavBarItem onClick = {() => handleLogout()}>Logout</NavBarItem>
            </NavBarItemContainer>
        </NavBarContainer>
    </div>
  )
}

export default NavBar