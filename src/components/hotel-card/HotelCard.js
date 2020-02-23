import React, { Component } from "react";
import getHotelData from "../../service/API";
import "./HotelCard.css";

class HotelCard extends Component {
    allHotels = [];
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    async componentDidMount() {
        const list = await getHotelData();
        this.allHotels = [...list];
        this.setState({
            list
        });
    }


    getTotalPrice = (hotel) => {
        return hotel.price.perDay.reduce((acc, cur) => acc + cur.RoomPrice + cur.RoomTax + cur.RoomFees, 0);
    }

    getPrimaryGuestName = (hotel) => {
        const guest = hotel.guestInfo.filter(x => x.type === "Primary")[0];
        if (guest) {
            return guest.name;
        }
        return "";
    }

    handleDateFilterChange =(event)=> {
        const {name,value} = event.target;
        const list =  this.allHotels.filter(hotel => new Date(hotel.startDate) > new Date(value));
        this.setState({
            list
        });
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                <div className="filter-container">
                    <div>
                        <h2>Current Reservations</h2>
                    </div>
                    <div className="date-filter">
                        <label>Show reservations After</label>
                        <input onChange={this.handleDateFilterChange} className="date-input" type="date" />
                    </div>
                </div>
                <div className="hotel-card-container">
                    {list.map((hotel, index) => (
                        <div key={index} className="hotel-card">
                            <div className="header">
                                <h3>{hotel.roomDetails.Name} ({hotel.roomDetails.Code})</h3>
                                <div>
                                    <small>Price</small>
                                    <p className="price">{this.getTotalPrice(hotel)}</p>
                                </div>
                            </div>
                            <div>
                                <small>Guest Name</small>
                                <p className="bold">{this.getPrimaryGuestName(hotel)}</p>
                            </div>
                            <div className="dates">
                                <div>
                                    <small>Start Date</small>
                                    <p className="bold">{hotel.startDate}</p>
                                </div>
                                <div>
                                    <small>End Date</small>
                                    <p className="bold">{hotel.endDate}</p>
                                </div>
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
                    {list.length === 0 && (
                        <div className="no-hotels-text">
                            <p>No hotels found. Please change your search criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default HotelCard;
