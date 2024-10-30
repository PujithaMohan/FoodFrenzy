import { restList } from "../utils/resList";
import ResCard from "./ResCard";

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
                {restList.map(restaurant => <ResCard key={restaurant.data.id} restData={restaurant} />)}

            </div>
        </div>
    );
};

export default Body;