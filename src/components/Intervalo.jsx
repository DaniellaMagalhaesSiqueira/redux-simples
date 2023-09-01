import './Intervalo.css'
import React from 'react'
import {connect} from 'react-redux'
import Card from './Card'
import {alterarNumeroMinimo, alterarNumeroMaximo} from '../store/actions/numeros'

const Intervalo = props => {
    const {min, max} = props
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo"> 
                <span>
                    <strong>Mínimo:</strong>
                    <input type="text" value={min} onChange={e => props.alterarMin(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="text" value={max} onChange={e => props.alterarMax(+e.target.value)} />
                </span>

            </div>
        </Card>
    )

}
const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        alterarMin(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMax(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)