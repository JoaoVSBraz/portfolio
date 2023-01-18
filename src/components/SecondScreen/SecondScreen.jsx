import ArticleCard from "./ArticleCard"

const frontCards = [
    {
        imageSource: './joaovsbraz-portfolio.png',
        imageAlt: 'Meu Portfólio',
        cardTitle: 'Portfólio',
        cardContent: 'Construído com React, Vite e TailwindCSS. Confira a construção do layout no meu perfil Dribble.',
        cardLink: '#'
    },
    {
        imageSource: './detran-pe.png',
        imageAlt: 'Site institucional do Departamento de Trânsito de Pernambuco',
        cardTitle: 'Detran PE',
        cardContent: 'Em conjunto com a equipe web, desenvolvi o atual site do Departamento de Trânsito de Pernambuco.',
        cardLink: '#'
    },
    {
        imageSource: './ignite-lab.png',
        imageAlt: 'Plataforma de vídeo-aulas online construída durante o evento Ignite Lab pela Rocketseat',
        cardTitle: 'Ignite Lab',
        cardContent: 'Plataforma de vídeo-aulas online construída com React, Apollo Client, GraphQL e GraphCMS. ',
        cardLink: '#'
    },
]

const backCards = [
    {
        imageSource: './roquet-q.png',
        imageAlt: 'RoquetQ - Plataforma de perguntas e respostas',
        cardTitle: 'Roquet Q',
        cardContent: 'Plataforma de perguntas e respostas baseada em salas anônimas construída com JS, Node e Sqlite.',
        cardLink: '#'
    },
]

export default function SecondScreen() {
    return (
        <div id="projects" className="container flex flex-col h-screen">
            <h2 className="text-white-light text-[32px] mt-[48px]">PROJETOS</h2>
            <section className="flex flex-col h-full align-center justify-center">
                <div className="flex align-center justify-evenly text-white-light
text-white-light text-xl mb-8">
                    <button className="py-2 px-4 text-primary-regular underline">Frontend</button>
                    <button className="py-2 px-4">Backend</button>
                </div>
                <div className="flex gap-x-8 overflow-x-auto columns-4 py-4 px-8">
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
                <div className="flex gap-2 overflow-x-auto columns-4 py-4 px-8 hidden">
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
            <div className="relative flex h-min-fit items-center justify-center">
                    <div className="h-8 absolute bottom-0 border-dashed border-r-2 border-white-light"></div>
                </div>
        </div>
    )
}