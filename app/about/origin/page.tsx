"use client";

import { useState } from "react";

export default function Origin() {
  const [hovered, setHovered] = useState<number | null>(null);

  const paragraphs = [
    "Sparks Intelligence was born from a simple but stubborn belief: AI is not automation.",
    "In most enterprise systems, AI has been positioned as a faster way to do the same things—automating tasks, replacing steps, or marginally improving existing workflows. We saw a deeper opportunity. Real value is not created by automation alone, but by intelligence that actively improves how work gets done.",
    "We started building around a different idea—agentic AI systems that operate locally, within controlled environments, to extract meaningful signals from complex, messy data. Instead of moving data endlessly across tools and platforms, we focus on bringing computation closer to where the data lives, reducing friction and preserving integrity.",
    "The outcome is simple but impactful: significantly improved operational efficiency through lower turnaround times, reduced costs, and fewer human and system-level errors. Sparks Intelligence exists to make that shift real—moving from surface-level automation to structured, intelligent execution."
  ];

  return (
    <main style={{ backgroundColor: "#f8fafc", color: "#334155", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "140px 40px" }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: "60px" }}>
          <div style={{ color: "#FF8200", textTransform: "uppercase", letterSpacing: "2px", fontSize: "11px", fontWeight: "700", marginBottom: "16px" }}>
            Our Founding
          </div>
          <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#0A2D5F", letterSpacing: "-0.5px" }}>
            AI, Reimagined for Real Work
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "80px", alignItems: "start" }}>
          
          {/* Left Sidebar: Full Image */}
          <div style={{ position: "sticky", top: "140px" }}>
            <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 20px 40px -15px rgba(10, 45, 95, 0.08)" }}>
              <img 
                src="/images/origin.png" 
                alt="Sparks Intelligence origin" 
                style={{ width: "100%", height: "auto", display: "block" }} 
              />
            </div>
          </div>

          {/* Right Column: Text with Gold Line Interaction */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {paragraphs.map((text, index) => {
              const id = index + 1;
              const isHovered = hovered === id;
              return (
                <div
                  key={id}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    padding: "24px",
                    position: "relative",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                >
                  {/* Gold Line */}
                  <div style={{ 
                    position: "absolute", 
                    left: 0, 
                    top: 0, 
                    bottom: 0, 
                    width: "4px", 
                    backgroundColor: "#FF8200", 
                    transform: isHovered ? "scaleY(1)" : "scaleY(0)", 
                    transition: "transform 0.25s ease" 
                  }} />
                  
                  <p style={{ lineHeight: "1.8", fontSize: "18px", color: "#475569", margin: 0 }}>
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}