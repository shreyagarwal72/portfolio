import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoplay?: boolean;
  controls?: boolean;
  width?: number;
  height?: number;
}

const VideoPlayer = ({ 
  src, 
  poster, 
  className = '',
  autoplay = false,
  controls = true,
  width = 640,
  height = 360
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current && videoRef.current) {
      const videoElement = videoRef.current;

      playerRef.current = videojs(videoElement, {
        autoplay,
        controls,
        responsive: true,
        fluid: true,
        preload: 'auto',
        poster,
        sources: [{
          src,
          type: 'video/mp4'
        }]
      });
    }

    // Dispose the Video.js player when the component unmounts
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src, poster, autoplay, controls]);

  return (
    <div data-vjs-player className={className}>
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered vjs-theme-forest"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default VideoPlayer;
