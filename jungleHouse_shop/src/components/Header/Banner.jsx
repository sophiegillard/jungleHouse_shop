import logo from '../../assets/images/logo.png';

export const Banner = () => {
    return <div className="flex flex-row justify-end gap-5 p-7 bg-green-50">
    <img src={logo} alt="logo" className="h-10"/>
    <h1 className="text-2xl font-bold">Jungle House</h1>
    </div>
}
