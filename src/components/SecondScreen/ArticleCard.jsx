export default function ArticleCard(props){
    return (
        <article className="flex flex-col drop-shadow-card min-h-[300px] h-[300px] min-w-[180px] max-w-[180px] bg-white-light
        2xl:min-h-[340px] 2xl:min-w-[220px]">
            <img src={props.imageSource} alt={props.imageAlt} />
            <div className="flex flex-col bg-white-light h-full items-center justify-between py-2 mb-2 px-4">
                <h3 className="">{props.cardTitle}</h3>

                <p className="text-base">{props.cardContent}</p>

                <button type="button" className="w-full py-[2px] bg-primary-regular outline outline-4 text-2xl"><a href={props.cardLink}target="_blank">ACESSAR</a></button>
            </div>
        </article>
    )
}