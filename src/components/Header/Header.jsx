import { Navigate } from '../Navigate/Navigate';
import basketLogo from '../../assets/headerImages/Buy.png'
import user from '../../assets/headerImages/User.png'
import telephone from '../../assets/headerImages/telephone.png'

export const Header = () => {
    return (
        <div className='flex flex-col items-center w-full'>
            <div className="flex justify-between mt-[1rem] mb-[2rem] w-full max-w-[1200px]">
                <h1 className="text-green-500 text-3xl"><a href="/">Breakably Ecology</a></h1>
                    <ul className="flex items-center gap-3">
                        <li><img src={telephone} alt="" /></li>
                        <li className="headerItem">8 939 498 43 34</li>
                        <li><a className="text-xl" href="/basket"><img src={basketLogo} alt="" /></a></li>
                        <li><a className="text-xl" href="/profile"><img src={user} alt="" /></a></li>
                    </ul>
            </div>
            <Navigate />
        </div>
    )
}