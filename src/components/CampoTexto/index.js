import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type="text" value={props.valor} placeholder={props.placeholder} required={props.obrigatorio} onChange={aoDigitado}/>
        </div>
    )
}

export default CampoTexto