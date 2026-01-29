import './GradientText.css';

export default function GradientText({
  children,
  className = '',
  colors = ['rgba(234, 78, 0, 0.67)', '#f90404ff', 'rgba(249, 84, 1, 0.67)', '#ff4040ff', 'rgba(245, 82, 0, 0.67)'],
  animationSpeed = 8,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
