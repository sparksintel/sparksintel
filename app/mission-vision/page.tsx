export default function MissionVision() {
  return (
    <main
      style={{
        /* BRIGHT POSITIVE THEME: Updated from dark to fresh slate-white */
        backgroundColor: "#f8fafc", 
        color: "#334155", /* Soft slate gray for easy, comfortable reading text */
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif", /* Unified System Typography Stack */
      }}
    >
      {/* BRIEFING WRAPPER */}
      <section
        style={{
          maxWidth: "1100px", /* Standardized platform layout width */
          margin: "0 auto",
          padding: "120px 40px", /* Uniform vertical page pacing */
          display: "flex",
          flexDirection: "column",
          gap: "60px", /* Clean, balanced gap between cinematic presentation slides */
        }}
      >
        {/* Uniform Micro-Tag Style - Updated to your exact Accent Gold */}
        <div
          style={{
            color: "#FF8200", 
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "11px",
            fontWeight: "700",
            marginBottom: "-20px", /* Tightens gap to the first slide card */
          }}
        >
          Core Foundation
        </div>
        
        {/* SLIDE 1: MISSION - IMAGE & PATHS REMAIN UNTOUCHED */}
        <div
          style={{
            width: "100%",
            borderRadius: "12px", /* Synced presentation frame curves */
            overflow: "hidden",
            /* Soft, brand-tinted shadow updated to use your Primary Navy rgb(10, 45, 95) */
            boxShadow: "0 20px 40px -15px rgba(10, 45, 95, 0.1)", 
            border: "1px solid #e2e8f0", /* Clean light frame border */
          }}
        >
          <img
            src="/images/mission.png" 
            alt="Sparks Intelligence Mission Statement: Equipping enterprises with localized, high-precision intelligence through secure architectural profiling to ensure zero blind spots."
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        {/* SLIDE 2: VISION - IMAGE & PATHS REMAIN UNTOUCHED */}
        <div
          style={{
            width: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            /* Soft, brand-tinted shadow updated to use your Primary Navy rgb(10, 45, 95) */
            boxShadow: "0 20px 40px -15px rgba(10, 45, 95, 0.1)",
            border: "1px solid #e2e8f0",
          }}
        >
          <img
            src="/images/vision.png" 
            alt="Sparks Intelligence Vision Statement: To become the global standard for sovereign, high-fidelity knowledge signals, securing the operational foundation for absolute clarity."
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>

      </section>
    </main>
  );
}