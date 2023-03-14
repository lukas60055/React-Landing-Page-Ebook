import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 40px 50px;
  background-color: #93c83d;
`;

const StyledCopyright = styled.p`
  margin: 0;
  color: #fff;
  & > a {
    text-decoration: none;
    font-size: 15px;
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <StyledFooter className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-3 text-center">
          {/* <img src={logoImg} /> */}
          LOGO
        </div>
        <div className="col-md-6">
          <StyledCopyright className="mt-4 mt-md-0 text-center">
            Copyright 2023 Łuksz Duda I{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Polityka prywatnosci
            </a>{' '}
            I{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Regulamin
            </a>
          </StyledCopyright>
        </div>
        <div className="col-md-3 mt-4 mt-md-0 text-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-white"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
