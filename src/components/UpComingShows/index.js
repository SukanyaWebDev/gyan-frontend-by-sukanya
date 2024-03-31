import './index.css'
import { IoLocationOutline } from "react-icons/io5";

const UpComingShows = (props) => {
    const { eachItem } = props
    const {

        date,
        distanceKm
        , eventName
        , imgUrl,
        weather,
        cityName
    } = eachItem

    return (
        <div className='list-container'>
            <div className="recCard1" style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                width: "400px",


            }}>
                <div className='secDivCard'>
                    <div className='cardUnder'>
                        <h1>{date}</h1>
                    </div>
                </div>

            </div>

            <p className='event-head'>{eventName}</p>
            <div className='disply-container'>
                <div className='loction-container'>
                    <p className='para'> <IoLocationOutline className='icon' /> {cityName}</p>
                </div>
                <p className='weather'>{weather} | {distanceKm}</p>
            </div>


        </div>


    )

}
export default UpComingShows