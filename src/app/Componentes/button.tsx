import React from "react";

export default function Button ({nome}){

}

type ButtonProp = {
    name: string;
}

const Button: React.FC<ButtonProp> = ({name, numero} => {
    return(
        <div>
            <h1>
                {name}
                    Oi
                {numero}
            </h1>
        </div>
    )
})

export default Button