"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Mijozlar: React.FC = () => {
  return (
    <div className="col-span-12 rounded-lg border mt-10 border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <h1 className="text-xl">Mijozlar</h1>
      <div className="relative overflow-x-auto sm:rounded-lg mt-5">
        <table className="w-full overflow-x-auto text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Mijoz
              </th>
              <th scope="col" className="px-6 py-3">
                Ustoz
              </th>
              <th scope="col" className="px-6 py-3">
                Xizmat
              </th>
              <th scope="col" className="px-6 py-3">
                kuni
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-17 p-2">
                <div className="flex items-center">
                  <Image
                    src={"/images/profilePicture.svg"}
                    width={48}
                    height={48}
                    alt="img"
                  />
                </div>
              </td>
              <th
                scope="row"
                className=" font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="font-semibold ml-6 text-lg">
                  Asilbek Abudullayev
                </div>
              </th>
              <td className="px-6 py-4 text-gray-900">
                <div className="font-medium text-md">Asilbek Abudullayev</div>
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                300
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                <button className="py-2 px-10 bg-[#5D5FEF] cursor-pointer rounded-full font-semibold text-[#FCC43E]">
                  Juft
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="w-17 p-2">
                <div className="flex items-center">
                  <Image
                    src={"/images/profilePicture.svg"}
                    width={48}
                    height={48}
                    alt="img"
                  />
                </div>
              </td>
              <th
                scope="row"
                className=" font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="font-semibold ml-6 text-lg">
                  Asilbek Abudullayev
                </div>
              </th>
              <td className="px-6 py-4 text-gray-900">
                <div className="font-medium text-md">Asilbek Abudullayev</div>
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                300
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                <button className="py-2 px-10 bg-[#5D5FEF] cursor-pointer rounded-full font-semibold text-[#FCC43E]">
                  Juft
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="w-17 p-2">
                <div className="flex items-center">
                  <Image
                    src={"/images/profilePicture.svg"}
                    width={48}
                    height={48}
                    alt="img"
                  />
                </div>
              </td>
              <th
                scope="row"
                className=" font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="font-semibold ml-6 text-lg">
                  Asilbek Abudullayev
                </div>
              </th>
              <td className="px-6 py-4 text-gray-900">
                <div className="font-medium text-md">Asilbek Abudullayev</div>
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                300
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                <button className="py-2 px-10 bg-[#5D5FEF] cursor-pointer rounded-full font-semibold text-[#FCC43E]">
                  Juft
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="w-17 p-2">
                <div className="flex items-center">
                  <Image
                    src={"/images/profilePicture.svg"}
                    width={48}
                    height={48}
                    alt="img"
                  />
                </div>
              </td>
              <th
                scope="row"
                className=" font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="font-semibold ml-6 text-lg">
                  Asilbek Abudullayev
                </div>
              </th>
              <td className="px-6 py-4 text-gray-900">
                <div className="font-medium text-md">Asilbek Abudullayev</div>
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                300
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                <button className="py-2 px-10 bg-[#5D5FEF] cursor-pointer rounded-full font-semibold text-[#FCC43E]">
                  Juft
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="w-17 p-2">
                <div className="flex items-center">
                  <Image
                    src={"/images/profilePicture.svg"}
                    width={48}
                    height={48}
                    alt="img"
                  />
                </div>
              </td>
              <th
                scope="row"
                className=" font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="font-semibold ml-6 text-lg">
                  Asilbek Abudullayev
                </div>
              </th>
              <td className="px-6 py-4 text-gray-900">
                <div className="font-medium text-md">Asilbek Abudullayev</div>
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                300
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                <button className="py-2 px-10 bg-[#5D5FEF] cursor-pointer rounded-full font-semibold text-[#FCC43E]">
                  Juft
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="w-17 p-2">
                <div className="flex items-center">
                  <Image
                    src={"/images/profilePicture.svg"}
                    width={48}
                    height={48}
                    alt="img"
                  />
                </div>
              </td>
              <th
                scope="row"
                className=" font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="font-semibold ml-6 text-lg">
                  Asilbek Abudullayev
                </div>
              </th>
              <td className="px-6 py-4 text-gray-900">
                <div className="font-medium text-md">Asilbek Abudullayev</div>
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                300
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                <button className="py-2 px-10 bg-[#5D5FEF] cursor-pointer rounded-full font-semibold text-[#FCC43E]">
                  Juft
                </button>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="w-17 p-2">
                <div className="flex items-center">
                  <Image
                    src={"/images/profilePicture.svg"}
                    width={48}
                    height={48}
                    alt="img"
                  />
                </div>
              </td>
              <th
                scope="row"
                className=" font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="font-semibold ml-6 text-lg">
                  Asilbek Abudullayev
                </div>
              </th>
              <td className="px-6 py-4 text-gray-900">
                <div className="font-medium text-md">Asilbek Abudullayev</div>
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                300
              </td>
              <td className="px-6 py-4 text-[#303972] font-semibold text-xl">
                <button className="py-2 px-10 bg-[#5D5FEF] cursor-pointer rounded-full font-semibold text-[#FCC43E]">
                  Juft
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-10">
          <div> 1-5 dan 18 ta</div>
          <div>
            <div className="flex justify-between items-center">
              <div className="cursor-pointer">
                <Image
                  src={"/images/dropdownleft.svg"}
                  width={48}
                  height={48}
                  alt="img"
                />
              </div>
              <div>
                <button className="mr-3 text-center shadow-pagination rounded-full py-2 px-5 bg-white border border-[#A098AE] hover:bg-[#4D44B5] text-[#A098AE] hover:text-white text-lg font-semibold ">
                  1
                </button>
                <button className="mr-3 text-center shadow-pagination rounded-full py-2 px-5 bg-white border border-[#A098AE] hover:bg-[#4D44B5] text-[#A098AE] hover:text-white text-lg font-semibold ">
                  2
                </button>
                <button className=" text-center shadow-pagination rounded-full py-2 px-5 bg-white border border-[#A098AE] hover:bg-[#4D44B5] text-[#A098AE] hover:text-white text-lg font-semibold ">
                  3
                </button>
              </div>
              <div className="cursor-pointer">
                <Image
                  src={"/images/dropdownright.svg"}
                  width={48}
                  height={48}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mijozlar;
