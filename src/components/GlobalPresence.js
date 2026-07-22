import mapImg from '../assets/Global Presence.png';

const regions = [
  {
    flag: "\uD83C\uDDEE\uD83C\uDDF3",
    country: "India",
    entity: "Univision Systems & Solutions",
    previous: "[Previously UTCPL]",
    locations: ["Bengaluru & Chennai", "Hyderabad & Coimbatore"],
  },
  {
    flag: "\uD83C\uDDEC\uD83C\uDDE7",
    country: "United Kingdom",
    entity: "Univision Technology Solutions Solutions UK Ltd",
    previous: "\u00A0",
    locations: ["Bristol"],
  },
  {
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    country: "United States",
    entity: "Univision Technology Solutions. Inc",
    previous: "\u00A0",
    locations: ["Delaware"],
  },
  {
    flag: "\uD83C\uDDF2\uD83C\uDDFE",
    country: "Malaysia",
    entity: "Univision Technology Solutions SDN-BHD",
    previous: "\u00A0",
    locations: ["Penang (TBO)"],
  },
];

function GlobalPresence() {
  return (
    <section id="global" style={{ scrollMarginTop: "100px" }}>
      <h2 className="section-title">Global Presence</h2>
      <div className="global-container">
        <h3>Our Global Footprint</h3>
        <p className="sub-tagline">
          Delivering engineering excellence worldwide with highly capable teams
          and scalable delivery models.
        </p>

        <div className="global-content-wrapper">
          <div className="map-wrapper">
            <img
              src={mapImg}
              alt="UTS Global Footprint Map"
              className="global-map-img"
            />
          </div>

          <div className="regions-grid">
            {regions.map((r) => (
              <div key={r.country} className="region-card">
                <div className="flag-title">
                  <span>{r.flag}</span>
                  <h4>{r.country}</h4>
                </div>
                <div className="entity-name">{r.entity}</div>
                <div className="previous-name">{r.previous}</div>
                <ul className="location-list">
                  {r.locations.map((loc) => (
                    <li key={loc}>{loc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalPresence;
