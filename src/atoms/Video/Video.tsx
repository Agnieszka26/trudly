import Image from "next/image";
import { FC, useEffect, useState } from "react";
import ReactPlayer from "react-player";

import styles from "./Video.module.scss";

interface VideoProps {
  url: string;
  backgroundForVideo: any;
}

const Video: FC<VideoProps> = ({ url, backgroundForVideo }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className={styles.playerWrapper}>
      {hasWindow ? (
        <ReactPlayer
          width="100%"
          height="100%"
          url={url}
          light={<Image src={backgroundForVideo} alt={"video"} fill />}
        />
      ) : null}
    </div>
  );
};

export default Video;
