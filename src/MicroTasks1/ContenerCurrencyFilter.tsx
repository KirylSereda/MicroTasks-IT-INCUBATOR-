import React, {useState} from "react";
import {CurrencyFilter} from "./CurrencyFilter";

export type FilterType = 'All' | 'Ruble' | 'Dollar'

export const ContenerCurrencyFilter = () => {
    const [money, setMoney] = useState([
        {banknote: 'Dollars', value: 100, number: ' a1234567890'},
        {banknote: 'Dollars', value: 50, number: ' z1234567890'},
        {banknote: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknote: 'Dollars', value: 100, number: ' e1234567890'},
        {banknote: 'Dollars', value: 50, number: ' c1234567890'},
        {banknote: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknote: 'Dollars', value: 50, number: ' x1234567890'},
        {banknote: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setNameButton] = useState<FilterType>('All')

    let currentMoney = money

    if (filter === 'Dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'Dollars')
    }

    if (filter === 'Ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'RUBLS')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setNameButton(nameButton)
    }

    return (
        <>
            <CurrencyFilter
                currentMoney={currentMoney}
                onClickFilterHandler={onClickFilterHandler}
            />
        </>
    )
}
