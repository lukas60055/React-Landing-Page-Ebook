import styled from 'styled-components';
import { CardProps } from '../../types/card';

const StyledCard = styled.div`
  padding: 16px 25px;

  & > strong {
    font-size: 60px;
  }
`;

const StyledSignature = styled.div`
  &::before {
    content: '';
    display: block;
    width: 15%;
    margin: 20px auto 0;
    border-top: 2px solid #3b580a;
  }

  & > strong {
    font-size: 18px;
  }

  & > p {
    font-size: 12px;
  }
`;

const Card = (props: CardProps) => {
  return (
    <StyledCard className="card text-center">
      <strong>“</strong>
      <p>{props.text}</p>
      <StyledSignature>
        <strong>{props.author}</strong>
        <p>{props.subtext}</p>
      </StyledSignature>
    </StyledCard>
  );
};

export default Card;
