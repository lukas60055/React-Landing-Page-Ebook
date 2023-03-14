import Section, { StyledH2 } from '../../components/Section/Section';
import LoadingIcon from '../../components/UI/LoadingIcon';
import useDataLanding from '../../hooks/useDataLanding';
import dataLanding from '../../data/wants.json';
import eBookImg from '../../assets/img/ebook.png';
import Button from '../../components/Button/Button';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 18px;
  text-align: left;
  color: #2f4858;
`;

const Price = styled.h3`
  margin-bottom: 35px;
  font-size: 72px;
  color: #f61064;
`;

const StyledImg = styled.img`
  display: none;

  @media (min-width: 992px) {
    position: absolute;
    display: block;
    width: 40vw;
    top: -30%;
    right: 10%;
    z-index: -1;
  }

  @media (min-width: 1250px) {
    width: 490px;
  }
`;

const Wants = () => {
  const data = useDataLanding(dataLanding);

  return data ? (
    <Section
      id={data.id}
      style={{
        height: '600px',
        backgroundColor: '#f2f2f2',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      <div className="row">
        <div className="col-lg-5 text-center">
          <StyledH2>{data.title}</StyledH2>
          <StyledParagraph>{data.text}</StyledParagraph>
          <Price>{data.price} zł</Price>
          <Button wantsBook />
        </div>
        <div className="col-lg-7 col-xl-6 position-relative">
          <StyledImg src={eBookImg} />
        </div>
      </div>
    </Section>
  ) : (
    <LoadingIcon />
  );
};

export default Wants;
