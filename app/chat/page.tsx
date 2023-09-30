import { Paperclip, SendHorizontal } from "lucide-react";
import Image from "next/image";
import React from "react";

const Chat = () => {
  return (
    <section>
      <div className="flex">
        <div className="w-[350px] ">
          <div className="flex items-center bg-white p-5 rounded-lg cursor-pointer mb-2">
            <Image
              src={"/images/user/user.svg"}
              width={40}
              height={40}
              alt="user"
            />
            <div className="ml-5">
              <p className="text-black-2 font-semibold">Aziz</p>
              <span className="text-[#667085] text-sm font-semibold">
                Assalomu alaykum
              </span>
            </div>
          </div>
          <div className="flex items-center bg-white p-5 rounded-lg cursor-pointer mb-2">
            <Image
              src={"/images/user/user.svg"}
              width={40}
              height={40}
              alt="user"
            />
            <div className="ml-5">
              <p className="text-black-2 font-semibold">Aziz</p>
              <span className="text-[#667085] text-sm font-semibold">
                Assalomu alaykum
              </span>
            </div>
          </div>
          <div className="flex items-center bg-white p-5 rounded-lg cursor-pointer mb-2">
            <Image
              src={"/images/user/user.svg"}
              width={40}
              height={40}
              alt="user"
            />
            <div className="ml-5">
              <p className="text-black-2 font-semibold">Aziz</p>
              <span className="text-[#667085] text-sm font-semibold">
                Assalomu alaykum
              </span>
            </div>
          </div>
          <div className="flex items-center bg-white p-5 rounded-lg cursor-pointer mb-2">
            <Image
              src={"/images/user/user.svg"}
              width={40}
              height={40}
              alt="user"
            />
            <div className="ml-5">
              <p className="text-black-2 font-semibold">Aziz</p>
              <span className="text-[#667085] text-sm font-semibold">
                Assalomu alaykum
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#DDFCF5D1] ml-4 rounded-xl h-auto w-full ">
          <div className="bg-white rounded-r-xl rounded-tl-xl max-w-70 mt-5 ml-5">
            <p className="pt-5 pb-3 px-8 text-xl font-bold">Salom! </p>
          </div>
          <div className="flex justify-end mr-5">
            <div className="bg-white rounded-r-xl rounded-tl-xl mt-5 ">
              <p className="pt-5 pb-3 px-8 text-xl font-bold max-w-94">
                Assalomu alaykum
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 relative ">
        <input
          type="text"
          className="w-full absolute bg-white border border-[#A098AE] rounded-3xl outline-none py-4 px-8 text-black font-semibold"
          placeholder="Write your message..."
        />
        <div className="flex items-center">
          <div className="absolute right-30 top-4">
            <Paperclip />
          </div>
          <div className="absolute right-3 top-2">
            <button
              type="submit"
              className="text-white py-3 px-5 bg-[#4D44B5] font-bold text-sm rounded-full flex items-center"
            >
              Send
              <SendHorizontal size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
