import styled from 'styled-components';
import { ButtonProps } from '../../types/button';

const StyledButton = styled.button`
  padding: 15px 50px;
  border: ${(props: ButtonProps) =>
    props.readMore ? '2px solid #93c83d' : 'none'};
  border-radius: 100px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props: ButtonProps) => (props.wantsBook ? '#fff' : '#2f4858')};
  background-color: ${(props: ButtonProps) =>
    props.wantsBook ? '#f61064' : 'transparent'};
  transition: all 0.2s ease-out;

  &:hover {
    color: ${(props: ButtonProps) => (props.wantsBook ? '#fff' : '#7bb352')};
    background-color: ${(props: ButtonProps) =>
      props.wantsBook ? '#76b04b' : 'transparent'};
  }
`;

const Button = (props: ButtonProps) => {
  const btnClick = (typeBtn: ButtonProps) => {
    if (typeBtn.wantsBook) {
      // chce ebook
    } else if (typeBtn.readMore) {
      const firstSection = document.querySelector(typeBtn.readMore);

      if (firstSection) {
        firstSection.scrollIntoView();
      }
    }
  };

  return (
    <StyledButton {...props} onClick={() => btnClick(props)}>
      {props.wantsBook ? 'Chce E-book' : null}
      {props.readMore ? 'Czytaj dalej' : null}
    </StyledButton>
  );
};

export default Button;
