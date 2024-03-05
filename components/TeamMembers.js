// TeamMembers.js
import React from "react";
// import User from '@/public/user.png'

function TeamMembers() {
  const teamMembers = [
    {
      id: 1,
      name: "Aryan Khare",
      registrationNo: "21BCE11494",
      contribution: "Lead Developer",
      imageUrl: "User",
    },
    {
      id: 2,
      name: "Abel Sam Thomas",
      registrationNo: "21BCG10054",
      contribution: "UI Designer",
      imageUrl: "jane.jpg",
    },
    {
      id: 3,
      name: "Nischal Katara",
      registrationNo: "21BCE10575",
      contribution: "Backend Developer",
      imageUrl: "michael.jpg",
    },
    {
      id: 4,
      name: "Parth Singh Bisen",
      registrationNo: "21BCE10513",
      contribution: "Project Manager",
      imageUrl: "emily.jpg",
    },
    {
      id: 5,
      name: "Muhammed Adil M.",
      registrationNo: "21BAS10124",
      contribution: "Lead Developer",
      imageUrl: "john.jpg",
    },
    {
      id: 6,
      name: "Hari Shankar P C",
      registrationNo: "21BCY10195",
      contribution: "UI Designer",
      imageUrl: "jane.jpg",
    },
    {
      id: 7,
      name: "Jevon Koshy Kurian",
      registrationNo: "21BCE10722",
      contribution: "Backend Developer",
      imageUrl: "michael.jpg",
    },
    {
      id: 8,
      name: "Prem Kumar",
      registrationNo: "21BCE11320",
      contribution: "Project Manager",
      imageUrl: "emily.jpg",
    },

  ];

  return (
    <section className="px-20 py-10">
      <h2 className="text-xl font-bold pb-10">Team Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="card bg-white p-4 rounded-lg shadow-md"
          >
            {/* <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-auto mb-4 rounded-md"
            /> */}
            <p className="text-lg font-semibold mb-2">{member.name}</p>
            <p className="text-gray-500 mb-2">
              Registration No: {member.registrationNo}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamMembers;
