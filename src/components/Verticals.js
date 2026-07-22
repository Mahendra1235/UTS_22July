const verticals = [
  {
    title: "Hyperscale DataCentres",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="2" strokeLinecap="round" />
        <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
    description:
      "Sustainable digital infrastructure, AI-ready datacentres, Digital Twin, DCIM, decarbonization, and operational excellence.",
  },
  {
    title: "Semiconductor",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M20 9h2M20 15h2M2 9h2M2 15h2" />
      </>
    ),
    description:
      "End-to-end semiconductor engineering from IP & SoC design to physical design, verification, embedded software, and production test.",
  },
  {
    title: "Industry X",
    icon: (
      <>
        <path d="M2 20h20" />
        <path d="M5 20V8l5-4v16" />
        <path d="M14 20V4l5 4v12" />
        <rect x="8" y="12" width="2" height="2" />
        <rect x="8" y="16" width="2" height="2" />
        <rect x="16" y="10" width="2" height="2" />
        <rect x="16" y="14" width="2" height="2" />
      </>
    ),
    description:
      "AI/ML-driven digital transformation for Process Industries, Power & Utilities, Discrete Manufacturing, and Energy with intelligent automation and analytics.",
  },
  {
    title: "Automotive",
    icon: (
      <>
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </>
    ),
    description:
      "Connected vehicle platforms, autonomous driving ecosystems, EV powertrain engineering, and ADAS-enabled smart mobility solutions.",
  },
];

function Verticals() {
  return (
    <section id="verticals" style={{ scrollMarginTop: "100px" }}>
      <h2 className="section-title">Core Operating Verticals</h2>
      <div className="verticals-grid">
        {verticals.map((v) => (
          <div key={v.title} className="vertical-item">
            <svg className="v-icon-svg" viewBox="0 0 24 24">
              {v.icon}
            </svg>
            <h3>{v.title}</h3>
            <p>{v.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Verticals;
