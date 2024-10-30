import { IMG_URL } from "../utils/constants";

const ResCard = ({ restData }) => {
    const { name, totalRatingsString, avgRating, totalRatings,
        deliveryTime, cuisines, cloudinaryImageId } = restData?.data;

    return (
        <div className='res-card'>
            <img src={IMG_URL +
                cloudinaryImageId}
                className="res-card-image" alt="res-card-image" />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{totalRatings}</p>
            <p>{totalRatingsString}</p>
            <p>{avgRating}</p>
            <p>{deliveryTime}</p>
        </div>
    );
};

export default ResCard;