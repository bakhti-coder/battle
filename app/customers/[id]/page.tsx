"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { URLCUSTOMER } from "@/constant/mjozl";
import Image from "next/image";
import Loading from "@/components/loading/loading";

const CustomersSingle = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [getSingleCustomers, setSingleCustomers] = useState<any>();
  console.log(getSingleCustomers);

  const birhtday = getSingleCustomers?.birthday;
  const young = 2023 - Number(birhtday);
  console.log(young);

  useEffect(() => {
    const getSingleCustomersSingle = async () => {
      try {
        setLoading(true);
        const data = axios.get(URLCUSTOMER + id).then((res) => {
          setSingleCustomers(res.data);
        });
      } catch (error) {
        toast.error(`Tarmoqda xatolik yuz berdi`, { autoClose: 1000 });
      } finally {
        setLoading(false);
      }
    };
    getSingleCustomersSingle();
  }, [id]);

  return (
    <Fragment>
      <section>
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            <div className="bg-white w-full rounded-2xl">
              <div className="text-white font-bold text-xl rounded-t-2xl bg-[#4D44B5] w-full py-3 px-10">{`Mijoz ma’lumotlari`}</div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <Image
                    src={"/images/user/user-06.png"}
                    style={{ objectFit: "cover" }}
                    width={350}
                    height={340}
                    alt="image"
                  />
                  <div className="bg-[#F5F5F5] border-2 border-[#C4C4C4] flex-1 py-3 pl-10 pr-5 rounded-xl ml-5">
                    <div className="flex justify-end mb-2">
                      <span className="text-right text-xs text-black">
                        20.02.2023
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-10">
                      <h1 className="text-3xl font-extrabold text-[#303972]">
                        {getSingleCustomers?.name}
                      </h1>
                      <span className="text-[#4D44B5] font-bold">
                        ID:{getSingleCustomers?.id}
                      </span>
                    </div>
                    <p className="text-[#303972] text-3xl font-extrabold mb-10">
                      {young} yosh
                    </p>
                    <div className="flex justify-between items-center mb-10">
                      <div></div>
                      <span className="text-[#4D44B5] font-extrabold mr-10 text-xl">
                        {getSingleCustomers?.email}
                      </span>
                    </div>
                    <div className="flex justify-between items-center ">
                      <div className="flex items-center">
                        <Image
                          className="cursor-pointer mr-1"
                          src={"/images/user/usercard.svg"}
                          width={50}
                          height={45}
                          alt="img"
                        />
                        <div>
                          <h4 className="text-md">
                            {"Ustoz"}
                            <br />
                            <span className="text-[#303972] font-bold">
                              {getSingleCustomers?.teacher}
                            </span>
                          </h4>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          className="cursor-pointer mr-1"
                          src={"/images/calendarcard.svg"}
                          width={50}
                          height={45}
                          alt="img"
                        />
                        <div>
                          <h4 className="text-md">
                            Kuni <br />
                            <span className="text-[#303972] font-bold">
                              Se Pay Sha
                            </span>
                          </h4>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          className="cursor-pointer mr-1"
                          src={"/images/tel.svg"}
                          width={50}
                          height={45}
                          alt="img"
                        />
                        <div>
                          <h4 className="text-md">
                            {"Tel:"}
                            <br />
                            <span className="text-[#303972] font-bold">
                              {getSingleCustomers?.phone_number}
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F5F5F5] p-4  rounded-xl mt-10 max-h-150 border border-[#C4C4C4]">
              <p className="text-xl font-semibold text-[#A098AE]">
                {getSingleCustomers?.malumot}
              </p>
            </div>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

export default CustomersSingle;
