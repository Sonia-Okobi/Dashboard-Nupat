import React from 'react';

type SvgCheckListProps = {
    className?: string
};

export default function SvgCheckList({className}: SvgCheckListProps) {
  return (
    <svg
    className={`${className}`}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7501 9.00007C15.7501 9.14925 15.6908 9.29233 15.5853 9.39782C15.4798 9.50331 15.3368 9.56257 15.1876 9.56257H9.00007C8.85088 9.56257 8.70781 9.50331 8.60232 9.39782C8.49683 9.29233 8.43757 9.14925 8.43757 9.00007C8.43757 8.85088 8.49683 8.70781 8.60232 8.60232C8.70781 8.49683 8.85088 8.43757 9.00007 8.43757H15.1876C15.3368 8.43757 15.4798 8.49683 15.5853 8.60232C15.6908 8.70781 15.7501 8.85088 15.7501 9.00007ZM9.00007 5.06257H15.1876C15.3368 5.06257 15.4798 5.00331 15.5853 4.89782C15.6908 4.79233 15.7501 4.64925 15.7501 4.50007C15.7501 4.35088 15.6908 4.20781 15.5853 4.10232C15.4798 3.99683 15.3368 3.93757 15.1876 3.93757H9.00007C8.85088 3.93757 8.70781 3.99683 8.60232 4.10232C8.49683 4.20781 8.43757 4.35088 8.43757 4.50007C8.43757 4.64925 8.49683 4.79233 8.60232 4.89782C8.70781 5.00331 8.85088 5.06257 9.00007 5.06257ZM15.1876 12.9376H9.00007C8.85088 12.9376 8.70781 12.9968 8.60232 13.1023C8.49683 13.2078 8.43757 13.3509 8.43757 13.5001C8.43757 13.6493 8.49683 13.7923 8.60232 13.8978C8.70781 14.0033 8.85088 14.0626 9.00007 14.0626H15.1876C15.3368 14.0626 15.4798 14.0033 15.5853 13.8978C15.6908 13.7923 15.7501 13.6493 15.7501 13.5001C15.7501 13.3509 15.6908 13.2078 15.5853 13.1023C15.4798 12.9968 15.3368 12.9376 15.1876 12.9376ZM5.7896 2.9771L3.93757 4.82983L3.21054 4.1021C3.10499 3.99655 2.96184 3.93726 2.81257 3.93726C2.6633 3.93726 2.52015 3.99655 2.4146 4.1021C2.30905 4.20765 2.24976 4.3508 2.24976 4.50007C2.24976 4.64934 2.30905 4.79249 2.4146 4.89804L3.5396 6.02304C3.59184 6.07534 3.65388 6.11683 3.72216 6.14513C3.79045 6.17344 3.86365 6.18801 3.93757 6.18801C4.01149 6.18801 4.08469 6.17344 4.15297 6.14513C4.22126 6.11683 4.2833 6.07534 4.33554 6.02304L6.58554 3.77304C6.69109 3.66749 6.75038 3.52434 6.75038 3.37507C6.75038 3.2258 6.69109 3.08265 6.58554 2.9771C6.47999 2.87155 6.33684 2.81226 6.18757 2.81226C6.0383 2.81226 5.89515 2.87155 5.7896 2.9771ZM5.7896 7.4771L3.93757 9.32983L3.21054 8.6021C3.10499 8.49655 2.96184 8.43726 2.81257 8.43726C2.6633 8.43726 2.52015 8.49655 2.4146 8.6021C2.30905 8.70765 2.24976 8.8508 2.24976 9.00007C2.24976 9.07398 2.26431 9.14716 2.2926 9.21545C2.32088 9.28373 2.36234 9.34578 2.4146 9.39804L3.5396 10.523C3.59184 10.5753 3.65388 10.6168 3.72216 10.6451C3.79045 10.6734 3.86365 10.688 3.93757 10.688C4.01149 10.688 4.08469 10.6734 4.15297 10.6451C4.22126 10.6168 4.2833 10.5753 4.33554 10.523L6.58554 8.27304C6.69109 8.16749 6.75038 8.02434 6.75038 7.87507C6.75038 7.7258 6.69109 7.58265 6.58554 7.4771C6.47999 7.37155 6.33684 7.31226 6.18757 7.31226C6.0383 7.31226 5.89515 7.37155 5.7896 7.4771ZM5.7896 11.9771L3.93757 13.8298L3.21054 13.1021C3.15828 13.0498 3.09623 13.0084 3.02795 12.9801C2.95966 12.9518 2.88648 12.9373 2.81257 12.9373C2.73866 12.9373 2.66547 12.9518 2.59719 12.9801C2.52891 13.0084 2.46686 13.0498 2.4146 13.1021C2.36234 13.1544 2.32088 13.2164 2.2926 13.2847C2.26431 13.353 2.24976 13.4262 2.24976 13.5001C2.24976 13.574 2.26431 13.6472 2.2926 13.7154C2.32088 13.7837 2.36234 13.8458 2.4146 13.898L3.5396 15.023C3.59184 15.0753 3.65388 15.1168 3.72216 15.1451C3.79045 15.1734 3.86365 15.188 3.93757 15.188C4.01149 15.188 4.08469 15.1734 4.15297 15.1451C4.22126 15.1168 4.2833 15.0753 4.33554 15.023L6.58554 12.773C6.69109 12.6675 6.75038 12.5243 6.75038 12.3751C6.75038 12.2258 6.69109 12.0826 6.58554 11.9771C6.47999 11.8716 6.33684 11.8123 6.18757 11.8123C6.0383 11.8123 5.89515 11.8716 5.7896 11.9771Z"
        fill="currentColor"
      />
    </svg>
  );
}
