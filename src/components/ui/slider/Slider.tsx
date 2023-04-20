import React from 'react';
import './index.scss';

type SliderProps = {
    variant: string
};

export default function Slider({variant}: SliderProps) {
  return <div className={`slider--${variant}`}></div>;
}
