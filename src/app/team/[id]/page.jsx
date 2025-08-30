
import React from 'react';
import { members } from '../../../../components/TeamMemberCard';
import { notFound } from 'next/navigation';

const Page = ({ params }) => {
  const { id } = params;
  const member = members.find(m => m.id === id);
  if (!member) return notFound();
  return (
    <div className='max-w-5xl mx-auto py-12 px-4'>
        <h1 className="text-3xl font-bold mb-2 text-center text-white">Meet Our Expert Team</h1>
      <p className="text-gray-600 mb-10 text-center text-white/70">Our team consists of highly skilled professionals dedicated to delivering excellence in their respective fields.</p>
    <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
      <div className="flex-shrink-0 flex justify-center items-start md:items-center">
        <img
          src={member.image}
          alt={member.name}
          className="rounded-lg object-cover w-[260px] h-[380px] border border-gray-200 shadow"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-1">{member.name}</h2>
        <div className="text-lg text-gray-600 mb-4 font-medium">{member.title}</div>
        <div className="text-gray-700 mb-4 leading-relaxed">
          {member.bio && member.bio.map((p, i) => (
            <p key={i} className={i > 0 ? "mt-3" : ""}>{p}</p>
          ))}
        </div>
        {member.expertiseTitle && (
          <div className="mb-2 font-semibold text-gray-800">{member.expertiseTitle}</div>
        )}
        {member.expertise && member.expertise.length > 0 && (
          <ul className="mb-4 text-gray-700 space-y-2">
            {member.expertise.map((item, i) => (
              <li key={i}>
                <span className="font-bold">{item.label}</span>
                <span className="ml-1">
                  {item.value}
                  {item.highlight && (
                    <span className="font-semibold">{item.highlight}</span>
                  )}
                  {item.after && item.after}
                </span>
              </li>
            ))}
          </ul>
        )}
        {member.closing && (
          <div className="text-gray-700 text-sm">
            {member.closing}
          </div>
        )}
      </div>
    </div>
    </div>

  );
};

export default Page;