import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'classnames';
import styles from './UiVideo.module.css';

const UiVideo = ({ src, classes, playbackRate = 1.0 }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return (
    <video
      className={clsx(styles.video, classes)}
      ref={videoRef}
      playbackRate={playbackRate}
      loop
      autoPlay
      muted>
      <source src={src} />
    </video>
  );
};

UiVideo.propTypes = {
  src: PropTypes.string,
  classes: PropTypes.string,
  playbackRate: PropTypes.number,
};

export default UiVideo;
