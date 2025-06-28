import complect from "../../../assets/catalogImages/kits.png"
import { PageCorms } from "../PageComponents/PageCorms";
import { PageBirds } from './../PageComponents/PageBirds';



export const Complect = () => {


    return (
    <div className="flex flex-col items-center w-full">
        <div className='mt-[3rem]'>
            <p className="text-[#BDBDBD] text-sm">Каталог · Готовые миксы · Корм для птиц RIO Линька</p>
            <a href="/" className="flex items-center gap-2 mt-3">
            <span className="text-[#3FCF5E] text-xl">‹</span>
            <span>Назад</span>
            </a>
            <div className="flex  w-full max-w-[1200px]">
                <div className="w-[50%]">
                    <img className="h-[50vh]" src={complect} alt="" />
                </div>

            <div className="w-[35%]">
                <h3 className='text-3xl font-bold mb-[1rem]'>Корм для птиц RIO Линька</h3>
                <p className="mb-[5rem]">Дополнительный пюреобразный пигментирующий корм, для птенцов с красным оперением.
                Отлично подходит для увеличения поступления питательных веществ на особенных этапах жизни зерноядных птиц.</p>
                <span className="text-2xl font-bold">999 руб.</span>
                <div className="flex gap-[1rem]">
                    <button className='w-[9rem] bg-[#3FCF5E] text-white rounded-[3px] p-[6px] mt-[5rem]'>Купить</button>
             </div>
                </div>

            </div>

            <div className="flex justify-around  mt-[2rem]">
                <PageBirds />
                <PageCorms />
            </div>

        </div>
    </div>
    )
}