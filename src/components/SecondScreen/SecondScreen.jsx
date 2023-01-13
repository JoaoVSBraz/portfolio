import ArticleCard from "./ArticleCard"

const cards = [
    {
        imageSource: './joaovsbraz-portfolio.png',
        imageAlt: 'Meu Portfólio',
        cardTitle: 'Portfólio',
        cardContent: 'Construído com React e Styled Components. Confira o layout completo no meu perfil Dribble.',
        cardLink: '#'
    },
    {
        imageSource: './detran-pe.png',
        imageAlt: 'Site institucional do Departamento de Trânsito de Pernambuco',
        cardTitle: 'Detran PE',
        cardContent: 'Atualmente faço parte do equipe de desenvolvimento web no Departamento de Trânsito de Pernambuco.',
        cardLink: '#'
    },

]

export default function SecondScreen() {
    return (
        <div className="container flex flex-col h-screen">
            <section id="projects">
                <h2>PROJETOS</h2>
                <div>
                    <button>Frontend</button>
                    <button>Backend</button>
                </div>
                <div>
                    {cards.map((card) => {
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
        </div>
    )
}