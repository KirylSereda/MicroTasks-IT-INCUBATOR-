import { Button } from "./Button"
import { ContenerCurrencyFilter } from "./ContenerCurrencyFilter"
import { TopCar } from "./TopCar"
import { UseStateLesson } from "./UseStateLesson"


export const HW1 = () => {

    let topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' },
    ]

    const ButtonFoo = (subscriber: string, age: number) => {
        console.log(`I am ${subscriber}`)
    }

    const StupidButton = (text: string) => {
        console.log(text)
    }


    return (
        <>
            <TopCar cars={topCars} />
            <Button name={'MyYouTubeChanel-1'} callBack={() => ButtonFoo('Vasya', 22)} />
            <Button name={'MyYouTubeChanel-2'} callBack={() => ButtonFoo('Ivan', 25)} />
            <Button name={'MyYouTubeChanel-3'} callBack={() => StupidButton('I am stupid button')} />
            <UseStateLesson />
            <ContenerCurrencyFilter />
        </>
    )

}