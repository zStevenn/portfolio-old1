import { Button } from './Button';

export default function Footer() {
  return (
    <>
      <footer>
        {/* Laten we in contact blijven */}
        <div className="bg-teal-900">
          <div className="container mx-auto max-w-screen-lg p-8">
            <h3 className="pb-4 text-neutral-100">Stuur gerust een bericht.</h3>
            <div className="grid gap-4">
              <p className="text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <div className="flex flex-col gap-4">
                <Button type="mail" variant="secondary">
                  stevenli.inbox@gmail.com
                </Button>
                <Button type="download" variant="secondary">
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
        <h6 className="text-center py-2">&copy; Steven Li</h6>
      </footer>
    </>
  );
}
