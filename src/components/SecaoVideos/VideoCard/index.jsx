import './VideoCard.css'
import { LuTrash2 } from "react-icons/lu";
import { RiEditLine, RiExpandDiagonalFill } from "react-icons/ri";


export default function VideoCard ({ videoUrl, controles=true, aoZoomSolicitado, big=false }) {
    return (
        <div className="video">
            <iframe className={`${big ? "big-card" : ""}`}
                src={ videoUrl }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video Player"
            >
            </iframe>
            <div className={ `${ controles ? "controles" : "no"}` }>
            <span style={{cursor: 'pointer'}}><LuTrash2 style={{ color: 'white', fontSize: '18px' }} /> DELETAR</span>
            <span style={{cursor: 'pointer'}}><RiEditLine style={{ color: 'white', fontSize: '18px' }} /> EDITAR</span>
            <span style={{cursor: 'pointer'}}><RiExpandDiagonalFill style={{ color: 'white', fontSize: '18px' }} onClick={() => aoZoomSolicitado(videoUrl)}/></span>
            </div>
        </div>
    )
}