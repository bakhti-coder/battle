"use client";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "@/constant";
import Loading from "@/components/loading/loading";

const SingleTeacher = () => {
  const [loading, setLoading] = useState(false);
  const [getTeacher, setGetTeacher] = useState<any>();
  console.log(getTeacher);

  const { id } = useParams();

  useEffect(() => {
    const getTeacherSingle = async () => {
      try {
        setLoading(true);
        const data = axios.get(URL + "get_ustoz_id/" + id).then((res) => {
          setGetTeacher(res.data);
        });
      } catch (error) {
        toast.error(`Tarmoqda xatolik yuz berdi`, { autoClose: 1000 });
      } finally {
        setLoading(false);
      }
    };
    getTeacherSingle();
  }, [id]);

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="bg-white w-full rounded-2xl">
            <div className="text-white font-bold text-xl rounded-t-2xl bg-[#4D44B5] w-full py-3 px-10">{`Ustozi ma'lumotlari`}</div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                {getTeacher?.ustoz_img ? (
                  <Image
                    src={`http://10.10.3.60:7070${getTeacher?.ustoz_img}`}
                    style={{ objectFit: "cover" }}
                    width={350}
                    height={340}
                    alt="image"
                  />
                ) : (
                  ""
                )}

                <div className="bg-[#F5F5F5] border-2 border-[#C4C4C4] flex-1 py-3 pl-10 pr-5 rounded-xl ml-5">
                  <div className="flex justify-end mb-2">
                    <span className="text-right text-xs text-black">
                      {getTeacher?.created_at.split("T")[0]}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-extrabold text-[#303972]">
                      {getTeacher?.ustoz_firstname}
                    </h1>
                    <span className="text-[#4D44B5] font-bold">
                      ID:{getTeacher?.ustoz_id}
                    </span>
                  </div>
                  <p className="text-[#303972] text-3xl font-extrabold mb-10">
                    {getTeacher?.ustoz_age} yosh
                  </p>
                  <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-extrabold text-[#303972]">
                      {getTeacher?.ustoz_jinsi}
                    </h1>
                    <span className="text-[#4D44B5] font-extrabold mr-10 text-xl">
                      {getTeacher?.ustoz_gmail}
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
                          {"Toifa"}
                          <br />
                          <span className="text-[#303972] font-bold">
                            {getTeacher?.ustoz_toifa}
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
                            {getTeacher?.ustoz_day}
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
                            {getTeacher?.ustoz_raqami}
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
              {getTeacher?.ustoz_description}
            </p>
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default SingleTeacher;
