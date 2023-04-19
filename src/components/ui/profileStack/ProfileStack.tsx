import React from 'react';
import avatar from '../../../assets/images/avatar.png';
import './index.scss';

type ProfileStackProps = {
  size: number;
  className?: string
};

export default function ProfileStack({ className, size }: ProfileStackProps) {
  return (
    <div className={`profile-stack ${className}`}>
      <img
        className="profile-stack__avatar"
        src={avatar}
        alt="Avatar"
        {...{ height: size, width: size }}
      />
      <img
        className="profile-stack__avatar"
        src={avatar}
        alt="Avatar"
        {...{ height: size, width: size }}
      />
      <img
        className="profile-stack__avatar"
        src={avatar}
        alt="Avatar"
        {...{ height: size, width: size }}
      />
    </div>
  );
}
