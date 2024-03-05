// Home.js
import React from "react";

function HomeSection() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('../public/demoBG.jpg')]"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-white h-full gap-10">
        <h2 className="text-4xl font-bold">Sensorized Dustbin</h2>
        <p className="text-lg px-[20rem]">
          When faced with overfilled dustbins, citizens often struggle to find
          empty bins and may resort to littering on the roadside. This not only
          diminishes the area's aesthetics but also poses environmental and
          health hazards.
        </p>
      </div>
    </section>
  );
}

export default HomeSection;
