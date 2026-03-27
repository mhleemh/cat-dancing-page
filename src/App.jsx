import './styles/global.css';
import './App.css';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

export default function App() {
  const { isPlaying, speed, danceStyle, toggle, changeSpeed, changeDanceStyle } = useAnimation();

  return (
    <main className="app">
      <header className="app-header">
        <h1 className="app-title">
          <span className="emoji" role="img" aria-label="고양이">🐱</span> 댄싱 캣 <span className="emoji" role="img" aria-label="음표">🎵</span>
        </h1>
        <p className="app-subtitle">클릭해서 고양이와 함께 춤춰봐요!</p>
      </header>

      <section
        className="cat-section"
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? '고양이 춤 정지' : '고양이 춤 시작'}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggle()}
      >
        <DancingCat isPlaying={isPlaying} speed={speed} danceStyle={danceStyle} />
        {!isPlaying && (
          <p className="hint-text" aria-live="polite">고양이를 클릭해서 춤을 시작하세요 ▶</p>
        )}
      </section>

      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        danceStyle={danceStyle}
        onToggle={toggle}
        onSpeedChange={changeSpeed}
        onStyleChange={changeDanceStyle}
      />
    </main>
  );
}
