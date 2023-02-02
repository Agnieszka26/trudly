import { FC } from "react";

import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  completed: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ completed }) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.filler}></div>
    </div>
  );
};

export default ProgressBar;
