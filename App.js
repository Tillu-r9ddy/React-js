import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {
    return(
        <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392526.jpg"/>
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};

const res_list = [{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "825304",
name: "Hotel Shubham Palace - Dhanturi Group of Hotels",
cloudinaryImageId: "ucr94uzocapr6ca5o6go",
locality: "Kokapet",
areaName: "Nanakramguda",
costForTwo: "₹500 for two",
cuisines: [
"Chinese",
"Indian",
"Biryani",
"Beverages",
"Ice Cream"
],
avgRating: 4.1,
parentId: "8146",
avgRatingString: "4.1",
totalRatingsString: "6.1K+",
promoted: true,
adTrackingId: "cid=da448f05-cced-406c-9e6f-e45942bf5a00~p=1~adgrpid=da448f05-cced-406c-9e6f-e45942bf5a00#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=825304~plpr=COLLECTION~eid=d2f45780-849f-47dc-85f7-bab25b92f86f~srvts=1780201802179~collid=83649",
sla: {
deliveryTime: 38,
lastMileTravel: 7.1,
serviceability: "SERVICEABLE",
slaString: "35-40 mins",
lastMileTravelString: "7.1 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-05-31 11:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹70",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "da448f05-cced-406c-9e6f-e45942bf5a00",
priceComparisonComms: { }
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=825304&source=collection&query=Biryani",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "800956",
name: "Social",
cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2026/3/23/90f4f32c-7ee0-4bd0-9ce4-b120f5799914_875963d1-0eaf-4222-afbe-b85473b4056b.jpg",
locality: "Serlingampally Circle",
areaName: "Raidurg",
costForTwo: "₹600 for two",
cuisines: [
"Chinese",
"Fast Food",
"Biryani",
"Pizzas",
"Salads",
"Kebabs",
"Juices",
"Desserts",
"Beverages"
],
avgRating: 4.2,
parentId: "616464",
avgRatingString: "4.2",
totalRatingsString: "1.7K+",
promoted: true,
adTrackingId: "cid=3bfcc903-716b-4146-a16c-6143e82d08a1~p=2~adgrpid=3bfcc903-716b-4146-a16c-6143e82d08a1#ag5~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=800956~plpr=COLLECTION~eid=98d41655-efbb-41f4-acad-72c0839378eb~srvts=1780201802179~collid=83649",
sla: {
deliveryTime: 54,
lastMileTravel: 9.1,
serviceability: "SERVICEABLE",
slaString: "50-60 mins",
lastMileTravelString: "9.1 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-05-31 23:15:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "66% OFF",
subHeader: "UPTO ₹126",
headerTypeV2: "HEADER_TYPE_V2_CRICKET_MATCH",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "3bfcc903-716b-4146-a16c-6143e82d08a1",
priceComparisonComms: { }
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=800956&source=collection&query=Biryani",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "952698",
name: "Hotel Sitara Grand - Dhanturi Group of hotels",
cloudinaryImageId: "ucr94uzocapr6ca5o6go",
locality: "GANDIPET",
areaName: "Nanakramguda",
costForTwo: "₹800 for two",
cuisines: [
"Biryani"
],
avgRating: 4.1,
parentId: "351561",
avgRatingString: "4.1",
totalRatingsString: "1.0K+",
promoted: true,
adTrackingId: "cid=fbc78185-7760-477b-9b82-5ae1a45f778c~p=4~adgrpid=fbc78185-7760-477b-9b82-5ae1a45f778c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=952698~plpr=COLLECTION~eid=43964bcf-3302-46e1-bb6f-08d1663259bd~srvts=1780201802179~collid=83649",
sla: {
deliveryTime: 42,
lastMileTravel: 7.1,
serviceability: "SERVICEABLE",
slaString: "40-50 mins",
lastMileTravelString: "7.1 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-05-31 11:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textExtendedBadges: { },
textBased: { },
imageBased: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹85",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "fbc78185-7760-477b-9b82-5ae1a45f778c",
priceComparisonComms: { }
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=952698&source=collection&query=Biryani",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "5217",
name: "Paradise Biryani",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/26/005ede24-2c74-45ea-b9b8-ffb750031656_5217.JPG",
locality: "Gachibowli",
areaName: "Gachibowli",
costForTwo: "₹400 for two",
cuisines: [
"Biryani",
"Kebabs",
"North Indian",
"Hyderabadi"
],
avgRating: 4.1,
parentId: "700",
avgRatingString: "4.1",
totalRatingsString: "115K+",
promoted: true,
adTrackingId: "cid=21074a83-5496-4c4d-9c21-6edb40baa4d7~p=5~adgrpid=21074a83-5496-4c4d-9c21-6edb40baa4d7#ag3~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=5217~plpr=COLLECTION~eid=9961e4e4-7e02-4f17-a94a-2ac891f714d4~srvts=1780201802179~collid=83649",
sla: {
deliveryTime: 24,
lastMileTravel: 4.6,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "4.6 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-06-01 00:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textExtendedBadges: { },
textBased: { },
imageBased: { }
}
},
aggregatedDiscountInfoV3: {
header: "66% OFF",
subHeader: "UPTO ₹126",
headerTypeV2: "HEADER_TYPE_V2_CRICKET_MATCH",
logoCtx: {
text: "BENEFITS"
}
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
text: "BENEFITS",
logo: "v1634558776/swiggy_one/OneLogo_3x.png"
},
freedelMessage: "FREE DELIVERY"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "3.9",
ratingCount: "28K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "21074a83-5496-4c4d-9c21-6edb40baa4d7",
priceComparisonComms: { }
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=5217&source=collection&query=Biryani",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "998362",
name: "Canteen Central",
cloudinaryImageId: "d388a18de29fe8eea655feee45a6a1a2",
locality: "Vattinagulapally",
areaName: "Gandipet Mandal",
costForTwo: "₹250 for two",
cuisines: [
"Snacks",
"Indian",
"Chaat",
"Biryani"
],
avgRating: 4.1,
parentId: "582290",
avgRatingString: "4.1",
totalRatingsString: "93",
promoted: true,
adTrackingId: "cid=5221a30c-e599-44cf-9b5b-5621cc0daeb3~p=6~adgrpid=5221a30c-e599-44cf-9b5b-5621cc0daeb3#ag3~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=998362~plpr=COLLECTION~eid=2fe65421-a66f-4384-b0c4-adbbfbce8e52~srvts=1780201802179~collid=83649",
sla: {
deliveryTime: 31,
lastMileTravel: 1,
serviceability: "SERVICEABLE",
slaString: "30-40 mins",
lastMileTravelString: "1.0 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-05-31 23:00:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
description: "OnlyOnSwiggy"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
theme: "",
imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
description: "OnlyOnSwiggy"
}
}
]
},
textExtendedBadges: { },
textBased: { }
}
},
aggregatedDiscountInfoV3: {
header: "₹166 OFF",
subHeader: "ABOVE ₹499",
discountTag: "FLAT DEAL",
headerTypeV2: "HEADER_TYPE_V2_CRICKET_MATCH",
logoCtx: {
text: "BENEFITS"
}
},
loyaltyDiscoverPresentationInfo: {
logoCtx: {
text: "BENEFITS",
logo: "v1634558776/swiggy_one/OneLogo_3x.png"
},
freedelMessage: "FREE DELIVERY"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "5221a30c-e599-44cf-9b5b-5621cc0daeb3",
priceComparisonComms: { }
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=998362&source=collection&query=Biryani",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
},
{
card: {
card: {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "902715",
name: "Dravida Utkala Banga",
cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/11/21/81aa2bd3-ff20-4ea6-9d4d-dbeee1a46074_2cb86eab-d7bd-4d71-94d7-1c4fcfd4779f.JPG",
locality: "Alpine Apartments",
areaName: "Manikonda",
costForTwo: "₹300 for two",
cuisines: [
"Bengali",
"odisha food",
"Indian",
"Chinese"
],
avgRating: 4.2,
parentId: "524714",
avgRatingString: "4.2",
totalRatingsString: "1.0K+",
promoted: true,
adTrackingId: "cid=0c8f4baf-b12b-4b10-825e-f31563c86235~p=8~adgrpid=0c8f4baf-b12b-4b10-825e-f31563c86235#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=902715~plpr=COLLECTION~eid=1389209b-c31a-47bc-a31c-57d7ca90dfc2~srvts=1780201802179~collid=83649",
sla: {
deliveryTime: 48,
lastMileTravel: 8.7,
serviceability: "SERVICEABLE",
slaString: "45-50 mins",
lastMileTravelString: "8.7 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-05-31 22:30:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
textBased: { },
imageBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹60",
logoCtx: {
text: "BENEFITS"
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
campaignId: "0c8f4baf-b12b-4b10-825e-f31563c86235",
priceComparisonComms: { }
},
analytics: { },
cta: {
link: "swiggy://menu?restaurant_id=902715&source=collection&query=Biryani",
text: "RESTAURANT_MENU",
type: "DEEPLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
relevance: {
type: "RELEVANCE_TYPE_ON_MENU_RETURN",
sectionId: "MENU_RETURN_FOOD"
}
}
}];

const RestaurentCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData.card.card.info;
    return(
        <div className="res-card">
            <img
                className="dish-logo"
                alt="dish-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};



const Body = () => {
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-list">
                {res_list.map((restaurent)=>{
                    const {id} = restaurent.card.card.info;
                    return <RestaurentCard key={id} resData={restaurent} />;
                })}
            </div>

        </div>
    );
};

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);