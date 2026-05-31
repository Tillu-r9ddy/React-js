import { CDN_REST_LOGO } from "../utils/constants";

const RestaurentCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData.card.card.info;
    return(
        <div className="res-card">
            <img
                className="dish-logo"
                alt="dish-logo"
                src={CDN_REST_LOGO + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default RestaurentCard;