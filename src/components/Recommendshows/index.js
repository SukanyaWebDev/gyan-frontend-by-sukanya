
import { IoLocationOutline } from "react-icons/io5";
import './index.css'

const Recommendshows = (props) => {
    const { eachItem } = props
    const {
        cityName
        , date,
        distanceKm
        , eventName
        , imgUrl,
        weather
    } = eachItem

    return (
        <div className="recCard" style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "cover",

        }}>
            <div className='secDivCard'>
                <div className='content-container'>
                    <div className="first-content-container">
                        <p className="name-head">{eventName}</p>
                        <p className="date-text">{date}</p>
                    </div>
                    <div className="location-and-weather">
                        <div className="locat">
                            <p className="name-text"><IoLocationOutline className="icons" />{cityName}</p>
                        </div>
                        <p className="weather-text">{weather}|{distanceKm}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Recommendshows