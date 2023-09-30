"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { Metadata } from "next";
import { Pencil, Search, Trash2 } from "lucide-react";
import ReactModal from "react-modal";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import axios from "axios";
import { URLPRODUCTS } from "@/constant/product";
import { ToastContainer, toast } from "react-toastify";
import Loading from "@/components/loading/loading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Form Layout Page | Next.js E-commerce Dashboard Template",
  description: "This is Form Layout page for TailAdmin Next.js",
  // other metadata
};

const Products = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalUpdate, setUpdateModal] = useState(false);

  const [getProducts, setGetProducts] = useState<any>([]);
  console.log(getProducts);

  const [loading, setLoading] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [turi, setTuri] = useState("Trinajor");
  const [search, setSearch] = useState("");
  const [productsId, setProductsId] = useState("");

  //////////// Edit data modal value /////////////////
  const [currentProducts, setCurrentProducts] = useState<any>("");
  const [currentName, setCurrentName] = useState("");
  const [currentNarxi, setCurrenNarxi] = useState("");
  const [currentBrand, setCurrentBrand] = useState("");
  const [currentMalumot, setCurrentMalumot] = useState("");
  const [currentSoni, setCurrentSoni] = useState("");
  const [currentTuri, setCurrentTuri] = useState("");

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }

  //////// Get Products //////////
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await axios.get(URLPRODUCTS).then((res) => {
          setGetProducts(res.data);
        });
      } catch (error) {
        console.log(error);
        toast.error("Tarmoqda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  ///////// Send Products ///////////
  const productSend = async (e: any) => {
    e.preventDefault();

    const { name, price, brand, soni, description } = e.target.elements;

    try {
      setButtonLoader(true);
      const response = await axios.post(URLPRODUCTS, {
        name: name.value,
        price: price.value,
        brand: brand.value,
        soni: soni.value,
        description: description.value,
        turi: turi,
      });

      toast.success(`Mahsulot muvaffaqiyatli qo'shildi`, { autoClose: 1000 });

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Tarmoqda xatolik yuz berdi", { autoClose: 1000 });
      console.log(error);
    } finally {
      setButtonLoader(false);
    }
  };

  /////// Update Products ////////////
  const updataProducts = async (e: any) => {
    e.preventDefault();

    const id = currentProducts?.id;

    try {
      setButtonLoader(true);
      const response = await axios.put(URLPRODUCTS + id, {
        name: currentName,
        price: currentNarxi,
        brand: currentBrand,
        turi: currentTuri,
        desc: currentMalumot,
        soni: currentSoni,
      });

      toast.success(`Jihoz muvaffaqiyatli yangilandi`, { autoClose: 2000 });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Tarmoqda xatolik yuz berdi", { autoClose: 1000 });
      console.log(error);
    } finally {
      setButtonLoader(false);
    }
  };

  /////// Delete Products ///////
  const deleteProducts = async (id: Number) => {
    try {
      setButtonLoader(true);
      const res = await axios.delete(URLPRODUCTS + id).then((res) => {});
      toast.success(`Jihoz muvaffaqiyatli o'chirildi`, { autoClose: 2000 });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Tarmoqda xatolik yuz berdi ", { autoClose: 2000 });
    } finally {
      setButtonLoader(false);
    }
  };

  /////// Jihozlar update value ////
  useEffect(() => {
    if (currentProducts) {
      setCurrentName(currentProducts.name);
      setCurrenNarxi(currentProducts.price);
      setCurrentBrand(currentProducts.brand);
      setCurrentMalumot(currentProducts.desc);
      setCurrentSoni(currentProducts.soni);
      setCurrentTuri(currentProducts.turi);
    }
  }, [currentProducts]);

  return (
    <>
      {modalUpdate ? (
        <ReactModal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={() => {
            closeModal();
            setUpdateModal(false); // Modal yopilganda modalUpdate ni false qiling
          }}
          style={{
            content: {
              width: "auto", // Modalning 90% ekran enini egallash
              maxWidth: "600px", // Eng katta o'lcham
              margin: "auto", // Markazga centrlash
              paddingTop: "15px",
              borderRadius: "10px",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              background: "#4D44B5", // Markazga centrlash
              border: "none",
              height: "auto",
            },
          }}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
        >
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <form onSubmit={updataProducts}>
            <h1 className="text-3xl text-center my-3 text-black font-semibold ">{`Yangilash`}</h1>
            <div className="mt-5">
              <input
                value={currentName}
                onChange={(e) => setCurrentName(e.target.value)}
                type="text"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Nomi"
                required
              />
            </div>
            <div className="mt-5">
              <input
                value={currentNarxi}
                onChange={(e) => setCurrenNarxi(e.target.value)}
                type="number"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Narxi *"
                required
              />
            </div>
            <div className="mt-5">
              <input
                value={currentBrand}
                onChange={(e) => setCurrentBrand(e.target.value)}
                type="text"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Brand"
                required
              />
            </div>
            <div className="mt-5">
              <select
                value={currentTuri}
                onChange={(e) => setCurrentTuri(e.target.value)}
                className="w-full rounded-full  bg-white px-5 py-2 font-bold outline-none transition text-black-2"
              >
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="Juft"
                >
                  Juft
                </option>
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="Top"
                >
                  Top
                </option>
              </select>
            </div>
            <div className="mt-5">
              <textarea
                value={currentMalumot}
                onChange={(e) => setCurrentMalumot(e.target.value)}
                rows={4}
                cols={0}
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-white rounded-lg    "
                placeholder="Ma'lumot"
                required
              />
            </div>
            <div className="mt-5">
              <input
                value={currentSoni}
                onChange={(e) => setCurrentSoni(e.target.value)}
                type="number"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Soni"
                required
              />
            </div>
            {/* <div className="flex w-full mt-5 items-center justify-center bg-grey-lighter">
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer hover:bg-blue-600 border-none hover:text-black">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 text-base leading-normal">
                  Mahsulot rasmi
                </span>
                <input type="file" className="hidden" />
              </label>
            </div> */}
            <div className="mt-5 text-right">
              {buttonLoader ? (
                <button
                  type="submit"
                  className="py-3 px-12 bg-blue-600 rounded-full text-black font-semibold"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline mr-3 w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    ></path>
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  {`Yangilanmoqda...`}
                </button>
              ) : (
                <button
                  type="submit"
                  className="py-3 px-12 bg-blue-600 rounded-full text-black font-semibold"
                >{`Mahsulot Yangilash`}</button>
              )}
            </div>
          </form>
        </ReactModal>
      ) : (
        <ReactModal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={{
            content: {
              width: "auto", // Modalning 90% ekran enini egallash
              maxWidth: "600px", // Eng katta o'lcham
              margin: "auto", // Markazga centrlash
              paddingTop: "15px",
              borderRadius: "10px",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              background: "#4D44B5", // Markazga centrlash
              border: "none",
              height: "auto",
            },
          }}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
        >
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <form onSubmit={productSend}>
            <h1 className="text-3xl text-center my-3 text-black font-semibold ">{`Mahsulot qo'shish`}</h1>
            <div className="mt-5">
              <input
                type="text"
                name="name"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Nomi"
                required
              />
            </div>
            <div className="mt-5">
              <input
                type="number"
                name="price"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Narxi *"
                required
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                name="brand"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Brand"
                required
              />
            </div>
            <div className="mt-5">
              <select
                value={turi}
                onChange={(e) => setTuri(e.target.value)}
                className="w-full rounded-full  bg-white px-5 py-2 font-bold outline-none transition text-black-2"
              >
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="Trinajor"
                >
                  Trinajor
                </option>
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="Yuguradigan"
                >
                  Yuguradigan
                </option>
              </select>
            </div>
            <div className="mt-5">
              <textarea
                rows={4}
                cols={0}
                name="description"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-white rounded-lg    "
                placeholder="Ma'lumot"
                required
              />
            </div>
            <div className="mt-5">
              <input
                type="number"
                name="soni"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Soni"
                required
              />
            </div>
            {/* <div className="flex w-full mt-5 items-center justify-center bg-grey-lighter">
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer hover:bg-blue-600 border-none hover:text-black">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 text-base leading-normal">
                  Mahsulot rasmi
                </span>
                <input type="file" className="hidden" />
              </label>
            </div> */}
            <div className="mt-5 text-right">
              {buttonLoader ? (
                <button
                  type="submit"
                  className="py-3 px-12 bg-blue-600 rounded-full text-black font-semibold"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline mr-3 w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    ></path>
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  {`Yangilanmoqda...`}
                </button>
              ) : (
                <button
                  type="submit"
                  className="py-3 px-12 bg-blue-600 rounded-full text-black font-semibold"
                >{`Mahsulot Qo'shish`}</button>
              )}
            </div>
          </form>
        </ReactModal>
      )}
      <Breadcrumb pageName="Maxsulotlar" />
      <section>
        <div className="flex justify-between items-center mb-10 text-white font-bold text-xl">
          <div>
            <form>
              <input
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="absolute outline-none text-black text-xs py-2 pl-8 pr-5 rounded-full"
              />
              <Search
                color="black"
                size={16}
                className="relative top-2 left-2"
              />
            </form>
          </div>
          <div className="mt-3">
            <button
              onClick={() => openModal()}
              className="py-3 px-12 bg-[#4D44B5] rounded-full"
            >
              +
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 bg-white p-7 rounded-lg justify-center sm:justify-start  md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-9">
          {loading ? (
            <Loading />
          ) : (
            getProducts
              .filter((products: any) => {
                return search.toLowerCase() === ""
                  ? products
                  : products.name.toLowerCase().includes(search);
              })
              .map((product: any, i: number) => (
                <div
                  key={i}
                  className="hover:shadow-xl w-full lg:mx-0 mx-5 bg-[#C1BBEB] relative pb-7 pt-3 px-3 rounded-2xl hover:scale-105 transition-transform ease-out duration-200 h-full "
                >
                  <div className="absolute right-5 bottom-2 flex items-center z-9999">
                    <Pencil
                      onClick={() => {
                        openModal();
                        setUpdateModal(true);
                        setCurrentProducts(product);
                      }}
                      size={18}
                      className="mr-3 cursor-pointer"
                    />

                    {buttonLoader && product.id === productsId ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 mr-2 text-black animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <Trash2
                        onClick={() => {
                          deleteProducts(product.id);
                          setProductsId(product.id);
                        }}
                        size={18}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                  <Link href={`/products/${product.id}`}>
                    <div>
                      <Image
                        src={"/images/products.png"}
                        width={500}
                        height={160}
                        alt="img"
                      />
                      <div className="flex justify-between items-center mt-2">
                        <h4 className="truncate text-[#303972] font-semibold text-xl">
                          {product.name}
                        </h4>
                        <p className="truncate text-[#C11030] font-semibold text-xl">
                          {product.turi}
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <h4 className="truncate text-[#5C63A3] font-semibold text-xl">
                          {product.brand}
                        </h4>
                        <p className="text-[#1128FA] font-semibold text-xl">
                          {product.price} $
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
