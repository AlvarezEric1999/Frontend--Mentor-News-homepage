
import { TrendingArticle } from "./TrendingArticle"
import  {Top}  from "../data/top.js"

export const  TrendingContainer = () => {


    return(
        <section className=" flex  sm:justify-between sm:flex-row  flex-col  gap-1 ">
        

        {
            Top.map((el)=>  <TrendingArticle  data={...el}/> )
        }
        
        
        </section>
    )




}