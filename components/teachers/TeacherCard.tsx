// import Image from "next/image";
// import { Pencil, Trash2 } from "lucide-react";
// import React from "react";

// const TeacherCard = (props: any) => {
//   const { openModal } = props;
//   return (
//     <>
//       <div className="hover:shadow-xl w-full lg:mx-0 mx-5 bg-gray p-6 rounded-2xl hover:scale-105 transition-transform ease-out duration-200 h-full flex flex-col justify-center items-center relative">
//         <div className="absolute right-3 top-3 flex items-center">
//           <Pencil
//             onClick={openModal}
//             size={18}
//             className="mr-3 cursor-pointer"
//           />
//           <Trash2 size={18} className="cursor-pointer" />
//         </div>
//         <div className="mx-auto text-center">
//           <Image src={"/images/odam.svg"} width={162} height={160} alt="img" />
//           <h4 className="text-[#303972] font-semibold text-xl">
//             Mirzaev Mirkomil
//           </h4>
//           <p className="text-[#4D44B5] mt-2 font-semibold">ID 123456789</p>
//           <div className="flex justify-between items-center mt-5">
//             <div className="flex items-center">
//               <Image
//                 className="cursor-pointer mr-1"
//                 src={"images/user/usercard.svg"}
//                 width={32}
//                 height={32}
//                 alt="img"
//               />
//               <div>
//                 <h4 className="text-xs">
//                   Toifa <br />{" "}
//                   <span className="text-[#303972] font-bold">IV </span>
//                 </h4>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <Image
//                 className="cursor-pointer mr-1"
//                 src={"images/calendarcard.svg"}
//                 width={32}
//                 height={32}
//                 alt="img"
//               />
//               <div>
//                 <h4 className="text-xs">
//                   Kuni <br />
//                   <span className="text-[#303972] font-bold">Juft </span>
//                 </h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TeacherCard;
