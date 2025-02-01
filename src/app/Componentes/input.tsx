type InputProp = {
    valor: string;
    funcao: () => void
}

const Input: React.FC<InputProp> = ({ valor, funcao }) => {
    return (
        <input value={valor} onChange={funcao} />
    )
}

export default Input;