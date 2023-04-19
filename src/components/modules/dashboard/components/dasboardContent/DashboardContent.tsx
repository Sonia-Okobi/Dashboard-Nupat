import React from 'react';
import BaseButton from '../../../../ui/button/BaseButton';
import SvgBoard from '../../../../ui/icons/SvgBoard';
import SvgCheckList from '../../../../ui/icons/SvgCheckList';
import SvgLightning from '../../../../ui/icons/SvgLightning';
import SvgPlus from '../../../../ui/icons/SvgPlus';
import SvgUsers from '../../../../ui/icons/SvgUsers';
import ProfileStack from '../../../../ui/profileStack/ProfileStack';
import Task from '../../../../ui/task/Task';
import TaskCard from '../../../../ui/task/TaskCard';
import TaskHeader from '../../../../ui/task/TaskHeader';
import dribbble from '../../../../../assets/images/dribbble.png';
import anais from '../../../../../assets/images/anais.png';
import camplog from '../../../../../assets/images/camplog.png';
import './index.scss';

type Props = {};

export default function DashboardContent({}: Props) {
  return (
    <div className="dashboard-content">
      <div className="dashboard-content__header">
        <div className="dashboard-content__header__text">
          <div className="dashboard-content__header__text__info">
            <h1>New Campaign Run </h1>
            <p className='p--xs'>A new campaign launch work for brand new featur in May month</p>
          </div>
          <BaseButton variant="alternate">ADD MEMBERS</BaseButton>
        </div>
        <div className="dashboard-content__header__actions">
          <div className="dashboard-content__header__actions__members">
            <ProfileStack
              size={32}
              className="dashboard-content__header__actions__members__profile"
            />
            <p className='p--xs'>8 member</p>
          </div>
          <div className="dashboard-content__header__actions__views">
            <a className="base-button--plain" href="/">
              <span>
                <SvgUsers />
              </span>
              Participants View
            </a>
            <a className="base-button--plain" href="/">
              <span>
                <SvgBoard />
              </span>
              Board View
            </a>
            <a className="base-button--plain" href="/">
              <span>
                <SvgCheckList />
              </span>
              List View
            </a>
            <a className="base-button--plain" href="/">
              <span>
                <SvgLightning />
              </span>
              Power View
            </a>
            <a href="/" className='view-plus'>
              <SvgPlus />
            </a>
          </div>
        </div>
      </div>
      <div className="dashboard-content__tasks">
        <div className="dashboard-content__tasks__progress">
          <Task>
            <TaskHeader header="To Do" total={3} />
            <TaskCard
              title="Highfidelity Design"
              image={dribbble}
              variant="to-do"
            />
            <TaskCard title="Usability testing" variant="to-do" />
            <BaseButton variant="secondary" className="task-button">
              <SvgPlus />
              Add Task
            </BaseButton>
          </Task>
        </div>
        <div className="dashboard-content__tasks__progress">
          <Task>
            <TaskHeader header="Inprogress" total={1} />
            <TaskCard
              title="Highfidelity Design"
              image={anais}
              variant="in-progress"
            />
            <BaseButton variant="secondary" className="task-button">
              <SvgPlus />
              Add Task
            </BaseButton>
          </Task>
        </div>
        <div className="dashboard-content__tasks__progress">
          <Task>
            <TaskHeader header="Completed" total={2} />
            <TaskCard title="Usability testing" variant="completed" />
            <TaskCard
              title="Highfidelity Design"
              image={camplog}
              variant="completed"
            />
            <BaseButton variant="secondary" className="task-button">
              <SvgPlus />
              Add Task
            </BaseButton>
          </Task>
        </div>
      </div>
    </div>
  );
}
