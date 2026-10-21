import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Menu, X, Sparkles, ShieldCheck, Users, MessageCircle, LayoutDashboard, LogIn, UserPlus, Mail, CheckCircle2 } from 'lucide-react';
import './style.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState('');
  const [notice, setNotice] = useState('');
  const [email, setEmail] = useState('');

  function submitDemo(e) {
    e.preventDefault();
    setNotice('This is a demo form. Connect an authentication provider before collecting real accounts.');
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark"><Sparkles size={19} /></span> launchpad</a>
        <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button className="btn btn-quiet" onClick={() => {setModal('login'); closeMenu();}}>Sign in</button>
          <button className="btn btn-primary nav-cta" onClick={() => {setModal('signup'); closeMenu();}}>Get started <ArrowRight size={16} /></button>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"></span> YOUR NEXT CHAPTER STARTS HERE</div>
            <h1>Big ideas need<br /><span>a launchpad.</span></h1>
            <p className="hero-text">A simple, flexible home for your next big thing. Bring your idea, find your direction, and take the next step with confidence.</p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-large" onClick={() => setModal('signup')}>Get started free <ArrowRight size={18} /></button>
              <a className="text-link" href="#features">Explore features <ArrowRight size={16} /></a>
            </div>
            <div className="trust-note"><ShieldCheck size={17} /> Built to grow with your idea</div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of a project dashboard">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="floating-card card-top"><span className="tiny-icon purple"><Sparkles size={16}/></span><div><b>New idea</b><small>Ready to take shape</small></div><span className="status-dot"></span></div>
            <div className="dashboard-card">
              <div className="dash-head"><div><small>YOUR WORKSPACE</small><h3>Welcome aboard</h3></div><span className="avatar">L</span></div>
              <div className="progress-label"><span>First steps</span><b>2 of 4</b></div>
              <div className="progress-track"><span></span></div>
              <div className="dash-row"><span className="task-check"><CheckCircle2 size={16}/></span><span>Shape your idea</span><b>Done</b></div>
              <div className="dash-row"><span className="task-check muted"><Users size={16}/></span><span>Bring people in</span><b>Next</b></div>
              <div className="dash-row"><span className="task-check muted"><LayoutDashboard size={16}/></span><span>Build your space</span><b>Later</b></div>
            </div>
            <div className="floating-card card-bottom"><span className="tiny-icon green"><CheckCircle2 size={16}/></span><div><b>Progress made</b><small>One step at a time</small></div></div>
            <div className="sparkle sparkle-a">✳</div><div className="sparkle sparkle-b">✦</div>
          </div>
        </section>

        <section className="feature-section" id="features">
          <div className="section-heading"><div className="eyebrow">A GOOD PLACE TO BEGIN</div><h2>Everything starts with <span>one step.</span></h2><p>A useful starting point today, with room to become something more tomorrow.</p></div>
          <div className="feature-grid">
            <article className="feature-card"><div className="feature-icon lilac"><LayoutDashboard /></div><h3>Your own workspace</h3><p>A clear place to organize your plans and keep your next steps in sight.</p></article>
            <article className="feature-card"><div className="feature-icon mint"><Users /></div><h3>People-first experience</h3><p>A responsive design that feels at home on phones, tablets, and desktops.</p></article>
            <article className="feature-card"><div className="feature-icon peach"><ShieldCheck /></div><h3>Ready to grow</h3><p>A foundation that can later connect to real accounts, permissions, and data.</p></article>
          </div>
        </section>

        <section className="about-band" id="about">
          <div className="about-symbol"><Sparkles size={27}/></div>
          <div><div className="eyebrow">START SMALL. THINK BIG.</div><h2>Your idea doesn't have to be perfect to begin.</h2><p>LaunchPad is a starter template. Tell us what you want it to become, and we can shape the next version around your goals.</p></div>
          <button className="btn btn-light" onClick={() => setModal('signup')}>Start building <ArrowRight size={16}/></button>
        </section>

        <section className="contact-section" id="contact">
          <div><div className="eyebrow">LET'S CONNECT</div><h2>Have a question?</h2><p>Set up your preferred contact method when you're ready to launch.</p></div>
          <div className="contact-options">
            <a className="contact-link" href="mailto:hello@example.com"><span className="contact-icon"><Mail /></span><span><b>Email us</b><small>Replace with your email address</small></span><ArrowRight size={17}/></a>
            <a className="contact-link" href="https://wa.me/" target="_blank" rel="noreferrer"><span className="contact-icon whatsapp"><MessageCircle /></span><span><b>WhatsApp</b><small>Add your number before publishing</small></span><ArrowRight size={17}/></a>
          </div>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark"><Sparkles size={17}/></span> launchpad</a><span>© {new Date().getFullYear()} LaunchPad Starter</span><button className="footer-admin" onClick={() => setModal('admin')}>Admin preview</button></footer>

      {modal && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => {if(e.target === e.currentTarget) {setModal(''); setNotice('');}}}>
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button className="modal-close" aria-label="Close" onClick={() => {setModal(''); setNotice('');}}><X /></button>
          {modal === 'admin' ? <>
            <div className="modal-icon"><LayoutDashboard /></div><div className="eyebrow">ADMIN DASHBOARD PREVIEW</div><h2 id="modal-title">Your control room</h2><p>This is a visual preview only. Admin access is not protected yet.</p>
            <div className="admin-preview"><div><small>Registered users</small><b>—</b></div><div><small>New messages</small><b>—</b></div><div><small>Site status</small><b>Starter</b></div></div>
            <div className="notice">Before launch, add server-side authentication and role checks. Never rely on hiding this screen to secure admin access.</div>
          </> : <>
            <div className="modal-icon">{modal === 'login' ? <LogIn /> : <UserPlus />}</div>
            <div className="eyebrow">{modal === 'login' ? 'WELCOME BACK' : 'YOUR NEXT STEP'}</div>
            <h2 id="modal-title">{modal === 'login' ? 'Sign in to LaunchPad' : 'Make it yours.'}</h2>
            <p>{modal === 'login' ? 'The sign-in experience will go here once authentication is connected.' : 'This starter is ready for your idea. Enter an email to preview the flow.'}</p>
            <form onSubmit={submitDemo}><label htmlFor="email">Email address</label><input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required/><button className="btn btn-primary btn-large full-width" type="submit">{modal === 'login' ? 'Continue' : 'Create an account'} <ArrowRight size={17}/></button></form>
            {notice && <div className="notice">{notice}</div>}
            <small className="modal-footnote">Demo only — no account is created and no data is sent.</small>
          </>}
        </div>
      </div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
