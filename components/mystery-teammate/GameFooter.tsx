export function GameFooter() {
  return (
    <div className="w-full flex justify-center pb-3 sm:pb-4 md:pb-6">
      <div className="flex gap-2 sm:gap-4 md:gap-6 bg-[#1414141A] backdrop-blur-sm rounded-full p-2 sm:p-3 md:p-4">
        {/* Navigation icons */}
        <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-1.5 sm:p-2 md:p-3 rounded-full bg-[#0F0F0F1A] flex items-center justify-center">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 9.3335H24.5V14.0002C24.5 16.75 24.5 18.125 23.6457 18.9792C22.7915 19.8335 21.4165 19.8335 18.6667 19.8335H9.33333C6.58347 19.8335 5.20854 19.8335 4.35427 18.9792C3.5 18.125 3.5 16.75 3.5 14.0002V9.3335Z"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8.16797 7.00016C8.16797 4.80027 8.16797 3.70033 8.85139 3.01691C9.5348 2.3335 10.6347 2.3335 12.8346 2.3335H15.168C17.3679 2.3335 18.4678 2.3335 19.1512 3.01691C19.8346 3.70033 19.8346 4.80027 19.8346 7.00016V9.3335H8.16797V7.00016Z"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M5.83398 19.8335V25.6668M22.1673 19.8335V25.6668"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9.33398 19.8335V23.3335M18.6673 19.8335V23.3335"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M2.33398 9.3335L4.4552 9.3335M23.5461 9.3335L25.6673 9.3335"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-1.5 sm:p-2 md:p-3 rounded-full bg-[#0F0F0F1A] flex items-center justify-center">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 17.5002C3.5 14.2231 3.5 12.5845 4.28648 11.4075C4.62695 10.8979 5.06445 10.4604 5.57401 10.12C6.75105 9.3335 8.38959 9.3335 11.6667 9.3335H16.3333C19.6104 9.3335 21.249 9.3335 22.426 10.12C22.9355 10.4604 23.3731 10.8979 23.7135 11.4075C24.5 12.5845 24.5 14.2231 24.5 17.5002C24.5 20.7772 24.5 22.4158 23.7135 23.5928C23.3731 24.1024 22.9355 24.5399 22.426 24.8804C21.249 25.6668 19.6104 25.6668 16.3333 25.6668H11.6667C8.38959 25.6668 6.75105 25.6668 5.57401 24.8804C5.06445 24.5399 4.62695 24.1024 4.28648 23.5928C3.5 22.4158 3.5 20.7772 3.5 17.5002Z"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.584 19.2503C14.584 20.2168 13.8005 21.0003 12.834 21.0003C11.8675 21.0003 11.084 20.2168 11.084 19.2503C11.084 18.2838 11.8675 17.5003 12.834 17.5003C13.8005 17.5003 14.584 18.2838 14.584 19.2503ZM14.584 19.2503V13.417C14.584 13.417 15.0507 15.4392 16.9173 15.7503"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.1673 9.3335C22.1464 7.88708 22.039 7.06705 21.4886 6.51691C20.8048 5.8335 19.7043 5.8335 17.5032 5.8335H10.4981C8.29703 5.8335 7.19649 5.8335 6.5127 6.51691C5.96227 7.06705 5.85492 7.88708 5.83398 9.3335"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.8327 5.8335C19.8327 4.7463 19.8327 4.2027 19.6551 3.7739C19.4182 3.20217 18.964 2.74793 18.3923 2.51111C17.9635 2.3335 17.4199 2.3335 16.3327 2.3335H11.666C10.5788 2.3335 10.0352 2.3335 9.60642 2.51111C9.03469 2.74793 8.58045 3.20217 8.34363 3.7739C8.16602 4.2027 8.16602 4.7463 8.16602 5.8335"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-1.5 sm:p-2 md:p-3 rounded-full bg-[#0F0F0F1A] flex items-center justify-center">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.08398 21C4.08398 19.3501 4.08398 18.5251 4.59655 18.0126C5.10911 17.5 5.93407 17.5 7.58398 17.5H8.16732C9.26726 17.5 9.81723 17.5 10.1589 17.8417C10.5007 18.1834 10.5007 18.7334 10.5007 19.8333V25.6667H4.08398V21Z"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 22.1668C17.5 21.0669 17.5 20.5169 17.8417 20.1752C18.1834 19.8335 18.7334 19.8335 19.8333 19.8335H20.4167C22.0666 19.8335 22.8915 19.8335 23.4041 20.3461C23.9167 20.8586 23.9167 21.6836 23.9167 23.3335V25.6668H17.5V22.1668Z"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.33398 25.667H25.6673"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 18.667C10.5 17.0171 10.5 16.1921 11.0126 15.6796C11.5251 15.167 12.3501 15.167 14 15.167C15.6499 15.167 16.4749 15.167 16.9874 15.6796C17.5 16.1921 17.5 17.0171 17.5 18.667V25.667H10.5V18.667Z"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.8069 3.00745L15.6281 4.6635C15.7401 4.89404 16.0387 5.11516 16.2907 5.1575L17.7792 5.40685C18.7311 5.56681 18.9551 6.26311 18.2692 6.94999L17.112 8.11676C16.916 8.31436 16.8087 8.69544 16.8693 8.96832L17.2006 10.4127C17.4619 11.5559 16.86 11.9982 15.8568 11.4007L14.4616 10.5679C14.2096 10.4174 13.7943 10.4174 13.5377 10.5679L12.1425 11.4007C11.144 11.9982 10.5374 11.5512 10.7987 10.4127L11.13 8.96832C11.1906 8.69544 11.0833 8.31436 10.8873 8.11676L9.73011 6.94999C9.04885 6.26311 9.26816 5.56681 10.2201 5.40685L11.7086 5.1575C11.9559 5.11516 12.2545 4.89404 12.3665 4.6635L13.1877 3.00745C13.6357 2.10885 14.3636 2.10885 14.8069 3.00745Z"
              stroke="#CCCCCC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 p-1.5 sm:p-2 md:p-3 rounded-full bg-[#0F0F0F1A] flex items-center justify-center">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.5007 20.4168C24.5007 22.672 22.6725 24.5002 20.4173 24.5002C18.1622 24.5002 16.334 22.672 16.334 20.4168C16.334 18.1617 18.1622 16.3335 20.4173 16.3335C22.6725 16.3335 24.5007 18.1617 24.5007 20.4168Z"
              stroke="#CCCCCC"
              strokeWidth="2"
            />
            <path
              d="M20.4167 16.3335H7.58333C5.32817 16.3335 3.5 18.1617 3.5 20.4168C3.5 22.672 5.32817 24.5002 7.58333 24.5002H20.4167C22.6718 24.5002 24.5 22.672 24.5 20.4168C24.5 18.1617 22.6718 16.3335 20.4167 16.3335Z"
              stroke="#CCCCCC"
              strokeWidth="2"
            />
            <path
              d="M3.49935 7.58333C3.49935 9.8385 5.32752 11.6667 7.58268 11.6667C9.83784 11.6667 11.666 9.8385 11.666 7.58333C11.666 5.32817 9.83784 3.5 7.58268 3.5C5.32752 3.5 3.49935 5.32817 3.49935 7.58333Z"
              stroke="#CCCCCC"
              strokeWidth="2"
            />
            <path
              d="M7.58333 3.5H20.4167C22.6718 3.5 24.5 5.32817 24.5 7.58333C24.5 9.8385 22.6718 11.6667 20.4167 11.6667H7.58334C5.32817 11.6667 3.5 9.8385 3.5 7.58333C3.5 5.32817 5.32817 3.5 7.58333 3.5Z"
              stroke="#CCCCCC"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
