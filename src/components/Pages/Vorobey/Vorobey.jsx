import vorobey from "../../../assets/pagesImages/vorobey.png"
import { PageCorms } from "../PageComponents/PageCorms";
import { PageBirds } from './../PageComponents/PageBirds';


export const Vorobey = () => {
    return (
    <div className="flex flex-col items-center w-full">
        <div className='mt-[3rem]'>
            <p className="text-[#BDBDBD] text-sm">Каталог · Домовый воробей</p>
            <a href="/" className="flex items-center gap-2 mt-3">
            <span className="text-[#3FCF5E] text-xl">‹</span>
            <span>Назад</span>
            </a>
            <div className="flex  w-full max-w-[1200px]">
                <div className="w-[50%]">
                    <img className="h-[50vh]" src={vorobey} alt="" />
                </div>

            <div className="w-[35%]">
                <h3 className='text-3xl font-bold mb-[1rem]'>Домовый воробей</h3>
                <p className="mb-[5rem]">Воробей – это птица, знакомая всем, как взрослым, так и детям. Это небольшая птица, которая, на первый взгляд, имеет монотонный серо-коричневый окрас оперения, но, если внимательно присмотреться, то можно обнаружить более контрастные тона, больше темные или даже черные. Область головы, брюшка и область ушей раскрашены в светлые оттенки, причем их интенсивность варьируется от, светло-серых до светло-коричневых тонов.</p>
                
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