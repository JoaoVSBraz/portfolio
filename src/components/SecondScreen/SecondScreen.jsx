import ArticleCard from "./ArticleCard"

const frontCards = [
    {
        imageSource: './joaovsbraz-portfolio.png',
        imageAlt: 'Meu Portfólio',
        cardTitle: 'Portfólio',
        cardContent: 'Construído com React, Vite e TailwindCSS. Confira o layout completo no meu perfil Dribble.',
        cardLink: 'https://github.com/JoaoVSBraz/portfolio'
    },
    {
        imageSource: './detran-pe.png',
        imageAlt: 'Site institucional do Departamento de Trânsito de Pernambuco',
        cardTitle: 'Detran PE',
        cardContent: 'Em conjunto com a equipe web, desenvolvi o atual site do Departamento de Trânsito de Pernambuco.',
        cardLink: 'https://www.detran.pe.gov.br/'
    },
    {
        imageSource: './ignite-lab.png',
        imageAlt: 'Plataforma de vídeo-aulas online construída durante o evento Ignite Lab pela Rocketseat',
        cardTitle: 'Ignite Lab',
        cardContent: 'Plataforma de vídeo-aulas online construída com React, Apollo Client, GraphQL e GraphCMS. ',
        cardLink: 'https://github.com/JoaoVSBraz/ignite-lab'
    },
]

const backCards = [
    {
        imageSource: './roquet-q.png',
        imageAlt: 'RoquetQ - Plataforma de perguntas e respostas',
        cardTitle: 'Roquet Q',
        cardContent: 'Plataforma de perguntas e respostas baseada em salas construída com JS, Node e Sqlite.',
        cardLink: 'https://github.com/JoaoVSBraz/rocket-q'
    }
]

export default function SecondScreen() {

    const isLargeScreen = window.innerWidth >= 1280

    function handleButton(e) {
        const target = e.target
        const frontButton = document.querySelector('#front')
        const backButton = document.querySelector('#back')
        const frontCards = document.querySelector('#front-cards')
        const backCards = document.querySelector('#back-cards')

        if(window.innerWidth >= 1280){
            return;
        }
        
        if(target.id === 'front'){
            target.classList.add('active')
            backButton.classList.remove('active')
            frontCards.classList.remove('hidden')
            backCards.classList.add('hidden')
        }else{
            target.classList.add('active')
            frontButton.classList.remove('active')
            backCards.classList.remove('hidden')
            frontCards.classList.add('hidden')

        }
    }

    return (
        <div id="projects" className="relative flex flex-col h-screen overflow-hidden md:p-16 md:justify-evenly xl:p-0 xl:justify-center">
            <section id="composing-elements z-0">
                <div className="absolute blur opacity-25 left-0 top-10 w-40 h-40 rounded-full bg-primary-dark
                md:w-60 md:h-60
                xl:left-24 xl:-top-16"></div>
                <div className="absolute blur opacity-25 right-[-80px] top-40 w-52 h-52 rounded-full bg-primary-dark
                md:w-60 md:h-60 md:top-64
                xl:top-10"></div>
                <div className="absolute blur opacity-25 left-[-80px] bottom-[-64px] w-64 h-64 rounded-full bg-primary-dark
                md:w-[572px] md:h-[572px] md:left-[-200px]
                xl:-bottom-32"></div>
                <div className="absolute blur opacity-25 right-8 bottom-8 w-14 h-14 rounded-full bg-primary-dark
                md:bottom-32
                xl:bottom-8"></div>
            </section>
            <h2 className="text-white-light text-[32px] mt-[64px] z-10
            md:text-5xl xl:m-0 xl:text-[64px]">PROJETOS</h2>
            <div id="mobile-buttons" className="flex align-center justify-evenly text-white-light
text-white-light text-xl mt-8 z-10
xl:justify-around xl:mt-16
2xl:mt-24" onClick={handleButton}>

                <button id="front" type="button" className={`py-2 px-4 md:text-2xl md:py-2 xl:text-[24px] ${isLargeScreen && 'active'}`}>Frontend</button>

                <button id="back" type="button" className={`py-2 px-4 md:text-2xl md:py-2 xl:text-[24px] ${isLargeScreen && 'active'}`}>Backend</button>

            </div>
            <section className="flex flex-col h-min my-auto z-10
             md:mx-auto md:my-8
             xl:m-0 xl:flex-row xl:px-4 xl:gap-8 xl:mt-16">
                
                    <div id="front-cards" className="flex gap-x-8 overflow-x-auto columns-4 py-6 mx-8 active
                    xl:px-2 xl:gap-x-4 xl:justify-center xl:w-1/2 xl:m-0
                    2xl:px-4 2xl:gap-x-8">
                        {frontCards.map((card) => {
                            return (
                                <ArticleCard
                                    key={card.cardTitle}
                                    imageSource={card.imageSource}
                                    imageAlt={card.imageAlt}
                                    cardTitle={card.cardTitle}
                                    cardContent={card.cardContent}
                                    cardLink={card.cardLink}
                                />
                            )
                        })}
                    </div>

                    <div id="back-cards" className="flex gap-x-8 overflow-x-auto columns-4 py-6 mx-8 hidden mx-auto
                    xl:flex xl:justify-center xl:px-2 xl:gap-x-4 xl:w-1/2 xl:m-0
                    2xl:px-4 2xl:gap-x-8">
                    {backCards.map((card) => {
                        return (
                            <ArticleCard
                                key={card.cardTitle}
                                imageSource={card.imageSource}
                                imageAlt={card.imageAlt}
                                cardTitle={card.cardTitle}
                                cardContent={card.cardContent}
                                cardLink={card.cardLink}
                            />
                        )
                    })}
                </div>
                        
                
            </section>
            <div className="h-8 absolute bottom-0 border-dashed border-r-2 border-white-light left-[50%] right-[50%]"></div>
        </div>
    )
}