import htmlSvg from '../../assets/html.svg'
import cssSvg from '../../assets/css.svg'
import jsSvg from '../../assets/js.svg'
import reactSvg from '../../assets/react.svg'
import gitSvg from '../../assets/git.svg'
import phpSvg from '../../assets/php.svg'
import tailwindSvg from '../../assets/tailwind.svg'
import charLeftBlack from '../../assets/char-left-black-side.svg'

export default function ThirdScreen(){
    return (
        <div id='contact' className="flex flex-col h-screen">
            <div className="relative flex flex-col justify-between bg-white-regular h-[50%] overflow-hidden">
                <img className='hidden md:block md:absolute md:-left-[2px] md:h-[calc(100vh - 50%)] md:top-20 rotateX-180' src={charLeftBlack} alt="Silhueta de um personagem como plano de fundo" />
                <section id="skills" className="flex align-center justify-center gap-8 overflow-x-hidden mt-20
                md:mt-24 md:gap-[42px]
                xl:gap-x-24
                2xl:gap-x-32">
                    <img className='w-16 h-16 2xl:w-24 2xl:h-24' src={htmlSvg} alt="Icone vetorial da linguagem de marcação html" />
                    <img className='w-16 h-16 2xl:w-24 2xl:h-24' src={cssSvg} alt="Icone vetorial da linguagem de estilização css" />
                    <img className='w-16 h-16 2xl:w-24 2xl:h-24' src={jsSvg} alt="Icone vetorial da linguagem de programação javascript" />
                    <img className='w-16 h-16 2xl:w-24 2xl:h-24' src={reactSvg} alt="Icone vetorial da biblioteca react" />
                    <img className='w-16 h-16 2xl:w-24 2xl:h-24' src={tailwindSvg} alt="Icon vetorial do framework css tailwind" />
                    <img className='w-16 h-16 2xl:w-24 2xl:h-24' src={gitSvg} alt="Icone vetorial da ferramenta de versionamento git" />
                    <img className='w-16 h-16 2xl:w-24 2xl:h-24' src={phpSvg} alt="Icone vetorial da linguagem de programação php" />
                </section>
                <p className='text-[32px] p-4 flex align-center justify-center
                md:text-[44px] md:mb-8
                xl:text-7xl
                2xl:text-8xl'>Tem uma ideia de projeto legal?</p>
            </div>
            <footer className='relative flex flex-col h-[50%] justify-between place-items-center bg-gray-dark overflow-hidden'>
                <div className='hidden md:block md:absolute md:h-[calc(100vh - 50%)] md:-right-[1px] md:bottom-20 md:z-0 rotateXY-180'>
                    <svg width="187" height="803" viewBox="0 0 187 803" fill="#EDEDED" xmlns="http://www.w3.org/2000/svg">
                        <path d="M186.231 16.2012L185.651 520.277C176.474 490.141 167.297 460.005 158.119 429.869C154.361 468.876 150.603 507.882 146.844 546.888C142.562 568.857 140.631 589.115 141.582 607.277C141.248 609.783 140.914 612.288 140.58 614.794C143.199 614.68 144.654 615.73 145.09 617.801C144.706 664.284 137.24 728.981 126.548 801.973C123.29 802.308 120.033 802.642 116.775 802.976C112.247 819.682 127.881 818.385 113.518 862.613C107.588 862.278 101.657 861.945 95.7269 861.61C96.5819 859.462 94.5376 856.511 92.9709 856.348C91.8797 856.234 89.2958 859.188 87.4582 860.608C66.9741 858.725 59.3866 861.232 44.6098 866.121C30.5776 863.865 21.3043 864.007 2.51332 859.355C-1.63395 858.329 0.0852967 852.948 2.43301 849.379C5.10445 845.318 14.5515 840.758 38.8464 842.316C50.2908 831.441 65.7802 820.97 86.2051 810.994C87.2075 808.154 88.9289 805.649 88.1994 802.728C87.6919 800.696 83.2661 802.054 83.4491 799.969C89.6884 729.019 95.104 670.074 97.9821 612.288C97.4808 600.261 96.98 588.233 96.4788 576.206C100.457 484.227 99.3391 455.303 97.2306 438.64C93.1776 444.848 86.4489 446.375 77.4351 443.902C75.3367 432.142 62.7081 408.194 64.9062 388.274C62.5606 384.864 60.8904 380.722 59.8951 375.746C64.5567 336.485 72.9911 299.835 87.1822 267.171C88.3812 232.41 92.815 199.192 103.031 169.484C103.253 168.841 102.205 167.017 102.339 166.27C102.664 164.465 103.629 163.699 104.472 163.145C103.245 140.77 99.6954 143.282 103.607 134.329C108.708 122.654 111.174 123.029 117.151 120.785C129.159 116.276 139.436 115.406 150.578 112.717C150.017 111.285 149.981 111.444 149.291 110.078C148.698 108.906 145.868 107.73 146.764 105.095C145.208 102.887 136.635 102.441 137.428 99.4733C138.372 95.9375 139.248 91.7772 140.158 87.9291C136.133 93.0151 133.773 88.4376 132.338 78.4948C128.286 87.2969 130.737 92.4745 140.158 93.7631C128.179 93.5129 126.974 90.8913 127.497 78.4948C124.744 81.2592 123.223 88.9557 122.283 98.9767C120.772 86.7808 121.105 79.4157 126.504 68.3157C128.824 63.5467 124.911 60.7003 129.856 53.6682C122.76 55.4196 118.536 63.1068 117.318 77.0054C113.772 65.561 114.022 51.6577 131.283 45.9396C135.385 44.5808 123.42 43.091 123.56 40.2074C124.015 30.7747 129.475 19.884 129.521 20.9799C129.786 27.2242 129.599 37.0656 132.049 40.0903C130.884 24.0126 153.511 14.2613 155.116 0.967896C155.283 7.35341 154.524 13.3269 152.066 18.5455C167.949 11.4795 177.578 12.234 185.401 7.1514L178.372 16.7096C180.992 16.5401 183.512 16.8888 186.231 16.2012Z" fill="#EDEDED"/>
                    </svg>
                </div>
                <a href="mailto:joaovsbraz@gmail.com" className='flex text-[32px] p-4 underline underline-offset-8 text-primary-regular
                md:text-[44px] md:mt-[34px]
                xl:text-7xl
                '>joaovsbraz@gmail.com</a>
                <p className='flex w-full justify-center text-sm text-white-light p-8
                md:text-2xl'>2023 © Desenhado e desenvolvido por João Braz</p>
            </footer>
        </div>
    )
}