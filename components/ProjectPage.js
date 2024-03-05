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
          1. Collection and Sorting: Rice straw is collected from fields after
          the rice harvest. It needs to be sorted to remove impurities such as
          stones, dirt, and other debris. The straws must be dried and stored in
          a dry place to prevent mold and other forms of deterioration.
          <br/>
           2.
          Chipping and Size Reduction: The collected rice straw is then chopped
          into smaller pieces using machines like chippers or grinders. This
          size reduction increases the surface area for subsequent processing
          steps. 
          <br/>
          3. Pretreatment: The chopped rice straw undergoes a
          pretreatment process and are soaked in water for several hours to
          soften them. The softened straws are then boiled in an alkali solution
          to break down the lignin and other impurities.
        </p>
      </div>
    </div>
  );
}

export default ProjectPage
