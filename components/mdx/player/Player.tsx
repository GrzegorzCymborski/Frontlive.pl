import { memo } from 'react';
import ReactPlayer from 'react-player';
import styles from './player.module.scss';

type PlayerProps = {
  readonly url: string;
  readonly label?: string;
};

export const Player = memo(({ url, label }: PlayerProps) => (
  <div className={styles.playerWrapper}>
    <ReactPlayer
      className={styles.player}
      url={url}
      width="100%"
      height="100%"
      controls
      config={{
        file: {
          attributes: {
            'aria-label': label,
          },
        },
      }}
    />
  </div>
));

Player.displayName = 'Player';
