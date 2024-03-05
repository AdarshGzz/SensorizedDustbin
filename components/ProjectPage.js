import React from 'react'
import Image from 'next/image'
import DemoImg1 from '@/public/screens/1.jpeg'
import DemoImg2 from '@/public/screens/2.jpeg'
import DemoImg3 from '@/public/screens/3.jpeg'
import DemoImg4 from '@/public/screens/4.jpeg'

const ProjectPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold my-8">Project Overview</h1>
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-row gap-20">
          <Image
            src={DemoImg1}
            alt="Image 1"
            height={300}
            width={300}
            className="rounded-lg shadow-lg"
          />
          <Image
            src={DemoImg2}
            alt="Image 2"
            height={300}
            width={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-row gap-20">
          <Image
            src={DemoImg3}
            alt="Image 3"
            height={300}
            width={300}
            className="rounded-lg shadow-lg"
          />
          <Image
            src={DemoImg4}
            alt="Image 4"
            height={300}
            width={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-xl font-bold mb-4">Project Description</h2>
        <p className="text-lg">
          In response to the challenge of overflowing trash bins, we've
          implemented a cutting-edge solution utilizing sensors to monitor
          garbage levels in real-time. These sensors are integrated into the
          bins and transmit data to a centralized system. Through a
          user-friendly website, citizens can easily locate nearby bins and
          check their status, whether empty, partially full, or full. This
          innovative approach not only empowers individuals to make informed
          decisions about where to dispose of their waste but also helps
          optimize waste collection routes for authorities. By providing timely
          information on bin availability, we aim to reduce instances of
          littering and ensure a cleaner environment for everyone. This
          technology-driven initiative underscores our commitment to sustainable
          urban living and efficient waste management practices.
        </p>
      </div>
    </div>
  );
}

export default ProjectPage
