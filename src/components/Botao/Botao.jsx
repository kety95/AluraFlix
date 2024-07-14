import { Link, useLocation } from 'react-router-dom'
import './Botao.css'

export default function Botao({ children, to }){
    let localizacao = useLocation()

    return(
        <Link className={`btn ${localizacao.pathname === to ? 'escuro' : 'claro'}`} to={ to }>{ children }</Link>
    )
}
     
