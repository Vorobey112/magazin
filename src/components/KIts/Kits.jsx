import { useNavigate } from "react-router-dom";
import kitsImage from "../../assets/catalogImages/kits.png"
import basketLogo from '../../assets/headerImages/Buy.png'
import { kits } from "../../Mocks/mocks";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../Redux/sliceBusket";



export const Kits = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleAdd = (card) => {
        dispatch(addToBasket(card))
      }

            const complectRout = () => {
    navigate('/complect');
  };
    return (
<div className="flex flex-col items-center w-full">
         <div className='mt-[3rem]'>
                        <p className="text-[#BDBDBD] text-sm">Каталог · Готовые комплекты</p>

                            <a href="/" className="flex items-center gap-2 mt-3">
                <span className="text-[#3FCF5E] text-xl">‹</span>
                <span>Назад</span>
                </a>
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3rem] w-full max-w-[1200px]'>
                                                {
                                                    kits.map((e) => (
                                                                    <div key={e.id}>
                                                <div>
                                                    <img src={kitsImage} alt="" />
                                                    <h3 className='text-xl font-semibold'>{e.name}</h3>
                                                    <p>{e.price} руб.</p>
                                                    <div className='flex gap-[5rem] items-center'>
                                                        <button className='w-[9rem] bg-[#3FCF5E] text-white rounded-[3px] p-[6px] mt-[1rem]' onClick={complectRout}>Подробнее</button>
                                                        <a onClick={() => handleAdd(e)} className="text-xl"><img src={basketLogo} alt="" /></a>
                                                    </div>
                                                </div>
                                                </div>
                                                    ))
                                                }
                                                </div>
            
           </div>
        </div>
    )
}