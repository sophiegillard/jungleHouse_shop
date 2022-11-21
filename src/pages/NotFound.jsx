import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


export const NotFound = () =>{
    const navigate = useNavigate()

    useEffect(() =>{
        setTimeout(() => {
            navigate("/")
            // navigate(-1)
        }, 2000)}, [])

    return(
        <div className="h-[33vh] flex flex-col justify-center gap-8">
            <h3 className="text-5xl self-center ">Page not found</h3>
            <p className="text-xl self-center">You are being redirected</p>
        </div>
    )
}