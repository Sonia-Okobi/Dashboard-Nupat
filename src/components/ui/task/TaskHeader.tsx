import React from 'react';
import './index.scss';

type TaskHeaderProps = {
    header: string;
  total: number;
};

export default function TaskHeader({ header, total }: TaskHeaderProps) {
  return (
    <div className="task-header">
      <p className="task-header__title">{header}</p>
      <p className="task-header__total">{total}</p>
    </div>
  );
}
