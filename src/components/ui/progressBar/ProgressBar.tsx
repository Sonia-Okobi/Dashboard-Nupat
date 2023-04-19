import React from 'react';
import './index.scss';

type ProgressBarProps = {
    variant: string
};

export default function ProgressBar({variant}: ProgressBarProps) {
  return <div className={`progress-bar--${variant}`}></div>;
}
