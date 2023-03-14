import headerBG from '../../assets/img/HeaderBG.png';
import headerImg from '../../assets/img/book_mockup.png';
import styled from 'styled-components';
import Button from '../Button/Button';
import dataLanding from '../../data/header.json';
import useDataLanding from '../../hooks/useDataLanding';
import LoadingIcon from '../UI/LoadingIcon';

const StyledHeader = styled.header`
  background: url(${headerBG}) center/cover no-repeat;
  background-size: 100% 100%;
`;

const HeadingTextBox = styled.div`
  & > h1 {
    font-size: 50px;
  }

  & > h2 {
    font-size: 36px;
  }

  & > h3 {
    font-size: 30px;
    font-weight: bold;
  }

  & > p {
    font-size: 18px;
    color: #2f4858;
  }

  @media (min-width: 992px) {
    margin-top: 90px;
  }
`;

const BoxButton = styled.div`
  & > button:first-of-type {
    @media (max-width: 576px) {
      margin: 20px 0;
    }
  }
`;

const Header = (props: any) => {
  const data = useDataLanding(dataLanding);

  return data ? (
    <StyledHeader>
      {props.children}
      <div className="container">
        <div className="row">
          <HeadingTextBox className="col-lg-6">
            <h2>{data.heading.h2}</h2>
            <h1 className="my-2 my-lg-0">{data.heading.h1}</h1>
            <h3 className="my-3 mb-lg-4">{data.heading.h3}</h3>
            <p>{data.text}</p>
            <BoxButton className="d-sm-flex justify-content-sm-evenly mt-3 mt-md-4 mt-lg-4 text-center">
              <Button wantsBook />
              <Button readMore="#dlaczego_warto" />
            </BoxButton>
          </HeadingTextBox>
          <div className="col-lg-6 order-first order-lg-last text-center text-lg-start">
            <img src={headerImg} className="img-fluid" />
          </div>
        </div>
      </div>
    </StyledHeader>
  ) : (
    <LoadingIcon />
  );
};

export default Header;
