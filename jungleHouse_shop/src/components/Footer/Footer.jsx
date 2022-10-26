import {useState} from "react";

export const Footer = () =>{

    const [email, setEmail] = useState('');
    const isValidEmail = email.includes('@')
    const test = () =>{!isValidEmail? alert('Please enter a valid email @') : null};

    return <div className="text-center mt-10 p-8 bg-green-logo-very-light">
    <p>Pour les passionné·e·s de plantes 🌿🌱🌵</p>
        <form className="flex flex-col pt-2 self-center">
            <label>Laissez-nous votre mail :</label>
            <input type="email"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   onBlur= {()=>test()}
                   required
                   className="self-center
                            md:w-1/3 px-3 py-1.5 my-3
                            text-gray-700
                            border border-solid border-gray-300
                            rounded transition ease-in-out
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                   placeholder="Entrez votre mail"/>
        </form>
    </div>
}
