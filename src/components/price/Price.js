import React from 'react';
import "./Price.css";

function Price(props) {
    return (
        <div className="price-table-container">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Room Price</th>
                        <th>Room Tax</th>
                        <th>Room Fees</th>
                    </tr>
                </thead>
                <tbody>
                    {props.price.map((price, index) => (
                        <tr key={index}>
                            <td>Day {index+1}</td>
                            <td>{price.RoomPrice}</td>
                            <td>{price.RoomTax}</td>
                            <td>{price.RoomFees}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Price;
