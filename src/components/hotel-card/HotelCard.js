import React, {Component} from "react";
import getHotelData from "../../service/API";

class HotelCard extends Component {
    
    async componentDidMount() {
        const res = await getHotelData();
    }

    render() {
        return (
            <div>
                <p>Hotel card</p>
            </div>
        )
    }
}

export default HotelCard;
