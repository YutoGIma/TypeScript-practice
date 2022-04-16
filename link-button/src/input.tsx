import React from "react";

type Props = {
    children: string
}

const Input: React.FC<Props> = ({children}) => {
    return (
        <div className="formInput">
            <input type="text" defaultValue={ children }/>
            <p>{ children }</p>
        </div>
    )
}

export default Input