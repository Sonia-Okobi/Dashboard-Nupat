import React from 'react';
import './index.scss';

type LinkProps = {
  Icon: any;
  text: string;
};

export default function Link({ Icon, text }: LinkProps) {
  return (
    <a href="/" className="link base-button--plain">
      {Icon}
      {text}
    </a>
  );
}
