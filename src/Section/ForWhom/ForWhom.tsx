import Section from '../../components/Section/Section';
import LoadingIcon from '../../components/UI/LoadingIcon';
import useDataLanding from '../../hooks/useDataLanding';
import dataLanding from '../../data/forWhom.json';
import imgFirst from '../../assets/img/ForWhom_1.png';
import imgLast from '../../assets/img/ForWhom_2.png';
import { useId } from 'react';
import Button from '../../components/Button/Button';
import styled from 'styled-components';
import successImg from '../../assets/img/success.png';
import failedImg from '../../assets/img/failed.png';
import arrowSuccessImg from '../../assets/img/arrow_success.png';
import arrowFailedImg from '../../assets/img/arrow_failed.png';

const ListSuccess = styled.li`
  margin-bottom: 12px;
  list-style-image: url(${arrowSuccessImg});
`;

const ListFailed = styled.li`
  margin-bottom: 12px;
  list-style-image: url(${arrowFailedImg});
`;

const ForWhom = () => {
  const ID = useId();

  const data = useDataLanding(dataLanding);

  return data ? (
    <Section title={data.title} id={data.id}>
      <div className="row">
        <div className="col-md-6">
          <img src={imgFirst} className="img-fluid rounded mt-md-3" />
        </div>
        <div className="col-md-6">
          <p style={{ fontWeight: 600, color: '#397b01' }}>
            <img src={successImg} />
            {data.success.heading}
          </p>
          <ul>
            {data.success.text.map((text, index) => (
              <ListSuccess key={`${ID}-${index}`}>{text}</ListSuccess>
            ))}
          </ul>
          <div className="mt-4 text-center text-md-start">
            <Button wantsBook />
          </div>
        </div>
      </div>
      <div className="row mt-md-5">
        <div className="col-md-6 mb-4 mb-lg-0 order-last order-md-first">
          <p style={{ fontWeight: 600, color: '#e2253d' }}>
            <img src={failedImg} />
            {data.failed.heading}
          </p>
          <ul>
            {data.failed.text.map((text, index) => (
              <ListFailed key={`${index}-${ID}`}>{text}</ListFailed>
            ))}
          </ul>
          <div className="mt-4 text-center text-md-start">
            <Button readMore="#autorka" />
          </div>
        </div>
        <div className="col-md-6 order-first order-md-last">
          <img src={imgLast} className="img-fluid rounded mt-5 mt-md-3" />
        </div>
      </div>
    </Section>
  ) : (
    <LoadingIcon />
  );
};

export default ForWhom;
