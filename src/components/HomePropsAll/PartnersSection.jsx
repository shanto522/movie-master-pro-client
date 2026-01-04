import React from "react";

const partners = [
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Disney+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
  },
  {
    name: "HBO Max",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
  },
  {
    name: "Amazon Prime",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
  },
];

const PartnersSection = () => {
  return (
<section className="mb-20">
  <div className="max-w-[1315px] mx-auto py-10 px-6 md:px-12 bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-10 text-center transition-colors duration-500">
    <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">
      Our Trusted Partners
    </h2>
    <div className="flex flex-wrap justify-center items-center gap-12">
      {partners.map((p, idx) => (
        <div
          key={idx}
          className="w-32 h-20 flex items-center justify-center"
        >
          <img
            src={p.logo}
            alt={p.name}
            className="object-contain h-full w-full dark:invert dark:brightness-150"
          />
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default PartnersSection;
