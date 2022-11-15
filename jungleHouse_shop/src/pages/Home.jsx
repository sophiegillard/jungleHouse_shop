import christmasTree from '../assets/images/christmas-tree.jpg';
import {CategoryHome} from "../components/home/CategoryHome.jsx";
import {ArticleHome} from "../components/home/ArticleHome.jsx";

function Home() {

    return <main className="">
       <section className="hero box-border h-[50vh]">
           <div className="flex items-end bg-green-logo-very-light h-[30%] w-full rounded-br-[100px] top-48 absolute z-100">
               <div className="text-gray-600 mb-6">
                       <div className="flex rounded-md overflow-hidden w-[85vw] px-2">
                           <input placeholder="Mot clé..." type="text" className="w-full rounded-full rounded-r-none px-4 outline-none focus-visible:outline-gray-200"/>
                           <button
                               className="bg-green-logo text-white px-6 text-lg font-semibold py-4 rounded-r-full">Go
                           </button>
                       </div>
               </div>
           </div>

           <div className="absolute flex items-end w-full h-[30%] z-0">
               <img src={christmasTree} alt="christmas tree"
               className="absolute rounded-br-[100px] w-full h-full object-cover mix-blend-overlay"/>
               <h2 className="relative mb-8 z-0 font-bold text-white text-center text-3xl ">Préparez votre plus beau Noël</h2>
           </div>
       </section>

        <section className="shopping box-border flex flex-col justify-center items-center ">
            <h3 className="mb-2 mt-6 font-bold text-xl">Votre shopping en ligne</h3>

            <div className="container max-w-[90%] flex flex-row flex-wrap justify-around">
                <CategoryHome />
            </div>
        </section>

        <section className="articles box-border flex flex-col justify-center items-center">
            <h3 className="mb-2 mt-6 font-bold text-2xl">Inspiration & Astuces</h3>
            <ArticleHome />
        </section>
    </main>
}

export default Home