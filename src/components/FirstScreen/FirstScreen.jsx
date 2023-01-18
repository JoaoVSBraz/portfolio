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
            <header className="fixed bg-white-regular border-b-[1px] border-white-dark w-full h-fit flex align-center justify-between p-6 text-center z-50" onClick={handleMenuClick}>
                <h1 className="text-2xl font-medium">João <span>Braz</span></h1>

                <nav id="nav-mobile" className="relative py-[2px] flex align-center justify-between bg-white-regular" aria-expanded='false'>
                    <button id="hamburguer-menu" type="button" title="menu hamburguer" className="relative z-20 flex flex-col align-center justify-evenly w-[32px] border-t-[2px] 
                    after:content[''] after:flex after:w-[32px] after:h-[2px] after:bg-gray-dark after:absolute after:top-[8px] after:transition
                    before:content[''] before:flex before:w-[32px] before:h-[2px] before:bg-gray-dark before:absolute before:bottom-[6px] before:transition" >
                    <span className="sr-only">Abrir menu</span></button>
                    <ul id="mobile-menu" className="absolute top-0 right-[-2000px] w-[80vw] bg-white-regular h-screen mt-[60px] mx-[-24px]">
                        <li className="flex align-center justify-center p-4 text-2xl border-b-[1px] border-white-dark"><a href="#hero" className="w-full h-full">Início</a></li>
                        <li className="flex align-center justify-center p-4 text-2xl border-b-[1px] border-white-dark"><a href="#projects" className="w-full h-full">Projetos</a></li>
                        <li className="flex align-center justify-center p-4 text-2xl border-b-[1px] border-white-dark"><a href="#contact" className="w-full h-full">Contato</a></li>
                        <li className="flex align-center justify-center p-4 text-2xl border-b-[1px] border-white-dark">Blog</li>
                    </ul>
                </nav>
            </header>
            <section id="hero" className="container bg-white-regular text-gray-dark flex flex-col h-full mt-[81px]">
                <div>
                    <h2 className="text-5xl w-1/2 mx-auto pt-8 pb-4">Olá, sou João Braz</h2>
                    <h3 className="text-xl font-medium mb-4">Desenvolvedor Fullstack</h3>
                </div>

                <div>
                    <h4 className="text-primary-regular mb-4">Resumo</h4>

                    <p className="mb-2">Desenvolvedor fullstack localizado em Pernambuco, Recife.</p>
                    <p className="mb-8">Comecei meu caminho no desenvolvimento web por hobby. Através da tecnologia, dar vida a projetos que transformam e melhoram a forma como lidamos com o mundo, é sempre muito empolgante.</p>

                    <div className="flex justify-evenly">
                        <button className="py-2 px-4 bg-primary-regular border-4">CONTATO</button>
                        <button className="py-2 px-4 bg-primary-regular border-4">DOWNLOAD CV</button>
                    </div>
                </div>
                
                <div className="relative flex h-full items-center justify-center">
                    <div className="h-8 absolute bottom-0 border-dashed border-r-2"></div>
                </div>
                
            </section>
        </div>
    )
}