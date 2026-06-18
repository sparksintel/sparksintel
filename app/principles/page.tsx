export default function PrinciplesPage() {
  return (
    <main
      style={{
        /* BRIGHT POSITIVE THEME */
        backgroundColor: "#f8fafc", 
        color: "#334155", 
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Dynamic Hover Styles injected via standard style tag */}
      <style>{`
        .principle-card {
          flex: 1.2;
          min-width: 300px;
          background-color: #ffffff;
          padding: 28px 32px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          border-left: 4px solid #e2e8f0; /* Default border matching container frame */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.01);
          transition: all 0.22s ease-in-out;
          cursor: pointer;
        }
        /* Mouse movement over right-side text triggers full Accent Gold line transition */
        .principle-card:hover {
          border-left: 4px solid #FF8200;
          box-shadow: 0 12px 30px -10px rgba(10, 45, 95, 0.08);
          transform: translateY(-2px); /* Subtle shift up to respond to mouse weight */
        }
      `}</style>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "120px 40px",
        }}
      >
        {/* Uniform Micro-Tag Style */}
        <div
          style={{
            color: "#FF8200", /* Brand Accent Gold */
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "11px",
            fontWeight: "700",
            marginBottom: "24px",
          }}
        >
          Operational Philosophy
        </div>

        {/* Unified Page Title Styling */}
        <h1
          style={{
            fontSize: "54px",
            fontWeight: "800",
            lineHeight: "1.2",
            marginBottom: "20px",
            letterSpacing: "-1px",
            color: "#0A2D5F" /* Primary Corporate Navy Blue */
          }}
        >
          Core Principles We Stand By
        </h1>

        <p
          style={{
            color: "#475569",
            fontSize: "20px",
            lineHeight: "1.6",
            margin: "0 0 60px 0",
            maxWidth: "700px"
          }}
        >
          The foundations that guide every decision, system, and methodology we build.
        </p>

        <hr style={{ margin: "40px 0", borderColor: "#e2e8f0" }} />


        {/* SECTION 1: ANALYTICAL RIGOR */}
        <div style={{ padding: "20px 0" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              letterSpacing: "-0.5px",
              marginBottom: "30px",
              color: "#0A2D5F"
            }}
          >
            Analytical Rigor & Sincerity
          </h2>

          <div 
            style={{ 
              display: "flex", 
              gap: "50px", 
              alignItems: "center", 
              flexWrap: "wrap",
            }}
          >
            {/* IMAGE (LEFT SIDE) */}
            <div 
              style={{ 
                flex: "1", 
                minWidth: "300px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                boxShadow: "0 20px 40px -15px rgba(10, 45, 95, 0.1)"
              }}
            >
              <img 
                src="/images/complete%20coverage.jpg" 
                alt="Analytical Rigor - Complete Coverage" 
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  display: "block"
                }} 
              />
            </div>

            {/* HOVER HOOK ARRANGEMENT (RIGHT SIDE) */}
            <div className="principle-card">
              <p
                style={{
                  lineHeight: "1.8",
                  fontSize: "17px",
                  marginBottom: "24px",
                  color: "#334155"
                }}
              >
                We build tools that reject approximations. Our platform is engineered
                to drill deep into the architectural layers of data, giving your teams
                the means to cross-verify every signal with absolute accuracy.
              </p>

              <p
                style={{
                  lineHeight: "1.8",
                  fontSize: "17px",
                  margin: 0,
                  color: "#334155"
                }}
              >
                We approach data delivery with unvarnished sincerity—our tools
                highlight vulnerabilities clearly and directly, prioritizing your
                long-term portfolio safety over short-term convenience.
              </p>
            </div>
          </div>
        </div>


        <hr style={{ margin: "60px 0", borderColor: "#e2e8f0" }} />


        {/* SECTION 2: ETHICAL STANDARD */}
        <div style={{ padding: "20px 0" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              letterSpacing: "-0.5px",
              marginBottom: "30px",
              color: "#0A2D5F"
            }}
          >
            An Uncompromising Ethical Standard
          </h2>

          <div 
            style={{ 
              display: "flex", 
              gap: "50px", 
              alignItems: "center", 
              flexWrap: "wrap",
            }}
          >
            {/* IMAGE (LEFT SIDE) */}
            <div 
              style={{ 
                flex: "1", 
                minWidth: "300px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                boxShadow: "0 20px 40px -15px rgba(10, 45, 95, 0.1)"
              }}
            >
              <img 
                src="/images/uncompromised%20ethical%20standard.png" 
                alt="Uncompromising Ethical Standard" 
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  display: "block"
                }} 
              />
            </div>

            {/* HOVER HOOK ARRANGEMENT (RIGHT SIDE) */}
            <div className="principle-card">
              <p
                style={{
                  lineHeight: "1.8",
                  fontSize: "17px",
                  marginBottom: "24px",
                  color: "#334155"
                }}
              >
                Data power carries profound responsibility. The Sparks Intelligence
                platform operates within the highest ethical guardrails.
              </p>

              <p
                style={{
                  lineHeight: "1.8",
                  fontSize: "17px",
                  margin: 0,
                  color: "#334155"
                }}
              >
                Our tools are built from the ground up to respect sovereign data
                boundaries, localized regulatory compliance, and strict privacy laws.
                Our data parsing methodologies are transparent, and our sources are
                entirely verifiable.
              </p>
            </div>
          </div>
        </div>


        <hr style={{ margin: "60px 0", borderColor: "#e2e8f0" }} />


        {/* SECTION 3: CUSTOMER FIRST */}
        <div style={{ padding: "20px 0" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              letterSpacing: "-0.5px",
              marginBottom: "30px",
              color: "#0A2D5F"
            }}
          >
            A True Customer-First Philosophy
          </h2>

          <div 
            style={{ 
              display: "flex", 
              gap: "50px", 
              alignItems: "center", 
              flexWrap: "wrap",
            }}
          >
            {/* IMAGE (LEFT SIDE) */}
            <div 
              style={{ 
                flex: "1", 
                minWidth: "300px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                boxShadow: "0 20px 40px -15px rgba(10, 45, 95, 0.1)"
              }}
            >
              <img 
                src="/images/Data%20never%20leaves.jpg" 
                alt="Customer First Philosophy - Data Never Leaves" 
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  display: "block"
                }} 
              />
            </div>

            {/* HOVER HOOK ARRANGEMENT (RIGHT SIDE) */}
            <div className="principle-card">
              <p
                style={{
                  lineHeight: "1.8",
                  fontSize: "17px",
                  marginBottom: "24px",
                  color: "#334155"
                }}
              >
                Your risk threshold defines our system's architecture. We view our
                platform not merely as passive software, but as a dedicated,
                adaptable engine designed to elevate your internal risk management
                team.
              </p>

              <p
                style={{
                  lineHeight: "1.8",
                  fontSize: "17px",
                  margin: 0,
                  color: "#334155"
                }}
              >
                Every tool we deploy and every feature we refine is crafted to protect
                your specific operational foundation, ensuring your peace of mind is
                the ultimate benchmark of our success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}