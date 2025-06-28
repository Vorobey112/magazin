import { Catalog } from './../Catolog/Catalog';
import mix from "../../assets/catalogImages/mix1.png"
import bird from "../../assets/catalogImages/bird1.png"
import corm from "../../assets/catalogImages/corm1.png"
import feed from "../../assets/catalogImages/feed1.png"
import basketLogo from '../../assets/headerImages/Buy.png'
import { useNavigate } from 'react-router-dom';
import { mixes } from '../../Mocks/mocks';
import { birds } from '../../Mocks/mocks';
import { corms } from '../../Mocks/mocks';
import { feeds } from '../../Mocks/mocks';
import { useDispatch } from "react-redux";
import { addToBasket } from "../../Redux/sliceBusket";

export const Home = () => {
        const navigate = useNavigate()
        const dispatch = useDispatch()

    const handleAdd = (card) => {
        dispatch(addToBasket(card))
      }

        const mixesRout = () => {
    navigate('/mix');
  };
        const feedsRout = () => {
    navigate('/feed');
  };

        const cormsRout = () => {
    navigate('/corm');
  };

          const birdsRout = () => {
    navigate('/vorobey');
  };


    return (
        <div className="flex flex-col items-center w-full">
            <Catalog />
            
            <div className='mt-[10rem] max-w-[1200px]'>
                <h4>Готовые миксы</h4>
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3rem] w-full max-w-[1200px]'>
                {
                    mixes.map((e) => (
                                    <div key={e.id}>
                <div>
                    <img src={mix} alt="" />
                    <h3 className='text-xl font-semibold'>{e.name}</h3>
                    <p>{e.price} руб.</p>
                    <div className='flex gap-[5rem] items-center'>
                        <button className='w-[9rem] bg-[#3FCF5E] text-white rounded-[3px] p-[6px] mt-[1rem]' onClick={mixesRout}>Подробнее</button>
                        <a onClick={() => handleAdd(e)} className="text-xl"><img src={basketLogo} alt="" /></a>
                    </div>
                </div>
                </div>
                    ))
                }
                </div>
           </div>


                       <div className='mt-[6rem]'>
                <h4>Виды птиц</h4>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3rem] w-full max-w-[1200px]'>
                {
                    birds.map((e) => (
                                    <div key={e.id}>
                <div>
                    <img src={bird} alt="" />
                    <h3 className='text-xl font-semibold'>{e.name}</h3>
                    <p>{e.price} руб.</p>
                    <div className='flex gap-[5rem] items-center'>
                        <button className='w-[9rem] bg-[#3FCF5E] text-white rounded-[3px] p-[6px] mt-[1rem]' onClick={birdsRout}>Подробнее</button>
                        <a onClick={() => handleAdd(e)} className="text-xl"><img src={basketLogo} alt="" /></a>
                    </div>
                </div>
                </div>
                    ))
                }
                </div>
           </div>


                       <div className='mt-[6rem]'>
                <h4>Зёрна</h4>
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3rem] w-full max-w-[1200px]'>
                {
                    corms.map((e) => (
                                    <div key={e.id}>
                <div>
                    <img src={corm} alt="" />
                    <h3 className='text-xl font-semibold'>{e.name}</h3>
                    <p>{e.price} руб.</p>
                    <div className='flex gap-[5rem] items-center'>
                        <button className='w-[9rem] bg-[#3FCF5E] text-white rounded-[3px] p-[6px] mt-[1rem]' onClick={cormsRout}>Подробнее</button>
                        <a onClick={() => handleAdd(e)} className="text-xl"><img src={basketLogo} alt="" /></a>
                    </div>
                </div>
                </div>
                    ))
                }
                </div>
           </div>

         <div className='mt-[6rem]'>
                <h4>Кормушки</h4>
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3rem] w-full max-w-[1200px]'>
                {
                    feeds.map((e) => (
                                    <div key={e.id}>
                <div>
                    <img src={feed} alt="" />
                    <h3 className='text-xl font-semibold'>{e.name}</h3>
                    <p>{e.price} руб.</p>
                    <div className='flex gap-[5rem] items-center'>
                        <button className='w-[9rem] bg-[#3FCF5E] text-white rounded-[3px] p-[6px] mt-[1rem]' onClick={feedsRout}>Подробнее</button>
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