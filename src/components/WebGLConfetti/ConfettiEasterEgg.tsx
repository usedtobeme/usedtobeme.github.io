import { lazy, Suspense, useState } from 'react';
import { useConfettiTrigger } from './useConfettiTrigger';

// Lazy load the WebGL confetti component
const WebGLConfetti = lazy(() =>
  import('./WebGLConfetti').then((module) => ({
    default: module.WebGLConfetti,
  })),
);

export function ConfettiEasterEgg() {
  const [showConfetti, setShowConfetti] = useState(false);

  const { reset } = useConfettiTrigger({
    onSuccess: () => {
      setShowConfetti(true);
    },
  });

  const handleConfettiComplete = () => {
    setShowConfetti(false);
    reset();
  };

  if (!showConfetti) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <WebGLConfetti
        isActive={showConfetti}
        onComplete={handleConfettiComplete}
      />
    </Suspense>
  );
}
