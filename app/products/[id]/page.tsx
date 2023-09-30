"use client";
import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { URLPRODUCTS } from "@/constant/product";
import { toast } from "react-toastify";
import Image from "next/image";
import Loading from "@/components/loading/loading";
import { Wallet2 } from "lucide-react";

const ProductsSingle = () => {
  const [loading, setLoading] = useState(false);
  const [getProducts, setgetProducts] = useState<any>();

  const { id } = useParams();

  useEffect(() => {
    const getSingleProducts = async () => {
      try {
        setLoading(true);
        const data = axios.get(URLPRODUCTS + id).then((res) => {
          setgetProducts(res.data);
        });
      } catch (error) {
        toast.error(`Tarmoqda xatolik yuz berdi`, { autoClose: 1000 });
      } finally {
        setLoading(false);
      }
    };
    getSingleProducts();
  }, [id]);

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="bg-white w-full rounded-2xl">
            <div className="text-white font-bold text-xl rounded-t-2xl bg-[#4D44B5] w-full py-3 px-10">{`Jihoz ma'lumotlari`}</div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <Image
                  src={"/images/jihozyuhurish.png"}
                  style={{ objectFit: "cover" }}
                  width={350}
                  height={340}
                  alt="image"
                />
                <div className="bg-[#F5F5F5] border-2 border-[#C4C4C4] flex-1 py-3 pl-10 pr-5 rounded-xl ml-5">
                  <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-extrabold text-[#303972]">
                      {getProducts?.name}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-extrabold text-[#303972]">
                      {getProducts?.turi}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-extrabold text-[#C41F28]">
                      {getProducts?.brand}
                    </h1>
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
                          {"Soni"}
                          <br />
                          <span className="text-[#303972] font-bold">
                            {getProducts?.soni}
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Wallet2 size={50} />
                      <div>
                        <h4 className="text-md">
                          {"Narxi"}
                          <br />
                          <span className="text-[#FCC43E] font-bold">
                            {getProducts?.price}$
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
              {getProducts?.desc}
            </p>
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default ProductsSingle;
