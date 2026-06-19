export default function PrivacyPolicy() {
  return (
    <main
      style={{
        backgroundColor: "#f8fafc",
        color: "#334155",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "160px 40px 120px 40px",
        }}
      >
        <div
          style={{
            color: "#b45309",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "11px",
            fontWeight: "700",
            marginBottom: "24px",
          }}
        >
          Data Governance
        </div>

        <h1
          style={{
            fontSize: "54px",
            fontWeight: "800",
            lineHeight: "1.2",
            marginBottom: "16px",
            letterSpacing: "-1px",
            color: "#0f2547",
          }}
        >
          Privacy Policy
        </h1>

        <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "40px" }}>
          Effective Date: June 2026
        </p>

        <div
          style={{
            height: "1px",
            backgroundColor: "#cbd5e1",
            margin: "40px 0",
          }}
        />

        <div style={{ maxWidth: "800px" }}>
          <div style={{ paddingBottom: "32px" }}>
            <h2 style={sectionTitle}>1. Overview</h2>
            <p style={text}>
              Sparks Intelligence ('we', 'our', 'us') respects your privacy and is
              committed to responsible handling of information.
            </p>
          </div>

          <div style={{ paddingTop: "16px", paddingBottom: "32px" }}>
            <h2 style={sectionTitle}>2. Data Collection Approach</h2>
            <p style={text}>
              We do not actively solicit personal information through this website.
            </p>
          </div>

          <div style={{ paddingTop: "16px", paddingBottom: "32px" }}>
            <h2 style={sectionTitle}>3. Limited Technical Data</h2>
            <p style={text}>
              Standard technical information may be collected automatically.
            </p>
          </div>

          <div style={{ paddingTop: "16px", paddingBottom: "32px" }}>
            <h2 style={sectionTitle}>4. Analytics and Cookies</h2>
            <p style={text}>
              We may use minimal analytics tools or cookies.
            </p>
          </div>

          {/* FIXED HERE */}
          <div style={{ paddingTop: "16px", paddingBottom: "32px" }}>
            <h2 style={sectionTitle}>5. Email-Based Communication</h2>
            <p style={text}>
              If you contact us, we may receive your details for communication purposes.
            </p>
          </div>

          <div style={{ paddingTop: "16px", paddingBottom: "32px" }}>
            <h2 style={sectionTitle}>6. Data Sharing</h2>
            <p style={text}>We do not sell personal information.</p>
          </div>

          <div style={{ paddingTop: "16px", paddingBottom: "32px" }}>
            <h2 style={sectionTitle}>7. Data Security</h2>
            <p style={text}>
              We apply reasonable safeguards, but no system is fully secure.
            </p>
          </div>

          <div style={{ paddingTop: "16px", paddingBottom: "32px" }}>
            <h2 style={sectionTitle}>8. External Platforms</h2>
            <p style={text}>
              We are not responsible for third-party privacy practices.
            </p>
          </div>

          <div style={{ paddingTop: "16px", paddingBottom: "32px" }}>
            <h2 style={sectionTitle}>9. Policy Updates</h2>
            <p style={text}>This policy may be updated periodically.</p>
          </div>

          <div style={{ paddingTop: "16px", paddingBottom: "32px" }}>
            <h2 style={sectionTitle}>10. Contact</h2>
            <p style={email}>hello@sparksintel.com</p>
          </div>

          <div style={{ paddingTop: "16px" }}>
            <h2 style={sectionTitle}>11. Jurisdiction</h2>
            <p style={text}>This policy is governed by laws of India.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const sectionTitle = {
  fontSize: "24px",
  fontWeight: "700",
  letterSpacing: "-0.5px",
  marginBottom: "16px",
  color: "#0f2547",
};

const text = {
  lineHeight: "1.8",
  fontSize: "17px",
  color: "#334155",
  margin: 0,
};

const email = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#b45309",
  margin: 0,
  letterSpacing: "-0.5px",
};