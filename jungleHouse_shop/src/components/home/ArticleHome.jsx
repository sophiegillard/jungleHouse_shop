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


    return (<>
            {articleList.map(({id, title, image})=>
                <div className="group w-[90%] flex flex-col gap-2 mt-6 items-center cursor-pointer" key={id}>
                    <img src={image} alt={title}
                         className="max-h-[20%] h-44 w-[100%] object-cover rounded-lg z-100 "/>
                    <div className="bg-white-shade-dark h-44 w-[90%] absolute rounded-lg opacity-0 " ></div>
                    <p className="text-center text-xl font-bold w-[90%] h-[6%] py-1  absolute justify-center bg-white-shade transition-transform duration-700 ease-in-out  group-hover:translate-y-16 group-hover:bg-white-shade-dark group-hover:text-[21px]">{title}</p>
                </div>
            )}
        </>
    )
}