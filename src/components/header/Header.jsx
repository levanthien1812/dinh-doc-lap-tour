import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import IconHome from "../../assets/images/ic-home.svg";
import Review from "../../pages/Review/Review";
import Introduction from "../../pages/Introduction/Introduction";
import Booking from "../../pages/Booking/Booking";
import Model from "../../pages/model/ModelPage";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [user, setUser] = useState(null);
  const [shownPopup, setShownPopup] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(Cookies.get("user") || null));
  }, []);

  return (
    <header className="bg-[#123858]">
      <nav className="sticky top-0 z-30 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-0">
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              className="mr-3 h-12 sm:h-20"
              alt="DinhDocLap Logo"
            />
          </a>

          <div className="flex items-center lg:order-2 pb-0">
            {!user && (
              <a
                href="/dang-nhap"
                className="text-white hover:bg-[#C1A559]/90 no-underline focus:ring-4 bg-[#C1A559] focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                ĐĂNG NHẬP
              </a>
            )}
            {user && (
              <div className="relative">
                <button onClick={() => setShownPopup((prev) => !prev)}>
                  <span className="text-white/60 no-underline uppercase text-[20px]">
                    {user.name}
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-[20px] text-white/60 ms-2"
                  />
                </button>
                {shownPopup && (
                  <div className="absolute top-24 left-0 flex flex-col">
                    <button
                      className="bg-[#123858] whitespace-nowrap px-6 py-2 font-normal"
                      onClick={() => setShownPopup(false)}
                    >
                      <Link
                        to={"/profile"}
                        className="no-underline text-white/60 hover:text-yellow-500"
                      >
                        Trang cá nhân
                      </Link>
                    </button>
                    <button
                      className="bg-[#123858]  whitespace-nowrap px-6 py-2 font-normal"
                      onClick={() => setShownPopup(false)}
                    >
                      <Link
                        to={"/chitiet-datve"}
                        className="no-underline text-white/60 hover:text-yellow-500"
                      >
                        Chi tiết đặt vé
                      </Link>
                    </button>
                  </div>
                )}
              </div>
            )}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 py-0"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 list-none">
              <li>
                <NavLink
                  end
                  to="/"
                  className={({ isActive }) =>
                    "mt-1 block no-underline text-[20px] py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white " +
                    (isActive ? "text-yellow-500" : "text-white/60")
                  }
                  aria-current="page"
                >
                  <img
                    src={IconHome}
                    className="mr-3 h-5 sm:h-5"
                    alt="icon-home"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gioi-thieu"
                  className={({ isActive }) =>
                    "block no-underline text-[20px] py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white " +
                    (isActive ? "text-yellow-500" : "text-white/60")
                  }
                  aria-current="page"
                >
                  GIỚI THIỆU
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mo-hinh"
                  className={({ isActive }) =>
                    "block no-underline text-[20px] py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 " +
                    (isActive ? "text-yellow-500" : "text-white/60")
                  }
                >
                  MÔ HÌNH
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dat-ve"
                  className={({ isActive }) =>
                    "block no-underline text-[20px] py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 " +
                    (isActive ? "text-yellow-500" : "text-white/60")
                  }
                >
                  ĐẶT VÉ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reviews"
                  className={({ isActive }) =>
                    "block no-underline text-[20px] py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 " +
                    (isActive ? "text-yellow-500" : "text-white/60")
                  }
                >
                  ĐÁNH GIÁ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
