import { Button } from './Button';
import cv from ' ../assets/Steven_Li_CV_NL.pdf';

export default function Header() {
  return (
    <>
      <nav className="px-8 py-4 container mx-auto flex justify-between items-center">
        <h3 className="tracking-wider">Steven Li</h3>
        <Button type="download" link={cv}>
          Bekijk CV
        </Button>
      </nav>
    </>
  );
}
