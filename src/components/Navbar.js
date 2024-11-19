import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
        <Link to="/">Home</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/progress">Progress</Link>
    </Nav>
  );
};

const Nav = styled.nav`
display: flex;
justify-content: space-around;
padding: 1rem;
background: linear-gradient(90deg, #6a11cb, #2575fc);
color: white;

a {
color: white;
text-decoration: none;
font-weight: bold;
transition: color 0.3s;

&:hover {
color: #ffd700;
}
}

@media (max-width: 768px) {
flex-direction: column;
align-items: center;
}
`;
export default Navbar;