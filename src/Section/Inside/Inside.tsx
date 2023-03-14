import Section from '../../components/Section/Section';
import LoadingIcon from '../../components/UI/LoadingIcon';
import useDataLanding from '../../hooks/useDataLanding';
import dataLanding from '../../data/inside.json';
import insideImg from '../../assets/img/mockup.png';
import Button from '../../components/Button/Button';
import { useId } from 'react';
import styled from 'styled-components';

const ListNumber = styled.li`
  position: relative;
  padding: 7px 0;
  counter-increment: my-awesome-counter;

  &::before {
    content: counter(my-awesome-counter) '. ';
    position: absolute;
    top: 0;
    left: -25px;
    font-size: 22px;
    font-weight: bold;
    color: #356f03;
  }
`;

const Inside = () => {
  const ID = useId();

  const data = useDataLanding(dataLanding);

  return data ? (
    <Section title={data.title} id={data.id} style={{ paddingBottom: 0 }}>
      <div className="row">
        <div className="col-md-6">
          <p>{data.text}</p>
          <ol style={{ listStyle: 'none', counterReset: 'my-awesome-counter' }}>
            {data.list.map((text, index) => (
              <ListNumber key={`${ID}-${index}`}>{text}</ListNumber>
            ))}
          </ol>
          <div className="mt-4 mb-md-5 text-center text-md-start">
            <Button wantsBook />
          </div>
        </div>
        <div className="col-md-6">
          <img src={insideImg} className="img-fluid mt-5 mt-md-0" />
        </div>
      </div>
    </Section>
  ) : (
    <LoadingIcon />
  );
};

export default Inside;
