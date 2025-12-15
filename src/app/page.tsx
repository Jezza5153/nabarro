import { TopNav } from "@/components/top-nav";
import { BlobCard } from "@/components/blob-card";
import { SectionTitle } from "@/components/section-title";
import { Section } from "@/components/section";
import { DataTable } from "@/components/data-table";
import { project } from "@/content/project";
import { Check } from "lucide-react";

export default function Page() {
  return (
    <>
      <TopNav />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 space-y-14">
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
                  target={c.href.startsWith("http") ? "_blank" : "_self"}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : ""}
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
            <BlobCard>
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

            <BlobCard>
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
            <BlobCard>
                <ul className="space-y-4">
                    {project.sections.doelen.map((doel, i) => (
                        <li key={i} className="flex gap-3">
                            <Check className="h-5 w-5 mt-0.5 text-[hsl(var(--deep-blue))]" />
                            <span className="flex-1 text-[hsl(var(--muted))]">{doel}</span>
                        </li>
                    ))}
                </ul>
            </BlobCard>
        </Section>

        {/* 3. WERKWIJZE */}
        <Section id="werkwijze" label="3. Werkwijze">
             <BlobCard variant="blue">
                <ul className="space-y-4 text-white/90">
                    {project.sections.werkwijze.map((item, i) => (
                        <li key={i} className="flex gap-3">
                            <Check className="h-5 w-5 mt-0.5 text-[hsl(var(--bright-yellow))]" />
                            <span className="flex-1">{item}</span>
                        </li>
                    ))}
                </ul>
            </BlobCard>
        </Section>

        {/* 4. DOELGROEP, PERIODE & OMVANG */}
        <Section id="doelgroep" label="4. Doelgroep, periode & omvang">
            <div className="space-y-6">
                 <DataTable columns={[{key: 'doelgroep', label: 'Doelgroep'}, {key: 'toelichting', label: 'Toelichting'}]} rows={project.sections.doelgroepRows} />
                 <DataTable columns={[{key: 'onderdeel', label: 'Onderdeel'}, {key: 'details', label: 'Details'}]} rows={project.sections.planning} />
            </div>
        </Section>

        {/* 5. BETROKKENHEID */}
        <Section id="betrokkenheid" label="5. Betrokkenheid">
            <DataTable columns={[{key: 'wijze', label: 'Wijze'}, {key: 'toelichting', label: 'Toelichting'}]} rows={project.sections.betrokkenheidRows} />
        </Section>
        
        {/* 6. BETROKKEN ORGANISATIES */}
        <Section id="organisaties" label="6. Betrokken organisaties">
            <div className="space-y-6">
                <DataTable columns={[{key: 'organisatie', label: 'Organisatie'}, {key: 'status', label: 'Status'}]} rows={project.sections.betrokkenOrganisaties} />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {project.sections.partners.map(partner => (
                        <BlobCard key={partner.title}>
                            <h4 className="font-bold mb-2">{partner.title}</h4>
                            <p className="text-sm text-[hsl(var(--muted))]">{partner.description}</p>
                        </BlobCard>
                    ))}
                </div>
            </div>
        </Section>

        {/* 7. GSB */}
        <Section id="gsb" label="7. Gezonde Stad in Beweging">
            <BlobCard>
                 <ul className="space-y-4">
                    {project.sections.gsb.map((item, i) => (
                        <li key={i} className="flex gap-3">
                            <Check className="h-5 w-5 mt-0.5 text-[hsl(var(--deep-blue))]" />
                            <span className="flex-1 text-[hsl(var(--muted))]">{item}</span>
                        </li>
                    ))}
                </ul>
            </BlobCard>
        </Section>

        {/* 8. SLOT */}
        <Section id="slot" label="8. Slot">
            <BlobCard variant="yellow">
                 <ul className="space-y-4 mb-6">
                    {project.sections.slot.bullets.map((item, i) => (
                        <li key={i} className="flex gap-3 font-medium">
                            <Check className="h-5 w-5 mt-0.5 text-[hsl(var(--deep-blue))]" />
                            <span className="flex-1">{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="font-medium leading-relaxed">{project.sections.slot.closing}</p>
            </BlobCard>
        </Section>

        {/* CONTACT FOOTER */}
        <BlobCard variant="blue" className="text-center">
            <div className="max-w-xl mx-auto">
                <h3 className="text-2xl text-white font-bold">Vragen of aanmelden?</h3>
                <p className="mt-2 mb-6 text-white/80">Neem gerust contact op voor meer informatie.</p>
                <div className="inline-block text-left bg-white/10 rounded-xl p-4 text-white/90 font-medium mb-6">
                    <p>{project.contact.name} ({project.contact.role})</p>
                    <p><a href={`tel:${project.contact.phone.replace(/-/g, '')}`} className="hover:underline">{project.contact.phone}</a></p>
                    <p><a href={`mailto:${project.contact.email}`} className="hover:underline">{project.contact.email}</a></p>
                </div>
                 <div>
                    <a
                      href={`mailto:${project.contact.email}?subject=Aanmelding%20zwemles`}
                      className="rounded-full px-6 py-3 font-semibold bg-white text-[hsl(var(--ink))] hover:bg-white/90"
                    >
                      Stuur een e-mail
                    </a>
                </div>
            </div>
        </BlobCard>

      </main>
    </>
  );
}
