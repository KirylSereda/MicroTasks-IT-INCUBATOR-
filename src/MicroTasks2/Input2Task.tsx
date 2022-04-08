import { ChangeEvent } from "react"


type Input2TaskPropsType = {
    title: string
    setTitle: (title: string) => void
}

export const Input2Task = (props: Input2TaskPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler} />
    )
}