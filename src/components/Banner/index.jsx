import CategoriaNome from '../CategoriaNome'
import VideoCard from '../SecaoVideos/VideoCard'
import './Banner.css'

const Banner = ({ videos }) => {
    return (
        <div className='banner'>
            <div className='esquerda'>
                <CategoriaNome big nomeCategoria={ videos[1].categoria }/>
                <h2>{ videos[1].titulo }</h2>
                <p>{ videos[1].descricao }</p>
            </div>

            <div className='direita'>
                <VideoCard controles={false} videoUrl={ videos[1].video }/>
            </div>
        </div>
    )
}

export default Banner