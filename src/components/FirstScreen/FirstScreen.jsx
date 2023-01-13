export default function FirstScreen(){
    return (
        <div className="container flex flex-col h-screen">
            <header className="bg-white-regular border-b-[1px] border-white-dark w-full h-fit">
                <nav className="p-5">
                    <ul className="flex justify-between">
                        <li><h1 className="text-2xl font-medium">João <span>Braz</span></h1></li>
                        <li className="flex flex-col justify-evenly">
                            <hr className="w-8"/>
                            <hr className="w-8"/>
                            <hr className="w-8"/>
                        </li>
                    </ul>
                </nav>
            </header>
            <section id="hero" className="container bg-white-regular text-gray-dark flex flex-col h-full">
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