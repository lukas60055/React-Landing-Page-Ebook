import styled from 'styled-components';
import { SectionProps } from '../../types/section';

const StyledSection = styled.section`
  position: relative;
  padding-top: 60px;
  padding-bottom: 25px;
`;

export const StyledH2 = styled.h2`
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const Section = (props: SectionProps) => {
  const styleSection = props.style ? props.style : {};
  const colorHeading = props.colorHeading ? { color: props.colorHeading } : {};

  return (
    <StyledSection id={props.id} style={styleSection}>
      <StyledH2 style={colorHeading}>{props.title}</StyledH2>
      <div className="container">{props.children}</div>
    </StyledSection>
  );
};

export default Section;
