export default function Careers() {
  return (
    <main
      style={{
        backgroundColor: "#f8fafc",
        color: "#334155", 
        minHeight: "100vh",
        padding: "40px 24px", 
        maxWidth: "900px", 
        margin: "0 auto",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* HEADER SECTION */}
      <header style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "0px", letterSpacing: "-1px", color: "#0f2547" }}>
          Careers at Sparks Intelligence
        </h1>
      </header>

      {/* SECTION 1: HERO MANIFESTO */}
      <div 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1.3fr 0.7fr", 
          gap: "40px", 
          alignItems: "start",
          marginBottom: "30px" 
        }}
      >
        <div style={{ paddingLeft: "20px", borderLeft: "2px solid #FF8200" }}>
          <p style={{ fontSize: "20px", fontWeight: "700", color: "#1e3a66", marginBottom: "12px", lineHeight: "1.3" }}>
            Build systems. Generate insight. Learn fast.
          </p>

          <p style={{ lineHeight: "1.6", fontSize: "15px", color: "#334155", marginBottom: "10px" }}>
            We are building Sparks Intelligence—focused on systematic profiling
            across risk and knowledge signals.
          </p>

          <p style={{ lineHeight: "1.6", fontSize: "15px", color: "#334155", margin: 0 }}>
            This is a place for individuals who prefer solving real problems over
            following predefined paths.
          </p>
        </div>

        <div style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
          <img 
            src="/images/career page -hero.jpg" 
            alt="Build systems, generate insight, learn fast" 
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
          />
        </div>
      </div>

      <hr style={{ margin: "30px 0", border: "none", borderTop: "1px solid #e2e8f0" }} />

      {/* SECTION 2: ENVIRONMENT */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px", color: "#0f2547" }}>
          The Environment
        </h2>
        <p style={{ lineHeight: "1.6", fontSize: "15px", marginBottom: "10px", color: "#334155" }}>
          We are an early-stage team working on problems that are inherently
          unstructured and evolving. There are no rigid roles—work is defined by
          what needs to be solved.
        </p>
        <p style={{ lineHeight: "1.6", fontSize: "15px", marginBottom: "10px", color: "#334155" }}>
          You will engage directly with core ideas, contribute to decisions, and
          see your work translate into real outputs. The pace is deliberate, and
          expectations are high.
        </p>
        <p style={{ lineHeight: "1.6", fontSize: "15px", color: "#334155", margin: 0 }}>
          This setup tends to suit individuals who are comfortable with ambiguity,
          think independently, and take ownership without waiting for instruction.
        </p>
      </div>

      <hr style={{ margin: "30px 0", border: "none", borderTop: "1px solid #e2e8f0" }} />

      {/* SECTION 3: WHAT YOU'LL GAIN CONTAINER */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px", color: "#0f2547" }}>
          What You'll Gain
        </h2>
        
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "0.6fr 1.4fr", 
            gap: "40px", 
            alignItems: "start" 
          }}
        >
          <div style={{ borderRadius: "4px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
            <img 
              src="/images/career-gain.jpg" 
              alt="What you will gain at Sparks Intelligence" 
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>

          <div style={{ paddingLeft: "20px", borderLeft: "2px solid #e2e8f0" }}>
            {/* Core points placed on separate lines with clean, tight styling */}
            <ul style={{ lineHeight: "1.6", fontSize: "14px", color: "#475569", margin: "0 0 20px 0", paddingLeft: "16px" }}>
              <li style={{ marginBottom: "6px" }}><strong>Learning velocity</strong> — exposure to systems, data, and decision-making</li>
              <li style={{ marginBottom: "6px" }}><strong>Ownership</strong> — responsibility for work that directly shapes outcomes</li>
              <li style={{ marginBottom: "6px" }}><strong>Access</strong> — close collaboration with the founding team</li>
              <li style={{ marginBottom: "6px" }}><strong>Problem depth</strong> — engagement with complex, real-world challenges</li>
              <li style={{ marginBottom: "0px" }}><strong>Long-term signal</strong> — experience that compounds in capability and judgment</li>
            </ul>

            <h3 style={{ fontSize: "15px", fontWeight: "700", marginBottom: "10px", color: "#0f2547" }}>
              Your work may involve:
            </h3>

            <ul style={{ lineHeight: "1.6", fontSize: "14px", color: "#475569", margin: 0, paddingLeft: "16px" }}>
              <li style={{ marginBottom: "4px" }}>Structuring and interpreting financial and risk-related data</li>
              <li style={{ marginBottom: "4px" }}>Building analytical and decision-support systems</li>
              <li style={{ marginBottom: "4px" }}>Developing AI-driven workflows and internal intelligence tools</li>
              <li style={{ marginBottom: "4px" }}>Designing secure, localized data architectures</li>
              <li style={{ marginBottom: "0px" }}>Solving open-ended problems with limited prior definition</li>
            </ul>
          </div>
        </div>
      </div>

      <hr style={{ margin: "30px 0", border: "none", borderTop: "1px solid #e2e8f0" }} />

      {/* SECTION 4 & 5: TARGET AUDIENCE SIDE-BY-SIDE */}
      <div style={{ marginBottom: "30px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px", color: "#0f2547" }}>
              Who This Is For
            </h2>
            <ul style={{ lineHeight: "1.6", fontSize: "14px", color: "#475569", paddingLeft: "16px", margin: 0 }}>
              <li style={{ marginBottom: "6px" }}>Learn quickly and independently</li>
              <li style={{ marginBottom: "6px" }}>Are comfortable working without complete information</li>
              <li style={{ marginBottom: "6px" }}>Take ownership beyond assigned tasks</li>
              <li style={{ marginBottom: "6px" }}>Think in systems and first principles</li>
              <li style={{ marginBottom: "0px" }}>Value depth, clarity, and quality of thinking</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px", color: "#0f2547" }}>
              Who This May Not Suit
            </h2>
            <ul style={{ lineHeight: "1.6", fontSize: "14px", color: "#475569", paddingLeft: "16px", margin: 0 }}>
              <li style={{ marginBottom: "6px" }}>Clearly defined roles and structured guidance</li>
              <li style={{ marginBottom: "6px" }}>Predictable, low-ambiguity work</li>
              <li style={{ marginBottom: "6px" }}>Formal training programs</li>
              <li style={{ marginBottom: "0px" }}>Short-term optimization over long-term capability building</li>
            </ul>
          </div>
        </div>
      </div>

      <hr style={{ margin: "30px 0", border: "none", borderTop: "1px solid #e2e8f0" }} />

      {/* SECTION 6: HIRING APPROACH */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px", color: "#0f2547" }}>
          Hiring Approach
        </h2>
        <ul style={{ lineHeight: "1.6", fontSize: "14px", color: "#475569", paddingLeft: "16px", marginBottom: "10px" }}>
          <li style={{ marginBottom: "4px" }}>A short introductory note</li>
          <li style={{ marginBottom: "4px" }}>A practical, thinking-oriented assignment</li>
          <li style={{ marginBottom: "0px" }}>A discussion around your approach and reasoning</li>
        </ul>
        <p style={{ lineHeight: "1.6", fontSize: "15px", color: "#334155", margin: 0 }}>
          We place greater weight on how you think and what you've explored than
          on formal credentials.
        </p>
      </div>

      <hr style={{ margin: "30px 0", border: "none", borderTop: "1px solid #e2e8f0" }} />

      {/* SECTION 7: APPLY */}
      <div>
        <h2 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px", color: "#0f2547" }}>
          Apply
        </h2>
        <p style={{ lineHeight: "1.6", fontSize: "15px", color: "#334155", marginBottom: "4px" }}>
          If this resonates, write to us at:
        </p>
        
        <p style={{ fontSize: "22px", fontWeight: "700", color: "#b45309", marginBottom: "16px" }}>
          careers@sparksintel.com
        </p>
        
        <p style={{ lineHeight: "1.6", fontSize: "15px", color: "#334155", marginBottom: "8px" }}>
          Include a brief note on:
        </p>
        
        <ul style={{ lineHeight: "1.6", fontSize: "14px", color: "#475569", paddingLeft: "16px", marginBottom: "30px" }}>
          <li style={{ marginBottom: "4px" }}>Something you've built, analyzed, or explored recently</li>
          <li style={{ marginBottom: "0px" }}>Why this kind of environment appeals to you</li>
        </ul>

        <p style={{ color: "#94a3b8", lineHeight: "1.5", fontSize: "12px", borderTop: "1px solid #e2e8f0", paddingTop: "16px", margin: 0 }}>
          We review every thoughtful application.
          Applications submitted via email will be used solely for evaluation
          purposes. By sending your information, you consent to its review and
          processing in accordance with our Privacy Policy. We do not guarantee
          responses to all applications and will contact shortlisted candidates
          only.
        </p>
      </div>
    </main>
  );
}