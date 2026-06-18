import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid #222",
        marginTop: "80px",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          color: "#a0a0a0",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginBottom: "20px",
          }}
        >
          <Link
            href="/privacy-policy"
            style={{ color: "#a0a0a0", textDecoration: "none" }}
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            style={{ color: "#a0a0a0", textDecoration: "none" }}
          >
            Terms & Conditions
          </Link>
        </div>

        <p>hello@sparksintel.com</p>

        <p style={{ marginTop: "20px" }}>
          © 2026 Sparks Intelligence
        </p>
      </div>
    </footer>
  );
}