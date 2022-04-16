import React from "react";

type Props = {
message: string,
number: string,
children: React.ReactNode
}

const Child: React.FC<Props> = ({message, number, children}) => {
    return (
        <div>
        <p>これは子コンポーネントです。</p>
        <p>{ message }</p>
        <p>{ number }の{ children }</p>
        </div>
    )
}


export default Child