export default function ArticleCard(props){
    return (
        <article className="flex flex-col drop-shadow-card h-[344px] w-[242px] bg-white-light">
            <img src={props.imageSource} alt={props.imageAlt} />
            <div className="flex flex-col bg-white-light h-full items-center justify-between py-2 px-6">
                <h3 className="">{props.cardTitle}</h3>

                <p>{props.cardContent}</p>

                <button className="w-full py-2 bg-primary-regular border-4 text-2xl"><a href={props.cardLink}>ACESSAR</a></button>
            </div>
        </article>
    )
}