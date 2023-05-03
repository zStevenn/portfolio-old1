import { Button } from './Button';

function Card({
  imgSrc,
  imgTitle,
  cardTitle,
  cardDate,
  cardDescription,
  cardLink,
}) {
  return (
    <div className="rounded-md flex flex-col border border-teal-900/30 shadow-md shadow-teal-900/30 group">
      <img
        className="rounded-tr-md rounded-tl-md h-44 object-cover transition-all group-hover:bg-neutral-900/50"
        src={imgSrc}
        alt={imgTitle}
        title={imgTitle}
      />
      <div className="p-6 grid gap-4 border-t border-teal-900/30">
        <h4>{cardTitle}</h4>
        <div>
          <p className="text-neutral-500 font-semibold pb-3">{cardDate}</p>
          <p className="text-neutral-500 text-sm">{cardDescription}</p>
        </div>
        <div className="flex gap-2 items-end">
          <Button size="small" link={cardLink}>
            Bekijk project
          </Button>
          {/* <a
            className="text-teal-900 text-sm truncate underline underline-offset-2"
            href="/"
          >
            Lees meer
          </a> */}
        </div>
      </div>
    </div>
  );
}

export { Card };
