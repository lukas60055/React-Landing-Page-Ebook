import { YoutubeEmbedId } from '../../types/youtubeEmbed';

const YoutubeEmbed = ({ embedId }: YoutubeEmbedId) => {
  return (
    <div className="ratio ratio-16x9">
      <iframe
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;
