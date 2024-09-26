type InputProp= {
    value: string;
    funcao: (e: string)=> void
}

const Input : React.FC<InputProp>= ({valor, funcao}) => {
    return(
        <input value={valor} onChange={funcao}
    )
}