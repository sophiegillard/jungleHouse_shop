import {useState} from "react";
import mail from'../../assets/images/mail.png';

export const Footer = () =>{

    const [email, setEmail] = useState('');
    const isValidEmail = email.includes('@')
    const test = () =>{!isValidEmail? alert('Please enter a valid email @') : null};

    return <div className="text-center mt-10 py-10 text-xl font-bold text-white bg-footer-image bg-cover rounded-[50px] flex flex-col justify-center">
    <p className="max-w-[80%] w-[70%] self-center font-bold">Pour les passionné·e·s de plantes 🌿🌱🌵</p>
        <p className="pb-6 max-w-[80%] w-[70%] self-center">Abonnez-vous à notre newsletter :</p>
        <form className="flex flex-col pt-2 self-center max-w-[80%] w-[80%]">
            <input type="input"
                   required
                   className="self-center
                            px-3 py-1.5 my-3
                            text-gray-700
                            border border-solid border-gray-300
                            rounded-full transition ease-in-out
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                   placeholder="Prénom"/>
            <input type="email"
                   required
                   className="self-center
                            md:w-1/3 px-3 py-1.5 my-3
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
                            md:w-1/3 px-3 py-1.5 my-3
                            text-gray-700
                            border border-solid border-gray-300
                            rounded-full  transition ease-in-out
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                   placeholder="Entrez votre mail"/>
            <button type="submit"
                    className=" flex flex-row gap-7
                            h-10
                            self-center
                            md:w-1/3 px-4 py-1.5 my-3
                            text-gray-700
                            border border-solid border-gray-300
                            rounded-full  transition ease-in-out
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ">
                <img src={mail} alt="mail icon" className="object-fit border-r-2 pr-4" />
                <p>S'abonner</p>
            </button>

        </form>

    </div>
}
