import Section from '../../components/Section/Section';
import LoadingIcon from '../../components/UI/LoadingIcon';
import useDataLanding from '../../hooks/useDataLanding';
import dataLanding from '../../data/whyIt.json';
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed';

const WhyIt = () => {
  const data = useDataLanding(dataLanding);

  return data ? (
    <Section title={data.title} id={data.id}>
      <YoutubeEmbed embedId={data.video} />
    </Section>
  ) : (
    <LoadingIcon />
  );
};

export default WhyIt;
