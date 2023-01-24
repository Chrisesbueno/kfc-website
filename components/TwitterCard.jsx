import { Timeline } from "react-twitter-widgets";

const TwitterCard = ({ timeline }) => {
  return (
    <Timeline
      dataSource={{ sourceType: "profile", screenName: timeline }}
      options={{ width: "400", height: "400" }}
    />
  );
};

export default TwitterCard;
