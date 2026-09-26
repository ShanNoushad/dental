const doctors = [
  { initials: "AM", name: "Dr. Anika Menon", role: "Cosmetic & Restorative Dentistry", bio: "Focused on natural-looking smile design and minimally invasive care." },
  { initials: "RK", name: "Dr. Rohan Krishnan", role: "Implant & Oral Rehabilitation", bio: "Combines careful treatment planning with advanced implant dentistry." },
  { initials: "SN", name: "Dr. Sara Nair", role: "Orthodontics & Family Care", bio: "Creates comfortable orthodontic journeys for teens, adults and families." },
];

export default function Doctors() {
  return (
    <section id="doctors" className="section doctors">
      <div className="container">
        <div className="section-head compact">
          <div><span className="eyebrow dark">Meet the team</span><h2>Care from people<br /><em>who listen.</em></h2></div>
          <p>Our clinicians take time to explain your options, answer questions and build treatment around your goals.</p>
        </div>
        <div className="doctor-grid">
          {doctors.map((doctor, i) => (
            <article className="doctor-card" key={doctor.name}>
              <div className={`doctor-photo doctor-${i + 1}`}><span>{doctor.initials}</span></div>
              <div className="doctor-info"><h3>{doctor.name}</h3><p className="doctor-role">{doctor.role}</p><p>{doctor.bio}</p><a href="#book">Book with {doctor.name.split(" ").slice(1).join(" ")} ↗</a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
