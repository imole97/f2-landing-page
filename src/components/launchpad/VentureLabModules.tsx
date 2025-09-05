import Container from "@/components/layout/Container";
import React from "react";
import { ventureLabModules } from "@/lib/constant";

const VentureLabModules = () => {
  return (
    <section className="bg-white py-10 text-[#040404]">
      <Container>
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Venture Lab Program Modules
        </h2>
        <p className="text-center text-base md:text-lg text-gray-600 mt-2">
          Our curriculum is built to give you a complete toolkit for venture
          building.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {ventureLabModules.map((m) => (
            <div key={m.title} className="bg-[#EBFAFA] rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{m.title}</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li className="text-sm md:text-base leading-relaxed">
                  {m.description}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default VentureLabModules;
