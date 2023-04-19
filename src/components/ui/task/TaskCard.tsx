import React from 'react';
import SvgChat from '../icons/SvgChat';
import SvgCheckList from '../icons/SvgCheckList';
import SvgLink from '../icons/SvgLink';
import SvgMore from '../icons/SvgMore';
import ProfileStack from '../profileStack/ProfileStack';
import ProgressBar from '../progressBar/ProgressBar';
import './index.scss';

type TaskCardProps = {
  image?: string;
  title: string;
  variant: string;
};

export default function TaskCard({ image, title, variant }: TaskCardProps) {
  return (
    <div className="task-card">
      {image ? (
        <img className="task-card__image" src={image} alt="Image" />
      ) : null}
      <div className="task-card__content">
        <div className="task-card__content__title-holder">
          <p className="task-card__content__title-holder__title p--sm">{title}</p>
          <p className="task-card__content__title-holder__description p--xs">
            Make clear design and color
          </p>
        </div>
        <SvgMore />
      </div>
      <div className="task-card__progress-status">
        <div className="task-card__progress-status__info">
          <p className="task-card__progress-status__info__title p--xs">
            <span>
              <SvgCheckList />
            </span>
            Progress
          </p>
          <p className='task-card__progress-status__info__value'>2/10</p>
        </div>
        <ProgressBar {...{variant}} />
        <div className="task-card__progress-status__collaboration">
          <div className="task-card__progress-status__collaboration__actions">
            <p className="comments action p--2xs">
              {' '}
              <span>
                <SvgChat />
              </span>{' '}
              7
            </p>
            <p className="list action p--2xs">
              {' '}
              <span>
                <SvgLink />
              </span>
              2
            </p>
          </div>

          <ProfileStack size={24} className="progress-profile" />
        </div>
      </div>
    </div>
  );
}
