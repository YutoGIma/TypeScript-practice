import React, {useState} from "react";

type Props = {
    children: string
}

const Input: React.FC<Props> = ({children}) => {
    const [name, setName] = React.useState(children)
    const handleChange = (e:any) => {
        setName(e.target.value)
    } 
    return (
        <form className="formInput" onSubmit={ clickEnter }>
            <input name="name" type="text" defaultValue={ name } onChange={ handleChange }/>
            <p>{ name }</p>
            <button type="submit">送信</button>
        </form>
    )
}

function clickEnter(){
    console.log("yes")
}

export default Input