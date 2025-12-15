
import { TopNav } from "@/components/top-nav";
import { BlobCard } from "@/components/blob-card";
import { SectionTitle } from "@/components/section-title";
import { Section } from "@/components/section";
import { DataTable } from "@/components/data-table";
import { project } from "@/content/project";

export default function Page() {
  const mailtoLink = `mailto:${project.contact.email}?subject=Aanmelding%20zwemles`;
  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-6xl px-4 py-10 space-y-14">
        {/* HERO */}
        <BlobCard variant="blue" className="pt-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-white/80 font-semibold">{project.hero.kicker}</p>
            <SectionTitle>{project.hero.title}</SectionTitle>
            <p className="text-white/90 text-lg leading-relaxed">{project.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              {project.hero.ctas.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="rounded-full px-5 py-2.5 font-semibold bg-white text-[hsl(var(--ink))] hover:bg-white/90"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </BlobCard>

        {/* 1. INLEIDING */}
        <Section id="inleiding" label="1. Inleiding">
          <div className="grid md:grid-cols-2 gap-6">
            <BlobCard variant="white">
              <h3 className="text-2xl font-bold mb-3">Wie ben ik</h3>
              <p className="text-[hsl(var(--muted))] whitespace-pre-line leading-relaxed">{project.sections.inleiding.who}</p>
            </BlobCard>

            <BlobCard variant="blue">
              <h3 className="text-2xl font-bold mb-3 text-white">Het idee</h3>
              <p className="text-white/90 whitespace-pre-line leading-relaxed">{project.sections.inleiding.idee}</p>
            </BlobCard>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <BlobCard variant="yellow">
              <h3 className="text-xl font-bold mb-3">Eerste les</h3>
              <ul className="space-y-1 font-medium">
                <li><b>Datum:</b> {project.sections.inleiding.firstLesson.date}</li>
                <li><b>Tijd:</b> {project.sections.inleiding.firstLesson.time}</li>
                <li><b>Locatie:</b> {project.sections.inleiding.firstLesson.location}</li>
                <li className="pt-2">{project.sections.inleiding.firstLesson.note}</li>
              </ul>
            </BlobCard>

            <BlobCard variant="white">
              <h3 className="text-xl font-bold mb-3">Prijzen</h3>
              <DataTable
                columns={[
                  { key: "product", label: "Product" },
                  { key: "price", label: "Prijs" },
                  { key: "validity", label: "Geldigheid" },
                ]}
                rows={project.sections.inleiding.prices}
              />
            </BlobCard>
          </div>
        </Section>
        
        {/* 2. DOELSTELLINGEN */}
        <Section id="doelen" label="2. Doelstellingen">
            <BlobCard variant="white">
                 <ul className="space-y-3 list-disc list-inside text-lg text-[hsl(var(--muted))]">
                    {project.sections.doelen.map((doel, i) => <li key={i}>{doel}</li>)}
                </ul>
            </BlobCard>
        </Section>

        {/* 3. WERKWIJZE */}
        <Section id="werkwijze" label="3. Werkwijze">
             <BlobCard variant="blue">
                 <ul className="space-y-3 list-disc list-inside text-lg text-white/90">
                    {project.sections.werkwijze.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </BlobCard>
        </Section>

        {/* 4. DOELGROEP, PERIODE & OMVANG */}
        <Section id="doelgroep" label="4. Doelgroep, periode & omvang">
            <div className="space-y-6">
                <DataTable
                    columns={[
                        { key: "doelgroep", label: "Doelgroep" },
                        { key: "toelichting", label: "Toelichting" },
                    ]}
                    rows={project.sections.doelgroepRows}
                />
                <DataTable
                    columns={[
                        { key: "onderdeel", label: "Onderdeel" },
                        { key: "details", label: "Details" },
                    ]}
                    rows={project.sections.planning}
                />
            </div>
        </Section>
        
        {/* 5. BETROKKENHEID */}
        <Section id="betrokkenheid" label="5. Betrokkenheid">
            <DataTable
                columns={[
                    { key: "wijze", label: "Wijze van Betrokkenheid" },
                    { key: "toelichting", label: "Toelichting" },
                ]}
                rows={project.sections.betrokkenheidRows}
            />
        </Section>

        {/* 6. BETROKKEN ORGANISATIES */}
        <Section id="organisaties" label="6. Betrokken organisaties">
            <div className="space-y-6">
                 <DataTable
                    columns={[
                        { key: "organisatie", label: "Organisatie" },
                        { key: "status", label: "Status / Opmerking" },
                    ]}
                    rows={project.sections.betrokkenOrganisaties}
                />
                <div className="pt-4">
                    <BlobCard variant="white">
                        <h3 className="text-2xl font-bold mb-3">Potentiële Partners voor Werving, Promotie & Regionale Samenwerking</h3>
                        <p className="text-[hsl(var(--muted))] whitespace-pre-line leading-relaxed">{project.sections.partners.intro}</p>
                    </BlobCard>
                </div>
                 <div className="grid md:grid-cols-2 gap-6">
                    {project.sections.partners.items.map((partner, index) => (
                        <BlobCard key={partner.title} variant={index % 2 === 0 ? "yellow" : "blue"}>
                             <h4 className="text-xl font-bold mb-2">{partner.title}</h4>
                            <p className="leading-relaxed opacity-90">{partner.description}</p>
                        </BlobCard>
                    ))}
                </div>
            </div>
        </Section>
        
        {/* 7. GSB */}
        <Section id="gsb" label="7. De GSB: Gun & Support Budget">
            <BlobCard variant="blue">
                 <ul className="space-y-3 list-disc list-inside text-lg text-white/90">
                    {project.sections.gsb.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </BlobCard>
        </Section>

        {/* 8. SLOT */}
        <Section id="slot" label="8. Slot">
            <BlobCard variant="white">
                 <h3 className="text-2xl font-bold mb-4">Dit project levert een waardevolle bijdrage aan:</h3>
                <ul className="space-y-3 list-disc list-inside text-lg text-[hsl(var(--muted))] mb-6">
                    {project.sections.slot.bullets.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <p className="text-[hsl(var(--muted))] leading-relaxed">{project.sections.slot.closing}</p>
            </BlobCard>
            <BlobCard variant="yellow" className="mt-6 text-center">
                 <h3 className="text-2xl font-bold mb-2">Neem contact op</h3>
                 <p className="font-semibold">{project.contact.name} ({project.contact.role})</p>
                 <p>{project.contact.phone} | <a href={`mailto:${project.contact.email}`} className="underline hover:no-underline">{project.contact.email}</a></p>
                 <div className="mt-4">
                     <a href={mailtoLink} className="rounded-full px-5 py-2.5 font-semibold bg-[hsl(var(--deep-blue))] text-white hover:bg-[hsl(var(--deep-blue))]/90">
                        Stuur een e-mail
                    </a>
                 </div>
            </BlobCard>
        </Section>
      </main>
    </>
  );
}

    