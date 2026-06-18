export default function TermsPage() {
  return (
    <main
      style={{
        /* BRIGHT POSITIVE THEME: Flipped to premium slate-white */
        backgroundColor: "#f8fafc", 
        color: "#334155", /* Soft slate gray reading text */
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
        {/* Amber Brand Accent Micro-Tag */}
        <div
          style={{
            color: "#b45309", /* High contrast corporate amber */
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "11px",
            fontWeight: "700",
            marginBottom: "24px",
          }}
        >
          Legal Framework
        </div>

        {/* Unified Title matching Navbar Corporate Navy Blue */}
        <h1
          style={{
            fontSize: "54px", 
            fontWeight: "800",
            lineHeight: "1.2",
            marginBottom: "16px",
            letterSpacing: "-1px",
            color: "#0f2547"
          }}
        >
          Terms and Conditions
        </h1>

        <p style={{ color: "#64748b", fontSize: "16px", marginBottom: "40px" }}>
          Effective Date: June 2026
        </p>

        {/* Clean, light separator rule line */}
        <div style={{ height: "1px", backgroundColor: "#cbd5e1", margin: "40px 0" }} />

        {/* Legal Text Container */}
        <div style={{ maxWidth: "800px" }}>
          
          {/* SECTION 1 */}
          <div style={{ paddingBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.5px", marginBottom: "16px", color: "#0f2547" }}>
              1. Purpose
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", marginBottom: "16px" }}>
              This website, operated under the brand “Sparks Intelligence”, is
              intended for informational and professional outreach purposes.
            </p>
            <p style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", margin: 0 }}>
              By accessing this website, you agree to these Terms.
            </p>
          </div>

          {/* SECTION 2 */}
          <div style={{ paddingVertical: "16px", paddingBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.5px", marginBottom: "16px", color: "#0f2547" }}>
              2. Scope of Use
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", marginBottom: "16px" }}>
              The website provides general information only. It does not offer
              services, transactions, or user-specific functionality.
            </p>
            <p style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", margin: 0 }}>
              Nothing on this website constitutes professional, financial, or legal
              advice.
            </p>
          </div>

          {/* SECTION 3 */}
          <div style={{ paddingVertical: "16px", paddingBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.5px", marginBottom: "16px", color: "#0f2547" }}>
              3. Intellectual Property
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", margin: 0 }}>
              All materials, including content, design, and branding, are owned by or
              licensed to Sparks Intelligence. Unauthorized use, reproduction, or
              distribution is prohibited.
            </p>
          </div>

          {/* SECTION 4 */}
          <div style={{ paddingVertical: "16px", paddingBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.5px", marginBottom: "16px", color: "#0f2547" }}>
              4. Acceptable Use
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", marginBottom: "16px" }}>
              Users agree to access the website lawfully and not to:
            </p>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              <li style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", marginBottom: "12px" }}>
                Interfere with its operation
              </li>
              <li style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", marginBottom: "12px" }}>
                Attempt unauthorized access
              </li>
              <li style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", margin: 0 }}>
                Use the website for unlawful purposes
              </li>
            </ul>
          </div>

          {/* SECTION 5 */}
          <div style={{ paddingVertical: "16px", paddingBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.5px", marginBottom: "16px", color: "#0f2547" }}>
              5. External References
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", margin: 0 }}>
              Links to third-party platforms may be provided for convenience.
              We do not endorse or assume responsibility for external content
              or practices.
            </p>
          </div>

          {/* SECTION 6 */}
          <div style={{ paddingVertical: "16px", paddingBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.5px", marginBottom: "16px", color: "#0f2547" }}>
              6. Disclaimer
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", margin: 0 }}>
              The website is provided on an “as is” basis without warranties of any
              kind, express or implied, including accuracy, completeness, or
              availability.
            </p>
          </div>

          {/* SECTION 7 */}
          <div style={{ paddingVertical: "16px", paddingBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.5px", marginBottom: "16px", color: "#0f2547" }}>
              7. Limitation of Liability
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", margin: 0 }}>
              To the fullest extent permitted by law, we disclaim liability for any
              loss or damage arising from use of this website.
            </p>
          </div>

          {/* SECTION 8 */}
          <div style={{ paddingVertical: "16px", paddingBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.5px", marginBottom: "16px", color: "#0f2547" }}>
              8. Status of Operations
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", margin: 0 }}>
              Sparks Intelligence currently operates as a brand and may not yet be a
              registered legal entity. References to the brand do not imply the
              existence of a separate legal person at this stage.
            </p>
          </div>

          {/* SECTION 9 */}
          <div style={{ paddingVertical: "16px", paddingBottom: "32px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.5px", marginBottom: "16px", color: "#0f2547" }}>
              9. Updates
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", margin: 0 }}>
              These Terms may be revised periodically. Continued use of the website
              constitutes acceptance of any changes.
            </p>
          </div>

          {/* SECTION 10 */}
          <div style={{ paddingVertical: "16px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-0.5px", marginBottom: "16px", color: "#0f2547" }}>
              10. Governing Law
            </h2>
            <p style={{ lineHeight: "1.8", fontSize: "17px", color: "#334155", margin: 0 }}>
              These Terms are governed by the laws of India.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}