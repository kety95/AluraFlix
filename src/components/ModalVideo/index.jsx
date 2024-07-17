import VideoCard from "../SecaoVideos/VideoCard"
import { styled } from "styled-components" 
import { IoMdCloseCircle } from "react-icons/io"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed; 
    top: 0; 
    right: 0;
    bottom: 0;
    left: 0;
`
const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background-color: black;
`

export default function ModalVideo({ video, aoFechar }) {

    return (
        <div>
            {video && <>
            <Overlay/>
            <DialogEstilizado open={ !!true } onClose={aoFechar}>
                <form method="dialog" style={{textAlign: 'right'}}>
                    <button type="submit" style={{ backgroundColor: 'black', border: 'none'}}>
                        <IoMdCloseCircle style={{ color: 'white'}}/>
                    </button>
                </form>
                <VideoCard big={true} videoUrl={video} controles={false} aoZoomSolicitado/>               
            </DialogEstilizado>
            </>}
        </div>
    )
}