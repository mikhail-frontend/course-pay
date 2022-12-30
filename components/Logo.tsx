import React from 'react';

const Logo: React.FC<{ className?: string, onClick?: () => void }> =
    ({
         className, onClick = () => {
        }, ...rest
     }) => {
        const style: Record<string, string> = {'mask-type': 'alpha'}

        return (
            <svg width="150" height="48" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                 {...rest}
                 onClick={onClick}
                 className={className}>
                <g clipPath="url(#clip0_21_612)">

                    <mask id="mask0_21_612" style={style} maskUnits="userSpaceOnUse" x="0" y="9" width="29" height="30">
                    <path d="M17.4807 9.24111C21.9834 9.9282 25.988 12.1482 28.9554 15.3579C28.982 15.8263 28.9956 16.2983 28.9956 16.7734C28.9956 26.732 23.0263 35.2832 14.5018 38.9807C13.4232 38.5131 12.3855 37.9673 11.3959 37.3509L11.399 37.3527L20.635 19.8942L14.1625 23.2534L17.4807 9.24111ZM14.5018 9.01562C15.3485 9.01562 16.1834 9.06906 17.0019 9.17413L5.95529 30.2807L10.9489 28.2135L9.46235 36.0101C3.71709 31.5971 0.0078125 24.6229 0.0078125 16.7734C0.0078125 16.2983 0.021445 15.8261 0.0482968 15.3577C3.65595 11.4554 8.79663 9.01562 14.5018 9.01562Z" fill="url(#paint0_linear_21_612)"/>
                </mask>
                <g mask="url(#mask0_21_612)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M-26.8047 73.1482H55.8156V-10.2422H-26.8047V73.1482Z" fill="url(#paint1_linear_21_612)"/>
                </g>
            </g>
            <path d="M50.468 32.33C49.2727 32.33 48.2607 32.0623 47.432 31.527C46.6033 30.9917 45.9727 30.2547 45.54 29.316C45.1147 28.37 44.8947 27.2847 44.88 26.06C44.8947 24.8133 45.122 23.7207 45.562 22.782C46.002 21.836 46.6363 21.1027 47.465 20.582C48.2937 20.054 49.2983 19.79 50.479 19.79C51.6817 19.79 52.7267 20.0833 53.614 20.67C54.5087 21.2567 55.121 22.0597 55.451 23.079L53.867 23.585C53.5883 22.8737 53.1447 22.3237 52.536 21.935C51.9347 21.539 51.2453 21.341 50.468 21.341C49.5953 21.341 48.873 21.5427 48.301 21.946C47.729 22.342 47.3037 22.8957 47.025 23.607C46.7463 24.3183 46.6033 25.136 46.596 26.06C46.6107 27.4827 46.9407 28.6267 47.586 29.492C48.2313 30.35 49.192 30.779 50.468 30.779C51.2747 30.779 51.9603 30.5957 52.525 30.229C53.097 29.855 53.5297 29.3123 53.823 28.601L55.451 29.085C55.011 30.141 54.3657 30.9477 53.515 31.505C52.6643 32.055 51.6487 32.33 50.468 32.33ZM62.3604 32.33C61.1797 32.33 60.1714 32.0623 59.3354 31.527C58.4994 30.9917 57.8577 30.251 57.4104 29.305C56.963 28.359 56.7394 27.2737 56.7394 26.049C56.7394 24.8023 56.9667 23.7097 57.4214 22.771C57.876 21.8323 58.5214 21.1027 59.3574 20.582C60.2007 20.054 61.2017 19.79 62.3604 19.79C63.5484 19.79 64.5604 20.0577 65.3964 20.593C66.2397 21.121 66.8814 21.858 67.3214 22.804C67.7687 23.7427 67.9924 24.8243 67.9924 26.049C67.9924 27.2957 67.7687 28.392 67.3214 29.338C66.874 30.2767 66.2287 31.01 65.3854 31.538C64.542 32.066 63.5337 32.33 62.3604 32.33ZM62.3604 30.779C63.6804 30.779 64.663 30.3427 65.3084 29.47C65.9537 28.59 66.2764 27.4497 66.2764 26.049C66.2764 24.6117 65.95 23.4677 65.2974 22.617C64.652 21.7663 63.673 21.341 62.3604 21.341C61.473 21.341 60.7397 21.5427 60.1604 21.946C59.5884 22.342 59.1594 22.8957 58.8734 23.607C58.5947 24.311 58.4554 25.125 58.4554 26.049C58.4554 27.479 58.7854 28.6267 59.4454 29.492C60.1054 30.35 61.077 30.779 62.3604 30.779ZM74.9619 32.297C74.2506 32.297 73.6272 32.187 73.0919 31.967C72.5639 31.747 72.1129 31.45 71.7389 31.076C71.3722 30.702 71.0752 30.2767 70.8479 29.8C70.6206 29.316 70.4556 28.8063 70.3529 28.271C70.2502 27.7283 70.1989 27.1893 70.1989 26.654V20.12H71.8269V26.181C71.8269 26.8337 71.8892 27.4387 72.0139 27.996C72.1386 28.5533 72.3366 29.041 72.6079 29.459C72.8866 29.8697 73.2422 30.1887 73.6749 30.416C74.1149 30.6433 74.6466 30.757 75.2699 30.757C75.8419 30.757 76.3442 30.658 76.7769 30.46C77.2169 30.262 77.5836 29.9797 77.8769 29.613C78.1776 29.239 78.4049 28.788 78.5589 28.26C78.7129 27.7247 78.7899 27.1233 78.7899 26.456L79.9339 26.709C79.9339 27.9263 79.7212 28.9493 79.2959 29.778C78.8706 30.6067 78.2839 31.2337 77.5359 31.659C76.7879 32.0843 75.9299 32.297 74.9619 32.297ZM78.9549 32V29.074H78.7899V20.12H80.4069V32H78.9549ZM83.4814 32V20.12H84.9334V22.98L84.6474 22.606C84.7794 22.254 84.9517 21.9313 85.1644 21.638C85.3771 21.3373 85.6081 21.0917 85.8574 20.901C86.1654 20.6297 86.5247 20.4243 86.9354 20.285C87.3461 20.1383 87.7604 20.054 88.1784 20.032C88.5964 20.0027 88.9777 20.032 89.3224 20.12V21.638C88.8897 21.528 88.4167 21.5023 87.9034 21.561C87.3901 21.6197 86.9171 21.825 86.4844 22.177C86.0884 22.485 85.7914 22.8553 85.5934 23.288C85.3954 23.7133 85.2634 24.168 85.1974 24.652C85.1314 25.1287 85.0984 25.6017 85.0984 26.071V32H83.4814ZM95.4125 32.319C94.0191 32.319 92.8715 32.0183 91.9695 31.417C91.0748 30.8157 90.5248 29.9797 90.3195 28.909L91.9695 28.634C92.1455 29.3087 92.5451 29.8477 93.1685 30.251C93.7991 30.647 94.5765 30.845 95.5005 30.845C96.4025 30.845 97.1138 30.658 97.6345 30.284C98.1551 29.9027 98.4155 29.3857 98.4155 28.733C98.4155 28.3663 98.3311 28.0693 98.1625 27.842C98.0011 27.6073 97.6675 27.391 97.1615 27.193C96.6555 26.995 95.9001 26.7603 94.8955 26.489C93.8175 26.1957 92.9741 25.9023 92.3655 25.609C91.7568 25.3157 91.3241 24.9783 91.0675 24.597C90.8108 24.2083 90.6825 23.7353 90.6825 23.178C90.6825 22.5033 90.8731 21.913 91.2545 21.407C91.6358 20.8937 92.1638 20.4977 92.8385 20.219C93.5131 19.933 94.2978 19.79 95.1925 19.79C96.0871 19.79 96.8865 19.9367 97.5905 20.23C98.3018 20.516 98.8738 20.9193 99.3065 21.44C99.7391 21.9607 99.9958 22.5657 100.076 23.255L98.4265 23.552C98.3165 22.8553 97.9681 22.3053 97.3815 21.902C96.8021 21.4913 96.0651 21.2787 95.1705 21.264C94.3271 21.242 93.6415 21.4033 93.1135 21.748C92.5855 22.0853 92.3215 22.5363 92.3215 23.101C92.3215 23.4163 92.4168 23.6877 92.6075 23.915C92.7981 24.135 93.1428 24.344 93.6415 24.542C94.1475 24.74 94.8661 24.9563 95.7975 25.191C96.8901 25.4697 97.7481 25.763 98.3715 26.071C98.9948 26.379 99.4385 26.742 99.7025 27.16C99.9665 27.578 100.098 28.095 100.098 28.711C100.098 29.833 99.6805 30.7167 98.8445 31.362C98.0158 32 96.8718 32.319 95.4125 32.319ZM107.565 32.33C106.406 32.33 105.402 32.0733 104.551 31.56C103.708 31.0467 103.051 30.3243 102.582 29.393C102.113 28.4617 101.878 27.369 101.878 26.115C101.878 24.817 102.109 23.695 102.571 22.749C103.033 21.803 103.682 21.0733 104.518 20.56C105.361 20.0467 106.355 19.79 107.499 19.79C108.672 19.79 109.673 20.0613 110.502 20.604C111.331 21.1393 111.958 21.9093 112.383 22.914C112.808 23.9187 113.003 25.1177 112.966 26.511H111.316V25.939C111.287 24.399 110.953 23.2367 110.315 22.452C109.684 21.6673 108.76 21.275 107.543 21.275C106.267 21.275 105.288 21.6893 104.606 22.518C103.931 23.3467 103.594 24.5273 103.594 26.06C103.594 27.556 103.931 28.7183 104.606 29.547C105.288 30.3683 106.252 30.779 107.499 30.779C108.35 30.779 109.09 30.5847 109.721 30.196C110.359 29.8 110.861 29.2317 111.228 28.491L112.735 29.074C112.266 30.108 111.573 30.911 110.656 31.483C109.747 32.0477 108.716 32.33 107.565 32.33ZM103.022 26.511V25.158H112.097V26.511H103.022ZM120.42 32.33C119.327 32.33 118.403 32.055 117.648 31.505C116.893 30.9477 116.321 30.196 115.932 29.25C115.543 28.2967 115.349 27.2297 115.349 26.049C115.349 24.8463 115.543 23.7757 115.932 22.837C116.328 21.891 116.907 21.1467 117.67 20.604C118.433 20.0613 119.371 19.79 120.486 19.79C121.571 19.79 122.503 20.065 123.28 20.615C124.057 21.165 124.651 21.913 125.062 22.859C125.48 23.805 125.689 24.8683 125.689 26.049C125.689 27.237 125.48 28.304 125.062 29.25C124.644 30.196 124.043 30.9477 123.258 31.505C122.473 32.055 121.527 32.33 120.42 32.33ZM115.074 37.28V20.12H116.526V29.063H116.702V37.28H115.074ZM120.255 30.823C121.084 30.823 121.773 30.614 122.323 30.196C122.873 29.778 123.284 29.2097 123.555 28.491C123.834 27.765 123.973 26.951 123.973 26.049C123.973 25.1543 123.837 24.3477 123.566 23.629C123.295 22.9103 122.88 22.342 122.323 21.924C121.773 21.506 121.073 21.297 120.222 21.297C119.393 21.297 118.704 21.4987 118.154 21.902C117.611 22.3053 117.204 22.8663 116.933 23.585C116.662 24.2963 116.526 25.1177 116.526 26.049C116.526 26.9657 116.662 27.787 116.933 28.513C117.204 29.2317 117.615 29.7963 118.165 30.207C118.715 30.6177 119.412 30.823 120.255 30.823ZM131.503 32.33C130.609 32.33 129.857 32.1687 129.248 31.846C128.647 31.5233 128.196 31.0943 127.895 30.559C127.595 30.0237 127.444 29.4407 127.444 28.81C127.444 28.1647 127.573 27.6147 127.829 27.16C128.093 26.698 128.449 26.3203 128.896 26.027C129.351 25.7337 129.875 25.51 130.469 25.356C131.071 25.2093 131.734 25.081 132.46 24.971C133.194 24.8537 133.909 24.7547 134.605 24.674C135.309 24.586 135.925 24.5017 136.453 24.421L135.881 24.773C135.903 23.5997 135.676 22.7307 135.199 22.166C134.723 21.6013 133.894 21.319 132.713 21.319C131.899 21.319 131.21 21.5023 130.645 21.869C130.088 22.2357 129.696 22.815 129.468 23.607L127.895 23.145C128.167 22.0817 128.713 21.2567 129.534 20.67C130.356 20.0833 131.423 19.79 132.735 19.79C133.821 19.79 134.741 19.9953 135.496 20.406C136.259 20.8093 136.798 21.396 137.113 22.166C137.26 22.5107 137.355 22.8957 137.399 23.321C137.443 23.7463 137.465 24.179 137.465 24.619V32H136.024V29.019L136.442 29.195C136.039 30.2143 135.412 30.9917 134.561 31.527C133.711 32.0623 132.691 32.33 131.503 32.33ZM131.69 30.933C132.446 30.933 133.106 30.7973 133.67 30.526C134.235 30.2547 134.69 29.8843 135.034 29.415C135.379 28.9383 135.603 28.403 135.705 27.809C135.793 27.4277 135.841 27.0097 135.848 26.555C135.856 26.093 135.859 25.7483 135.859 25.521L136.475 25.84C135.925 25.9133 135.328 25.9867 134.682 26.06C134.044 26.1333 133.414 26.2177 132.79 26.313C132.174 26.4083 131.617 26.522 131.118 26.654C130.781 26.7493 130.455 26.885 130.139 27.061C129.824 27.2297 129.564 27.457 129.358 27.743C129.16 28.029 129.061 28.3847 129.061 28.81C129.061 29.1547 129.146 29.4883 129.314 29.811C129.49 30.1337 129.769 30.4013 130.15 30.614C130.539 30.8267 131.052 30.933 131.69 30.933ZM141.357 37.28L143.656 31.043L143.689 32.891L138.486 20.12H140.202L144.47 30.801H143.766L147.704 20.12H149.354L142.974 37.28H141.357Z" fill="white"/>
            <defs>
                <linearGradient id="paint0_linear_21_612" x1="12.9406" y1="27.2022" x2="16.4636" y2="14.7767" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#292B70"/>
                    <stop offset="1" stopColor="#9A4D8E"/>
                </linearGradient>
                <linearGradient id="paint1_linear_21_612" x1="10.0559" y1="40.3696" x2="19.6622" y2="5.66993" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#292B70"/>
                    <stop offset="1" stopColor="#9A4D8E"/>
                </linearGradient>
                <clipPath id="clip0_21_612">
                    <rect width="29" height="30" fill="white" transform="translate(0 9)"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export default Logo;