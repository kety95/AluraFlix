import './VideoCard.css'
import { LuTrash2 } from "react-icons/lu";
import { RiEditLine } from "react-icons/ri";

export default function VideoCard ({ videoUrl, controles=true }) {
    return (
        <div className="video">
            <iframe
                src={ videoUrl }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video Player"
            >
            </iframe>
            <div className={ `${ controles ? "controles" : "no"}` }>
            <span><LuTrash2 style={{ color: 'white', fontSize: '18px' }} /> DELETAR</span>
            <span><RiEditLine style={{ color: 'white', fontSize: '18px' }} /> EDITAR</span>
            </div>
        </div>
    )
}