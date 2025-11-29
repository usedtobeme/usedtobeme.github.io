import { useEffect, useRef, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

interface UseConfettiTriggerOptions {
  onSuccess?: () => void;
  resetTimeout?: number;
}

export function useConfettiTrigger(options: UseConfettiTriggerOptions = {}) {
  const { onSuccess, resetTimeout = 10000 } = options;
  const [isActivated, setIsActivated] = useState(false);
  const sequenceRef = useRef<string[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const resetSequence = () => {
    sequenceRef.current = [];
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const checkSequence = () => {
    const sequence = sequenceRef.current;
    const isComplete = sequence.length === KONAMI_CODE.length;
    const isCorrect = sequence.every(
      (key, index) => key === KONAMI_CODE[index],
    );

    if (isComplete && isCorrect) {
      setIsActivated(true);
      onSuccess?.();
      resetSequence();
    } else if (
      isComplete ||
      !KONAMI_CODE[sequence.length - 1] ||
      sequence[sequence.length - 1] !== KONAMI_CODE[sequence.length - 1]
    ) {
      resetSequence();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        (event.target as any)?.isContentEditable
      ) {
        return;
      }

      sequenceRef.current.push(event.code);

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set a timeout to reset the sequence if no keys are pressed
      timeoutRef.current = setTimeout(resetSequence, resetTimeout);

      checkSequence();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [onSuccess, resetTimeout]);

  const reset = () => {
    setIsActivated(false);
    resetSequence();
  };

  return {
    isActivated,
    reset,
    progress: Math.min(sequenceRef.current.length / KONAMI_CODE.length, 1),
  };
}
