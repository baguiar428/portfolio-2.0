import React from "react";
import { motion, useScroll } from "framer-motion"

const Details = ({ position, company, companyLink, time, address }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a href={companyLink} target="_blank"
          className="text-primary capitalize">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        {/* To add a work description include below 
            and add "work" as argument to "Details"  */}
        {/* <p className="font-medium w-full">
                {work}
            </p> */}
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative">

    <div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"/>

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Student"
            company="Flatiron School"
            companyLink="https://flatironschool.com/"
            time="Sep 2022 - Jan 2023"
            address="Remote"
          />
          <Details
            position="IT Administrator"
            company="The Orchard"
            companyLink="https://www.theorchard.com/"
            time="Dec 2017 - Aug 2022"
            address="New York, NY"
          />
          <Details
            position="IT Administrator"
            company="JW Player"
            companyLink="https://jwplayer.com/"
            time="Jan 2015 - May 2017"
            address="New York, NY"
          />
          <Details
            position="Technical Support Administrator"
            company="comiXology"
            companyLink="https://www.amazon.com/comixology"
            time="Jun 2013 - Nov 2014"
            address="New York, NY"
          />
          <Details
            position="User Administrator"
            company="Fujitsu Technology Solutions"
            companyLink="https://www.fujitsu.com/global/"
            time="Jul 2011 - May 2013"
            address="Lison, Portugal"
          />
          <Details
            position="Help Desk Supervisor"
            company="Rutgers New Brunswick Computing Services"
            companyLink="https://it.rutgers.edu/new-brunswick/"
            time="Jan 2009 - May 2011"
            address="New Brunswick, NJ"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
