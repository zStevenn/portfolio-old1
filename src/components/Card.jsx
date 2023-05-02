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
    <div className="rounded-md flex flex-col border border-teal-900 shadow-md shadow-teal-900/30">
      <img
        className="rounded-tr-md rounded-tl-md h-44 border-b border-teal-900"
        src={imgSrc}
        alt={imgTitle}
        title={imgTitle}
      />
      <div className="p-6 grid gap-4">
        <h4>{cardTitle}</h4>
        <div>
          <p className="text-neutral-500 font-semibold pb-3">{cardDate}</p>
          <p className="text-neutral-500 text-sm">{cardDescription}</p>
        </div>
        <div className="flex gap-6 items-end">
          <Button>Bekijk project</Button>
          <a className="text-teal-900" href="/">
            Lees meer
          </a>
        </div>
      </div>
    </div>
  );
}

export { Card };
