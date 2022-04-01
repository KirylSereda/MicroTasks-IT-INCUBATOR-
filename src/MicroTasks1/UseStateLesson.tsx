import React, {useState} from "react";

export const UseStateLesson = () => {

    let [a,SetA] = useState(1)

    const onClickHandler = () => {
       SetA(++a)
        console.log(a)
    }

    const zero = () => {
        SetA(0)
        console.log(a)
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={zero}>0</button>
        </div>
    )
}
