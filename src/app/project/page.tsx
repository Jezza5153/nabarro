import { project } from "@/content/project";

export default function ProjectPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 md:p-12 bg-white font-serif text-black">
      <header className="text-center mb-12 border-b pb-8">
        <p className="text-lg text-gray-600">{project.hero.kicker}</p>
        <h1 className="text-5xl font-bold text-gray-900 mt-2">{project.hero.title}</h1>
        <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto">{project.hero.subtitle}</p>
      </header>

      <main className="space-y-12">
        {/* 1. Inleiding */}
        <section>
          <h2 className="text-3xl font-bold mb-4 border-b pb-2">1. Inleiding</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Wie ben ik</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.sections.inleiding.who}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Het idee</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.sections.inleiding.idee}</p>
            </div>
          </div>
        </section>

        {/* 2. Doelstellingen */}
        <section>
          <h2 className="text-3xl font-bold mb-4 border-b pb-2">2. Doelstellingen</h2>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            {project.sections.doelen.map((doel, i) => <li key={i}>{doel}</li>)}
          </ul>
        </section>
        
        {/* 3. Werkwijze */}
        <section>
          <h2 className="text-3xl font-bold mb-4 border-b pb-2">3. Werkwijze</h2>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            {project.sections.werkwijze.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        {/* 4. Doelgroep, periode & omvang */}
        <section>
          <h2 className="text-3xl font-bold mb-4 border-b pb-2">4. Doelgroep, periode & omvang</h2>
           <div className="space-y-6">
                 <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                           <th className="border-b-2 p-2 font-bold">Doelgroep</th>
                           <th className="border-b-2 p-2 font-bold">Toelichting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {project.sections.doelgroepRows.map(row => (
                             <tr key={row.doelgroep}>
                                <td className="border-b p-2 align-top">{row.doelgroep}</td>
                                <td className="border-b p-2 align-top">{row.toelichting}</td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
                 <table className="w-full text-left border-collapse">
                     <thead>
                        <tr>
                           <th className="border-b-2 p-2 font-bold">Onderdeel</th>
                           <th className="border-b-2 p-2 font-bold">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {project.sections.planning.map(row => (
                             <tr key={row.onderdeel}>
                                <td className="border-b p-2 align-top">{row.onderdeel}</td>
                                <td className="border-b p-2 align-top">{row.details}</td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
            </div>
        </section>

        {/* 5. Betrokkenheid */}
        <section>
            <h2 className="text-3xl font-bold mb-4 border-b pb-2">5. Betrokkenheid</h2>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b-2 p-2 font-bold">Wijze</th>
                        <th className="border-b-2 p-2 font-bold">Toelichting</th>
                    </tr>
                </thead>
                <tbody>
                    {project.sections.betrokkenheidRows.map(row => (
                            <tr key={row.wijze}>
                            <td className="border-b p-2 align-top">{row.wijze}</td>
                            <td className="border-b p-2 align-top">{row.toelichting}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

        {/* ... other sections ... */}
        
        {/* 6. Betrokken organisaties */}
        <section>
            <h2 className="text-3xl font-bold mb-4 border-b pb-2">6. Betrokken organisaties</h2>
            <table className="w-full text-left border-collapse mb-6">
                <thead>
                    <tr>
                        <th className="border-b-2 p-2 font-bold">Organisatie</th>
                        <th className="border-b-2 p-2 font-bold">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {project.sections.betrokkenOrganisaties.map(row => (
                            <tr key={row.organisatie}>
                            <td className="border-b p-2 align-top">{row.organisatie}</td>
                            <td className="border-b p-2 align-top">{row.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="space-y-4">
                <p className="text-gray-700 italic">{project.sections.partners.intro}</p>
                {project.sections.partners.items.map(partner => (
                    <div key={partner.title}>
                        <h4 className="font-bold text-lg">{partner.title}</h4>
                        <p className="text-gray-700">{partner.description}</p>
                    </div>
                ))}
            </div>
        </section>
        
        {/* 7. GSB */}
        <section>
            <h2 className="text-3xl font-bold mb-4 border-b pb-2">7. Gezonde Stad in Beweging (GSB)</h2>
             <ul className="space-y-3 list-disc list-inside text-gray-700">
                {project.sections.gsb.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </section>

        {/* 8. Slot */}
        <section>
            <h2 className="text-3xl font-bold mb-4 border-b pb-2">8. Slot</h2>
             <ul className="space-y-3 list-disc list-inside text-gray-700 mb-6">
                {project.sections.slot.bullets.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="text-gray-700 leading-relaxed">{project.sections.slot.closing}</p>
        </section>


        <footer className="text-center pt-8 mt-12 border-t">
          <p className="font-bold">{project.contact.name} ({project.contact.role})</p>
          <p>{project.contact.phone} | <a href={`mailto:${project.contact.email}`} className="text-blue-600 hover:underline">{project.contact.email}</a></p>
        </footer>
      </main>
    </div>
  );
}
