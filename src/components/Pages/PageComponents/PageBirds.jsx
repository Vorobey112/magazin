import bird2 from "../../../assets/pagesImages/Bird2.png"
import bird3 from "../../../assets/pagesImages/Bird3.png"
import bird4 from "../../../assets/pagesImages/Bird4.png"
import bird5 from "../../../assets/pagesImages/Bird5.png"


export const PageBirds = () => {
    return (
        <div>
            <h4 className="text-sm font-semibold">Виды птиц, для которых подойдет данный товар</h4>
            <div className="flex gap-2 mt-[1.5rem]">
                <div className="flex flex-col items-center gap-2">
                    <img src={bird2} alt="" />
                    <p className="text-[#828282]">Голубь</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <img src={bird3} alt="" />
                    <p className="text-[#828282]">Воробей</p>
                    </div>
                <div className="flex flex-col items-center gap-2">
                    <img src={bird4} alt="" />
                    <p className="text-[#828282]">Ласточка</p>
                    </div>
                <div className="flex flex-col items-center gap-2">
                    <img src={bird5} alt="" />
                    <p className="text-[#828282]">Скворец</p>
                    </div>
            </div>
        </div>
    )
}