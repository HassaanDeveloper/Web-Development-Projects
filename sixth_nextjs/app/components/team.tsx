import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const teamMembers = [
  { img: '/images/p1.svg', name: 'James Nduku', des: 'Marketing Coordinator' },
  { img: '/images/p2.svg', name: 'Joseph Muyannmbu', des: 'Nursing Assisstant' },
  { img: '/images/p3.svg', name: 'Joseph Ngumbau', des: 'Medical Assisstant' },
  { img: '/images/p4.svg', name: 'Eric Kipkemboi', des: 'Web Designer' },
  { img: '/images/p5.svg', name: 'Stephen Kerubo', des: 'President of Sales' },
  { img: '/images/p6.svg', name: 'John Lebo', des: 'Dog Trainer' },

  
];

function Team() {
  return (
    <>
      <div className=" w-full mt-16 bg-[#F7F7F7]" id='aboutus'>
        <h2 className="font-bold text-center mt-16 p-4 text-4xl text-black">Our Team</h2>
        <p className="text-base mt-4 text-center text-black">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {teamMembers.map((team, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7]  p-6 text-center rounded-md"
            >
              <Image
              width="80"
              height="80"
                src={team.img}
                alt={team.name}
                className=" mx-auto text-black mb-4"
              />
              <h3 className="text-lg font-semibold">{team.name}</h3>
              <p className="text-sm text-gray-600">{team.des}</p>
              </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Team;