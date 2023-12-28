import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    
    const aoSelecionado = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} required={props.obrigatorio} onChange={aoSelecionado}>
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa