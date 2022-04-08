import { useState } from "react";
import { Button2Task } from "./Button2Task";
import { Input2Task } from "./Input2Task";

export const HW2 = () => {

    const [message, setMessage] = useState([
        { message: 'message1' },
        { message: 'message2' },
        { message: 'message3' },
        { message: 'message4' },
        { message: 'message5' }
    ]
    )

    let [title, setTitle] = useState('')


    const CallBackButtonHandler = () => {
        setMessage([{ message: title }, ...message])
        setTitle('')
    }

    return (
        <div >
            {/* <FullInputContainer message={message} setMessage={setMessage} /> */}
            <Input2Task title={title} setTitle={setTitle} />
            <Button2Task name={'+'} callBack={CallBackButtonHandler} />
            {
                message.map((el, index) => {
                    return (
                        <div key={index}>
                            {el.message}
                        </div>
                    )
                })
            }
        </div>
    );
}

