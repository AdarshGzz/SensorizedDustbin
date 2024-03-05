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
            height={500}
            width={600}
            className="rounded-lg shadow-lg"
          />
          <Image
            src={DemoImg2}
            alt="Image 2"
            height={500}
            width={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-row gap-20">
          <Image
            src={DemoImg3}
            alt="Image 3"
            height={500}
            width={600}
            className="rounded-lg shadow-lg"
          />
          <Image
            src={DemoImg4}
            alt="Image 4"
            height={500}
            width={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-xl font-bold mb-4">Project Description</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          enim nec ligula volutpat fermentum. Nulla facilisi. Nullam vehicula
          accumsan est, nec volutpat quam pretium sit amet. Fusce id bibendum
          enim. Integer eget leo eu felis consequat facilisis ut vitae sem. Sed
          sed scelerisque libero. Vestibulum euismod, ex sit amet vehicula
          mollis, risus metus feugiat magna, nec gravida ligula tortor eu
          tellus. Cras maximus turpis vitae nunc euismod, quis tincidunt felis
          rhoncus. Donec accumsan, odio id condimentum tempor, risus ex feugiat
          lectus, at gravida turpis lorem sit amet ligula.
        </p>
      </div>
    </div>
  );
}

export default ProjectPage
