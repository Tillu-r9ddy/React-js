import RestaurentCard from "./RestaurentCard";
import {res_list} from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
    const[restaurentList, setRestaurentList] = useState(res_list);
    return(
        <div className="body">
            <div className="top-rate-res-filt-btn">
                <button
                    onClick={() => {
                        console.log("clicked");
                        
                        const topRatedres = restaurentList.filter((res)=>{
                            const {avgRating} = res.card.card.info;
                            return avgRating > 4.1;
                        } );
                        setRestaurentList(topRatedres);
                    }}
                >
                    Top rated restaurents
                </button>
            </div>
            <div className="res-list">
                {restaurentList.map((restaurent)=>{
                    const {id} = restaurent.card.card.info;
                    return <RestaurentCard key={id} resData={restaurent} />;
                })}
            </div>

        </div>
    );
};

export default Body;