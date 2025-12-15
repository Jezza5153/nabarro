import { BlobCard } from "@/components/blob-card";
import { PillLabel } from "@/components/pill-label";
import Link from "next/link";

export default function AanmeldenPage() {
  const mailtoLink = `mailto:swimwithease@gmail.com?subject=Aanmelding%20zwemles&body=Naam:%0A%0AEmail:%0A%0ATelefoon (optioneel):%0A%0ABericht:%0A`;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <BlobCard variant="blue" className="max-w-xl w-full">
        <div className="text-center">
            <PillLabel className="bg-white text-black">Aanmelden</PillLabel>
            <h1 className="text-3xl font-bold text-white mt-4">Neem contact op</h1>
            <p className="text-white/80 mt-2 mb-6">
                Vul de onderstaande informatie in uw e-mail client in.
            </p>
        </div>
        
        <div className="bg-white/10 rounded-xl p-6 text-white text-lg space-y-4 text-center">
          <p>Om u aan te melden, stuur een e-mail met uw naam, contactgegevens en eventuele vragen.</p>
          <a
            href={mailtoLink}
            className="inline-block rounded-full px-8 py-3 font-semibold bg-white text-[hsl(var(--ink))] hover:bg-white/90"
          >
            Open E-mailprogramma
          </a>
        </div>
        
        <div className="text-center mt-6">
            <Link href="/" className="text-sm text-white/70 hover:underline">
                &larr; Terug naar de homepagina
            </Link>
        </div>
      </BlobCard>
    </div>
  );
}
