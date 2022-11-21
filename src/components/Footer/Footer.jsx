import {useState} from "react";
import mail from'../../assets/images/mail.png';
import logo from "../../assets/images/logo.png";

export const Footer = () =>{

    const [email, setEmail] = useState('');
    const isValidEmail = email.includes('@')
    const test = () =>{!isValidEmail? alert('Please enter a valid email @') : null};

    return <>
    <div className="text-center mt-20 py-10  text-white bg-footer-image bg-cover rounded-t-[50px] flex flex-col justify-center">
        <p className="pb-2 max-w-[80%] w-[70%] self-center font-bold text-xl">Abonnez-vous à notre newsletter :</p>
        <form className="flex flex-col pt-2 self-center max-w-[80%] w-[80%]">
            <input type="input"
                   required
                   className="self-center
                            w-full max-w-[80%] lg:max-w-[60%] px-3 py-1.5 my-3
                            text-gray-700
                            border border-solid border-gray-300
                            rounded-full transition ease-in-out
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                   placeholder="Prénom"/>
            <input type="input"
                   required
                   className="self-center
                            w-full max-w-[80%] lg:max-w-[60%] px-3 py-1.5 my-3
                            text-gray-700
                            border border-solid border-gray-300
                            rounded-full  transition ease-in-out
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                   placeholder="Nom"/>
            <input type="email"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   onBlur= {()=>test()}
                   required
                   className="self-center
                            w-full max-w-[80%] lg:max-w-[60%] px-3 py-1.5 my-3
                            text-gray-700
                            border border-solid border-gray-300
                            rounded-full  transition ease-in-out
                            "
                   placeholder="Entrez votre mail"/>
            <button type="submit"
                    className=" flex flex-row gap-4 items-center self-center text-center
                            h-10
                            drop-shadow hover:shadow-sm
                            text-black
                            max-w-[80%] lg:max-w-[60%]
                            px-2 my-3
                            border border-solid border-gray-300
                            bg-white-shade
                            rounded-full  transition ease-in-out
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ">
                <img src={mail} alt="mail icon" className="border-r-2 pr-4 h-6" />
                <p>S'abonner</p>
            </button>

        </form>
    </div>

    <div className="bg-green-logo-light flex flex-col gap-2 text-center text-white p-4">
        <div className="flex flex-row justify-center mb-2">
            <img src={logo} className="mr-1 h-6 sm:h-9"
                 alt="Flowbite Logo"
            />
            <span className="text-xl sm:text-2xl font-bold">Jungle House</span>
        </div>
        <p className="text-sm"> ©2022 Jungle House | All Rights Reserved.</p>
        <p className="text-sm">Realized by Sophie Gillard</p>
    </div>


    </>
}
