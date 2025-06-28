import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removeFromBasket } from "../../Redux/sliceBusket"


export const Basket = () =>  {
    const dispatch = useDispatch()
    const removeCard = (id) => {
        dispatch(removeFromBasket(id))
    }
    const card = useSelector(state => state.basket)
    console.log(card)
    return (
        <div className="flex mt-[5rem] gap-[0.5rem] justify-center w-full">
            {card.map((e) => (
                <div key={e.id} className="w-[15rem]">
                    <h3 className="text-xl font-semibold">{e.name}</h3>
                    <img className="w-[200px] h-[200px]" src={e.image} alt="" />
                    <p className="mb-[1rem]">{e.text}</p>
                    <span>{e.price}</span>
                    <div>
                    <button className='w-[5rem] bg-[#3FCF5E] text-white rounded-[3px] p-[6px] mt-[1rem]'>Заказать</button>
                    <button className='w-[5rem] text-[#3FCF5E] rounded-[3px] p-[6px] mt-[1rem]' onClick={() => removeCard(e.id)}>Удалить</button>
                    </div>
                </div>
            ))}
        </div>
    )
}