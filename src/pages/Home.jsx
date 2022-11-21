import christmasTree from '../assets/images/christmas-tree.jpg';
import {CategoryHome} from "../components/home/CategoryHome.jsx";
import {ArticleHome} from "../components/home/ArticleHome.jsx";

function Home() {

    return <main className="">
       <section className="hero box-border h-[44vh] lg:h-[38vh]
       md:h-[38vh]">
           <div className="flex items-end bg-green-logo-very-light h-[30%] w-full rounded-br-[100px] top-[10.5rem] md:top-32 max-xxs:top-[8rem] absolute z-100 xs:justify-center
            max-xxs:top-36">
               <div className="text-gray-600 mb-6 md:mb-[2.5rem] flex md:z-10 ">
                       <div className="flex rounded-md overflow-hidden w-[80vw] md:w-[60vw] lg:w-[45vw] 2xl:w-[30vw] px-2">
                           <input placeholder="Mot clé..." type="text" className="w-full rounded-full rounded-r-none px-4 outline-none focus-visible:outline-gray-200"/>
                           <button
                               className="bg-green-logo-light text-white px-6 text-lg font-semibold py-4 rounded-r-full">Go
                           </button>
                       </div>
               </div>
           </div>

           <div className="absolute flex items-end justify-center w-full h-[30%] z-0
             max-xxs:h-[25%]">
               <img src={christmasTree} alt="christmas tree"
               className="absolute rounded-br-[100px] w-full h-full object-cover mix-blend-overlay"/>
               <h2 className="relative mb-20 md:mb-28 md:text-5xl z-0 font-bold text-white text-center text-3xl max-w-[90%]">Préparez votre plus beau Noël</h2>
           </div>
       </section>

        <section className="shopping box-border flex flex-col items-center md:h-[55vh] pt-4 md:pt-4">
            <h3 className="font-bold text-2xl mb-12  max-xxs:mb-4">Votre shopping en ligne</h3>

            <div className="container max-w-[90%] h-[80%] flex flex-row flex-wrap justify-around">
                <CategoryHome />
            </div>
        </section>

        <section className="articles box-border flex flex-col justify-center items-center">
            <h3 className="mb-2 mt-12 font-bold text-2xl">Inspiration & Astuces</h3>
            <ArticleHome />
        </section>
    </main>
}

export default Home