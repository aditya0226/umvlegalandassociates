import React from "react";
import {members} from '../../../components/TeamMemberCard';
import Link from "next/link";

const TeamPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center text-white">Meet Our Expert Team</h1>
      <p className="text-gray-600 mb-10 text-center text-white/70">Our team consists of highly skilled professionals dedicated to delivering excellence in their respective fields.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {members.map(member => (
          <Link key={member.id} href={`/team/${member.id}`} className="group block bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex gap-6 items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-44 object-cover rounded-lg border border-gray-200 shadow-sm group-hover:scale-105 transition"
            />
            <div>
              <h2 className="text-xl font-semibold mb-1">{member.name}</h2>
              <div className="text-gray-600 mb-2">{member.title}</div>
              <div className="text-gray-500 text-sm line-clamp-3">
                {member.bio[0]}
              </div>
              <span className="inline-block mt-3 text-blue-700 font-medium group-hover:underline">View Profile →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
