import { Button } from './Button';

export default function Header() {
  return (
    <>
      <nav className="px-8 py-4 fixed bg-neutral-100 container mx-auto max-w-screen-lg flex justify-between items-center shadow-md shadow-teal-900/30">
        <a href="/">
          <h3 className="tracking-wider">Steven Li</h3>
        </a>
        <Button type="download">Bekijk CV</Button>
      </nav>
    </>
  );
}
