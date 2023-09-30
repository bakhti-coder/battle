"use client";
import Image from "next/image";
import React, { useState } from "react";
import "swiper/css";
import { Eye, EyeOff, Info } from "lucide-react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Check email and password (You can replace this with your authentication logic)
    if (email === "bsayfiddinov777@gmail.com" && password === "1234") {
      // If email and password are correct, redirect to the home page
      window.location.href = "/";
      localStorage.setItem("login", "true");
    } else {
      // If email and password are incorrect, display an error message
      alert("Invalid email or password");
    }
  };
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="bg-[#E2F0FF] h-screen w-1/2">
          <div className="flex flex-col items-center">
            <Image
              src={"/images/slazzer-edit-image_prev_ui 1.png"}
              width={600}
              height={350}
              alt="loginimg"
            />
            <h1 className=" text-2xl font-semibold text-[#292731]">Login</h1>
            <Image
              className="cursor-pointer mt-10"
              src={"/images/Caurusel.svg"}
              width={55}
              height={12}
              alt="loginimg"
            />
          </div>
        </div>
        <div className="bg-white  h-screen w-1/2 ">
          <div className="flex flex-col w-[400px] ml-20 mt-50">
            <h1 className="text-2xl text-[#292731] font-extrabold mb-3">
              Welcome back!
            </h1>
            <p className=" text-[#292731] font-bold mb-3">
              Please login to access your account.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <div className="flex justify-between items-center mb-1">
                  <label>G-mail </label>
                  <Info />
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="py-2 px-6 bg-[#EAEAEA] w-full outline-none text-black font-normal text-md"
                  placeholder="Type your g-mail "
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label> Password</label>
                  <Info />
                </div>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={passwordVisible ? "text" : "password"}
                  className="absolute py-2 px-6 w-[400px] bg-[#EAEAEA] outline-none text-black font-normal text-md"
                  placeholder="Type your pasword"
                />
                <div>
                  {passwordVisible ? (
                    <EyeOff
                      onClick={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                      className="relative left-90 top-2 cursor-pointer"
                    />
                  ) : (
                    <Eye
                      onClick={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                      className="relative left-90 top-2 cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <p className="text-[#66BCE8] mt-5 cursor-pointer">
                Forgot Pasword?
              </p>
              <button className="bg-[#4C70FF] w-full py-[7px] text-white font-bold rounded-lg mt-8">
                Log In
              </button>
              <p className="text-[#292731] font-bold mt-2 text-center">
                {`Don't have an account?`}{" "}
                <span className="text-[#66BCE8] cursor-pointer ">Sign Up</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
