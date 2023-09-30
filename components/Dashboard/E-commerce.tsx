"use client";
import React from "react";
import ChartOne from "../teachers/Ustozlar";
import ChartTwo from "../Mijozlar";
import CardDataStats from "../CardDataStats";
// import Map from "../Maps/TestMap";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
import Image from "next/image";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Maxsulotlar" total="341">
          <Image
            src={"/images/fitness1.svg"}
            width={77}
            height={81}
            alt="fitnes"
          />
        </CardDataStats>
        <CardDataStats title="Mijozlar" total="232">
          <Image
            src={"/images/slazzer.svg"}
            width={171}
            height={206}
            alt="mijoz"
          />
        </CardDataStats>
        <CardDataStats title="Ustozlar" total="18">
          <Image
            src={"/images/trainer-icon.svg"}
            width={88}
            height={97}
            alt="ustoz"
          />
        </CardDataStats>
        <CardDataStats title="Jihozlar" total="36">
          <Image
            src={"/images/yugurish.svg"}
            width={107}
            height={102}
            alt="jihoz"
          />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-1">
        <ChartOne />
        <ChartTwo />
      </div>
    </>
  );
};

export default ECommerce;
