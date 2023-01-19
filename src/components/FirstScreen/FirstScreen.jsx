import charLeftBlack from '../../assets/char-left-black-side.svg'

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
        <div className="container flex flex-col h-screen">
            <header className="fixed bg-white-regular border-b-[1px] border-white-dark w-full h-fit flex align-center justify-between py-4 px-8 text-center z-50" onClick={handleMenuClick}>
                <h1 className="text-2xl font-medium">João <span>Braz</span></h1>

                <nav id="nav-mobile" className="relative py-[2px] flex align-center justify-between bg-white-regular" aria-expanded='false'>
                    <button id="hamburguer-menu" type="button" title="menu hamburguer" className="relative z-20 flex flex-col align-center justify-evenly w-[32px] border-t-[2px] 
                    after:content[''] after:flex after:w-[32px] after:h-[2px] after:bg-gray-dark after:absolute after:top-[8px] after:transition
                    before:content[''] before:flex before:w-[32px] before:h-[2px] before:bg-gray-dark before:absolute before:bottom-[6px] before:transition" >
                    <span className="sr-only">Abrir menu</span></button>
                    <ul id="mobile-menu" className="absolute top-0 right-[-2000px] w-[80vw] bg-white-regular h-screen mt-[48px] mx-[-24px]">
                        <li className="flex align-center justify-center p-4 text-2xl border-b-[1px] border-white-dark
                        md:text-[32px] md:p-8"><a href="#hero" className="w-full h-full">Início</a></li>
                        <li className="flex align-center justify-center p-4 text-2xl border-b-[1px] border-white-dark
                        md:text-[32px] md:p-8"><a href="#projects" className="w-full h-full">Projetos</a></li>
                        <li className="flex align-center justify-center p-4 text-2xl border-b-[1px] border-white-dark
                        md:text-[32px] md:p-8"><a href="#contact" className="w-full h-full">Contato</a></li>
                        <li className="flex align-center justify-center p-4 text-2xl border-b-[1px] border-white-dark
                        md:text-[32px] md:p-8">Blog</li>
                    </ul>
                </nav>
            </header>
            <section id="hero" className="container bg-white-regular text-gray-dark flex flex-col gap-8 h-full w-full mt-[65px] 
            md:w-full md:align-center md:justify-center md:mt-0">
                <img src={charLeftBlack} alt="a" className='hidden md:block md:absolute right-0 bottom-0' />
                <div className="w-3/6 mx-auto md:px-8">
                    <h2 className="text-5xl mx-auto pt-8 pb-4 
                    md:text-7xl">Olá, sou JOÃO BRAZ</h2>
                    <h3 className="text-xl font-medium
                    md:text-[32px] md:mt-8">Desenvolvedor Fullstack</h3>
                </div>

                <div className="md:w-3/6 md:mx-auto">
                    <h4 className="text-primary-regular mb-4 
                    md:text-xl md:mt-8">Resumo</h4>

                    <p className="mb-[8px]">Desenvolvedor fullstack localizado em Pernambuco, Recife.</p>
                    <p className="mb-16">Comecei meu caminho no desenvolvimento web por hobby. Através da tecnologia, dar vida a projetos que transformam e melhoram a forma como lidamos com o mundo, é sempre muito empolgante.</p>

                    <div className="flex justify-evenly">
                        <button type="button" className="py-2 px-4 bg-primary-regular border-4
                        md:px-8"><a href="#contact" className="w-full h-full">CONTATO</a></button>
                        <button type="button" className="py-2 px-4 bg-primary-regular border-4
                        md:px-8"><a href="#">DOWNLOAD CV</a></button>
                    </div>
                </div>
                
                <div className="h-8 absolute bottom-0 border-dashed border-r-2 left-[50%] right-[50%]"></div>
                
            </section>
        </div>
    )
}