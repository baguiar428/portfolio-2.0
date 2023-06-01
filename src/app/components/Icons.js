import React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    className={`${className} w-full h-auto`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`${className} w-full h-auto`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const EmailIcon = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
  width={24} 
  height={24}
  viewBox="0 0 24 24"
  className={`w-full h-auto ${className}`} 
  {...rest}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.234 4.357A.996.996 0 0 0 2 5v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5.01a1.006 1.006 0 0 0-.364-.781.996.996 0 0 0-.632-.229H3a.997.997 0 0 0-.766.357ZM4 7.414V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.414l-7.293 7.293a1 1 0 0 1-1.414 0L4 7.414Z"
      clipRule="evenodd"
    />
  </svg>
)

export const BlogIcon = ({ className, ...rest }) => (
    <svg 
     xmlns="http://www.w3.org/2000/svg" 
     width="1em"
     height="1em"
     viewBox="0 0 512 512"
     className={`${className} w-full h-auto`}
     {...rest}
     >
      <path
        fill="currentColor"
        d="M192 32c0 17.7 14.3 32 32 32 123.7 0 224 100.3 224 224 0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32 70.7 0 128 57.3 128 128 0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192-17.7 0-32 14.3-32 32zm-96 16c0-26.5-21.5-48-48-48S0 117.5 0 144v224c0 79.5 64.5 144 144 144s144-64.5 144-144-64.5-144-144-144h-16v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48V144z"
      />
    </svg>
  )

  export const DribbbleIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="#E74D89"
        d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
      />
      <path
        fill="#B2215A"
        d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
      />
    </svg>
  );

  export const LinkArrow = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={`w-full h-auto ${className}`}
      {...rest}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
      />
    </svg>
  );

 export const CircularText = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={400}
      height={400}
      viewBox="0 0 300 300"
      className={`w-full h-auto ${className}`}
      {...rest}
    >
      <path d="M167.5 45.2c-.2.7-1.9 7-3.8 14-2.8 10.5-3.1 12.8-2 13.3 2.1.8 2.3.7 2.3-1.1 0-1.3.6-1.1 2.6 1 4.2 4.1 10.6 3.9 14.7-.4 3.7-4.1 3.8-11 .3-14.5-3-3-7.2-4.1-10.7-2.8l-2.7 1.1 1.8-5.3c1-3 1.6-5.6 1.3-5.9-1.1-1-3.3-.6-3.8.6zm9.4 13.3c7.9 4 1.7 16.4-6.4 12.7-5.4-2.5-5.5-10.4-.2-13 3-1.4 3.4-1.4 6.6.3zM125.5 53.7c.3 4.9.9 10.6 1.2 12.8.3 2.2.3 3.8 0 3.5-.3-.3-2.2-2.5-4.2-5-8.5-10.3-11.6-13.1-13.5-12.5-1 .3-1.7 1.1-1.5 1.8.2.7.6 6.1 1 12.2l.7 11-2.9-3.6C101.1 67.4 93.6 59 93.1 59c-.3 0-1.2.4-2 .9-2 1.3 16.6 22.3 19.4 21.9 1.8-.3 2-1 1.7-7.8-.1-4.1-.5-9.5-.7-12l-.6-4.5 2.8 3c1.5 1.7 5.1 5.6 7.8 8.7 4.1 4.6 5.5 5.6 7.3 5.1 1.5-.3 2.1-1.1 1.8-2.2-.3-.9-.8-7.3-1.2-14.4-.6-11.7-.8-12.7-2.6-12.7-1.9 0-1.9.5-1.3 8.7zM140.9 53.9c-2.4 2.4-2.9 3.8-2.9 7.6 0 6.3 3.9 10.5 9.9 10.5 4.5 0 9.1-1.7 9.1-3.5 0-2.1-1.2-2.5-3.4-1-3.3 2.3-7.4 1.8-10.4-1.3l-2.7-2.7 8.5-.3c4.7-.2 8.9-.7 9.3-1.1 1.2-1.2-1.7-7.6-4.4-9.5-3.8-2.7-9.6-2.1-13 1.3zm12.1 2.6c1.3 1.4 2.1 2.7 1.8 3-.3.3-3.7.5-7.4.3l-6.9-.3 2.7-2.8c3.4-3.4 6.7-3.5 9.8-.2zM199.6 72.2l-8.7 10.3 4.8 4.2c8.5 7.5 14.8 9.1 21 5.3 6.3-3.8 8.5-13.2 4.4-18.9-1.9-2.7-11.3-11.1-12.3-11.1-.3 0-4.4 4.6-9.2 10.2zm15.4-.7c3.8 3.8 4.5 5.2 4.5 8.5 0 3-.7 4.7-3 7-4.2 4.4-9.6 4.2-15.9-.6-4-3.2-4.5-3.9-3.3-5.3 7.4-8.9 12.1-14.1 12.6-14.1.4 0 2.7 2 5.1 4.5zM90 92.5c-1.6 1.9-.6 4.5 1.9 4.5 2.3 0 3.5-2.8 2-4.6-1.5-1.8-2.4-1.8-3.9.1zM217.4 96.4c-5 5-4.1 11.5 2.2 16.5 3.3 2.6 4.4 2.6 4.4.1 0-1.1-.4-2-1-2-3.8 0-6.7-8.9-3.8-11.8.8-.8 2.2.7 5.6 6.4 4.3 7.3 4.5 7.5 6.4 5.7 3.8-3.4 5-7.1 3.8-10.8-1.6-4.7-5.4-7.5-10.2-7.5-3.2 0-4.7.7-7.4 3.4zM230 98c2.3 2.3 2.6 7.2.6 8.9-1.1 1-2 .2-4.5-4.2-1.7-3-3.1-5.7-3.1-6.1 0-1.4 5.2-.4 7 1.4zM65.7 96.6c-1.2 1.2-.8 4.9 1.3 10.9 1.1 3.2 1.8 6 1.6 6.2-.2.2-4-1.4-8.5-3.6-7.1-3.6-8.1-3.9-8.9-2.4-.8 1.4 1 2.6 12 8 7.2 3.5 13.4 6 13.9 5.7 1.6-.9 1-2.4-1.6-3.6-2.3-1-5.1-6.3-3.7-7.2.4-.2 3.1-.7 6-1.1 3.6-.5 5.7-1.3 6.7-2.8.8-1.1 1.3-2.2 1.1-2.4-.2-.2-3.2.3-6.7 1.2-3.5.8-6.9 1.5-7.5 1.5-.6 0-1.7-2.1-2.4-4.8-1.4-5.1-2.3-6.6-3.3-5.6zM232.2 117.2c-6.3 5.3-8.2 7.6-8 9.2.3 1.9 1.3 2.2 11.3 3.3 6 .7 11.1 1 11.3.8.3-.2.2-1.1-.1-1.9-.4-1-3.1-1.6-9.8-2.2l-9.3-.7 2.5-2.1c1.4-1.2 4.6-4 7.3-6.2 3.7-3.2 4.6-4.5 3.9-5.7-.7-1.4-2.2-.5-9.1 5.5zM55.4 123.5c-.9 1.3-1.8 4.2-2.1 6.4-.5 3.6-.2 4.4 3 7.6 2.8 2.8 4.3 3.5 7.5 3.5 4.8 0 8.6-2.8 10.2-7.4 1.8-5.6-1.1-12.6-3.9-9.2-.8 1-.9 1.6-.1 2.1 1.7 1 1.2 7-.8 8.8-2.5 2.3-8.5 2.2-10.5-.1-2.4-2.6-2.1-7.7.4-10.1 2.2-2 1.9-4.1-.6-4.1-.8 0-2.2 1.1-3.1 2.5zM233.5 135.9c-5.6 2.4-7.9 9.4-5 15.5 1.8 3.8 4.3 4.4 3.7 1-1.4-7.6-1.3-9.6.3-11.4 2.4-2.7 4.4-2.5 4.3.2-.1 1.3-.1 5.1 0 8.5.2 7 .9 7.5 6.3 4.7 4.2-2.1 6.4-7.5 4.9-11.9-.6-1.8-1.9-4-3-5-2.2-1.9-8.6-2.9-11.5-1.6zm9.7 4.8c2.2 2 2.3 7 .1 9.5-2.8 3.2-3.8 2.1-4.1-4.7-.4-7 .5-8 4-4.8zM56.3 146c-1.2.5-2.9 2-3.9 3.4-2.8 4.5.1 15.3 3.6 13.1.7-.4.7-1.2-.1-2.6-2.3-4.5-.8-10.9 2.7-10.9.9 0 1.4 1.2 1.4 3.5 0 2 .7 5.1 1.4 7 1.3 3 2 3.5 4.9 3.5 5.6 0 8.1-5.4 5.3-11.2-1.1-2-1.3-3.4-.6-3.6.5-.2 1-1 1-1.8 0-1.1-1.6-1.4-6.7-1.3-3.8 0-7.8.4-9 .9zm12.3 5.5c1.9 2.9 1.2 7-1.3 7.9-2.4 1-4.3-1.9-4.3-6.6 0-3.1.4-3.8 2-3.8 1.1 0 2.7 1.1 3.6 2.5zM226.6 160.6c-.4.9-.5 1.8-.4 1.9.3.3 27.7 4.5 29.1 4.5.4 0 .7-.9.7-2s-.5-2-1-2c-1.1 0-19.3-2.6-24.6-3.5-2.4-.4-3.3-.1-3.8 1.1zM70.4 167.7c.1 3.6 0 3.7-5.8 5.4-3.3 1-6.3 1.6-6.8 1.3-.4-.3-.8-1.6-.8-3 0-1.9-.4-2.4-1.7-2.2-1.9.4-2 .9-.9 4.4.5 1.7.2 2.3-1.8 2.8-1.8.4-2.3 1.1-1.9 2.5.4 1.6.9 1.8 2.8 1.1s2.4-.5 2.8 1.2c.7 2.5 3.3 1.8 2.9-.8-.2-1.6.7-2.3 5-3.3 7.7-2 9.8-3.2 10.5-5.8.7-2.9-1.1-7.3-3-7.3-1 0-1.4 1.2-1.3 3.7zM228.3 169.4c-3.7 1.7-6.3 6.1-6.3 10.7 0 4.8 5.6 9.9 10.8 9.9 7.5 0 13.2-8.2 10.1-14.5-2.8-5.7-9.3-8.4-14.6-6.1zm9.1 4.7c6.1 4.8.4 14.7-6.8 11.9-1.4-.5-3.2-2.1-4.2-3.5-1.4-2.1-1.4-3-.4-5.5 2.2-5.3 6.8-6.5 11.4-2.9zM70.3 180c-3.8 1.6-4.6 4.4-3.2 12.1 1.1 6.1 1 7.2-.3 8.5-1.2 1.3-2 1.4-3.7.5-2.6-1.4-5.1-6.1-5.1-9.6 0-2.6-.6-3-2.8-1.6-1.1.6-1.1 1.7-.2 5.1 2.3 8.7 10.2 12.8 15.1 7.9 1.8-1.8 2-2.8 1.4-6.8-1.4-8-1.1-11.3.8-12.5 2.9-1.7 7.7 4.2 7.7 9.4 0 3.3.3 4 2 4 2.6 0 2.7-4 .1-9.5-2.9-6.4-7.4-9.2-11.8-7.5zM210.9 184.6c-1.4 1.7-1.5 1.6 4.4 5.1 3.3 2.1 3.4 2.9.3 3.7-4.7 1.2-7.3 8.2-4.9 13.3 3.1 6.5 11.9 8.4 16.7 3.6 2.8-2.8 4.2-6.5 3.1-8.2-.4-.7.3-1 1.7-.8 4.4.4 2.3-2.2-7.7-9.5-12.8-9.4-12.1-9-13.6-7.2zm14.6 12.9c4.7 4.6 1.9 11.8-4.5 11.8-3.7 0-8-3.9-8-7.4 0-2.8 4.4-6.9 7.5-6.9 1.4 0 3.7 1.1 5 2.5zM84.2 214.9c-7.8 8.4-9.9 11.1-8.9 12 1 .8 3.8-1.5 11.7-9.4 9.3-9.4 10.3-10.6 8.9-12-1.3-1.3-2.6-.3-11.7 9.4z" />
      <path d="M197.8 210.6c-1.5.8-3.5 2.8-4.3 4.4-1.8 3.6-1.8 3.7 0 4.3.9.4 1.9-.4 2.7-2.1 1.7-3.5 5.7-5.7 9.1-4.8 1.5.3 2.7 1 2.7 1.4 0 .4-2.9 3-6.5 5.7s-6.5 5.2-6.5 5.7c0 1.4 6.3 4.8 8.8 4.8 3.9 0 8.3-2.9 9.8-6.7 4-9.4-6.4-17.8-15.8-12.7zM211 220c0 3.8-4.4 7.4-8 6.5-1.4-.4-2.7-.9-3-1.2-.7-.7 9.4-9.2 10.3-8.6.4.2.7 1.7.7 3.3zM92.8 221.8c-7.5 10.1-8.5 11.9-7.3 13.1.8.8 1.6 1.3 1.8 1 .2-.2 4.1-5.5 8.7-11.7 7.1-9.7 8.1-11.5 6.9-12.7-1.2-1.1-2.7.4-10.1 10.3zM107 216.9c0 .5-1.8 4.7-4 9.3-2.9 6-3.6 8.4-2.7 9 2 1.3 2.1 1.1 5.5-5.7 3.6-7.3 6.4-8.9 10.7-6.1 3.2 2.1 3.2 5.3-.1 11.7-2.5 4.9-2.6 7.9-.4 7.9 1.5 0 7-12.6 7-15.9 0-4-4.2-7.6-8.9-7.6-2.7 0-3.8-.4-3.7-1.4.1-.9-.7-1.7-1.6-1.9-1-.2-1.8.1-1.8.7zM185 219c-1.1.7-.9 1.9 1.3 6.8 3.3 7.3 3.3 8.5.2 11-1.6 1.3-2.3 2.6-1.9 3.6.9 2.3 2.1 2 4.6-1.4 1.4-2 2.4-2.6 2.9-1.9.4.7 1.4.9 2.3.6 1.3-.5.8-2.1-2.8-9.7-5-10.5-4.7-10.1-6.6-9zM162.2 228.2c.2 1.5 1 2.3 2.3 2.3 1.3 0 2.1-.8 2.3-2.3.3-1.8-.1-2.2-2.3-2.2-2.2 0-2.6.4-2.3 2.2zM141.6 230.1c-.3 1.7-.6 4.3-.6 5.6 0 2.3-.3 2.5-3.2 1.9-11.3-2-12-2-11.6 0 .3 1.5 1.6 2.1 7 2.8l6.7.8-.6 4.7c-.3 2.5-.7 4.7-.8 4.8-.1.2-3.6-.3-7.7-1.1-7.2-1.2-7.7-1.2-8.1.6-.3 1-.2 1.8.1 1.8.4 0 4.7.7 9.7 1.5 4.9.8 9 1.3 9.1 1.2.2-.2 4.4-25.9 4.4-27 0-.4-.8-.7-1.9-.7-1.3 0-2 1-2.5 3.1z" />
    </svg>
  );

  export const SunIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <g strokeDasharray="2">
          <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="4;2"
            />
          </path>
          <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="4;2"
            />
          </path>
        </g>
        <path
          fill="currentColor"
          d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
          opacity="0"
        >
          <set attributeName="opacity" begin="0.5s" to="1" />
        </path>
      </g>
      <g fill="currentColor" fillOpacity="0">
        <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
          <animate
            id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
            dur="0.4s"
            values="1;0"
          />
        </path>
      </g>
      <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="22" cy="2" r="3" fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="3;12"
          />
        </circle>
        <circle cx="22" cy="2" r="1">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="1;10"
          />
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="6"
        fill="currentColor"
        mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
      >
        <set attributeName="opacity" begin="0.5s" to="0" />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="6;10"
        />
      </circle>
    </svg>
  );
  
  export const MoonIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray="2"
        strokeDashoffset="2"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="1.2s"
            dur="0.2s"
            values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.2s"
            dur="0.2s"
            values="2;0"
          />
        </path>
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="1.5s"
            dur="0.2s"
            values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.5s"
            dur="1.2s"
            values="2;0"
          />
        </path>
        <animateTransform
          attributeName="transform"
          dur="30s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </g>
      <g fill="currentColor">
        <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
      </g>
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
        <set attributeName="opacity" begin="0.6s" to="0" />
      </g>
      <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="18" cy="6" r="12" fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.6s"
            dur="0.4s"
            values="18;22"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.6s"
            dur="0.4s"
            values="6;2"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="12;3"
          />
        </circle>
        <circle cx="18" cy="6" r="10">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.6s"
            dur="0.4s"
            values="18;22"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.6s"
            dur="0.4s"
            values="6;2"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="10;1"
          />
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="currentColor"
        mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.6s" to="1" />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;6"
        />
      </circle>
    </svg>
  );
