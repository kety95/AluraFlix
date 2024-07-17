import Banner from "../../components/Banner"
import SecaoVideos from "../../components/SecaoVideos"
import React, { useState, useEffect } from 'react';
import './Home.css'
import ModalVideo from "../../components/ModalVideo";

const Home = () =>{

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [videoSelecionado, setVideoSelecionado] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
          try {
            const response = await fetch('https://my-json-server.typicode.com/kety95/alura-flix-api/videos');
            const data = await response.json();
            if (data) {
              setVideos(data);
            } else {
              setVideos([]);
            }
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }
        fetchVideos();
    }, []);

    const backend = videos.filter(video => (video.categoria === "back end"))
    const frontend = videos.filter(video => (video.categoria === "front end"))
    const inovação = videos.filter(video => (video.categoria === "inovacao"))
    const gestao = videos.filter(video => (video.categoria === "gestao"))   

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Ocorreu um erro: {error.message}</p>;

    return(
        <div className={'home-container'}>
            <Banner videos={ frontend } />
            <SecaoVideos videos={ frontend } aoVideoSelecionado={video => setVideoSelecionado(video)}/>
            <SecaoVideos videos={ backend } aoVideoSelecionado={video => setVideoSelecionado(video)}/>
            <SecaoVideos videos={ inovação } aoVideoSelecionado={video => setVideoSelecionado(video)}/>
            <SecaoVideos videos={ gestao } aoVideoSelecionado={video => setVideoSelecionado(video)}/>           
            <ModalVideo video={ videoSelecionado } aoFechar={() => setVideoSelecionado(null)}/>
        </div>
    )
}

export default Home