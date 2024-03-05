// Home.js
import React from "react";

function HomeSection() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 bg-[url('../public/bg_img.jpeg')]"
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-white h-full gap-10">
        <h2 className="text-4xl font-bold">Solution to Agriculture</h2>
        <p className="text-lg px-20">
          In India after a good harvest of crops, many times farmers end up with
          rice straw, and burning of this rice straw leads to many issues, it
          pollutes the environment and causes many health issues to farmers and
          people living around it. Nowadays farmers have found ways to manually
          turn all the rice straw into pulp so that the materials can be
          recycled. However this process is very time-consuming to do manually,
          so we aim to create a digital machine model that automatically turns
          the rice straw into pulp, which reduces the workload of farmers and
          helps reduce pollution and health risks.
        </p>
      </div>
    </section>
  );
}

export default HomeSection;
