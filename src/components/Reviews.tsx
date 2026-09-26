const reviews = [
  ["“The whole experience felt completely different from a normal dental visit. Calm, clear and genuinely caring.”", "Meera S.", "Smile design patient"],
  ["“Everything was explained before we started. I finally stopped putting off my dental check-up.”", "Arjun P.", "General dentistry patient"],
  ["“My daughter actually asks when her next appointment is. The team made her first visits so easy.”", "Nisha K.", "Parent & family patient"],
];

export default function Reviews() {
  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <div className="review-top"><div><span className="eyebrow dark">Patient stories</span><h2>Good care is<br /><em>felt, not just seen.</em></h2></div><div className="rating"><strong>4.9</strong><span>★★★★★</span><small>From 500+ patient visits</small></div></div>
        <div className="review-grid">
          {reviews.map(([quote, name, role]) => <article className="review-card" key={name}><span className="quote-mark">“</span><blockquote>{quote}</blockquote><footer><strong>{name}</strong><span>{role}</span></footer></article>)}
        </div>
      </div>
    </section>
  );
}
