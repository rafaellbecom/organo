import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corPrimaria }) => {
    return(
        <div className='card-colaborador'>
            <div className='header-card-colaborador' style={{backgroundColor: corPrimaria}}>
                <img src={imagem} alt={`Imagem do Colaborador ${nome}`} />
            </div>
            <div className='info-card-colaborador'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador