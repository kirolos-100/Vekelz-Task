import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineCar , AiOutlineMessage ,AiOutlineSetting , AiOutlineLogout } from "react-icons/ai";
import { BsCartCheck , BsCalendarDate } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbAsset } from "react-icons/tb";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* import {logo} from "../../Assets/img/1.png" */

import "../../Styles/sidebar.css"
const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: <RxDashboard />,
    },
    {
        path: "/Assets",
        name: "Assets",
        icon: <TbAsset />,
    },
    {
        path: "/Booking",
        name: "Booking",
        icon: <AiOutlineCar />,
    },
    {
        path: "/SellCars",
        name: "Sell Cars",
        icon: <HiOutlineShoppingBag />,
    },
    {
        path: "/BuyCars",
        name: "Buy Cars",
        icon: <BsCartCheck />,
    },
    {
        path: "/Services",
        name: "Services",
        icon: <RiCustomerService2Line />,
    },
    {
        path: "/Calender",
        name: "Calender",
        icon: <BsCalendarDate />,
    },
    {
        path: "/Messages",
        name: "Messages",
        icon: <AiOutlineMessage />,
    },
    {
        path: "/Settings",
        name: "Settings",
        icon: <AiOutlineSetting />,
    },
    {
        path: "/Logout",
        name: "Logout",
        icon: <AiOutlineLogout />,
    },
];

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    // search bar warning messages
    /* const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    }; */

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <div className="main-container">
                <motion.div
                    animate={{
                        width: isOpen ? "250px" : "45px",

                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                        },
                    }}
                    className={`sidebar `}
                >
                    <div className="top_section">
                        
                        

                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="logo"
                                >
                                    Motiv.
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <div className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                    
                    <section className="routes">
                        {routes.map((route, index) => {
                            

                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className="link"
                                    activeClassName="active"
                                >
                                    <div className="icon">{route.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                variants={showAnimation}
                                                initial="hidden"
                                                animate="show"
                                                exit="hidden"
                                                className="link_text"
                                            >
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>

                <main>{children}</main>
            </div>
        </>
    );
};

export default SideBar;