import React from "react";
import "../../style/components/_sidebar.scss";
import { Link } from "react-router-dom";
import SideBarButton from "../SideBarButton/SideBarButton";
import yoga from "../../assets/yoga.png";
import swimming from "../../assets/swimming.png";
import cycling from "../../assets/cycling.png";
import fitness from "../../assets/fitness.png";

const SideBar = () => {
  const currentYear = new Date().getFullYear();
  return (
    <aside className="sideBar">
      <nav className="sideBar__nav">
        <ul className="sideBar__ul">
          <li className="sideBar__li">
            <Link>
              <SideBarButton image={yoga} iconType="yoga" />
            </Link>
          </li>
          <li className="sideBar__li">
            <Link>
              <SideBarButton image={swimming} iconType="swimming" />
            </Link>
          </li>
          <li className="sideBar__li">
            <Link>
              <SideBarButton image={cycling} iconType="cycling" />
            </Link>
          </li>
          <li className="sideBar__li">
            <Link>
              <SideBarButton image={fitness} iconType="fitness" />
            </Link>
          </li>
        </ul>
      </nav>
      <p className="sideBar__copyright">
        Copyright, SportSee 2020 - {currentYear} ©
      </p>
    </aside>
  );
};

export default SideBar;
