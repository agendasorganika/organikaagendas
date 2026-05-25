
export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1 style={{fontSize:'56px'}}>Organika Agendas 🌿</h1>
        <p style={{fontSize:'24px'}}>Pequeños planes, grandes cambios ✨</p>

        <a className="btn" href="https://instagram.com" target="_blank">
          Instagram 📸
        </a>

        <a className="btn" href="https://wa.me/" target="_blank">
          WhatsApp 💬
        </a>
      </section>

      <section className="section">
        <h2 style={{textAlign:'center'}}>Nuestros Packs ✨</h2>

        <div className="cards">
          <div className="card">
            <h3>🌿 Planner Hábitos</h3>
            <p>Organizá tu rutina y bienestar.</p>
          </div>

          <div className="card">
            <h3>☁️ Wellness Planner</h3>
            <p>Tu espacio de calma y organización.</p>
          </div>

          <div className="card">
            <h3>📚 Pack Completo</h3>
            <p>Todo para transformar tu rutina.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 Organika Agendas ✨
      </footer>
    </main>
  )
}
