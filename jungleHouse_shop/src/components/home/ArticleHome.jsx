export const ArticleHome = () =>{
    const articleList =[
        {
            id: 'art1',
            title: 'Les tendances de Noël 2022',
            image: './src/assets/images/noelArticle.png'
        },
        {
            id: 'art2',
            title: 'Nourrir les oiseaux en hiver',
            image: './src/assets/images/birdArticle.jpg'},
        {
            id: 'art3',
            title: 'Proteger vos plantes du froid',
            image: './src/assets/images/treeArticle.jpg'},
    ];


    return (<div className="w-[90%] flex flex-col justify-between md:flex-row flex-wrap">
            {articleList.map(({id, title, image})=>
                <div className="group flex mt-6 cursor-pointer justify-center
                md:first:w-[100%] md:w-[48%] 2xl:w-[49%]" key={id}>
                    <img src={image} alt={title}
                         className="max-h-[20%] md:max-h-full h-44 sm:h-60 w-[100%] object-cover rounded-lg z-100
                         lg:h-72 2xl:h-96"/>
                    <p className="text-center text-xl font-bold py-1 px-6 mx-auto my-0 absolute justify-center bg-white-shade transition-transform duration-700 ease-in-out  group-hover:translate-y-16 sm:group-hover:translate-y-24 group-hover:bg-white-shade-dark group-hover:text-[21px]
                    ">{title}</p>
                </div>
            )}
        </div>
    )
}