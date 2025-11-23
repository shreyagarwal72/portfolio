import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';
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
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode
      const videoElement = document.createElement("video-js");
      
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current?.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, {
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
      }, () => {
        console.log('Video.js player is ready');
      });
    } else {
      // Update the source if it changes
      const player = playerRef.current;
      player.src([{
        src,
        type: 'video/mp4'
      }]);
      if (poster) {
        player.poster(poster);
      }
    }
  }, [src, poster, autoplay, controls]);

  // Dispose the Video.js player when the component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player className={className}>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoPlayer;
