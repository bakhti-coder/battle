import Image from "next/image";
import React from "react";

import { ArrowDown, Trash } from "lucide-react";

const Order = () => {
  return (
    <section>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs uppercase ">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label form="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                <div className="flex items-center">
                  <span> I . O . F</span>{" "}
                  <ArrowDown size={16} className="ml-5" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <span>Mahsulot</span> <ArrowDown size={16} />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <span>Narxi</span> <ArrowDown size={16} className="ml-5" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <span>Vaqti</span> <ArrowDown size={16} className="ml-5" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <span>dona</span> <ArrowDown size={16} className="ml-5" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label form="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center">
                  <Image
                    className="rounded-full"
                    src={"/images/user/user-06.png"}
                    width={40}
                    height={40}
                    alt="user"
                  />
                  <div className="ml-3">
                    <p className="text-[#101828] text-[15px]">John Doe</p>
                    <span className=" text-xs">+998941234567</span>
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">Trinajor runner </td>
              <td className="px-6 py-4">130$</td>
              <td className="px-6 py-4">2023.04.01</td>
              <td className="px-6 py-4">3</td>
              <td className="px-6 py-4 font-medium text-red-600 dark:text-red-500 cursor-pointer">
                <Trash size={18} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Order;
