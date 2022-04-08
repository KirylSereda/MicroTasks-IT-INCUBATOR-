import { ChangeEvent, useState } from "react"
import { MessageType } from "./FullInputContainer"


type PropsType = {
    setNewMessage: (title: string) => void
}

export const FullInput = (props: PropsType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickBtnHandler = () => {
        props.setNewMessage(title)
        setTitle('')
    }

    return (<div>
        <input value={title} onChange={onChangeInputHandler} />
        <button onClick={onClickBtnHandler}>+</button>
    </div>)

}