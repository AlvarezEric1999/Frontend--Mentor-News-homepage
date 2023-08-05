export const TrendingArticle = ({data}) => {

    return(

        <article className="w-full h-[120px] flex   ">


        <div>
            <img className="w-[130px] h-[120px]" src={data.img}></img>
        </div>

        <div className="w-full h-[120px] pl-5 flex-1">
            <div className="w-full h-full " >
                <h2  className="font-bold text-GrayishBlue text-[30px]" >{data.id}</h2>
                <h3 className="font-bold text-VerydarkBlue  text-[15px] " >{data.title}</h3>
                <p className="text-[13px]  pt-2 ">{data.description }</p>
            </div>
        </div>
        
        </article>

    )


}