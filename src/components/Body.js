import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    const[restaurentList, setRestaurentList] = useState([]);
    const[searchText, setSearchText] = useState("");
    const[filteredRest, setFilteredRest] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6688999&lng=77.5922514&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );

        const json = await data.json();

        setRestaurentList(json?.data?.cards.filter(c => c?.card?.card?.info));
        setFilteredRest(json?.data?.cards.filter(c => c?.card?.card?.info));
    };

    if(restaurentList.length === 0) {
        return <Shimmer/>
    }

    return(
        <div className="body">
            <div className="top-rate-res-filt-btn">
                <div className="search-container">
                <input
                    className="search-inpt"
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const searchedrest = restaurentList.filter( (res) =>  
                            res.card.card.info.name.toLowerCase()
                            .includes(searchText.toLowerCase())
                        );
                        setFilteredRest(searchedrest);
                    }}
                >
                    Search
                </button>
                </div>
                <button
                    onClick={() => {
                        const topRatedres = restaurentList.filter((res)=>{
                            return res.card.card.info.avgRating > 4.1;
                        } );
                        setFilteredRest(topRatedres);
                    }}
                >
                    Top rated restaurents
                </button>
            </div>
            <div className="res-list">
                {filteredRest.map((restaurent)=>{
                    return <RestaurentCard key={restaurent.card.card.info.id} resData={restaurent} />;
                })}
            </div>

        </div>
    );
};

export default Body;