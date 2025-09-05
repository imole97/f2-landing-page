import Container from "@/components/layout/Container";
import React from "react";
import { programSchedule } from "@/lib/constant";
import { Butterfly } from "@/components/icons";

const DarkPill: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children,
}) => {
  const grid = {
    backgroundImage:
      "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
    backgroundColor: "#0D102F",
  } as React.CSSProperties;
  return (
    <div
      className={`text-white rounded-2xl px-6 py-6 md:px-8 md:py-8 ${className}`}
      style={grid}
    >
      {children}
    </div>
  );
};

const ProgramSchedule = () => {
  return (
    <section className="bg-white py-20 text-[#040404]">
      <Container>
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-8">
          {programSchedule.heading}
        </h2>

        {/* Top pill */}
        <DarkPill>
          <p className="text-sm md:text-base text-white/80">
            {programSchedule.start.label}
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            {programSchedule.start.date}
          </p>
        </DarkPill>

        {/* Timeline */}
        <div className="relative pl-12 md:pl-24 py-10">
          {/* vertical dashed line */}
          <div className="absolute left-6 md:left-12 top-0 bottom-0 border-l border-dashed border-[#0D102F]" />

          <div className="space-y-10">
            {programSchedule.steps.map((step) => (
              <div key={step.label} className="relative flex items-start gap-6">
                {/* icon */}
                <div className="absolute left-[-24px] md:left-[-48px] -translate-x-1/2 top-1">
                  <Butterfly />
                </div>

                <div>
                  <p className="text-sm md:text-base text-[#6B7280]">
                    {step.label}
                  </p>
                  <p className="text-2xl md:text-4xl font-semibold">
                    {step.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom pill */}
        <DarkPill>
          <p className="text-sm md:text-base text-white/80">
            {programSchedule.end.label}
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            {programSchedule.end.date}
          </p>
        </DarkPill>
      </Container>
    </section>
  );
};

export default ProgramSchedule;
