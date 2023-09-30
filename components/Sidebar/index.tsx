import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  UserSquare2,
  User,
  Calendar,
  MessagesSquare,
  Activity,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#4D44B5] duration-300 ease-linear dark:bg-[#4D44B5] lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="absolute right-2">
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <ArrowLeft color="black" size={32} />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            width={272}
            height={204}
            src={"/images/FITNES.svg"}
            alt="Logo"
          />
        </Link>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className=" pl-4 lg:pl-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Home --> */}
              <li>
                <Link
                  href="/"
                  className={`group relative flex items-center gap-2.5 rounded-l-full py-3 px-5 font-medium dark:text-white hover:text-[#4D44B5] duration-300 ease-in-out hover:bg-[#D8EDF7] dark:hover:bg-[#1A222C] ${
                    pathname === "/" || pathname.includes("dashboard")
                      ? "bg-[#D8EDF7] dark:bg-[#1A222C] text-[#4D44B5]"
                      : "text-bodydark1"
                  }`}
                >
                  <Home />
                  Asosiy
                </Link>
              </li>
              {/* <!-- Menu Item Home --> */}

              {/* <!-- Menu Item Teacher --> */}
              <li>
                <Link
                  href="/teacher"
                  className={`group relative flex items-center gap-2.5 rounded-l-full py-3 px-5 font-medium dark:text-white hover:text-[#4D44B5] duration-300 ease-in-out hover:bg-[#D8EDF7] dark:hover:bg-[#1A222C] ${
                    pathname === "teacher" || pathname.includes("teacher")
                      ? "bg-[#D8EDF7] dark:bg-[#1A222C] text-[#4D44B5]"
                      : "text-bodydark1"
                  }`}
                >
                  <UserSquare2 />
                  Ustozlar
                </Link>
              </li>
              {/* <!-- Menu Item Teacher --> */}

              {/* <!-- Menu Item Mijozlar --> */}
              <li>
                <Link
                  href="/customers"
                  className={`group relative flex items-center gap-2.5 rounded-l-full py-3 px-5 font-medium dark:text-white hover:text-[#4D44B5] duration-300 ease-in-out hover:bg-[#D8EDF7] dark:hover:bg-[#1A222C] ${
                    pathname === "customers" || pathname.includes("customers")
                      ? "bg-[#D8EDF7] dark:bg-[#1A222C] text-[#4D44B5]"
                      : "text-bodydark1"
                  }`}
                >
                  <User />
                  Mijozlar
                </Link>
              </li>
              {/* <!-- Menu Item Mijozlar --> */}

              {/* <!-- Menu Item Jihozlar --> */}
              <li>
                <Link
                  href="/jihozlar"
                  className={`group relative flex items-center gap-2.5 rounded-l-full py-3 px-5 font-medium dark:text-white hover:text-[#4D44B5] duration-300 ease-in-out hover:bg-[#D8EDF7] dark:hover:bg-[#1A222C] ${
                    pathname === "jihozlar" || pathname.includes("jihozlar")
                      ? "bg-[#D8EDF7] dark:bg-[#1A222C] text-[#4D44B5]"
                      : "text-bodydark1"
                  }`}
                >
                  <Calendar />
                  Jihozlar
                </Link>
              </li>
              {/* <!-- Menu Item Jihozlar --> */}

              {/* <!-- Menu Item Products --> */}
              <li>
                <Link
                  href="/products"
                  className={`group relative flex items-center gap-2.5 rounded-l-full py-3 px-5 font-medium dark:text-white hover:text-[#4D44B5] duration-300 ease-in-out hover:bg-[#D8EDF7] dark:hover:bg-[#1A222C] ${
                    pathname === "products" || pathname.includes("products")
                      ? "bg-[#D8EDF7] dark:bg-[#1A222C] text-[#4D44B5]"
                      : "text-bodydark1"
                  }`}
                >
                  <Calendar />
                  Mahsulotlar
                </Link>
              </li>
              {/* <!-- Menu Item Products --> */}

              {/* {* <!-- Menu Item Orders --> */}
              <li>
                <Link
                  href="/order"
                  className={`group relative flex items-center gap-2.5 rounded-l-full py-3 px-5 font-medium dark:text-white hover:text-[#4D44B5] duration-300 ease-in-out hover:bg-[#D8EDF7] dark:hover:bg-[#1A222C] ${
                    pathname === "order" || pathname.includes("order")
                      ? "bg-[#D8EDF7] dark:bg-[#1A222C] text-[#4D44B5]"
                      : "text-bodydark1"
                  }`}
                >
                  <Calendar />
                  Buyurtmalar
                </Link>
              </li>
              {/* {* <!-- Menu Item Orders --> */}

              {/* {* <!-- Menu Item Orders --> */}

              {/* {* <!-- Menu Item Orders --> */}
              <li>
                <Link
                  href="/chat"
                  className={`group relative flex items-center gap-2.5 rounded-l-full py-3 px-5 font-medium dark:text-white hover:text-[#4D44B5] duration-300 ease-in-out hover:bg-[#D8EDF7] dark:hover:bg-[#1A222C] ${
                    pathname === "chat" || pathname.includes("chat")
                      ? "bg-[#D8EDF7] dark:bg-[#1A222C] text-[#4D44B5]"
                      : "text-bodydark1"
                  }`}
                >
                  <MessagesSquare />
                  Savol javob
                </Link>
              </li>
              {/* <!-- Menu Item Settings --> */}

              {/* <!-- Menu Item Settings --> */}
              <li>
                <Link
                  href="/chart"
                  className={`group relative flex items-center gap-2.5 rounded-l-full py-3 px-5 font-medium dark:text-white hover:text-[#4D44B5] duration-300 ease-in-out hover:bg-[#D8EDF7] dark:hover:bg-[#1A222C] ${
                    pathname === "chart" || pathname.includes("chart")
                      ? "bg-[#D8EDF7] dark:bg-[#1A222C] text-[#4D44B5]"
                      : "text-bodydark1"
                  }`}
                >
                  <Activity />
                  Statistika
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
