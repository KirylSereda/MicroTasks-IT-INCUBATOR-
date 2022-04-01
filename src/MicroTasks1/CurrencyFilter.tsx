import React from "react";
import {FilterType} from "./ContenerCurrencyFilter";

type CurrencyFilter = {
    currentMoney: Array<objFromMoneyType>
    onClickFilterHandler: (nameButton:FilterType) => void
}

type  objFromMoneyType = {
    banknote: string
    value: number
    number: string
}

export const CurrencyFilter = (props: CurrencyFilter) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoney: objFromMoneyType, index: number) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoney.banknote}</span>
                            <span> {objFromMoney.value}</span>
                            <span>{objFromMoney.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClickFilterHandler('All')}>All</button>
            <button onClick={() => props.onClickFilterHandler('Ruble')}>Ruble</button>
            <button onClick={() => props.onClickFilterHandler('Dollar')}>Dollar</button>
        </>
    )
}

