import { useRef, useEffect, useState } from 'react';
import styles from './Image.module.css';

function Image({ imageSrc, imageTitle, className }) {
  const imageRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <img
      src={imageSrc}
      alt={imageTitle}
      title={imageTitle}
      ref={imageRef}
      className={`${
        isIntersecting ? styles.imageFadeIn : 'opacity-0'
      } ${className}`}
    />
  );
}

export { Image };
