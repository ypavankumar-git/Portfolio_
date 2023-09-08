import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const TwoColumnCard = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
    >
      <motion.div
        variants={{
          offscreen: {
            y: 0,
          },
          onscreen: {
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
            Chime Video Calling App
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            FEB, 2021 - APRIL, 2021
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            Software Engineer Trainee
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>

        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Developed a video calling application using amazon chime, serverless and React 
          </li>
          <li>
            Majorly worked in front-end using react. Content-api is used for state management
          </li>
          <li>
            Assisted in the writing infrastructure templates in serverless which is used for creating and managing aws services like API gateway, lambda and dynamoDB which is the DB used
          </li>
        </ul>
      </motion.div>
      <motion.div
        variants={{
          offscreen: {
            y: 0,
          },
          onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
            Greenway Health
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            May, 2021 - FEB, 2022
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            Software Engineer
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Built a medical measures parser which parses medical criteria file and populated the data into an XL sheet in java
          </li>
          <li>
            Worked in writing many automation scripts and POCs in python
          </li>
          <li>
            Written various lambda functions in python for data migration 
          </li>
        </ul>
      </motion.div>
      <motion.div
        variants={{
          offscreen: {
            y: 0,
          },
          onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
            Cherokee Nation
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            May, 2022 - AUGUST, 2023
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            Software Engineer
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
          Implemented video recording for chime meetings using chime sdk in a serverless application.
          </li>
          <li>
          Used services like lambda, SNS, SQS and worked closely with the cloud engineers over the infrastructure part.
          </li>
        </ul>
      </motion.div>
      <motion.div
        variants={{
          offscreen: {
            y: 0,
          },
          onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
            USHG
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            FEB, 2023 - PRESENT
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            Software Engineer
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
          Building various UI components into a learning managament application like udemy in React
          </li>
          <li>
          Redux is used for state management and tailwind for styling the components
          </li>
          <li>
          Serverless architecture is used backend. Infrastructure is maintained by cloudformation templates
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default TwoColumnCard;
