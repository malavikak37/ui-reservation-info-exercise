import React, { Component } from "react";
import getHotelData from "../../service/API";

class HotelCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    async componentDidMount() {
        const list = await getHotelData();
        this.setState({
            list
        });
    }


    getTotalPrice = (hotel) => {
        return hotel.price.perDay.reduce((acc,cur) =>  acc + cur.RoomPrice + cur.RoomTax + cur.RoomFees, 0);
    }

    getPrimaryGuestName = (hotel) => {
        const guest =  hotel.guestInfo.filter(x=>x.type === "Primary")[0];
        if(guest) {
            return guest.name;
        }
        return "";
    }


    render() {
        const { list } = this.state;
        return (
            <div>
                {list.map((hotel, index) => (
                    <div key={index}>
                        <div>
                            <h3>{hotel.roomDetails.Name} ({hotel.roomDetails.Code})</h3>
                        </div>
                        <div>
                <p>{this.getPrimaryGuestName(hotel)}</p>
                        </div>
                        <div>
                            <small>Start Date</small>
                            <p>{hotel.startDate}</p>
                        </div>
                        <div>
                            <small>End Date</small>
                            <p>{hotel.endDate}</p>
                        </div>
                        <div>
                            <small>Price</small>
                            <p>{this.getTotalPrice(hotel)}</p>
                        </div>
                        <div>
                            <small>Amenities</small>
                            <ul>
                                {hotel.amenities.map((amenity, index) => (
                                    <li key={index}>{amenity.name} - <small>{amenity.description}</small></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default HotelCard;
