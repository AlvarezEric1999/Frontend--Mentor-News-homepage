export const TrendingArticle = ({data}) => {

    return(

        <article className="w-[350px] flex  ">


        <div>
            <img className="w-[200px] h-[150px]" src={data.img}></img>
        </div>

        <div className=" pl-5 ">
            <h2  className="font-bold text-GrayishBlue text-[30px]" >{data.id}</h2>
            <h3 className="font-bold text-VerydarkBlue" >{data.title}</h3>

            <p>{data.description }</p>

        </div>
        
        </article>

    )


}