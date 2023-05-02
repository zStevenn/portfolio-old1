import { Button } from './Button';

export default function Header() {
  return (
    <>
      <nav className="px-8 py-4 container mx-auto flex justify-between items-center">
        <h3 className="tracking-wider">Steven Li</h3>
        <Button>Bekijk CV</Button>
      </nav>
    </>
  );
}
