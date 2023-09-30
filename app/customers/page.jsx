"use client";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import ReactModal from "react-modal";
import axios from "axios";
import Loading from "@/components/loading/loading";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { ArrowDown, Pencil, Search, Trash } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { URL } from "@/constant";
import { URLCUSTOMER } from "@/constant/mjozl";
import Link from "next/link";

export const metadata = {
  title: "Mijozlar",
  description: "Mijozlar || FullStack Battle",
};

const Customers = () => {
  ///////////// React-Modal ///////////
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalUpdate, setUpdateModal] = useState(false);

  const [getCustomers, setGetCustomers] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [ustoz, setUstoz] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [search, setSearch] = useState("");
  const [custoemrId, setCustomerId] = useState("");

  //////////// Edit data modal value /////////////////
  const [currentCustomer, setCurrentCustomer] = useState("");
  const [currentName, setCurrentName] = useState("");
  const [currentSharifi, setCurrenSharifi] = useState("");
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentBirhtday, setCurrentBirhtday] = useState("");
  const [currentXizmat, setCurrentXizmat] = useState("");
  const [currentUstoz, setCurrentUstoz] = useState("");

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }

  //////// Get Customers //////////
  useEffect(() => {
    const getCustomers = async () => {
      try {
        setLoading(true);
        const data = await axios.get(URLCUSTOMER).then((res) => {
          setGetCustomers(res.data);
        });
      } catch (error) {
        console.log(error);
        toast.error("Tarmoqda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };
    getCustomers();
  }, []);

  //////// Get Teachers //////////
  useEffect(() => {
    const getTeachers = async () => {
      try {
        setLoading(true);
        const data = await axios.get(URL + "get_ustoz").then((res) => {
          setTeacher(res.data);
        });
      } catch (error) {
        toast.error("Tarmoqda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };
    getTeachers();
  }, []);

  ///////// Send Customers ///////////
  const customersSend = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const {
      name,
      sharifi,
      date_birth,
      service,
      phone_number,
      email,
      image,
      young,
    } = e.target.elements;

    formData.append("mijoz_firstname", name.value);
    formData.append("mijoz_lastname", sharifi.value);
    formData.append("mijoz_raqami", phone_number.value);
    formData.append("mijoz_xizmati", service.value);
    formData.append("mijoz_gmail", email.value);
    formData.append("mijoz_age", teacher_young.value);
    formData.append("mijoz_jinsi", jinsi);
    formData.append("mijoz_day", ishlashKuni);
    formData.append("mijoz_img", image.files[0]);

    try {
      setButtonLoader(true);
      const response = await axios.post(URLCUSTOMER, {
        name: name.value,
        sharifi: sharifi.value,
        sharifi: sharifi.value,
        birthday: date_birth.value,
        xizmat: service.value,
        phone_number: phone_number.value,
        email: email.value,
        teacher: ustoz,
      });

      toast.success(`Ustoz muvaffaqiyatli qo'shildi`, { autoClose: 1000 });

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

  /////// Update Customers ////////////
  const updateCustoerms = async (e) => {
    e.preventDefault();

    const id = currentCustomer?.id;

    try {
      setButtonLoader(true);
      const response = await axios.put(URLCUSTOMER + id, {
        name: currentName,
        sharifi: currentSharifi,
        phone_number: currentPhoneNumber,
        xizmat: currentXizmat,
        teacher: currentUstoz,
        email: currentEmail,
        birthday: currentBirhtday,
      });

      toast.success(`Mijoz muvaffaqiyatli yangilandi`, { autoClose: 2000 });
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

  /////// Delete Teachers ///////
  const deleteCustomer = async (id) => {
    try {
      setButtonLoader(true);
      const res = await axios.delete(URLCUSTOMER + id).then((res) => {});
      toast.success(`Mijoz muvaffaqiyatli o'chirildi`, { autoClose: 2000 });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Tarmoqda xatolik yuz berdi ", { autoClose: 2000 });
    } finally {
      setButtonLoader(false);
    }
  };

  /////// Teacher update value ////
  useEffect(() => {
    if (currentCustomer) {
      setCurrentName(currentCustomer.name);
      setCurrenSharifi(currentCustomer.sharifi);
      setCurrentPhoneNumber(currentCustomer.phone_number);
      setCurrentEmail(currentCustomer.email);
      setCurrentBirhtday(currentCustomer.birthday);
      setCurrentXizmat(currentCustomer.xizmat);
      setCurrentUstoz(currentCustomer.currentUstoz);
    }
  }, [currentCustomer]);

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
          <form onSubmit={updateCustoerms}>
            <h1 className="text-3xl text-center my-3 text-black font-semibold ">{`Mijoz Yangilash`}</h1>
            <div className="mt-5">
              <label className="text-black text-lg font-semibold ml-2">
                Ismi
              </label>
              <input
                value={currentName}
                onChange={(e) => setCurrentName(e.target.value)}
                type="text"
                name="name"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Ismi"
                required
              />
            </div>
            <div className="mt-5">
              <label className="text-black text-lg font-semibold ml-2">
                Sharifi
              </label>
              <input
                value={currentSharifi}
                onChange={(e) => setCurrenSharifi(e.target.value)}
                type="text"
                name="sharifi"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Sharifi"
                required
              />
            </div>
            <div className="mt-5">
              <label className="text-black text-lg font-semibold ml-2">
                Tugulgan sanasi
              </label>
              <input
                value={currentBirhtday}
                onChange={(e) => setCurrentBirhtday(e.target.value)}
                type="number"
                name="date_birth"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Tug'ilgan sana "
                required
              />
            </div>
            <div className="mt-5">
              <label className="text-black text-lg font-semibold ml-2">
                Xizmati
              </label>
              <input
                value={currentXizmat}
                onChange={(e) => setCurrentXizmat(e.target.value)}
                type="text"
                name="service"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Xizmat"
                required
              />
            </div>
            <div className="mt-5">
              <label className="text-black text-lg font-semibold ml-2">
                Telefon raqami
              </label>
              <input
                value={currentPhoneNumber}
                onChange={(e) => setCurrentPhoneNumber(e.target.value)}
                type="tel"
                name="phone_number"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Telefon raqami"
                required
              />
            </div>
            <div className="mt-5">
              <label className="text-black text-lg font-semibold ml-2">
                Ustozi
              </label>
              <select
                value={currentUstoz}
                onChange={(e) => setCurrentUstoz(e.target.value)}
                className="w-full rounded-full  bg-white px-5 py-2 font-bold outline-none transition text-black-2"
              >
                {loading ? (
                  <Loading />
                ) : (
                  teacher.map((teacher, i) => (
                    <option
                      key={i}
                      value={teacher.name}
                      className=" bg-[#4D44B5] rounded-full font-bold"
                    >
                      {teacher.name}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div className="mt-5">
              <label className="text-black text-lg font-semibold ml-2">
                Email
              </label>
              <input
                value={currentEmail}
                onChange={(e) => setCurrentEmail(e.target.value)}
                type="email"
                name="email"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Gmail"
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
                  Mijoz rasmi
                </span>
                <input type="file" className="hidden" required />
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
                  {`Mijoz Yangilanmoqda...`}
                </button>
              ) : (
                <button
                  type="submit"
                  className="py-3 px-12 bg-blue-600 rounded-full text-black font-semibold"
                >{`Mijoz Yangilash`}</button>
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
          <form onSubmit={customersSend}>
            <h1 className="text-3xl text-center my-3 text-black font-semibold ">{`Mijoz qo'shish`}</h1>
            <div className="mt-5">
              <input
                type="text"
                name="name"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Ismi"
                required
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                name="sharifi"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Sharifi"
                required
              />
            </div>
            <div className="mt-5">
              <input
                type="number"
                name="date_birth"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Tug'ilgan sana "
                required
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                name="service"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Xizmat"
                required
              />
            </div>
            <div className="mt-5">
              <input
                type="tel"
                name="phone_number"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Telefon raqami"
                required
              />
            </div>
            <div className="mt-5">
              <label className="text-black text-lg font-semibold ml-2">
                Ustoz
              </label>
              <select
                value={ustoz}
                onChange={(e) => setUstoz(e.target.value)}
                className="w-full rounded-full  bg-white px-5 py-2 font-bold outline-none transition text-black-2"
              >
                <option className=" bg-[#4D44B5] rounded-full font-bold">
                  Ustoz tanlang
                </option>
                {loading ? (
                  <Loading />
                ) : (
                  teacher.map((teacher, i) => (
                    <option
                      key={i}
                      value={teacher.name}
                      className=" bg-[#4D44B5] rounded-full font-bold"
                    >
                      {teacher.name}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div className="mt-5">
              <input
                type="email"
                name="email"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Gmail"
                required
              />
            </div>
            <div className="flex w-full mt-5 items-center justify-center bg-grey-lighter">
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
                  Mijoz rasmi
                </span>
                <input type="file" className="hidden" required />
              </label>
            </div>
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
                  {`Mijoz Yangilanmoqda...`}
                </button>
              ) : (
                <button
                  type="submit"
                  className="py-3 px-12 bg-blue-600 rounded-full text-black font-semibold"
                >{`Mijoz Qo'shish`}</button>
              )}
            </div>
          </form>
        </ReactModal>
      )}
      <Breadcrumb pageName="Mijozlar" />
      <Fragment>
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
                    <span>ID</span> <ArrowDown size={16} className="ml-5" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    <span>USTOZ</span> <ArrowDown size={16} className="ml-5" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    <span>Boshladi</span>{" "}
                    <ArrowDown size={16} className="ml-5" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    <span>Muddati</span>{" "}
                    <ArrowDown size={16} className="ml-5" />
                  </div>
                </th>
              </tr>
            </thead>
            {loading ? (
              <Loading />
            ) : (
              getCustomers
                .filter((customer) => {
                  return search.toLowerCase() === ""
                    ? customer
                    : customer.name.toLowerCase().includes(search);
                })
                .map((custoomer, i) => (
                  <tbody key={i}>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            form="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <Link href={`/customers/${custoomer.id}`}>
                          <div className="flex items-center">
                            <Image
                              className="rounded-full"
                              src={"/images/user/user-06.png"}
                              width={40}
                              height={40}
                              alt="user"
                            />
                            <div className="ml-3">
                              <p className="text-[#101828] text-[15px]">
                                {custoomer.name}
                              </p>
                              <span className=" text-xs">+998941234567</span>
                            </div>
                          </div>
                        </Link>
                      </th>
                      <td className="px-6 py-4">{custoomer.id}</td>
                      <td className="px-6 py-4">{custoomer.teacher}</td>
                      <td className="px-6 py-4">2023.04.01</td>
                      <td className="px-6 py-4">{custoomer.xizmat}</td>
                      <td className="font-medium text-blue-600 dark:text-blue-500 px-6 py-4 cursor-pointer">
                        <Pencil
                          size={18}
                          onClick={() => {
                            openModal();
                            setUpdateModal(true);
                            setCurrentCustomer(custoomer);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 font-medium text-red-600 dark:text-red-500 cursor-pointer">
                        {buttonLoader && custoomer.id === custoemrId ? (
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
                          <Trash
                            onClick={() => {
                              deleteCustomer(custoomer.id);
                              setCustomerId(custoomer.id);
                            }}
                            size={18}
                            className="cursor-pointer"
                          />
                        )}
                      </td>
                    </tr>
                  </tbody>
                ))
            )}
          </table>
        </div>
      </Fragment>
    </>
  );
};

export default Customers;
