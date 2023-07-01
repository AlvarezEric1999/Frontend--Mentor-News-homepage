import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'
import { NewArticle } from './Article'




export const MainArticle = ()=> {




    return(


        <section className='mb-12 sm:mb-0'>

        <picture>
            <source media="(max-width:640px)" srcSet={imageMobile}></source>
            <source media="(min-width:641px)" srcSet={imageDesktop}></source>
            <img src={imageMobile} alt='articulo principal '></img>
        </picture>


        <div className='sm:flex'>

        <div className='flex-1 py-6'> <h2 className='text-[40px] font-bold  sm:text-[58] leading-none ' >The Bright Future of Web 3.0?</h2> </div>
        
        <div className='flex-1  pt-9'> <p className='text-[13px] mb-10 sm:text-[15px]' > We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
        But is it really fulfilling its promise?</p> 
        
        <button className=' bg-SoftRed  w-[157px] h-[40px] uppercase  text-OffWhite  hover:bg-VerydarkBlue '  >Read more</button>
        
        </div>

        </div>
        
        





     
        </section>
    )


}