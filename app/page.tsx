import Image from "next/image";
import BlurText from "@/components/react-bits/blur-text";
import SpotlightCard from "@/components/react-bits/spotlight-card";
import MotionShell from "./motion-shell";

const services = [
  { number: "01", title: "Insurance & Prior Authorizations", body: "Eligibility and benefits verification, prior-authorization processing, and clear responses to provider queries.", tags: ["Insurance eligibility", "Benefits verification", "Availity & UHC Portal"] },
  { number: "02", title: "Claims & Medical Documentation", body: "Patient exam documentation, clinical histories, diagnoses, physician orders, coding, and claim finalization.", tags: ["ICD-10 & CPT coding", "Claims processing", "Medical scribing"] },
  { number: "03", title: "Patient Scheduling & Administration", body: "Patient scheduling and provider coordination supported by careful correspondence, filing, and data entry.", tags: ["Patient scheduling", "Provider queries", "Data entry & research"] },
  { number: "04", title: "Sales Development & CRM Support", body: "Outbound prospecting, lead qualification, decision-maker research, and organized follow-up records.", tags: ["Lead qualification", "CRM updates", "HubSpot"] },
];

const roles = [
  { date: "Jan 2025 - Present", title: "Sales Development Representative", company: "Labsy", body: "Introduces products and services through outbound calls, qualifies leads, identifies decision-makers, and records conversations, follow-ups, and outcomes in the CRM." },
  { date: "Sep 2017 - Jun 2024", title: "Medical Assistant", company: "Truelife Hospital | Scheduling, Insurance Verification, Data Analysis", body: "Verified eligibility and benefits, processed prior authorizations, documented patient exams and physician orders, finalized claims using ICD-10 and CPT, and handled provider queries and scheduling." },
  { date: "Mar 2016 - May 2017", title: "Customer Service Representative", company: "iQOR Philippines, Davao City", body: "Resolved member inquiries, processed insurance claims, supported enrollment, maintained member records, and explained benefits." },
  { date: "May 2013 - Jan 2016", title: "Technical Support & Billing Representative", company: "Teleperformance Davao", body: "Supported a U.S. telecommunications company with activation, troubleshooting, billing, payments, refunds, replacements, and technician dispatch." },
  { date: "Jun 2009 - Mar 2012", title: "Administrative Assistant / Cashier", company: "RD Pawnshop Inc.", body: "Managed scheduling, correspondence, travel arrangements, filing, meeting minutes, inventory, fiscal-review data, and expense reconciliation." },
];

