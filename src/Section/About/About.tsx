import Section from '../../components/Section/Section';
import LoadingIcon from '../../components/UI/LoadingIcon';
import useDataLanding from '../../hooks/useDataLanding';
import dataLanding from '../../data/about.json';
import portraitImg from '../../assets/img/About.png';
import signatureImg from '../../assets/img/Signature.png';
import parse from 'html-react-parser';
import { useId } from 'react';

const About = () => {
  const ID = useId();

  const data = useDataLanding(dataLanding);

  return data ? (
    <Section
      title={data.title}
      id={data.id}
      style={{ backgroundColor: '#f2f2f2' }}
    >
      <div className="row">
        <div className="col-md-6">
          <img src={portraitImg} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          {data.text.map((text, index) => (
            <p key={`${ID}-${index}`}>{parse(text)}</p>
          ))}
          <img src={signatureImg} className="img-fluid" />
        </div>
      </div>
    </Section>
  ) : (
    <LoadingIcon />
  );
};

export default About;
