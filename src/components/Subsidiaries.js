import ussLogo from '../assets/USS logo.png';
import seleneanLogo from '../assets/Selenean Logo.png';
import eldaasLogo from '../assets/Eldaas logo.jpg';

const subsidiaries = [
  {
    name: "USS",
    logo: ussLogo,
    logoAlt: "USS Logo",
    description:
      "Delivering next-generation system infrastructure, integrated physical asset protections, and robust workflow operational environments.",
    url: "https://univisionsys.com",
  },
  {
    name: "Selenean",
    logo: seleneanLogo,
    logoAlt: "Selenean Logo",
    description:
      "Pioneering advanced operational research, deep-domain logistical networks, and highly agile technical innovation structures.",
    url: "https://Seleneantech.com",
  },
  {
    name: "Eldaas",
    logo: eldaasLogo,
    logoAlt: "Eldaas Logo",
    description:
      "Driving bleeding-edge hardware design automation, embedded computational computing, and foundational enterprise scaling frameworks.",
    url: "https://Eldaas.com",
  },
];

function Subsidiaries() {
  return (
    <section id="subsidiaries">
      <div className="subsidiary-grid">
        {subsidiaries.map((sub) => (
          <a
            key={sub.name}
            href={sub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={sub.logo} alt={sub.logoAlt} className={`card-logo${sub.name === 'Selenean' ? ' card-logo--large' : ''}`} />
              <p>{sub.description}</p>
            </div>
            <span className="btn">Visit Website &rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Subsidiaries;
