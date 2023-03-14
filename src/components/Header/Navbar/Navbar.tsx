import { useId, useState } from 'react';
import useDataLanding from '../../../hooks/useDataLanding';
import navbarData from '../../../data/navbar.json';
import styled from 'styled-components';
import Button from '../../Button/Button';
import LoadingIcon from '../../UI/LoadingIcon';

const StyledLink = styled.a`
  font-weight: bold;
  font-size: 17px;
  color: #7e7f7f;
`;

const ItemButton = styled.li`
  & > button {
    padding: 10px 30px;
  }
`;

const Navbar = () => {
  const ID = useId();

  const data = useDataLanding(navbarData);
  const [showMenu, setShowMenu] = useState(false);

  return data ? (
    <nav className="navbar navbar-expand-lg d-flex justify-content-evenly py-4 mb-5">
      <a href="/" className="navbar-brand">
        {/* <img src={logoImg} /> */}
        LOGO
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse flex-lg-grow-0 mt-3 mt-lg-0 ${
          showMenu ? 'show' : ''
        }`}
      >
        <ul className="navbar-nav nav-pills align-items-center">
          {data.navbar.map((link, index) => (
            <li key={`${ID}-${index}`} className="nav-item">
              <StyledLink href={link.link} className="nav-link me-lg-4">
                {link.title}
              </StyledLink>
            </li>
          ))}
          <ItemButton className="nav-item">
            <Button wantsBook />
          </ItemButton>
        </ul>
      </div>
    </nav>
  ) : (
    <LoadingIcon />
  );
};

export default Navbar;
