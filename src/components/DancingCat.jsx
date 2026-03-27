import catSvg from '../assets/images/cat.svg';
import './DancingCat.css';

const DANCE_STYLES = {
  bounce: 'dance-bounce',
  spin:   'dance-spin',
  wave:   'dance-wave',
  crazy:  'dance-crazy',
};

export default function DancingCat({ isPlaying, speed, danceStyle }) {
  const animationClass = DANCE_STYLES[danceStyle] || 'dance-bounce';
  const duration = (1 / speed).toFixed(2);

  return (
    <div className="cat-stage">
      <div
        className={`cat-wrapper ${isPlaying ? animationClass : 'paused'}`}
        style={{ '--dance-duration': `${duration}s` }}
        role="img"
        aria-label="춤추는 고양이"
      >
        <img src={catSvg} alt="고양이" className="cat-image" />
        {isPlaying && (
          <div className="music-notes" aria-hidden="true">
            <span className="note note-1">♪</span>
            <span className="note note-2">♫</span>
            <span className="note note-3">♩</span>
            <span className="note note-4">♬</span>
          </div>
        )}
      </div>
      <div className="disco-floor" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className={`floor-tile ${isPlaying ? 'tile-active' : ''}`}
            style={{ animationDelay: `${(i * 0.15) % 1.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}
