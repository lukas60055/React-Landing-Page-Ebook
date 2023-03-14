import Section from '../../components/Section/Section';
import LoadingIcon from '../../components/UI/LoadingIcon';
import useDataLanding from '../../hooks/useDataLanding';
import dataLanding from '../../data/opinions.json';
import Card from '../../components/Card/Card';
import sectionImg from '../../assets/img/parent.png';
import { useId } from 'react';

const Opinions = () => {
  const ID = useId();

  const data = useDataLanding(dataLanding);

  return data ? (
    <Section
      title={data.title}
      id={data.id}
      style={{
        background: `url(${sectionImg}) center/cover no-repeat`,
        backgroundAttachment: 'fixed',
        zIndex: 10,
      }}
      colorHeading="#FFF"
    >
      <div className="row">
        {data.card.text.map((text, index) => (
          <div key={`${ID}-${index}`} className="col-md-4 mb-4">
            <Card
              text={text}
              author={data.card.author[index]}
              subtext={data.card.subtext[index]}
            />
          </div>
        ))}
      </div>
    </Section>
  ) : (
    <LoadingIcon />
  );
};

export default Opinions;
