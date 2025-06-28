import corm1 from "../../../assets/pagesImages/Corm1.png"
import corm2 from "../../../assets/pagesImages/Corm2.png"
import corm3 from "../../../assets/pagesImages/Corm3.png"
import corm4 from "../../../assets/pagesImages/Corm4.png"


export const PageCorms = () => {
    return (
        <div>
            <h4 className="text-sm font-semibold">Зерна из которых состоит данный товар</h4>
            <div className="flex gap-2 mt-[1.5rem]">
                <div className="flex flex-col items-center gap-2">
                    <img src={corm1} alt="" />
                    <p className="text-[#828282]">Пшено</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <img src={corm2} alt="" />
                    <p className="text-[#828282]">Просо</p>
                    </div>
                <div className="flex flex-col items-center gap-2">
                    <img src={corm3} alt="" />
                    <p className="text-[#828282]">Лен</p>
                    </div>
                <div className="flex flex-col items-center gap-2">
                    <img src={corm4} alt="" />
                    <p className="text-[#828282]">Пшеница</p>
                    </div>
            </div>
        </div>
    )
}