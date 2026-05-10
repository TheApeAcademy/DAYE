export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="h-[1px] w-8 bg-sp-green" />
      <span className="text-sp-green text-[11px] font-bold tracking-[0.2em] uppercase">
        {number} — {label}
      </span>
    </div>
  );
}
