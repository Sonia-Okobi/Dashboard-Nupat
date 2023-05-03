import React, { useState } from "react";
import BaseButton from "../button/BaseButton";
import SvgAddedUser from "../icons/SvgAddedUser";
import SvgAffiliate from "../icons/SvgAffiliate";
import SvgDashboard from "../icons/SvgDashboard";
import SvgLightning from "../icons/SvgLightning";
import SvgPlus from "../icons/SvgPlus";
import SvgSettings from "../icons/SvgSettings";
import SvgUsers from "../icons/SvgUsers";
import Link from "../link/Link";
import "./index.scss";

type Props = {};

export default function Sidebar({}: Props) {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
  };

  const handleBackground = () => {
    setNav(false);
  };

  return (
    <>
      <div
        onClick={handleBackground}
        className={`background ${nav ? "background-active" : ""}`}
      ></div>
      <div
        className={`mobile-nav ${nav ? "mobile-nav-active" : "mobile-nav"} `}
      >
        <button
          onClick={handleToggle}
          className={`menu ${nav ? handleToggle : null}`}
        >
          {" "}
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect opacity="0.1" width="41" height="41" rx="5" fill="#0C204C" />
            <path
              className="line top"
              d="M9 29H32"
              stroke="#0C204C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className="line middle"
              d="M9 21H32"
              stroke="#0C204C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className="line bottom"
              d="M9 13H32"
              stroke="#0C204C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="mobile-nav__button">
          <BaseButton variant="alternate">ADD MEMBERS</BaseButton>
        </div>
        <div className="add-mobile">
          <button className="add-members">
            <SvgPlus />
          </button>
          <div className="tool-tip">ADD MEMBERS</div>
        </div>
      </div>

      <div className={`side-bar ${nav ? "active" : ""}`}>
        <div className="side-bar__content">
          <div className="side-bar__content__message">
            <span>
              <SvgLightning className="welcome-icon" />
            </span>
            Welcome Keerthi
          </div>
          <div className="side-bar__content__links first">
            <Link Icon={<SvgDashboard />} text="Dashboard" />
            <Link Icon={<SvgSettings />} text="Settings" />
            <Link Icon={<SvgLightning />} text="Activities" />
            <Link Icon={<SvgUsers />} text="Users" />
            <Link Icon={<SvgAddedUser />} text="Added user" />
            <Link Icon={<SvgAffiliate />} text="Affiliate" />
          </div>
          <div className="side-bar__content__links second">
            <Link Icon={<SvgLightning />} text="Profile" />
            <Link Icon={<SvgUsers />} text="Logout" />
          </div>
        </div>
        <BaseButton variant="primary">
          <SvgPlus className="project-icon" />
          NEW PROJECT
        </BaseButton>
      </div>
    </>
  );
}
