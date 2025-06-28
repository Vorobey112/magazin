import vk from '../../assets/footerLogos/vk.png';
import inst from "../../assets/footerLogos/inst.png"
import tel from "../../assets/footerLogos/tel.png"


export const Footer = () =>  {
    return (
        <div className='w-full mt-[5rem] h-[7rem] bg-[#333333] text-white flex items-center justify-center'>
            <div className='w-full max-w-[1200px] flex justify-between items-center'>
                <div>
                    <ul className='flex gap-2'>
                        <li>Оплата</li>
                        <li>Доставка</li>
                    </ul>
                </div>

                <div>
                    <ul className='flex gap-2'>
                        <li><img src={vk} alt="" /></li>
                        <li><img src={inst } alt="" /></li>
                    </ul>
                </div>

                <div>
                    <ul className='flex gap-2'>
                        <li><img src={tel} alt="" /></li>
                        <li>8 920 999 43 50</li>   
                    </ul>
                </div>
            </div>
        </div>
    )
}