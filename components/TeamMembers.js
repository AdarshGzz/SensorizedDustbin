// TeamMembers.js
import React from "react";
// import User from '@/public/user.png'

function TeamMembers() {
  const teamMembers = [
    {
      id: 1,
      name: "Kushagra Gupta",
      registrationNo: "21BCE11470",
      contribution: "Lead Developer",
      imageUrl: "User",
    },
    {
      id: 2,
      name: "Nida Fatima",
      registrationNo: "21BCY10066",
      contribution: "UI Designer",
      imageUrl: "jane.jpg",
    },
    {
      id: 3,
      name: "Saksham Chouhan",
      registrationNo: "21BCE10795",
      contribution: "Backend Developer",
      imageUrl: "michael.jpg",
    },
    {
      id: 4,
      name: "Manas Jha",
      registrationNo: "21BCE10375",
      contribution: "Project Manager",
      imageUrl: "emily.jpg",
    },
    {
      id: 5,
      name: "Akansha Yadav",
      registrationNo: "21BCE11599",
      contribution: "Lead Developer",
      imageUrl: "john.jpg",
    },
    {
      id: 6,
      name: "Mitesh Mandal",
      registrationNo: "21BCE10128",
      contribution: "UI Designer",
      imageUrl: "jane.jpg",
    },
    {
      id: 7,
      name: "Aradhya Chaturvedi",
      registrationNo: "21BCE10516",
      contribution: "Backend Developer",
      imageUrl: "michael.jpg",
    },
    {
      id: 8,
      name: "Mayank Madhukar",
      registrationNo: "21BAS10017",
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
