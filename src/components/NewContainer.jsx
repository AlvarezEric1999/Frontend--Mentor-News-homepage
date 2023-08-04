import {Articles} from '../data/articles.js'
import { NewArticle } from "./Article"

export const NewContainer = ()=> {
    return(
        <aside className='bg-VerydarkBlue text-OffWhite lg:w-[800px] h-auto py-[8px] px-[20px]' >
            <h2 className='font-bold text-SoftOrange text-[40px] '>New</h2>
            {Articles.map((el)=> <NewArticle data = {...el} ></NewArticle>)}
        </aside>
    )
}
