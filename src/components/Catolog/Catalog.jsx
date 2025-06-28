import feeders from '../../assets/catalogImages/feeders.png'
import corms from "../../assets/catalogImages/corms.png"
import mix from "../../assets/catalogImages/Mix.png"
import { useNavigate } from 'react-router-dom'



export const Catalog = () => {
    const navigate = useNavigate()

      const feedsRout = () => {
    navigate('/feeds');
  };

        const cormsRout = () => {
    navigate('/corms');
  };

        const mixesRout = () => {
    navigate('/mixes');
  };


    return (
        <div className='flex gap-[1rem] mt-[5rem]'> 
         <div>
            <img src={feeders} alt="" />
            <h3 className='text-xl font-medium'>Кормушки </h3>
            <button className='bg-[#3FCF5E] text-white rounded-[3px] p-[6px] mt-[1rem]' onClick={feedsRout}>Подробнее</button>
         </div>

        <div>
            <img src={corms} alt="" />
            <h3 className='text-xl font-medium'>Отдельные виды кормов</h3>
            <button className='bg-[#3FCF5E] text-white rounded-[3px] p-[6px] mt-[1rem]' onClick={cormsRout}>Подробнее</button>
        </div>

            <div>
            <img src={mix} alt="" />
            <h3 className='text-xl font-medium'>Готовые миксы</h3>
            <button className='bg-[#3FCF5E] text-white rounded-[3px] p-[6px] mt-[1rem]' onClick={mixesRout}>Подробнее</button>
        </div>

            
        </div>
    )
}