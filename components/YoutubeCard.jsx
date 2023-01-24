const YoutubeCard = ({ video }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${video}`}
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
};

export default YoutubeCard;
