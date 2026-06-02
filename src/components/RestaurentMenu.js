import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurentMenu = () => {
    const { resid } = useParams();
    const [resInfo, setResInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(MENU_API + resid);

            if (!data.ok) {
                throw new Error("Failed to fetch menu (status " + data.status + ")");
            }

            const text = await data.text();
            if (!text) {
                throw new Error(
                    "Menu API returned an empty body (status " +
                        data.status +
                        "). Swiggy blocks this request without a valid session."
                );
            }

            const json = JSON.parse(text);
            setResInfo(json?.data);
        } catch (err) {
            console.warn("fetchMenu:", err.message);
            setError(err.message);
        }
    };

    if (error) {
        return (
            <div>
                <h1>Could not load menu</h1>
                <p>{error}</p>
            </div>
        );
    }

    if (resInfo === null) {
        return <Shimmer />;
    }

    const info = resInfo?.cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;

    const itemCards =
        resInfo?.cards
            ?.find((c) => c?.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
                (c) => c?.card?.card?.itemCards || []
            ) || [];

    return (
        <div>
            <h1>{info?.name || "Restaurent"}</h1>
            <p>
                {info?.cuisines?.join(", ")} - {info?.costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - ₹
                        {(item?.card?.info?.price ||
                            item?.card?.info?.defaultPrice) / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurentMenu;
