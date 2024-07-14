import logo from '../../assets/LogoMain.svg'
import Botao from '../Botao/Botao'
import './Menu.css'

const Menu = () => {

    return (
        <header className='cabecalho'> 
            <nav>
                <img src={ logo } alt='logo'/>
                <span>
                    <Botao to='/'>HOME</Botao>
                    <Botao to='novovideo'>NOVO VIDEO</Botao>
                </span>
            </nav>
        </header>
    )
}

export default Menu