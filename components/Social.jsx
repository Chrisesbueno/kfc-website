import { social } from "../constants";
import styles from "../styles/Social.module.css";
import TwitterCard from "./TwitterCard";
import YoutubeCard from "./YoutubeCard";

const Social = () => {
  return (
    <div className="container section">
      <div className={styles.social}>
        <div className={styles.left}>
          <h1>{social.twitter.title}</h1>
          <div className={styles.card}>
            <TwitterCard timeline={social.twitter.id} />
          </div>
        </div>
        <div className={styles.right}>
          <h1>{social.youtube.title}</h1>
          <div className={styles.video}>
            <YoutubeCard video={social.youtube.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
