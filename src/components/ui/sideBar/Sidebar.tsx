import React from 'react';
import BaseButton from '../button/BaseButton';
import SvgAddedUser from '../icons/SvgAddedUser';
import SvgAffiliate from '../icons/SvgAffiliate';
import SvgDashboard from '../icons/SvgDashboard';
import SvgLightning from '../icons/SvgLightning';
import SvgSettings from '../icons/SvgSettings';
import SvgUsers from '../icons/SvgUsers';
import Link from '../link/Link';
import './index.scss'

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="side-bar">
      <div className="side-bar__content">
        <div className="side-bar__content__message">
          <span>
            <SvgLightning />
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
      <BaseButton variant="primary"><SvgLightning/>NEW PROJECT</BaseButton>
    </div>
  );
}
