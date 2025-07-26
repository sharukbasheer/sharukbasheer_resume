const About = () => {
  const skillsCount = 16;
  const skillsArray = Array.from({ length: skillsCount }, (_, index) => index);

  // Your actual skills with SVG icons
  const skills = [
    {
      name: "REACT+Vite",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <defs>
            <linearGradient
              id="reactGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#61DAFB" />
              <stop offset="100%" stopColor="#00B5D8" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="10" fill="#282C34" />
          <circle cx="12" cy="12" r="2.5" fill="url(#reactGradient)" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            fill="none"
            stroke="url(#reactGradient)"
            strokeWidth="0.8"
            transform="rotate(0 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            fill="none"
            stroke="url(#reactGradient)"
            strokeWidth="0.8"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            fill="none"
            stroke="url(#reactGradient)"
            strokeWidth="0.8"
            transform="rotate(120 12 12)"
          />
          <circle cx="12" cy="12" r="1" fill="#ffffff" />
        </svg>
      ),
    },
    {
  name: "JavaScript",
  svg: (
    <svg
      viewBox="0 0 512 512"
      className="w-10 h-10 sm:w-12 sm:h-12"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="JavaScript"
      role="img"
    >
      <rect
        width="512"
        height="512"
        rx="15%"
        fill="#f7df1e"
      />
      <path
        d="M324 370c10 17 24 29 47 29c20 0 33-10 33-24c0-16-13-22-35-32l-12-5c-35-15-58-33-58-72c0-36 27-64 70-64c31 0 53 11 68 39l-37 24c-8-15-17-21-31-21c-14 0-23 9-23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67-80 67c-45 0-74-21-88-49zm-170 4c8 13 14 25 31 25c16 0 26-6 26-30V203h48v164c0 50-29 72-72 72c-39 0-61-20-72-44z"
        fill="#000"
      />
    </svg>
  ),
},


    {
  name: "TypeScript",
  svg: (
    <svg
      viewBox="0 0 32 32"
      className="w-10 h-10 sm:w-12 sm:h-12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>file_type_typescript_official</title>
      <defs>
        <linearGradient id="tsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3178C6" />
          <stop offset="100%" stopColor="#2C6EBB" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="1.312"
        fill="url(#tsGradient)"
      />
      <path
        d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"
        fill="#fff"
      />
    </svg>
  ),
},
    {
  name: "WPF",
  svg: (
    <svg
      viewBox="0 0 472 416"
      className="w-10 h-10 sm:w-12 sm:h-12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style type="text/css">
        </style>
        <linearGradient id="wpfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6D59E1" />
          <stop offset="100%" stopColor="#512BD4" />
        </linearGradient>
      </defs>
      <g>
        <path
          className="st0" fill="#0091e8"
          d="M290.5,198.5c-4.1-2.4-8.9-3.5-14.2-3.5s-10,1.2-14.2,3.5c-4.1,2.4-7.1,5.9-9.4,10c-2.4,4.1-3.5,9.4-3.5,14.7s1.2,10.6,3.5,14.7c2.4,4.1,5.9,7.7,9.4,10.6s8.9,3.5,14.2,3.5s10-1.2,14.2-3.5c4.1-2.4,7.1-5.9,9.4-10.6c2.4-4.1,3.5-9.4,3.5-14.7s-1.2-10.6-3.5-14.7C298.1,204.4,294.6,200.9,290.5,198.5z"
        />
        <path
          className="st0" fill="#0091e8"
          d="M322.7,31.6H106.3c-2.5,0-4.8,1.3-6,3.5L3.9,205.1c-1.2,2.1-1.2,4.7,0,6.8l118.1,171.9c1.2,2.1,3.5,3.5,6,3.5h228c2.5,0,4.8-1.3,6-3.5l96.3-169.9c1.2-2.2,1.2-4.9-0.2-7.1L328.5,34.9C327.2,32.8,325,31.6,322.7,31.6z M191.4,267.6h-11.8l-21.8-51.3l-20.7,51.3h-11.2l-29.5-88.5h17.1l19.5,60.7l20.7-46.6h10l20.7,46l18.9-60.2h17.1L191.4,267.6z M315.3,246.3c-3.5,6.5-8.3,11.8-14.8,15.9c-6.5,4.1-13.6,5.9-21.2,5.9c-5.9,0-11.2-1.2-16.5-3.5s-9.4-5.3-13-8.8v47.2h-17.7V180.9h17.7v12.4c2.9-3.5,7.1-7.1,12.4-9.4c5.3-2.9,11.2-4.1,16.5-4.1c8.3,0,15.3,1.8,21.2,5.9c6.5,4.1,11.2,8.8,14.8,15.9c3.5,6.5,5.3,14.2,5.3,23C320.6,232.2,318.8,239.8,315.3,246.3z M380.2,195.7h-18.9v71.8h-15.9v-70.8h-13v-15.9h13v-11.2c0-7.7,2.4-13.6,6.5-18.9c4.7-4.7,10-7.1,17.1-7.1c3.5,0,6.5,0.6,9.4,1.8s5.3,2.9,7.1,5.3l-5.3,13c-1.2-1.2-2.9-2.4-4.1-3.5c-2-0.7-3.3-1.3-5.5-1.1c-5.3,0.5-9.3,5-9.3,10.3v10.9h18.9L380.2,195.7z"
        />
      </g>
    </svg>
  ),
},

    {
      name: "MVVM",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <defs>
            <linearGradient
              id="mvvmGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#9B4F96" />
              <stop offset="100%" stopColor="#68217A" />
            </linearGradient>
            <filter
              id="mvvmShadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feDropShadow
                dx="0"
                dy="1"
                stdDeviation="0.5"
                floodOpacity="0.3"
              />
            </filter>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#1E1E1E" />

          {/* Model */}
          <rect
            x="3"
            y="4"
            width="5"
            height="4"
            rx="1"
            fill="url(#mvvmGradient)"
            filter="url(#mvvmShadow)"
          />
          <text
            x="5.5"
            y="7"
            textAnchor="middle"
            fontSize="3"
            fontWeight="bold"
            fill="#fff"
          >
            M
          </text>

          {/* View */}
          <rect
            x="9.5"
            y="4"
            width="5"
            height="4"
            rx="1"
            fill="url(#mvvmGradient)"
            filter="url(#mvvmShadow)"
          />
          <text
            x="12"
            y="7"
            textAnchor="middle"
            fontSize="3"
            fontWeight="bold"
            fill="#fff"
          >
            V
          </text>

          {/* ViewModel */}
          <rect
            x="16"
            y="4"
            width="5"
            height="4"
            rx="1"
            fill="url(#mvvmGradient)"
            filter="url(#mvvmShadow)"
          />
          <text
            x="18.5"
            y="7"
            textAnchor="middle"
            fontSize="3"
            fontWeight="bold"
            fill="#fff"
          >
            VM
          </text>

          {/* Connections */}
          <path
            d="M5.5 8 L5.5 12 L12 16 L18.5 12 L18.5 8"
            stroke="url(#mvvmGradient)"
            strokeWidth="0.7"
            fill="none"
          />
          <path
            d="M12 8 L12 16"
            stroke="url(#mvvmGradient)"
            strokeWidth="0.7"
            fill="none"
          />

          {/* Data Binding */}
          <circle
            cx="12"
            cy="12"
            r="2"
            fill="url(#mvvmGradient)"
            fillOpacity="0.7"
          />
          <circle cx="12" cy="12" r="1" fill="#1E1E1E" />
        </svg>
      ),
    },
    {
      name: "WinForms",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            fill="#0078D4"
            stroke="#fff"
            strokeWidth="1"
          />
          <rect x="5" y="5" width="14" height="2" fill="#fff" />
          <rect x="5" y="8" width="6" height="6" fill="#fff" opacity="0.8" />
          <rect x="12" y="8" width="7" height="2" fill="#fff" opacity="0.6" />
          <rect x="12" y="11" width="7" height="2" fill="#fff" opacity="0.6" />
        </svg>
      ),
    },
    {
  name: "Avalonia",
  svg: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: '100%', height: '100%' }}
      viewBox="0 0 436 455"
      preserveAspectRatio="none" width="40" height="40"
      className="w-10 h-10 sm:w-12 sm:h-12"
    >
      <defs>
        <svg
          id="svg-818509380_1006"
          width="436"
          height="455"
          fill="none"
        >
          <path
            d="M218.906 155.606c-37.976 0-68.761 32.16-68.761 71.831 0 39.671 30.785 71.831 68.761 71.831 37.975 0 68.76-32.16 68.76-71.831 0-39.671-30.785-71.831-68.76-71.831Z"
            fill="#165BFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M382.876 455H214.448C95.951 452.852.526 351.8.526 227.5.526 101.855 98.027 0 218.3 0 336.622 0 432.903 98.573 436 221.397l-.377 184.716C432.489 433.685 410.113 455 382.876 455ZM78.769 194.8c14.262-67.124 71.588-117.319 140.137-117.319 79.278 0 143.546 67.138 143.546 149.956 0 .621.007 1.295.014 1.985.016 1.437.032 2.949-.014 4.23v142.725h-74.683v-17.334c-20.444 11.698-43.91 18.35-68.863 18.35-68.549 0-125.875-50.195-140.137-117.32 13.654-3.998 23.667-17.096 23.667-32.636 0-15.541-10.013-28.638-23.667-32.637Zm-9.473 56.534c12.687 0 22.971-10.744 22.971-23.997s-10.284-23.996-22.97-23.996c-12.687 0-22.972 10.743-22.972 23.996 0 13.253 10.285 23.997 22.971 23.997Z"
            fill="#165BFF"
          />
        </svg>
      </defs>
      <use href="#svg-818509380_1006" />
    </svg>
  ),
},



    {
      name: "MAUI",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect x="4" y="2" width="16" height="20" rx="3" fill="#512BD4" />
          <rect x="6" y="4" width="12" height="8" rx="1" fill="#fff" />
          <circle cx="12" cy="16" r="1" fill="#fff" />
          <rect x="10" y="18" width="4" height="1" rx="0.5" fill="#fff" />
        </svg>
      ),
    },
   {
  name: "ASP.NET",
  svg: (
    <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
      <g transform="scale(0.1875)">
        <linearGradient id="dot-net-original-a" gradientUnits="userSpaceOnUse" x1="61.631" y1="563.347" x2="62.022" y2="563.347" gradientTransform="matrix(0 149.735 149.735 0 -84296.266 -9188.014)">
          <stop offset="0" stopColor="#0994DC"/>
          <stop offset=".35" stopColor="#66CEF5"/>
          <stop offset=".846" stopColor="#127BCA"/>
          <stop offset="1" stopColor="#127BCA"/>
        </linearGradient>
        <path fill="url(#dot-net-original-a)" d="M45.288 49.559c4.417 13.507 6.09 37.601 19.006 37.601.982 0 1.977-.096 2.974-.286-11.74-2.737-13.132-26.569-20.297-38.912a61.601 61.601 0 00-1.683 1.597"/>
        <linearGradient id="dot-net-original-b" gradientUnits="userSpaceOnUse" x1="61.705" y1="563.34" x2="62.095" y2="563.34" gradientTransform="matrix(0 153.551 153.551 0 -86442.719 -9435.969)">
          <stop offset="0" stopColor="#0E76BC"/>
          <stop offset=".36" stopColor="#36AEE8"/>
          <stop offset=".846" stopColor="#00ADEF"/>
          <stop offset="1" stopColor="#00ADEF"/>
        </linearGradient>
        <path fill="url(#dot-net-original-b)" d="M46.971 47.962c7.165 12.342 8.557 36.174 20.297 38.912a18.621 18.621 0 002.773-.749C59.502 80.961 56.59 57.819 48.453 46.678c-.492.41-.987.839-1.482 1.284"/>
        <path fill="#14559A" d="M57.294 40.623c-.98 0-1.977.096-2.977.286-2.612.493-5.268 1.618-7.944 3.321.73.722 1.427 1.547 2.081 2.448 2.723-2.259 5.427-3.928 8.12-4.932a18.177 18.177 0 013.029-.842 9.393 9.393 0 00-2.309-.281"/>
        <linearGradient id="dot-net-original-c" gradientUnits="userSpaceOnUse" x1="67.486" y1="564.985" x2="67.876" y2="564.985" gradientTransform="matrix(0 -122.178 -122.178 0 69099.289 8331.043)">
          <stop offset="0" stopColor="#1C63B7"/>
          <stop offset=".5" stopColor="#33BDF2"/>
          <stop offset="1" stopColor="#33BDF2" stopOpacity=".42"/>
        </linearGradient>
        <path fill="url(#dot-net-original-c)" d="M78.268 81.366a47.16 47.16 0 003.24-2.84c-4.488-13.443-6.095-37.883-19.101-37.883-.93 0-1.868.087-2.804.26C71.45 43.85 72.968 69.625 78.268 81.366"/>
        <path fill="#3092C4" d="M59.604 40.904a9.355 9.355 0 00-2.311-.282l5.114.019c-.929 0-1.867.086-2.803.263"/>
        <path fill="#1969BC" d="M78.04 84.221a19.441 19.441 0 01-1.466-1.584c-2.188 1.549-4.368 2.724-6.533 3.489.771.376 1.578.656 2.436.829.664.136 1.353.206 2.075.206 2.431 0 4.353-.288 5.987-1.072-.9-.488-1.726-1.118-2.499-1.868"/>
        <linearGradient id="dot-net-original-d" gradientUnits="userSpaceOnUse" x1="61.852" y1="563.281" x2="62.243" y2="563.281" gradientTransform="matrix(0 159.425 159.425 0 -89733.742 -9828.116)">
          <stop offset="0" stopColor="#166AB8"/>
          <stop offset=".4" stopColor="#36AEE8"/>
          <stop offset=".846" stopColor="#0798DD"/>
          <stop offset="1" stopColor="#0798DD"/>
        </linearGradient>
        <path fill="url(#dot-net-original-d)" d="M56.573 41.748c10.611 5.55 11.534 30.684 20.001 40.889.568-.4 1.13-.824 1.691-1.271-5.3-11.741-6.815-37.519-18.66-40.463-1.011.189-2.02.469-3.032.845"/>
        <linearGradient id="dot-net-original-e" gradientUnits="userSpaceOnUse" x1="61.975" y1="563.367" x2="62.366" y2="563.367" gradientTransform="matrix(0 169.528 169.528 0 -95443.742 -10473.372)">
          <stop offset="0" stopColor="#124379"/>
          <stop offset=".39" stopColor="#1487CB"/>
          <stop offset=".78" stopColor="#165197"/>
          <stop offset="1" stopColor="#165197"/>
        </linearGradient>
        <path fill="url(#dot-net-original-e)" d="M48.453 46.678c8.137 11.141 11.049 34.284 21.588 39.448 2.166-.765 4.346-1.939 6.533-3.489-8.467-10.205-9.39-35.338-20.001-40.889-2.693 1.002-5.397 2.671-8.12 4.93"/>
        <linearGradient id="dot-net-original-f" gradientUnits="userSpaceOnUse" x1="1006.454" y1="-1412.08" x2="1008.771" y2="-1412.08" gradientTransform="matrix(4.038 0 0 -4.038 -4028.633 -5649.283)">
          <stop offset="0" stopColor="#33BDF2" stopOpacity=".698"/>
          <stop offset="1" stopColor="#1DACD8"/>
        </linearGradient>
        <path fill="url(#dot-net-original-f)" d="M40.083 49.234c-1.275 2.883-2.578 6.674-4.152 11.621 3.131-4.413 6.253-8.214 9.357-11.295a33.873 33.873 0 00-1.382-3.606 46.113 46.113 0 00-3.823 3.28"/>
        <path fill="#2B74B1" d="M45.037 45.121c-.374.268-.751.542-1.13.832.495 1.08.953 2.292 1.38 3.607a66.502 66.502 0 011.684-1.597 22.346 22.346 0 00-1.934-2.842"/>
        <path fill="#125A9E" d="M46.373 44.229c-.445.282-.888.58-1.337.891.695.855 1.333 1.81 1.936 2.844.495-.448.989-.879 1.482-1.287-.654-.9-1.35-1.726-2.081-2.448"/>
        <linearGradient id="dot-net-original-g" gradientUnits="userSpaceOnUse" x1="67.564" y1="565.48" x2="67.954" y2="565.48" gradientTransform="matrix(0 -119.018 -119.018 0 67408.578 8125.832)">
          <stop offset="0" stopColor="#136AB4"/>
          <stop offset=".6" stopColor="#59CAF5" stopOpacity=".549"/>
          <stop offset="1" stopColor="#59CAF5" stopOpacity=".235"/>
        </linearGradient>
        <path fill="url(#dot-net-original-g)" d="M118.751 39.594c-6.001 23.144-18.536 41.734-29.044 46.42h-.021l-.567.243-.069.027-.161.062-.072.03-.263.093-.108.038-.131.043-.126.044-.112.038-.224.068-.096.025-.151.041-.103.028-.165.043-.201.044c.475.175.97.264 1.503.264 9.965 0 20.013-17.858 36.638-47.556h-6.528l.001.005z"/>
        <linearGradient id="dot-net-original-h" gradientUnits="userSpaceOnUse" x1="998.231" y1="-1414.829" x2="1006.826" y2="-1414.829" gradientTransform="matrix(4.038 0 0 -4.038 -4028.633 -5649.283)">
          <stop offset="0" stopColor="#05A1E6" stopOpacity=".247"/>
          <stop offset="1" stopColor="#05A1E6"/>
        </linearGradient>
        <path fill="url(#dot-net-original-h)" d="M33.766 41.563l.019-.016.023-.015h.013l.161-.062.032-.016.042-.017.173-.062h.009l.383-.134.057-.015.164-.049.075-.024.165-.049.063-.017.548-.142.075-.017.16-.031.078-.024.161-.30h.038l.333-.062h.066l.154-.027.087-.015.147-.022.081-.016.358-.032a11.467 11.467 0 00-1.061-.054c-11.223 0-26.685 20.822-33.649 47.788h1.343a390.312 390.312 0 006.062-11.266c4.879-19.1 14.814-32.126 23.64-35.577"/>
        <path fill="#0D82CA" d="M40.083 49.234a46.488 46.488 0 013.823-3.281 17.961 17.961 0 00-.911-1.761c-1.026 1.246-1.964 2.89-2.912 5.042"/>
        <path fill="#0D82CA" d="M41.005 41.72c.733.614 1.39 1.46 1.99 2.473.189-.232.381-.447.58-.649a11.263 11.263 0 00-2.712-1.897l.12.057.022.016"/>
        <linearGradient id="dot-net-original-i" gradientUnits="userSpaceOnUse" x1="67.491" y1="564.359" x2="67.881" y2="564.359" gradientTransform="matrix(0 -121.865 -121.865 0 68797.742 8310.488)">
          <stop offset="0" stopColor="#318ED5"/>
          <stop offset="1" stopColor="#38A7E4"/>
        </linearGradient>
        <path fill="url(#dot-net-original-i)" d="M10.127 77.138c10.233-19.719 15.081-32.199 23.64-35.577-8.825 3.454-18.762 16.479-23.64 35.577"/>
        <path fill="#127BCA" d="M43.574 43.544c-.199.204-.389.417-.58.649.322.538.621 1.124.913 1.76.378-.29.756-.563 1.129-.832a15.351 15.351 0 00-1.462-1.577"/>
        <linearGradient id="dot-net-original-j" gradientUnits="userSpaceOnUse" x1="67.593" y1="564.41" x2="67.984" y2="564.41" gradientTransform="matrix(0 -118.46 -118.46 0 66884.703 8093.017)">
          <stop offset="0" stopColor="#05A1E6"/>
          <stop offset="1" stopColor="#05A1E6" stopOpacity=".549"/>
        </linearGradient>
        <path fill="url(#dot-net-original-j)" d="M14.773 88.315l-.186.022h-.035l-.158.016h-.026l-.376.025h-.039c10.356-.29 15.091-5.475 17.44-12.997 1.785-5.701 3.252-10.505 4.537-14.535-4.338 6.106-8.696 13.384-13.077 21.539-2.112 3.93-5.325 5.572-8.08 5.922"/>
        <linearGradient id="dot-net-original-k" gradientUnits="userSpaceOnUse" x1="68.291" y1="564.525" x2="68.682" y2="564.525" gradientTransform="matrix(0 -100.1 -100.1 0 56536.551 6924.301)">
          <stop offset="0" stopColor="#1959A6"/>
          <stop offset=".5" stopColor="#05A1E6"/>
          <stop offset=".918" stopColor="#7EC5EA"/>
          <stop offset="1" stopColor="#7EC5EA"/>
        </linearGradient>
        <path fill="url(#dot-net-original-k)" d="M14.773 88.311c2.755-.351 5.968-1.991 8.08-5.923 4.381-8.151 8.741-15.431 13.075-21.538 1.577-4.949 2.878-8.737 4.154-11.621-8.639 8.223-17.311 21.896-25.31 39.077"/>
        <path fill="#05A1E6" d="M10.127 77.139a388.004 388.004 0 01-6.063 11.266h3.904a95.502 95.502 0 012.158-11.264"/>
        <linearGradient id="dot-net-original-l" gradientUnits="userSpaceOnUse" x1="67.892" y1="563.82" x2="68.282" y2="563.82" gradientTransform="scale(-110.211 110.211) rotate(-80 -301.688 322.91)">
          <stop offset="0" stopColor="#165096"/>
          <stop offset="1" stopColor="#0D82CA"/>
        </linearGradient>
        <path fill="url(#dot-net-original-l)" d="M37.073 40.709l-.083.016-.146.021-.086.015-.154.027-.066.016-.333.058h-.038l-.162.032-.081.022-.157.031-.074.018-.549.142-.063.018-.166.049-.075.021-.163.049-.06.016-.381.134-.173.06-.072.30-.161.06-.054.026c-8.558 3.377-13.406 15.857-23.639 35.576A94.655 94.655 0 007.979 88.41h.547l3.755-.016h1.723l.375-.025h.024l.158-.016h.037l.186-.022c8-17.182 16.672-30.854 25.31-39.077.95-2.152 1.887-3.796 2.911-5.04-.6-1.013-1.256-1.861-1.988-2.476l-.021-.016-.122-.059-.121-.061-.117-.057-.139-.058-.108-.047-.227-.095-.097-.036-.169-.068-.091-.03-.235-.081h-.019l-.272-.077-.061-.019-.229-.064-.053-.015a7.851 7.851 0 00-.569-.125l-.059-.016-.247-.04-.049-.015-.292-.039h-.051l-.226-.025-.358.033"/>
        <linearGradient id="dot-net-original-m" gradientUnits="userSpaceOnUse" x1="70.847" y1="566.882" x2="71.237" y2="566.882" gradientTransform="matrix(0 -56.721 -56.721 0 32252.127 4080.282)">
          <stop offset="0" stopColor="#05A1E6"/>
          <stop offset=".874" stopColor="#0495D6"/>
          <stop offset="1" stopColor="#0495D6"/>
        </linearGradient>
        <path fill="url(#dot-net-original-m)" d="M95.311 52.407c-1.97 6.307-3.563 11.51-4.952 15.791 5.403-7.435 10.725-16.787 15.792-27.579-5.913 1.857-9.065 6.107-10.84 11.788"/>
        <linearGradient id="dot-net-original-n" gradientUnits="userSpaceOnUse" x1="61.634" y1="562.213" x2="62.024" y2="562.213" gradientTransform="scale(-132.813 132.813) rotate(80 365.248 244.034)">
          <stop offset="0" stopColor="#38A7E4" stopOpacity=".329"/>
          <stop offset=".962" stopColor="#0E88D3"/>
          <stop offset="1" stopColor="#0E88D3"/>
        </linearGradient>
        <path fill="url(#dot-net-original-n)" d="M90.53 85.621c-.275.14-.552.273-.823.394 10.508-4.687 23.044-23.277 29.044-46.421h-1.216c-13.788 24.631-18.222 41.12-27.005 46.027"/>
        <path fill="#079AE1" d="M83.668 83.552c2.287-2.791 4.148-7.535 6.691-15.354-2.933 4.029-5.885 7.492-8.84 10.316l-.015.025c.645 1.931 1.352 3.636 2.158 5.012"/>
        <path fill="#1969BC" d="M83.668 83.552c-.778.95-1.603 1.673-2.519 2.209-.2.117-.404.227-.61.327a8.839 8.839 0 003.206 1.011l.524.046h.031l.252.016h.855l.097-.016.189-.016h.092l.205-.022h.017l.063-.015.219-.034h.064l.246-.041h.04l.491-.104c-1.357-.496-2.492-1.667-3.469-3.334"/>
        <path fill="#1E5CB3" d="M64.295 87.161c.982 0 1.976-.096 2.973-.288a18.309 18.309 0 002.773-.747c.771.376 1.579.656 2.435.831.664.135 1.354.205 2.077.205H64.295zM74.553 87.161c2.429 0 4.353-.288 5.986-1.073a8.84 8.84 0 003.206 1.012l.524.045h.031l.252.016h.302-10.301z"/>
        <path fill="#1D60B5" d="M84.854 87.161h.561l.097-.016.191-.016h.092l.204-.022h.017l.062-.016.219-.033.067-.015.247-.04h.039l.491-.104c.475.175.97.264 1.503.264l-3.788.016-.002-.018z"/>
        <path fill="#175FAB" d="M81.511 78.54v-.016a47.16 47.16 0 01-3.24 2.84 36.81 36.81 0 01-1.693 1.271c.476.568.959 1.1 1.468 1.585.772.749 1.597 1.38 2.498 1.867.205-.101.41-.211.609-.327.918-.536 1.741-1.26 2.52-2.209-.806-1.376-1.513-3.082-2.157-5.012"/>
        <linearGradient id="dot-net-original-o" gradientUnits="userSpaceOnUse" x1="61.149" y1="562.654" x2="61.539" y2="562.654" gradientTransform="matrix(0 123.742 123.742 0 -69523.625 -7527.189)">
          <stop offset="0" stopColor="#168CD4"/>
          <stop offset=".5" stopColor="#1C87CC"/>
          <stop offset="1" stopColor="#154B8D"/>
        </linearGradient>
        <path fill="url(#dot-net-original-o)" d="M113.685 39.594h-6.121l-.97.047-.451.966c-5.068 10.793-10.388 20.145-15.791 27.58-2.54 7.818-4.404 12.563-6.69 15.353.977 1.668 2.114 2.84 3.466 3.337l.106-.023h.022l.075-.016.17-.042.101-.029.151-.039.094-.027.226-.068.112-.038.126-.046.13-.041.106-.04.264-.093.073-.027.162-.063.068-.025.568-.243h.02c.271-.119.547-.254.821-.394 8.785-4.908 13.22-21.396 27.008-46.026h-3.851l.005-.003z"/>
        <path fill="#7DCBEC" d="M37.433 40.677l.063.016.16.017h.054l.292.038.049.016.246.041.062.015.567.126.052.016.228.064.063.019.271.077.021.016.237.081.09.029.17.069.096.034.226.094.11.047.136.059.12.057.119.062c.979.48 1.879 1.121 2.713 1.898.308-.323.628-.613.962-.874-1.823-1.293-3.89-2.03-6.271-2.03-.276 0-.552.016-.832.037"/>
        <path fill="#5EC5ED" d="M43.574 43.544c.511.475 1 1.005 1.462 1.577.448-.311.892-.611 1.337-.891a14.13 14.13 0 00-1.839-1.56c-.333.26-.652.552-.96.874"/>
        <g transform="matrix(5.048 0 0 -5.048 -9064.26 2270.61)">
          <linearGradient id="dot-net-original-p" gradientUnits="userSpaceOnUse" x1="1806.96" y1="336.158" x2="1807.35" y2="336.158" gradientTransform="scale(30.857 -30.857) rotate(22.527 1812.675 -4228.953)">
            <stop offset="0" stopColor="#97D6EE"/>
            <stop offset=".703" stopColor="#55C1EA"/>
            <stop offset="1" stopColor="#55C1EA"/>
          </linearGradient>
          <path fill="url(#dot-net-original-p)" d="M1802.977 441.733l.165.007c.472 0 .881-.146 1.242-.402.381.301.842.406 1.482.406h-3.099l.21-.011"/>
        </g>
        <g transform="matrix(5.048 0 0 -5.048 -9064.26 2270.61)">
          <linearGradient id="dot-net-original-q" gradientUnits="userSpaceOnUse" x1="1808.848" y1="335.171" x2="1809.238" y2="335.171" gradientTransform="scale(24.717 -24.717) rotate(-24.385 124.122 4175.416)">
            <stop offset="0" stopColor="#7ACCEC"/>
            <stop offset="1" stopColor="#3FB7ED"/>
          </linearGradient>
          <path fill="url(#dot-net-original-q)" d="M1805.866 441.744c-.64 0-1.1-.105-1.482-.406.126-.089.248-.193.364-.309.531.337 1.056.561 1.574.658.198.037.395.056.589.056h-1.045v.001z"/>
        </g>
        <linearGradient id="dot-net-original-r" gradientUnits="userSpaceOnUse" x1="61.049" y1="562.706" x2="61.439" y2="562.706" gradientTransform="matrix(0 121.032 121.032 0 -68011.711 -7346.748)">
          <stop offset="0" stopColor="#1DA7E7"/>
          <stop offset="1" stopColor="#37ABE7" stopOpacity="0"/>
        </linearGradient>
        <path fill="url(#dot-net-original-r)" d="M90.359 68.202c1.391-4.284 2.98-9.485 4.954-15.794 1.777-5.684 4.925-9.934 10.835-11.788l.456-.966c-9.636.577-14.14 5.479-16.405 12.738-3.964 12.673-6.365 20.888-8.677 26.123 2.952-2.823 5.904-6.288 8.837-10.313"/>
      </g>
    </svg>
  ),
},
    {
      name: "Web API",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect x="2" y="6" width="20" height="12" rx="2" fill="#FF6B35" />
          <path d="M6 10h12M6 12h8M6 14h10" stroke="#fff" strokeWidth="1.5" />
          <circle cx="18" cy="10" r="1" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "Entity Framework",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect x="3" y="4" width="18" height="16" rx="2" fill="#67B7DC" />
          <rect x="5" y="6" width="4" height="3" fill="#fff" />
          <rect x="10" y="6" width="4" height="3" fill="#fff" />
          <rect x="15" y="6" width="4" height="3" fill="#fff" />
          <rect x="5" y="11" width="4" height="3" fill="#fff" />
          <rect x="10" y="11" width="4" height="3" fill="#fff" />
          <rect x="15" y="11" width="4" height="3" fill="#fff" />
          <rect x="5" y="16" width="4" height="2" fill="#fff" />
          <rect x="10" y="16" width="4" height="2" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "SQL Server",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#CC2927" />
          <path d="M7 8h10v2H7zM7 11h8v2H7zM7 14h10v2H7z" fill="#fff" />
          <circle cx="18" cy="7" r="1" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "Dapper",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <circle cx="12" cy="12" r="10" fill="#FF8C00" />
          <path d="M8 10L12 6L16 10L12 14Z" fill="#fff" />
          <path d="M10 12L12 14L14 12" fill="#FF8C00" />
        </svg>
      ),
    },
    {
      name: "Git",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <defs>
            <linearGradient
              id="gitGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F05133" />
              <stop offset="100%" stopColor="#D83A34" />
            </linearGradient>
            <filter id="gitShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="1"
                stdDeviation="0.5"
                floodOpacity="0.3"
              />
            </filter>
          </defs>
          <circle cx="12" cy="12" r="10" fill="#FFFFFF" />
          <path
            d="M21.4 11.3l-8.7-8.7a1.3 1.3 0 0 0-1.8 0l-1.8 1.8 2.3 2.3a1.5 1.5 0 0 1 1.9 1.9l2.2 2.2a1.5 1.5 0 1 1-.9.9l-2-2v5.4a1.5 1.5 0 1 1-1.3-.1V8.7a1.5 1.5 0 0 1-.8-2l-2.2-2.2-5.8 5.8a1.3 1.3 0 0 0 0 1.8l8.7 8.7a1.3 1.3 0 0 0 1.8 0l8.7-8.7a1.3 1.3 0 0 0 0-1.8z"
            fill="url(#gitGradient)"
            filter="url(#gitShadow)"
          />
          <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "DevOps",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <circle cx="12" cy="12" r="10" fill="#0078D4" />
          <path
            d="M8 12C8 8 12 8 12 8S16 8 16 12C16 16 12 16 12 16S8 16 8 12Z"
            fill="#fff"
          />
          <circle cx="12" cy="12" r="2" fill="#0078D4" />
        </svg>
      ),
    },
    {
      name: "Postman",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12">
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path d="M12 6L18 12L12 18L6 12Z" fill="#fff" />
          <path d="M12 9L15 12L12 15L9 12Z" fill="#FF6C37" />
        </svg>
      ),
    },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-300/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-6">
        {/* Skills Section */}
        <section className="max-w-7xl mx-auto mb-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 animate-gradient-x">
              Skills
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mt-4 rounded-full animate-pulse"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 justify-items-center">
            {skillsArray.map((_, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-3 p-3 w-28 h-32 sm:w-32 sm:h-36 flex flex-col items-center justify-center overflow-hidden animate-fade-in hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-slate-700 dark:hover:to-slate-600"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Animated border */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"
                  style={{ padding: "2px" }}
                >
                  <div className="w-full h-full bg-white dark:bg-slate-800 rounded-2xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                  <div className="mb-2 group-hover:scale-125 transition-all duration-500 filter drop-shadow-lg group-hover:drop-shadow-xl">
                    {skills[index]?.svg}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {skills[index]?.name || "Skill"}
                  </span>
                  <div className="w-full h-1 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2 rounded-full"></div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 dark:from-pink-400/20 dark:via-purple-400/20 dark:to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
            ))}
          </div>
        </section>

        {/* About Sections */}
        <section className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Card Template */}
            {[
              {
                title: "Schooling",
                icon: "🎓",
                gradient:
                  "from-blue-500 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500",
                bg: "bg-blue-100 dark:bg-blue-900/30",
                text: "Completed BE Computer Science Engineering at Sri Shakthi Institute of Engineering and Technology (2018-2022). Strong foundation in programming, algorithms, and software development principles.",
                borderGradient: "from-blue-400 to-purple-500",
              },
              {
                title: "Experience",
                icon: "💼",
                gradient:
                  "from-green-500 via-emerald-500 to-teal-600 dark:from-green-400 dark:via-emerald-400 dark:to-teal-500",
                bg: "bg-green-100 dark:bg-green-900/30",
                text: "3+ years of professional experience as a Software Engineer at Lucid Imaging. Specialized in building scalable applications using .NET technologies, web development, and modern frameworks.",
                borderGradient: "from-green-400 to-teal-500",
              },
              {
                title: "Personal Details",
                icon: "👤",
                gradient:
                  "from-pink-500 via-rose-500 to-red-600 dark:from-pink-400 dark:via-rose-400 dark:to-red-500",
                bg: "bg-pink-100 dark:bg-pink-900/30",
                text: "Located in Coimbatore, Tamil Nadu. Passionate about creating innovative solutions and staying updated with the latest technologies. Contact: +91 9486000198",
                borderGradient: "from-pink-400 to-red-500",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl border-2 border-gray-200/50 dark:border-slate-700/50 hover:border-transparent shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-2 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                {/* Animated border */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${card.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5 animate-gradient-x`}
                >
                  <div className="w-full h-full bg-white dark:bg-slate-800 rounded-3xl"></div>
                </div>

                {/* Top gradient bar */}
                <div
                  className={`bg-gradient-to-r ${card.gradient} h-2 relative z-10`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>

                <div className="p-8 text-center relative z-10">
                  {/* Icon container */}
                  <div
                    className={`w-20 h-20 ${card.bg} border-4 border-white dark:border-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-full"></div>
                    <span className="text-3xl relative z-10 group-hover:scale-110 transition-transform duration-500">
                      {card.icon}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 dark:group-hover:from-pink-400 dark:group-hover:to-blue-400 transition-all duration-500">
                    {card.title}
                  </h2>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                    {card.text}
                  </p>

                  {/* Bottom decoration */}
                  <div
                    className={`w-0 group-hover:w-16 h-1 bg-gradient-to-r ${card.gradient} mx-auto mt-4 rounded-full transition-all duration-500`}
                  ></div>
                </div>

                {/* Background glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
