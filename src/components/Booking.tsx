"use client";

import { FormEvent, useState } from "react";

export default function Booking() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="book" className="booking-section">
      <div className="container booking-wrap">
        <div className="booking-copy"><span className="eyebrow">Ready when you are</span><h2>Let&apos;s make your<br /><em>next smile</em> simple.</h2><p>Tell us a little about what you need. Our front desk will get back to you to confirm a convenient time.</p><div className="contact-mini"><span>📍</span><div><strong>Luma Dental Studio</strong><small>MG Road · Kochi, Kerala</small></div></div><div className="contact-mini"><span>☎</span><div><strong>+91 98765 43210</strong><small>Mon–Sat · 9:00 AM–7:00 PM</small></div></div></div>
        <div className="booking-card">
          {sent ? <div className="success"><div>✓</div><h3>Request received.</h3><p>Thanks — this demo form is ready to connect to your real booking system.</p><button onClick={() => setSent(false)}>Send another request</button></div> : <form onSubmit={submit}><div className="form-title"><span>01</span><h3>Request a visit</h3></div><div className="field-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Phone<input required name="phone" placeholder="+91 98765 43210" /></label></div><label>What can we help with?<select name="treatment" defaultValue=""><option value="" disabled>Select a treatment</option><option>Smile cleaning</option><option>Cosmetic dentistry</option><option>Dental implants</option><option>Braces & aligners</option><option>Root canal care</option><option>Kids dentistry</option></select></label><label>Preferred date<input required type="date" name="date" /></label><button className="submit-button" type="submit">Request appointment <span>↗</span></button><small className="form-note">This demo does not send data anywhere yet.</small></form>}
        </div>
      </div>
    </section>
  );
}
