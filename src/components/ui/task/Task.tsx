import React, { ReactNode } from 'react';
import BaseButton from '../button/BaseButton';
import SvgPlus from '../icons/SvgPlus';
import TaskCard from './TaskCard';
import TaskHeader from './TaskHeader';
import './index.scss';

type TaskProps = {
  children: ReactNode;
};

export default function Task({ children }: TaskProps) {
  return (
    <div className="task">
      {children}
      {/* <TaskHeader {...{ header, total }} />
      <TaskCard {...{ image, title }} />
      <BaseButton variant="secondary" icon={<SvgPlus/>}>Add Task</BaseButton> */}
    </div>
  );
}
