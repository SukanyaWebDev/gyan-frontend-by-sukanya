import { Component } from "react";
import Header from "../Header";

import { FaAngleRight } from "react-icons/fa6";



import './index.css'
import Recommendshows from "../Recommendshows";
import UpComingShows from "../UpComingShows";




const arrayData = [
    {
        "eventName": "Winter Wonderland Fair",
        "cityName": "West Douglas",
        "date": "2024-03-24T00:00:00.000Z",
        "weather": "Snowy 26C",
        "distanceKm": "4264.1226847222415",
        "imgUrl": "https://res.cloudinary.com/dxorhiaeo/image/upload/v1711825755/Rectangle_34_hzq4g9.svg"
    },
    {
        "eventName": "Spring Clouds Art Exhibit",
        "cityName": "North Amy",
        "date": "2024-03-25T00:00:00.000Z",
        "weather": "Cloudy 7C",
        "distanceKm": "3864.065400248832",
        "imgUrl": "https://res.cloudinary.com/dxorhiaeo/image/upload/v1711825724/Rectangle_5-1_zcw7kg.svg"
    },
    {
        "eventName": "Snowy Peaks Photography Workshop",
        "cityName": "Rayville",
        "date": "2024-03-26T00:00:00.000Z",
        "weather": "Snowy 18C",
        "distanceKm": "14188.240054906337",
        "imgUrl": "https://res.cloudinary.com/dxorhiaeo/image/upload/v1711825710/Rectangle_5_p69j5u.svg"
    },
    {
        "eventName": "Sunny Days Marathon",
        "cityName": "Hartville",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Sunny 2C",
        "distanceKm": "9022.823129623723",
        "imgUrl": "https://res.cloudinary.com/dxorhiaeo/image/upload/v1711825703/Rectangle_4_2_mwmhrp.svg"
    },
    {
        "eventName": "Tropical Tunes Music Festival",
        "cityName": "South Andrew",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Cloudy 30C",
        "distanceKm": "14311.615540703924",
        "imgUrl": "https://res.cloudinary.com/dxorhiaeo/image/upload/v1711825683/Rectangle_4-1_okiu0b.svg"
    },
    {
        "eventName": "Frozen Harmony Concert",
        "cityName": "Port Markton",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Sunny -3C",
        "distanceKm": "12476.33705344043",
        "imgUrl": "https://res.cloudinary.com/dxorhiaeo/image/upload/v1711825679/Rectangle_4_yqk8aq.svg"
    },
    {
        "eventName": "Cloudy Skies Book Fair",
        "cityName": "Lake Matthew",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Cloudy 14C",
        "distanceKm": "6515.755364660444",
        "imgUrl": "https://res.cloudinary.com/dxorhiaeo/image/upload/v1711825676/Rectangle_5-2_sosb9n.svg"
    },
    {
        "eventName": "Sunlit Path Charity Run",
        "cityName": "West Erika",
        "date": "2024-03-27T00:00:00.000Z",
        "weather": "Sunny -4C",
        "distanceKm": "4544.261026003867",
        "imgUrl": "https://res.cloudinary.com/dxorhiaeo/image/upload/v1711825676/Rectangle_5-2_sosb9n.svg"
    }
]

class Home extends Component {
    state = { recommandationsData: arrayData }

    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        const data = await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming")
        const dataJson = await data.json()
        // const recommandationsData = dataJson.events
        console.log(dataJson)


    }

    render() {
        const { recommandationsData } = this.state
        return (
            <div className="home-main-container">
                <div className="navDesign">
                    <Header />
                </div>
                <div className="banner-section">
                    <h1 className="banner-head">Discover Exciting Events Happening <br />
                        Near you-Stay Tuned for Updates!
                    </h1>
                    <p className="bannera-para">lorem bjknskln kndowjdpoqwd idwndpowjpdojwpd gwdiohqdwpojdp bioboaisncoas ibdasiodhaodp dbsdug dhsi jnd bcjbkcjnsck !.

                    </p>
                </div>

                <div className="floatingCard">
                    <div className="topCon">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <h1 className="recom-head">Show Recommendations
                                <FaAngleRight className="icons" /></h1>
                            <span style={{ color: "white" }}>see all</span>
                        </div>
                        <div className="cardDisplay">
                        
                            {
                                recommandationsData.map((eachItem) => (
                                    <Recommendshows eachItem={eachItem} key={eachItem.eventName} />
                                ))
                            }
                        </div>
                        <h1 className="upcoming-head">UpComing Events
                                <FaAngleRight className="icons" />
                                </h1>
                    </div>
                    <div className="secCon">
                   

                        <div className="bottom-card-container">
                            {
                                recommandationsData.map((eachItem) => (
                                    <UpComingShows eachItem={eachItem} key={eachItem.eventName} />
                                ))


                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home