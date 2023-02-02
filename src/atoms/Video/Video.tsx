import { FC } from "react";
import ReactPlayer from "react-player";

import styles from "./Video.module.scss";

interface VideoProps {
  url: string;
  backgroundForVideo: any;
}

const Video: FC<VideoProps> = ({ url, backgroundForVideo }) => {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        className={styles.reactPlayer}
        playing
        url={url}
        // light={backgroundForVideo}
        // playIcon={<img src={playButton} alt="play icon" />}
      />
    </div>
  );
};

export default Video;
