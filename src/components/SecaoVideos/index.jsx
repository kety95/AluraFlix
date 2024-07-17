import './SecaoVideos.css';
import VideoCard from "./VideoCard";
import CategoriaNome from "../CategoriaNome";

export default function SecaoVideos({ videos, aoVideoSelecionado }) {
    
    return (
        <section className="secaoVideos">
            <CategoriaNome big={false} nomeCategoria={videos[1].categoria }/>
            <div className="videos">
                {Array.isArray(videos) && videos.map(video => (
                    <VideoCard key={video.id} videoUrl={video.video} aoZoomSolicitado={aoVideoSelecionado} />
                ))}
            </div>
        </section>
    )
}
