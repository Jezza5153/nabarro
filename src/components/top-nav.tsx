import Link from "next/link";

const items = [
  { id: "inleiding", label: "1. Inleiding" },
  { id: "doelen", label: "2. Doelstellingen" },
  { id: "werkwijze", label: "3. Werkwijze" },
  { id: "doelgroep", label: "4. Doelgroep" },
  { id: "betrokkenheid", label: "5. Betrokkenheid" },
  { id: "organisaties", label: "6. Organisaties" },
  { id: "gsb", label: "7. GSB" },
  { id: "slot", label: "8. Slot" },
];

export function TopNav() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/55 border-b border-white/40">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-2">
        <div className="flex gap-2 overflow-x-auto">
            {items.map((it) => (
            <a
                key={it.id}
                href={`#${it.id}`}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold text-[hsl(var(--ink))] bg-white/70 hover:bg-white"
            >
                {it.label}
            </a>
            ))}
        </div>
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <Link href="/aanmelden" className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold text-white bg-[hsl(var(--deep-blue))] hover:bg-[hsl(var(--deep-blue))]/90">
                Aanmelden
            </Link>
            <Link href="/project" className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold text-[hsl(var(--ink))] bg-white/80 hover:bg-white">
                Project
            </Link>
        </div>
      </div>
    </div>
  );
}
