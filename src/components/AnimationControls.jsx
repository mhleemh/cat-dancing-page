import './AnimationControls.css';

const DANCE_OPTIONS = [
  { value: 'bounce', label: '🐾 바운스' },
  { value: 'spin',   label: '🌀 스핀' },
  { value: 'wave',   label: '🌊 웨이브' },
  { value: 'crazy',  label: '🔥 크레이지' },
];

export default function AnimationControls({ isPlaying, speed, danceStyle, onToggle, onSpeedChange, onStyleChange }) {
  return (
    <div className="controls" role="region" aria-label="애니메이션 제어">
      <button
        className={`btn-toggle ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <div className="control-group">
        <label htmlFor="speed-range" className="control-label">
          속도: <span className="speed-value">{speed}x</span>
        </label>
        <input
          id="speed-range"
          type="range"
          min="0.5"
          max="3"
          step="0.5"
          value={speed}
          onChange={e => onSpeedChange(Number(e.target.value))}
          className="speed-slider"
          aria-label="애니메이션 속도"
        />
      </div>

      <div className="control-group dance-styles">
        {DANCE_OPTIONS.map(opt => (
          <button
            key={opt.value}
            className={`btn-style ${danceStyle === opt.value ? 'active' : ''}`}
            onClick={() => onStyleChange(opt.value)}
            aria-pressed={danceStyle === opt.value}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
