import { FullInput } from "./FullInput"

export type MessageType = {
    message: string
}

type FullInputContainerPropsType = {
    message: any
    setMessage: (message: Array<MessageType>) => void
}

export const FullInputContainer = (props: FullInputContainerPropsType) => {

    const setNewMessage = (title: string) => {
        props.setMessage([{ message: title }, ...props.message])
    }

    return (
        <div>
            <FullInput setNewMessage={setNewMessage} />
        </div>
    )
}