import React from 'react';
import aboutStyles from "./UdemyAbout.module.scss";
import styles from './HowBuy.module.scss'
import RippleButton from "./RippledButton";
const HowBuy: React.FC<{}> = () => {
    return (
        <div className={styles.howBuyWrap}>
            <section className={`${styles.howBuy} container`} id='howBuy'>
                <div className={aboutStyles.udemyAboutMain}>
                    <h2 className={`${aboutStyles.udemyAboutHeading} heading`}>
                        Как приобрести курс?
                    </h2>
                    <p className={aboutStyles.udemyAboutText}>
                        Учитесь в удобном темпе с помощью пожизненного доступа с мобильных устройств и ПК
                    </p>
                </div>
                <ul className={styles.steps}>
                    <li className={styles.step}>
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_21_367)">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M50.7648 27.3734C50.7648 40.2841 40.2986 50.7503 27.3886 50.7503C14.4773 50.7503 4.01172 40.2841 4.01172 27.3734C4.01172 14.4628 14.478 3.99718 27.3886 3.99718C40.2986 3.99718 50.7648 14.4634 50.7648 27.3734ZM26.1453 21.8732V36.9982H28.8078V18.9982H26.1453L22.7578 21.0232V23.9357L26.1453 21.8732Z"
                                      fill="url(#paint0_linear_21_367)" fillOpacity="0.8"/>
                            </g>
                            <path
                                d="M27.3822 50.2662C40.0234 50.2662 50.2716 40.0187 50.2716 27.3768C50.2716 14.7355 40.0241 4.48741 27.3828 4.48741C14.7403 4.48741 4.49219 14.7355 4.49219 27.3768C4.49219 40.0187 14.7403 50.2662 27.3822 50.2662Z"
                                stroke="url(#paint1_linear_21_367)" strokeOpacity="0.2" strokeWidth="0.97375"/>
                            <defs>
                                <filter id="filter0_d_21_367" x="4.01172" y="3.99718" width="46.7531" height="48.7013"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1.94813"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_367"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_367"
                                             result="shape"/>
                                </filter>
                                <linearGradient id="paint0_linear_21_367" x1="27.3886" y1="3.99718" x2="27.3886"
                                                y2="50.7503" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6C38FF"/>
                                    <stop offset="1" stopColor="#B59AFF"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_21_367" x1="27.3822" y1="4.00054" x2="27.3822"
                                                y2="50.7537" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white"/>
                                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <h3 className={styles.stepTitle}>Написать нам в телеграмм</h3>
                        <RippleButton to="https://t.me/udemy_rus"  className={styles.telegramLink}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_21_364)">
                                    <path d="M4.7085 7.59061L4.51 10.3826C4.794 10.3826 4.917 10.2606 5.0645 10.1141L6.396 8.84161L9.155 10.8621C9.661 11.1441 10.0175 10.9956 10.154 10.3966L11.965 1.91061L11.9655 1.91011C12.126 1.16211 11.695 0.869611 11.202 1.05311L0.556997 5.12861C-0.169503 5.41061 -0.158503 5.81561 0.433497 5.99911L3.155 6.84561L9.4765 2.89011C9.774 2.69311 10.0445 2.80211 9.822 2.99911L4.7085 7.59061Z" fill="#039BE5"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_21_364">
                                        <rect width="12" height="12" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            @udemy_rus
                        </RippleButton>
                    </li>
                    <li className={styles.step}>
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_21_403)">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M50.7515 27.3725C50.7515 40.2831 40.2853 50.7493 27.3753 50.7493C14.464 50.7493 3.99841 40.2831 3.99841 27.3725C3.99841 14.4618 14.4647 3.9962 27.3753 3.9962C40.2853 3.9962 50.7515 14.4625 50.7515 27.3725ZM21.2539 34.6614L21.2414 36.9864H33.4164V34.4989H25.2817L30.4914 29.8489C31.1414 29.2739 31.683 28.7406 32.1164 28.2489C32.5497 27.7573 32.8747 27.2239 33.0914 26.6489C33.308 26.0739 33.4164 25.3739 33.4164 24.5489C33.4164 23.4073 33.1539 22.3906 32.6289 21.4989C32.1122 20.6073 31.4039 19.9073 30.5039 19.3989C29.6039 18.8823 28.5872 18.6239 27.4539 18.6239C26.2622 18.6239 25.2039 18.8739 24.2789 19.3739C23.3539 19.8656 22.6247 20.5531 22.0914 21.4364C21.5664 22.3114 21.3039 23.3323 21.3039 24.4989H23.9789C23.9705 23.8989 24.1122 23.3406 24.4039 22.8239C24.6955 22.3073 25.0997 21.8948 25.6164 21.5864C26.1414 21.2698 26.7372 21.1114 27.4039 21.1114C28.0539 21.1114 28.6289 21.2614 29.1289 21.5614C29.6289 21.8614 30.0205 22.2698 30.3039 22.7864C30.5872 23.2948 30.7289 23.8698 30.7289 24.5114C30.7289 25.0198 30.6122 25.5281 30.3789 26.0364C30.1539 26.5448 29.7247 27.0781 29.0914 27.6364L21.2539 34.6614Z"
                                      fill="url(#paint0_linear_21_403)" fillOpacity="0.8"/>
                            </g>
                            <path
                                d="M27.3845 50.2648C40.0258 50.2648 50.2739 40.0173 50.2739 27.3754C50.2739 14.7342 40.0264 4.48604 27.3851 4.48604C14.7426 4.48604 4.49451 14.7342 4.49451 27.3754C4.49451 40.0173 14.7426 50.2648 27.3845 50.2648Z"
                                stroke="url(#paint1_linear_21_403)" strokeOpacity="0.2" strokeWidth="0.97375"/>
                            <defs>
                                <filter id="filter0_d_21_403" x="3.99841" y="3.9962" width="46.7531" height="48.7013"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1.94813"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_403"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_403"
                                             result="shape"/>
                                </filter>
                                <linearGradient id="paint0_linear_21_403" x1="27.3753" y1="3.9962" x2="27.3753" y2="50.7493"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6C38FF"/>
                                    <stop offset="1" stopColor="#B59AFF"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_21_403" x1="27.3845" y1="3.99916" x2="27.3845"
                                                y2="50.7523" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white"/>
                                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <h3 className={styles.stepTitle}>Прислать ссылку на выбранный вами курс на площадке Udemy</h3>
                        <p className={styles.stepText}>Прислать почту Gmail</p>
                    </li>
                    <li className={styles.step}>
                        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_21_415)">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M50.7648 27.3734C50.7648 40.2841 40.2986 50.7503 27.3886 50.7503C14.4773 50.7503 4.01172 40.2841 4.01172 27.3734C4.01172 14.4628 14.478 3.99718 27.3886 3.99718C40.2986 3.99718 50.7648 14.4634 50.7648 27.3734ZM24.2828 36.8357C25.0661 37.169 25.9036 37.3357 26.7953 37.3357C27.9203 37.3357 28.9328 37.0815 29.8328 36.5732C30.7411 36.0648 31.462 35.3648 31.9953 34.4732C32.537 33.5815 32.8078 32.5607 32.8078 31.4107C32.8078 30.344 32.5786 29.3815 32.1203 28.5232C31.6703 27.6565 31.0286 26.9732 30.1953 26.4732C29.579 26.0972 28.8805 25.8602 28.1001 25.7623L32.5453 21.4857V18.9982H21.7203V21.4857H29.3468L23.8453 26.3482L25.0703 28.4107C25.3286 28.2773 25.6036 28.169 25.8953 28.0857C26.1953 28.0023 26.487 27.9607 26.7703 27.9607C27.7703 27.9607 28.5786 28.2857 29.1953 28.9357C29.8203 29.5857 30.1328 30.4107 30.1328 31.4107C30.1328 32.0773 29.9911 32.669 29.7078 33.1857C29.4245 33.694 29.0328 34.0982 28.5328 34.3982C28.0328 34.6982 27.4536 34.8523 26.7953 34.8607C26.062 34.869 25.3953 34.669 24.7953 34.2607C24.1953 33.844 23.7745 33.2482 23.5328 32.4732L21.0078 33.1732C21.2661 34.0232 21.6786 34.7607 22.2453 35.3857C22.8203 36.0107 23.4995 36.494 24.2828 36.8357Z"
                                      fill="url(#paint0_linear_21_415)" fillOpacity="0.8"/>
                            </g>
                            <path
                                d="M27.3822 50.2662C40.0234 50.2662 50.2716 40.0187 50.2716 27.3768C50.2716 14.7355 40.0241 4.48741 27.3828 4.48741C14.7403 4.48741 4.49219 14.7355 4.49219 27.3768C4.49219 40.0187 14.7403 50.2662 27.3822 50.2662Z"
                                stroke="url(#paint1_linear_21_415)" strokeOpacity="0.2" strokeWidth="0.97375"/>
                            <defs>
                                <filter id="filter0_d_21_415" x="4.01172" y="3.99718" width="46.7532" height="48.7013"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1.94813"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_415"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_415"
                                             result="shape"/>
                                </filter>
                                <linearGradient id="paint0_linear_21_415" x1="27.3886" y1="3.99718" x2="27.3886"
                                                y2="50.7503" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6C38FF"/>
                                    <stop offset="1" stopColor="#B59AFF"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_21_415" x1="27.3822" y1="4.00054" x2="27.3822"
                                                y2="50.7537" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white"/>
                                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <h3 className={styles.stepTitle}>Оплатить</h3>
                        <p className={styles.additional}>Мы заводим аккаунт на Вашу почту и приобретаем курс.</p>
                    </li>

                </ul>
            </section>
        </div>
    );
};

export default HowBuy;