import { useState } from "react";

const products = [
  { id: 1, title: "Neon Logo Pack", category: "Logos", price: "$15" },
  { id: 2, title: "Cyber UI Kit", category: "UI Kits", price: "$25" },
  { id: 3, title: "Poster Blast", category: "Posters", price: "$10" },
  { id: 4, title: "Brand Identity Pro", category: "Branding", price: "$40" },
  { id: 5, title: "Wild Banner Set", category: "Banners", price: "$18" },
  { id: 6, title: "Minimal UI Kit", category: "UI Kits", price: "$22" },
  { id: 7, title: "Streetwear Logo", category: "Logos", price: "$20" },
  { id: 8, title: "Event Poster Pack", category: "Posters", price: "$14" },
];

const tabs = ["All", "Logos", "UI Kits", "Posters", "Branding", "Banners"];

const quotes = [
  "Design is intelligence made visible.",
  "Good design is good business.",
  "Creativity takes courage.",
  "Design speaks louder than words.",
];

export default function App() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <h1 style={styles.title}>Wild Designs</h1>
        <p style={styles.subtitle}>
          Premium digital assets crafted to dominate attention.
        </p>
      </header>

      <section style={styles.quotes}>
        {quotes.map((q, i) => (
          <blockquote key={i} style={styles.quote}>
            “{q}”
          </blockquote>
        ))}
      </section>

      <section style={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              ...styles.tab,
              background:
                active === tab
                  ? "linear-gradient(135deg,#ff00cc,#3333ff)"
                  : "rgba(255,255,255,0.08)",
            }}
          >
            {tab}
          </button>
        ))}
      </section>

      <section style={styles.grid}>
        {filtered.map((item) => (
          <div key={item.id} style={styles.card}>
            <h3>{item.title}</h3>
            <p style={{ opacity: 0.7 }}>{item.category}</p>
            <p style={styles.price}>{item.price}</p>
            <button style={styles.buy}>Buy Now</button>
          </div>
        ))}
      </section>

      <section style={styles.info}>
        <h2>Why Wild Designs?</h2>
        <p>
          We craft premium visuals for creators, brands, and startups that want
          to stand out instantly.
        </p>
      </section>

      <footer style={styles.footer}>
        © 2026 Wild Designs — Built wild.
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: "radial-gradient(circle at top, #1b1b3a, #000)",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  hero: {
    padding: "80px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "4rem",
    background: "linear-gradient(135deg,#ff00cc,#00ffff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    opacity: 0.85,
    fontSize: "1.2rem",
    marginTop: "12px",
  },
  quotes: {
    textAlign: "center",
    maxWidth: "800px",
    marginBottom: "40px",
  },
  quote: {
    fontStyle: "italic",
    opacity: 0.7,
    marginBottom: "10px",
  },
  tabs: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    justifyContent: "center",
    marginBottom: "40px",
  },
  tab: {
    padding: "12px 20px",
    borderRadius: "999px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  grid: {
    width: "100%",
    maxWidth: "1100px",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "22px",
    padding: "22px",
    backdropFilter: "blur(12px)",
  },
  price: {
    fontWeight: "bold",
    marginTop: "10px",
  },
  buy: {
    marginTop: "15px",
    width: "100%",
    padding: "12px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(135deg,#ff00cc,#3333ff)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  info: {
    maxWidth: "700px",
    textAlign: "center",
    marginTop: "60px",
    opacity: 0.85,
  },
  footer: {
    marginTop: "60px",
    paddingBottom: "30px",
    opacity: 0.6,
  },
};
