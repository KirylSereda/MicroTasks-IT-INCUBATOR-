import React from 'react';
import './App.css';
import {TopCar} from "./MicroTasks1/TopCar";
import {Button} from "./MicroTasks1/Button";
import {UseStateLesson} from "./MicroTasks1/UseStateLesson";
import {ContenerCurrencyFilter} from "./MicroTasks1/ContenerCurrencyFilter";


function App() {

    let topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const ButtonFoo = (subscriber: string, age: number) => {
        console.log(`I am ${subscriber}`)
    }

    const StupidButton = (text: string) => {
        console.log(text)
    }

    return (
        <div >
            <TopCar cars={topCars}/>
            <Button name={'MyYouTubeChanel-1'} callBack={() => ButtonFoo('Vasya', 22)}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => ButtonFoo('Ivan', 25)}/>
            <Button name={'MyYouTubeChanel-3'} callBack={() => StupidButton('I am stupid button')}/>
            <UseStateLesson/>
            <ContenerCurrencyFilter/>
        </div>
    );
}

export default App;
