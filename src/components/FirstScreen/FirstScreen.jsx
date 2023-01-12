export default function FirstScreen(){
    return (
        <div className="container h-screen">
            <header className="bg-white-regular border-b-[1px] border-white-dark w-full">
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
            <section id="hero" className="container relative bg-white-regular text-gray-dark h-full">
                <h2 className="text-5xl w-1/2 mx-auto pt-8 pb-4">Olá, sou João Braz</h2>
                <h3 className="text-xl font-medium mb-4">Desenvolvedor Fullstack</h3>

                <h4 className="text-primary-regular mb-4">Resumo</h4>

                <p className="mb-2">Desenvolvedor fullstack localizado em Pernambuco, Recife.</p>
                <p className="mb-8">Comecei meu caminho no desenvolvimento web por hobby. Através da tecnologia, dar vida a projetos que transformam e melhoram a forma como lidamos com o mundo, é sempre muito empolgante.</p>

                <div className="flex justify-evenly">
                    <button className="py-2 px-4 bg-primary-regular border-4">CONTATO</button>
                    <button className="py-2 px-4 bg-primary-regular border-4">DOWNLOAD CV</button>
                </div>

                
                <hr className="w-8 h-8 absolute bottom-0.5 rotate-90 border-dashed border-t-2" />
                
            </section>
        </div>
    )
}