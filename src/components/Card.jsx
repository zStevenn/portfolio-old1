import { Button } from './Button';
import { useRef, useEffect, useState } from 'react';
import styles from './Card.module.css';

function Card({
  imgSrc,
  imgTitle,
  cardTitle,
  cardDate,
  cardDescription,
  cardLink,
  cardButton = 'enabled',
}) {
  const cardRef = useRef(null);
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

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`rounded-md flex flex-col border border-teal-900/30 shadow-md shadow-teal-900/30 ${
        isIntersecting ? styles.cardFadeIn : 'opacity-0'
      }`}
    >
      <img
        className="rounded-tr-md rounded-tl-md h-44 object-cover transition-all duration-300 hover:bg-neutral-900/50"
        src={imgSrc}
        alt={imgTitle}
        title={imgTitle}
      />
      <div className="p-6 grid gap-4 border-t border-teal-900/30">
        {cardTitle && <h4>{cardTitle}</h4>}
        <div>
          {cardDate && (
            <p className="text-neutral-800 font-medium pb-3">{cardDate}</p>
          )}

          {cardDescription && (
            <p className="text-neutral-800 text-sm">{cardDescription}</p>
          )}
        </div>
        {cardButton === 'enabled' && (
          <div className="flex gap-2 items-end">
            <Button link={cardLink}>Bekijk project</Button>
            {/* <a
            className="text-teal-900 text-sm truncate underline underline-offset-2"
            href="/"
          >
            Lees meer
          </a> */}
          </div>
        )}
      </div>
    </div>
  );
}

export { Card };
