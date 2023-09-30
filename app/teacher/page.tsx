"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import ReactModal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import { Pencil, Trash2 } from "lucide-react";
import { Search } from "lucide-react";
import { Metadata } from "next";
import { URL } from "@/constant";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Loading from "@/components/loading/loading";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teacher Page",
  description: "Teacher Page || Battle",
};

const Teacher = () => {
  const router = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalUpdate, setUpdateModal] = useState(false);
  const [jinsi, setjinsi] = useState("Erkak");
  const [toifasi, setToifasi] = useState("I");
  const [ishlashKuni, setIshlashKuni] = useState("Juft");
  const [getTeacher, setGetTeacher] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [search, setSearch] = useState("");
  const [teacherData, setTeacherData] = useState({
    teacher_name: "",
    teacher_surname: "",
    teacher_young: "",
    email: "",
    phone_number: "",
    malumot: "",
    toifa: "",
    ishlash_kuni: "",
    jinsi: "",
  });
  //////////// Edit data modal value /////////////////
  const [currentTeacher, setCurrentTeacher] = useState<any>("");
  const [currentName, setCurrentName] = useState<any>("");
  const [currentSharifi, setCurrenSharifi] = useState<any>("");
  const [currentPhoneNumber, setCurrentPhoneNumber] = useState<any>("");
  const [currentToifa, setCurrentToifa] = useState<any>("");
  const [currentMalumot, setCurrentMalumot] = useState<any>("");
  const [currentEmail, setCurrentEmail] = useState<any>("");
  const [currentBirhtday, setCurrentBirhtday] = useState<any>("");
  const [currentJinsi, setCurrentJinsi] = useState<any>("");
  const [currentIshlashKuni, setCurrentIshlashKuni] = useState<any>("");
  const [deleteTeacherId, setDeleteTeacherID] = useState<any>();

  /////// React modall ///
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }

  /////////// Input value empty /////////
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setTeacherData({
      ...teacherData,
      [name]: value,
    });
  };

  //////// Posts Teacher ///////////////
  const teacherSend = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();

    const {
      teacher_name,
      teacher_surname,
      teacher_young,
      email,
      phone_number,
      malumot,
      image,
    } = e.target.elements;

    formData.append("ustoz_firstname", teacher_name.value);
    formData.append("ustoz_lastname", teacher_surname.value);
    formData.append("ustoz_raqami", phone_number.value);
    formData.append("ustoz_toifa", toifasi);
    formData.append("ustoz_description", malumot.value);
    formData.append("ustoz_gmail", email.value);
    formData.append("ustoz_age", teacher_young.value);
    formData.append("ustoz_jinsi", jinsi);
    formData.append("ustoz_day", ishlashKuni);
    formData.append("ustoz_img", image.files[0]);

    try {
      setButtonLoader(true);
      const response = await axios.post(URL + "post_ustoz/", formData);

      toast.success(`Ustoz muvaffaqiyatli qo'shildi`, { autoClose: 1000 });

      setTeacherData({
        teacher_name: "",
        teacher_surname: "",
        teacher_young: "",
        email: "",
        phone_number: "",
        malumot: "",
        toifa: "",
        ishlash_kuni: "",
        jinsi: "",
      });
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

  /////// Update teachers ////////////
  const updateTeacher = async (e: any) => {
    e.preventDefault();

    const id = currentTeacher?.ustoz_id;
    const formData = new FormData();

    const { image } = e.target.elements;

    formData.append("ustoz_firstname", currentName);
    formData.append("ustoz_lastname", currentSharifi);
    formData.append("ustoz_raqami", currentPhoneNumber);
    formData.append("ustoz_toifa", currentToifa);
    formData.append("ustoz_description", currentMalumot);
    formData.append("ustoz_gmail", currentEmail);
    formData.append("ustoz_age", currentBirhtday);
    formData.append("ustoz_jinsi", currentJinsi);
    formData.append("ustoz_day", currentIshlashKuni);
    formData.append("ustoz_img", image.files[0]);

    try {
      setButtonLoader(true);
      const response = await axios.put(
        "http://10.10.3.60:7070/put_ustoz/" + id,
        formData
      );

      toast.success(`Ustoz muvaffaqiyatli yangilandi`, { autoClose: 2000 });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Tarmoqda xatolik yuz berdi", { autoClose: 1000 });
      console.log(error);
    } finally {
      setButtonLoader(false);
    }
  };

  //////// Get Teachers //////////
  useEffect(() => {
    const getTeachers = async () => {
      try {
        setLoading(true);
        const data = await axios.get(URL + "get_ustoz/").then((res) => {
          setGetTeacher(res.data);
        });
      } catch (error) {
        toast.error("Tarmoqda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };
    getTeachers();
  }, []);

  /////// Delete Teachers ///////
  const deleteTeacher = async (id: number) => {
    try {
      setButtonLoader(true);
      const res = await axios
        .delete(URL + "delete_ustoz/" + id)
        .then((res) => {});
      toast.success(`Ustoz muvaffaqiyatli o'chirildi`, { autoClose: 2000 });
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
    if (currentTeacher) {
      setCurrentName(currentTeacher.ustoz_firstname);
      setCurrenSharifi(currentTeacher.ustoz_lastname);
      setCurrentPhoneNumber(currentTeacher.ustoz_raqami);
      setCurrentToifa(currentTeacher.ustoz_toifa);
      setCurrentMalumot(currentTeacher.ustoz_description);
      setCurrentEmail(currentTeacher.ustoz_gmail);
      setCurrentBirhtday(currentTeacher.ustoz_age);
      setCurrentJinsi(currentTeacher.ustoz_jinsi);
      setCurrentIshlashKuni(currentTeacher.ustoz_day);
    }
  }, [currentTeacher]);

  return (
    <>
      {/*````` React modal ``````*/}
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
          <form onSubmit={updateTeacher}>
            <h1 className="text-3xl text-center my-3 text-black font-semibold ">{`Yangilash`}</h1>
            <div className="mt-5">
              <input
                type="text"
                value={currentName}
                onChange={(e) => setCurrentName(e.target.value)}
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                required
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                value={currentSharifi}
                onChange={(e) => setCurrenSharifi(e.target.value)}
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                required
              />
            </div>
            <div className="mt-5">
              <textarea
                value={currentMalumot}
                onChange={(e) => setCurrentMalumot(e.target.value)}
                rows={4}
                cols={0}
                name="malumot"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-lg    "
                placeholder="Ma'lumoti"
                required
              />
            </div>
            <div className="mt-5">
              <input
                value={currentBirhtday}
                onChange={(e) => setCurrentBirhtday(e.target.value)}
                type="text"
                name="user_name"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                required
              />
            </div>
            <div className="mt-5">
              <input
                type="email"
                value={currentEmail}
                onChange={(e) => setCurrentEmail(e.target.value)}
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="abdef@gmail.com"
                required
              />
            </div>
            <div className="mt-5">
              <input
                type="number"
                value={currentPhoneNumber}
                onChange={(e) => setCurrentPhoneNumber(e.target.value)}
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                required
              />
            </div>
            <div className="mt-5">
              <select
                value={currentToifa}
                onChange={(e) => setCurrentToifa(e.target.value)}
                className="w-full rounded-full  bg-[#D8EDF7] px-5 py-2 font-bold outline-none transition text-black-2"
              >
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="I"
                >
                  I
                </option>
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="II"
                >
                  II
                </option>
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value=" III"
                >
                  III
                </option>
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="VI"
                >
                  VI
                </option>
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="V"
                >
                  V
                </option>
              </select>
            </div>
            <div className="mt-5">
              <select
                value={currentIshlashKuni}
                onChange={(e) => setCurrentIshlashKuni(e.target.value)}
                className="w-full rounded-full  bg-[#D8EDF7] px-5 py-2 font-bold outline-none transition text-black-2"
              >
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="Juft"
                >
                  Juft
                </option>
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="Toq"
                >
                  Toq
                </option>
              </select>
            </div>
            <div className="mt-5">
              <select
                value={currentJinsi}
                onChange={(e) => setCurrentJinsi(e.target.value)}
                className="w-full rounded-full  bg-[#D8EDF7] px-5 py-2 font-bold outline-none transition text-black-2"
              >
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="Erkak"
                >
                  Erkak
                </option>
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="Ayol"
                >
                  Ayol
                </option>
              </select>
            </div>
            <div className="mt-5">
              <input
                type="file"
                name="image"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                required
              />
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
                  {`Yangilanmoqda...`}
                </button>
              ) : (
                <button
                  type="submit"
                  className="py-3 px-12 bg-blue-600 rounded-full text-black font-semibold"
                >{`Yangilash`}</button>
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
          {/* React toastfy */}
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
          <form onSubmit={teacherSend}>
            <h1 className="text-3xl text-center my-3 text-black font-semibold ">{`Ustoz qo'shish`}</h1>
            <div className="mt-5">
              <input
                value={teacherData.teacher_name}
                onChange={handleInputChange}
                type="text"
                name="teacher_name"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Ustoz ismi"
                required
              />
            </div>
            <div className="mt-5">
              <input
                value={teacherData.teacher_surname}
                onChange={handleInputChange}
                type="text"
                name="teacher_surname"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Ustoz Familyasi"
                required
              />
            </div>
            <div className="mt-5">
              <input
                value={teacherData.teacher_young}
                onChange={handleInputChange}
                type="text"
                name="teacher_young"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Ustoz Yoshi"
                required
              />
            </div>
            <div className="mt-5">
              <input
                value={teacherData.email}
                onChange={handleInputChange}
                type="email"
                name="email"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Ustoz Emaili"
                required
              />
            </div>
            <div className="mt-5">
              <input
                value={teacherData.phone_number}
                onChange={handleInputChange}
                type="number"
                name="phone_number"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-[#D8EDF7] rounded-full   "
                placeholder="Ustoz Telefon Raqami"
                required
              />
            </div>
            <div className="mt-5">
              <textarea
                value={teacherData.malumot}
                onChange={handleInputChange}
                rows={4}
                cols={0}
                name="malumot"
                className="w-full outline-none px-5 py-2 text-black-2 font-semibold bg-white rounded-lg    "
                placeholder="Ma'lumoti"
                required
              />
            </div>
            <div>
              <label className="text-black text-lg font-semibold ml-2">
                Toifasi
              </label>
              <select
                value={toifasi}
                onChange={(e) => setToifasi(e.target.value)}
                name="toifa"
                className="w-full rounded-full  bg-white px-5 py-2 font-bold outline-none transition text-black-2"
              >
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="I"
                >
                  I
                </option>
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="II"
                >
                  II
                </option>
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="III"
                >
                  III
                </option>
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="VI"
                >
                  VI
                </option>
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="V"
                >
                  V
                </option>
              </select>
            </div>
            <div className="mt-2">
              <label className="text-black text-lg font-semibold ml-2">
                IshlashKuni
              </label>
              <select
                value={ishlashKuni}
                name="kuni"
                onChange={(e) => setIshlashKuni(e.target.value)}
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
                  value="Toq"
                >
                  Toq
                </option>
              </select>
            </div>
            <div className="mt-2">
              <label className="text-black text-lg font-semibold ml-2">
                Jinsi
              </label>
              <select
                value={jinsi}
                onChange={(e) => setjinsi(e.target.value)}
                name="jinsi"
                className="w-full rounded-full  bg-white px-5 py-2 font-bold outline-none transition text-black-2"
              >
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="Erkak"
                >
                  Erkak
                </option>
                <option
                  className="bg-[#4D44B5] rounded-full font-bold"
                  value="Ayol"
                >
                  Ayol
                </option>
              </select>
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
                  Ustoz rasmi
                </span>
                <input type="file" name="image" className="hidden" />
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
                  {`Yuborilmoqda...`}
                </button>
              ) : (
                <button
                  type="submit"
                  className="py-3 px-12 bg-blue-600 rounded-full text-black font-semibold"
                >{`Qo'shish`}</button>
              )}
            </div>
          </form>
        </ReactModal>
      )}

      <Breadcrumb pageName="Ustozlar" />
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
        <div className="grid grid-cols-1 justify-center sm:justify-start  md:grid-cols-2 lg:grid-cols-3 gap-x-30 gap-y-9">
          {loading ? (
            <Loading />
          ) : (
            getTeacher
              .filter((teacher: any) => {
                return search.toLowerCase() === ""
                  ? teacher
                  : teacher.name.toLowerCase().includes(search);
              })
              .map((teacher: any, i: number) => (
                <div
                  key={i}
                  className="hover:shadow-xl w-full lg:mx-0 mx-5 bg-gray p-6 rounded-2xl hover:scale-105 transition-transform ease-out duration-200 h-full flex flex-col justify-center items-center relative"
                >
                  <div className="absolute right-5 top-5 flex items-center z-9999">
                    <Pencil
                      onClick={() => {
                        openModal();
                        setUpdateModal(true);
                        setCurrentTeacher(teacher);
                      }}
                      size={18}
                      className="mr-3 cursor-pointer"
                    />
                    {buttonLoader && teacher.ustoz_id === deleteTeacherId ? (
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
                          deleteTeacher(teacher.ustoz_id);
                          setDeleteTeacherID(teacher.ustoz_id);
                        }}
                        size={18}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                  <Link
                    href={`/teacher/${teacher.ustoz_id}`}
                    className="mx-auto text-center"
                  >
                    <Image
                      src={`http://10.10.3.60:7070${teacher.ustoz_img}`}
                      width={162}
                      height={160}
                      alt="img"
                    />
                    <h4 className="text-[#303972] font-semibold text-xl">
                      {teacher.ustoz_firstname}
                    </h4>
                    <p className="text-[#4D44B5] mt-2 font-semibold">
                      ID: {teacher.ustoz_id}
                    </p>
                    <div className="flex justify-between items-center mt-5">
                      <div className="flex items-center">
                        <Image
                          className="cursor-pointer mr-1"
                          src={`http://10.10.3.60:7070${teacher.ustoz_img}`}
                          width={32}
                          height={32}
                          alt="img"
                        />
                        <div>
                          <h4 className="text-xs">
                            {"Toifa"}
                            <br />
                            <span className="text-[#303972] font-bold">
                              {teacher.ustoz_toifa}
                            </span>
                          </h4>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Image
                          className="cursor-pointer mr-1"
                          src={"images/calendarcard.svg"}
                          width={32}
                          height={32}
                          alt="img"
                        />
                        <div>
                          <h4 className="text-xs">
                            Kuni <br />
                            <span className="text-[#303972] font-bold">
                              {teacher.ustoz_day}
                            </span>
                          </h4>
                        </div>
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

export default Teacher;
