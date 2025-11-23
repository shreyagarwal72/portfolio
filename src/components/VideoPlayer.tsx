import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoplay?: boolean;
  controls?: boolean;
}

const VideoPlayer = ({ 
  src, 
  poster, 
  className = '',
  autoplay = false,
  controls = true
}: VideoPlayerProps) => {
  return (
    <div className={className}>
      <Plyr
        source={{
          type: 'video',
          sources: [
            {
              src,
              type: 'video/mp4',
            },
          ],
          poster,
        }}
        options={{
          autoplay,
          controls: controls ? [
            'play-large',
            'play',
            'progress',
            'current-time',
            'mute',
            'volume',
            'settings',
            'fullscreen',
          ] : [],
          settings: ['quality', 'speed'],
          quality: {
            default: 1080,
            options: [1080, 720, 480, 360],
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
