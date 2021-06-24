import React from "react";

const WalletSvg = ({ fill }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.639 14.3958H17.5907C16.1042 14.3949 14.8994 13.1909 14.8985 11.7045C14.8985 10.218 16.1042 9.01413 17.5907 9.01321H21.639"
        stroke={fill === "none" && "#718596"}
        stroke-linecap={fill === "none" && "round"}
        stroke-linejoin={fill === "none" && "round"}
      />
      <path
        d="M18.0486 11.6429H17.7369"
        stroke={fill === "none" && "#718596"}
        stroke-linecap={fill === "none" && "round"}
        stroke-linejoin={fill === "none" && "round"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.74767 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74767C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74767 3Z"
        stroke={fill === "none" && "#718596"}
        stroke-linecap={fill === "none" && "round"}
        stroke-linejoin={fill === "none" && "round"}
      />
      <path
        d="M7.03561 7.53815H12.4346"
        stroke={fill === "none" && "#718596"}
        stroke-linecap={fill === "none" && "round"}
        stroke-linejoin={fill === "none" && "round"}
      />
    </svg>
  );
};

export default WalletSvg;
