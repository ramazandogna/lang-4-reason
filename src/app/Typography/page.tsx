const FONT_SIZES = [
  { label: 'text-xs', className: 'text-xs' },
  { label: 'text-sm', className: 'text-sm' },
  { label: 'text-base', className: 'text-base' },
  { label: 'text-lg', className: 'text-lg' },
  { label: 'text-xl', className: 'text-xl' },
  { label: 'text-2xl', className: 'text-2xl' },
  { label: 'text-3xl', className: 'text-3xl' },
  { label: 'text-4xl', className: 'text-4xl' },
  { label: 'text-5xl', className: 'text-5xl' },
  { label: 'text-6xl', className: 'text-6xl' }
];

const FONT_WEIGHTS = [
  { label: 'Thin', className: 'font-thin' },
  { label: 'ExtraLight', className: 'font-extralight' },
  { label: 'Light', className: 'font-light' },
  { label: 'Normal', className: 'font-normal' },
  { label: 'Medium', className: 'font-medium' },
  { label: 'SemiBold', className: 'font-semibold' },
  { label: 'Bold', className: 'font-bold' },
  { label: 'ExtraBold', className: 'font-extrabold' },
  { label: 'Black', className: 'font-black' }
];
function TypographyPage() {
  return (
    <div className="mx-auto space-y-8 py-8">
      <h2 className="mb-6 text-3xl font-bold">Typography Scale Showcase</h2>
      {FONT_SIZES.map((size) => (
        <section key={size.label} className="mb-6">
          <div className="mb-2 flex items-end gap-3">
            <span className="rounded border bg-[var(--secondary-bg)] px-2 py-1 text-xs text-[var(--accent)]">
              {size.label}
            </span>
            <span className={`${size.className}`}>Aa</span>
          </div>
          <div className="bg-muted/50 grid grid-cols-1 gap-4 rounded p-2 sm:grid-cols-2">
            {FONT_WEIGHTS.map((weight) => (
              <div
                key={weight.label}
                className={`${size.className} ${weight.className} flex flex-col items-start p-2 font-sans`}
              >
                <span>
                  {weight.label}
                  <span className="text-muted ml-1 text-[10px]">
                    ({weight.className})
                  </span>
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default TypographyPage;