export default function Page() {
  return <MotionShell>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header" id="home">
      <nav className="nav container" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Rose Mae Alipan home"><span className="brand-mark">RA</span><span><strong>Rose Mae Alipan</strong><small>Medical Virtual Assistant</small></span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#services">Services</a><a href="#experience">Experience</a><a href="#tools">Tools</a><a className="button button-small" href="#contact">Contact Rose Mae</a></div>
      </nav>
    </header>
    <main id="main-content">
      <section className="hero">
        <div className="hero-orb hero-orb-one"/><div className="hero-orb hero-orb-two"/>
        <div className="container hero-grid">
          <div className="hero-copy"><div className="eyebrow"><span/>Hello, I&apos;m Rose Mae.</div><h1><span>Healthcare support</span> <em>that keeps care moving.</em></h1><BlurText className="hero-lead" text="Insurance, prior authorizations, claims, and scheduling handled with careful documentation and clear communication." />
            <div className="hero-actions"><a className="button" href="#services">View services <span aria-hidden>→</span></a><a className="text-link" href="/Rose-Mae-Alipan-Resume.pdf" download>Download résumé <span aria-hidden>↓</span></a></div>
          </div>
          <div className="hero-visual"><div className="portrait-halo"/><div className="monogram" aria-hidden>RA</div><Image src="/rose-mae-portrait.png" alt="Rose Mae Alipan wearing navy medical scrubs" width={1086} height={1448} priority sizes="(max-width: 960px) 80vw, 42vw"/></div>
        </div>
      </section>
      <section className="proof-strip"><div className="container proof-grid">{[["HIPAA","Certified through Saiber"],["2017-24","Healthcare role at Truelife Hospital"],["2025-Now","Sales development at Labsy"],["US","Healthcare provider support"]].map(([title,body],index)=><div data-reveal="rise" style={{"--delay":`${index * 80}ms`} as React.CSSProperties} key={title}><strong>{title}</strong><span>{body}</span></div>)}</div></section>
      <section className="section about" id="about"><div className="container split-grid"><div data-reveal="left"><h2>The person behind the process.</h2></div><div className="about-copy" data-reveal="right"><p className="large-copy">I help healthcare teams protect their time by keeping the back office accurate and dependable.</p><p>I&apos;m Rose Mae M. Alipan, a healthcare operations professional based in Davao City. At Truelife Hospital, I worked across patient scheduling, eligibility and benefits verification, prior authorizations, claims, and medical documentation. My current sales development role at Labsy builds on that foundation with lead qualification, CRM recordkeeping, and structured follow-up.</p><div className="values">{["Accuracy","Consistency","Follow-through"].map((value,index)=><span style={{"--delay":`${index * 90}ms`} as React.CSSProperties} key={value}>{value}</span>)}</div></div></div></section>
      <section className="section services" id="services"><div className="container"><div className="section-heading" data-reveal="rise"><h2>Reliable support for better care.</h2><p>Focused administrative support grounded in years of healthcare operations experience.</p></div><div className="service-grid">{services.map((service,index)=><SpotlightCard className={`service-card ${index===0?"featured":""}`} spotlightColor={index===0?"rgba(188, 239, 231, 0.13)":"rgba(25, 181, 165, 0.13)"} data-reveal="rise" style={{"--delay":`${index * 90}ms`} as React.CSSProperties} key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.body}</p><ul>{service.tags.map(tag=><li key={tag}>{tag}</li>)}</ul></SpotlightCard>)}</div></div></section>
      <section className="section experience" id="experience"><div className="container experience-grid"><div className="experience-intro" data-reveal="left"><h2>Healthcare operations, handled with care.</h2><p>Experience supporting U.S. healthcare workflows through careful documentation, scheduling, claims, and insurance-related administrative work.</p></div><div className="timeline" data-reveal="line">{roles.map((role,index)=><article className="timeline-item" data-reveal="right" style={{"--delay":`${index * 70}ms`} as React.CSSProperties} key={`${role.company}-${role.date}`}><div className="timeline-date">{role.date}</div><div><h3>{role.title}</h3><p className="company">{role.company}</p><p>{role.body}</p></div></article>)}</div></div></section>
      <section className="section tools" id="tools"><div className="container"><div className="section-heading" data-reveal="rise"><h2>Comfortable inside the workflow.</h2><p>Healthcare systems, insurance portals, and productivity tools used in day-to-day support.</p></div><div className="tool-cloud" data-reveal="rise">{["Availity","UHC Portal","IMS","Slack","Zendesk","HubSpot","Canva"].map((tool,index)=><span style={{"--delay":`${index * 65}ms`} as React.CSSProperties} key={tool}>{tool}</span>)}</div><p className="education" data-reveal="rise"><strong>Education:</strong> College graduate, University of Southern Philippines.<br/><strong>Certification:</strong> HIPAA Certified, Saiber.</p></div></section>
      <section className="section contact" id="contact"><div className="container contact-card" data-reveal="scale"><div><span className="kicker light">Let&apos;s work together</span><h2>Need dependable support behind your healthcare team?</h2><p>I&apos;m looking for a Medical Virtual Assistant opportunity where I can bring my healthcare operations experience, attention to detail, and follow-through.</p><p className="contact-details"><a href="mailto:alipanrosemae@gmail.com">alipanrosemae@gmail.com</a><br/><a href="tel:+639760834518">+63 976 083 4518</a><br/>Davao City, Philippines<br/><a href="https://www.linkedin.com/in/rose-mae-alipan-570a8b372" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></p></div><a className="button button-light" href="mailto:alipanrosemae@gmail.com">Contact Rose Mae <span aria-hidden>→</span></a></div></section>
    </main>
    <footer><div className="container footer-grid"><a className="brand brand-footer" href="#home"><span className="brand-mark">RA</span><span><strong>Rose Mae Alipan</strong><small>Medical Virtual Assistant</small></span></a><p>Dependable support. Better-organized care.</p><p>© 2026 Rose Mae Alipan</p></div></footer>
  </MotionShell>;
}
