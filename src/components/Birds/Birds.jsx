import { useNavigate } from "react-router-dom";
import bird from "../../assets/catalogImages/bird1.png"
import { birds } from "../../Mocks/mocks";



export const Birds = () => {
    const navigate = useNavigate()
    
    const vorobeyRout = () => {
        navigate('/vorobey');
    };
    return (
<div className="flex flex-col items-center w-full">
         <div className='mt-[3rem]'>
                        <p className="text-[#BDBDBD] text-sm">Каталог · Аксессуары и другое</p>

                <a href="/" className="flex items-center gap-2 mt-3">
                <span className="text-[#3FCF5E] text-xl">‹</span>
                <span>Назад</span>
                </a>



                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3rem] w-full max-w-[1200px]'>
                {
                    birds.map((e) => (
                                    <div key={e.id}>
                <div>
                    <div>
                        <img src={bird} alt="" />
                        <h3 className='text-xl font-semibold'>{e.name}</h3>
                        <button className='w-[9rem] bg-[#3FCF5E] text-white rounded-[3px] p-[6px] mt-[1rem]' onClick={vorobeyRout}>Подробнее</button>
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