import { Button } from './Button';

export default function Footer() {
  return (
    <>
      <footer>
        {/* Laten we in contact blijven */}
        <div className="bg-gradient-to-b from-teal-900 via-teal-700 to-teal-500">
          <div className="container mx-auto max-w-screen-lg p-8">
            <h3 className="pb-4 text-neutral-100">Stuur gerust een bericht.</h3>
            <div className="grid gap-4">
              <p className="text-neutral-300">
                Bedankt voor het bekijken van mijn portfolio. Als je
                geïnteresseerd bent in mijn werk of als je vragen hebt, verneem
                ik graag van je!
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
