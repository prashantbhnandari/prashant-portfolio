'use client';

import { useEffect, useState } from 'react';

type UseTypingEffectProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export function useTypingEffect({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 1800,
}: UseTypingEffectProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!isDeleting && text === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(t);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? current.substring(0, prev.length - 1)
            : current.substring(0, prev.length + 1)
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}
