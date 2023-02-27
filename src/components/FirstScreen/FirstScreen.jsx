import charLeftBlack from '../../assets/char-left-black-side.svg'
import charRightWhite from '../../assets/char-right-white-side.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import dribble from '../../assets/dribble.svg'

export default function FirstScreen(){

    function handleMenuClick(e){
        const nav = document.querySelector('nav')
        const ul = document.querySelector('#mobile-menu')
        
        if(e.target.id === 'hamburguer-menu'){
            nav.classList.toggle('active')
        }else if(e.target.tagName === 'A'){
            nav.classList.toggle('active')
        }
        const active = nav.classList.contains('active')
        nav.setAttribute('aria-expanded', active)
        
    }

    return (
        <div className="flex flex-col h-screen xl:relative">
            <header id='header' className="fixed bg-white-regular border-b-[1px] border-white-dark w-full h-fit flex align-center justify-between py-4 px-8 text-center z-50 xl:absolute xl:bg-transparent xl:border-0 xl:px-16 2xl:px-20" onClick={handleMenuClick}>
                <h1 className="flex text-[18px] text-gray-dark font-medium place-self-center xl:gap-4 xl:order-2 xl:absolute xl:top-1 xl:left-[46.9%] xl:right-[50%] xl:py-4
                2xl:left-[48%]">JOÃO <span className='xl:text-white-regular'>BRAZ</span></h1>

                <nav id="nav-mobile" className="relative py-[2px] flex align-center justify-between bg-white-regular 
                xl:bg-transparent xl:order-1" aria-expanded='false'>
                    <button id="hamburguer-menu" type="button" title="menu hamburguer" className="relative z-20 flex flex-col align-center justify-evenly w-[32px] border-t-[2px] 
                    after:content[''] after:flex after:w-[32px] after:h-[2px] after:bg-gray-dark after:absolute after:top-[8px] after:transition
                    before:content[''] before:flex before:w-[32px] before:h-[2px] before:bg-gray-dark before:absolute before:bottom-[6px] before:transition
                    xl:hidden">
                    <span className="sr-only">Abrir menu</span></button>
                    <ul id="mobile-menu" className="absolute top-0 right-[-2000px] w-[80vw] bg-white-regular h-screen mt-[48px] mx-[-24px]
                    xl:bg-transparent xl:static xl:h-min xl:flex xl:mt-0 xl:justify-evenly xl:w-fit xl:gap-8 2xl:gap-16">
                        <li className="flex align-center justify-center p-4 text-2xl border-b-[1px] border-white-dark
                        md:text-[32px] md:p-8
                        xl:border-none xl:px-4 xl:py-0 xl:text-[18px] hover:underline hover:decoration-4 hover:underline-offset-2 hover:decoration-primary-regular">
                            <a href="#hero" className="w-full h-full">INÍCIO</a></li>
                        <li className="flex align-center justify-center p-4 text-2xl border-b-[1px] border-white-dark
                        md:text-[32px] md:p-8
                        xl:border-none xl:px-4 xl:py-0 xl:text-[18px] hover:underline hover:decoration-4 hover:underline-offset-2 hover:decoration-primary-regular">
                            <a href="#projects" className="w-full h-full">PROJETOS</a></li>
                        <li className="flex align-center justify-center p-4 text-2xl border-b-[1px] border-white-dark
                        md:text-[32px] md:p-8
                        xl:border-none xl:px-4 xl:py-0 xl:text-[18px] hover:underline hover:decoration-4 hover:underline-offset-2 hover:decoration-primary-regular">
                            <a href="#contact" className="w-full h-full">CONTATO</a></li>
                        <li className="hidden flex align-center justify-center p-4 text-2xl border-b-[1px] border-white-dark
                        md:text-[32px] md:p-8
                        xl:border-none xl:px-4 xl:py-0 xl:text-[18px] hover:underline hover:decoration-4 hover:underline-offset-2 hover:decoration-primary-regular">
                            BLOG</li>
                    </ul>
                </nav>

                <div className='hidden xl:flex xl:items-center xl:justify-center xl:gap-20 xl:order-3'>
                    <a href='#' className='xl:px-4 xl:py-2 hover:underline hover:decoration-4 hover:underline-offset-2 hover:decoration-primary-regular'><img className='w-4' src={github} alt="Imagem vetorial do icone do Github" /></a>
                    <a href='#' className='xl:px-4 xl:py-2 hover:underline hover:decoration-4 hover:underline-offset-2 hover:decoration-primary-regular'><img className='w-4' src={linkedin} alt="Imagem vetorial do icone do Linkedin" /></a>
                    <a href='#' className='xl:px-4 xl:py-2 hover:underline hover:decoration-4 hover:underline-offset-2 hover:decoration-primary-regular'><img className='w-4' src={dribble} alt="Imagem vetorial do icone do Dribble" /></a>
                </div>
            </header>
            <section id="hero" className="bg-white-regular text-gray-dark flex flex-col gap-4 h-full w-full mt-[60px] 
            md:w-full align-center justify-center md:gap-0
            xl:flex-row xl:w-1/2 xl:m-0">
                <div className="w-3/6 mx-auto md:px-8 xl:px-0 xl:pl-28 xl:pr-40 xl:h-fit xl:my-auto xl:absolute xl:top-[50%] xl:bottom-[50%] xl:left-0">
                    <h2 className="text-5xl font-normal mx-auto pt-8 pb-4 
                    md:text-7xl">Olá, sou <br /> JOÃO BRAZ</h2>
                    <h3 className="text-xl font-medium
                    md:text-[32px] md:mt-8">Desenvolvedor Fullstack</h3>
                </div>

                <img src={charLeftBlack} alt="a" className='hidden right-0 bottom-0 
                md:block md:absolute md:h-[calc(80vh)] md:right-0 md:bottom-0 
                xl:h-[calc(70vh)] xl:right-[49.9%] xl:bottom-0 ' />

                <img src={charRightWhite} alt="a" className='hidden right-0 bottom-0 
                xl:block md:absolute
                xl:h-[calc(70vh)] xl:left-[50%] xl:bottom-0 ' />

                <div className="md:w-3/6 md:mx-auto xl:pl-40 xl:pr-16 xl:h-fit xl:my-auto xl:absolute xl:top-[50%] xl:bottom-[50%] xl:right-0 xl:text-left 2xl:pl-52 2xl:pr-20">
                    <h4 className="text-primary-regular mb-4 
                    md:text-xl md:mt-4
                    ">Resumo</h4>

                    <p className="mb-[8px] xl:text-white-regular">Desenvolvedor localizado em Pernambuco, Recife.</p>
                    <p className="mb-16 xl:text-white-regular">Comecei meu caminho no desenvolvimento web por hobby. Através da tecnologia, dar vida a projetos que transformam e melhoram a forma como lidamos com o mundo, é sempre muito empolgante.</p>

                    <div className="flex justify-evenly xl:justify-start xl:gap-4">
                        <button type="button" className="py-2 px-4 bg-primary-regular border-4
                        md:px-8 hover:bg-primary-light"><a href="#contact" className="w-full h-full">CONTATO</a></button>
                        <button type="button" className="py-2 px-4 bg-primary-regular border-4
                        md:px-8 hover:bg-primary-light"><a href="#">DOWNLOAD CV</a></button>
                    </div>
                </div>
                
                <div className="h-8 absolute bottom-0 border-dashed border-r-2 left-[50%] right-[50%]"></div>
                
            </section>
        </div>
    )
}