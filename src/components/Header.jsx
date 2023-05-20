import { Button } from './Button';

export default function Header() {
  return (
    <>
      <nav className="px-8 py-4 fixed bg-neutral-100 w-screen flex justify-between items-center shadow-md shadow-teal-900/30 bg-gradient-to-b from-teal-900/20">
        <a href="/">
          <h3 className="tracking-wider">Steven Li</h3>
        </a>
        <Button type="download">Bekijk CV</Button>
      </nav>
    </>
  );
}
