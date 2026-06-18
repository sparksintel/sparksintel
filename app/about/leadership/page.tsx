"use client";

import { useState } from "react";

export default function Leadership() {
  const [hovered, setHovered] = useState<number | null>(null);

  const sections = [
    { id: 1, text: "Sparks Intelligence is built by a team with decades of experience operating at the highest levels of risk management across Indian and global financial systems—where decisions are high-stakes, and errors are unforgiving." },
    { id: 2, text: "At its core is a combination rarely achieved: deep institutional risk expertise paired with the ability to engineer and deploy advanced AI systems in production environments." },
    { id: 3, text: "The firm is led by an IIM Ahmedabad alumnus, bringing disciplined strategic thinking and a cross-market perspective shaped by complex, real-world decision-making; complemented by a Big 4 veteran who has designed and implemented AI/ML-driven risk architectures for global banking institutions—systems that do not just model risk, but withstand it." },
    { id: 4, text: "They are supported by a focused team of data scientists and engineers who specialize in turning fragmented, unstructured inputs into precise, decision-grade intelligence." },
    { id: 5, text: "Together, the team operates where strategy, risk, and computation converge—building systems defined not by theoretical capability, but by their ability to perform under pressure, at scale, and without compromise." }
  ];

  return (
    <main style={{ backgroundColor: "#f8fafc", color: "#334155", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "140px 40px" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ color: "#FF8200", textTransform: "uppercase", letterSpacing: "2px", fontSize: "11px", fontWeight: "700", marginBottom: "16px" }}>
            The Foundation
          </div>
          <h1 style={{ fontSize: "40px", fontWeight: "800", lineHeight: "1.2", letterSpacing: "-1px", color: "#0A2D5F", margin: 0 }}>
            Leadership
          </h1>
        </div>

        {/* Content with Gold Line Interaction */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {sections.map((item) => {
            const isHovered = hovered === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: "24px 24px 24px 28px",
                  position: "relative",
                  transition: "background-color 0.3s ease",
                  backgroundColor: isHovered ? "#ffffff" : "transparent",
                  borderRadius: "8px"
                }}
              >
                {/* Gold Line */}
                <div style={{ 
                  position: "absolute", 
                  left: 0, 
                  top: "24px", 
                  bottom: "24px", 
                  width: "4px", 
                  backgroundColor: "#FF8200", 
                  transform: isHovered ? "scaleY(1)" : "scaleY(0)", 
                  transition: "transform 0.25s ease" 
                }} />
                
                <p style={{ lineHeight: "1.8", fontSize: "18px", color: "#475569", margin: 0 }}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </section>
    </main>
  );
}