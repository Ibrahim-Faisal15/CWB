import React from 'react';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Cardboard World Logo" className="logo-img" />
        </div>
        <div className="nav-links">
          <a href="#shop">Shop</a>
        </div>
      </nav>

      <main>
        <section className="hero">

          <div className="hero-content">
            <h1 className="hero-title animate-up delay-2">
              Become Your<br />
              Favorite<br />
              Character
            </h1>
            <div className="animate-up delay-3">
              <a href="https://www.etsy.com/shop/cardboardworldstore?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnVAP_e2Q-0qoCk6oWrik9gcjwSMF8AZ1KOiS7-y1Fs-GWTi4Rw1Wv-aciy24_aem_TSuVvNTGcNqiF2GbXsz0MA" className="btn">
                Shop The Collection
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-visual animate-up delay-1">
            <img
              src="/hero.png"
              alt="Futuristic Costume Model High Fashion"
              className="hero-image"
            />
          </div>
        </section>

        <section className="intro">
          <p className="intro-text">
            We don’t make mass-produced costumes. We design and build high-quality costumes using modern materials to bring fictional characters into real life.
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-copy">© 2026 Cardboard World</div>
        <div className="footer-links">
          <a href="https://www.etsy.com/shop/cardboardworldstore?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnVAP_e2Q-0qoCk6oWrik9gcjwSMF8AZ1KOiS7-y1Fs-GWTi4Rw1Wv-aciy24_aem_TSuVvNTGcNqiF2GbXsz0MA">Etsy</a>
          <a href="https://www.instagram.com/card_board_world/">Connect</a>
        </div>
        <div className="footer-meta">
          Cardboard World • Global Shipping
        </div>
      </footer>
    </>
  );
}

export default App;
