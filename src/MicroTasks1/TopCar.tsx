import React from 'react';

type TopCarPropsType = {
    cars: Array<car>
}

type car = {
    manufacturer: string,
    model: string
}

export const TopCar = (props: TopCarPropsType) => {
    return (
        <table>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {props.cars.map((car: car, index) => {
                return (
                    <tr key={index}>
                        <th>{car.manufacturer}</th>
                        <th>{car.model}</th>
                    </tr>
                )
            })}
        </table>
    )
}
