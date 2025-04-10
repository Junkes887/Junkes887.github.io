import { useEffect, useState } from "react";
import { useTypewriterManager } from "./TypewriterContext";

type TypewriterProps = {
  text: string;
  order: number;
};

export default function Typewriter({ text, order }: TypewriterProps) {
  const speed = 10;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const { current, next } = useTypewriterManager();

  const isActive = current === order;

  useEffect(() => {
    if (!isActive || index >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isActive]);

  useEffect(() => {
    if (isActive && index === text.length) {
      next();
    }
  }, [index, isActive]);

  return <span>{displayedText}</span>;
}
