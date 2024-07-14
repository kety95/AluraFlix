import Banner from "../../components/Banner"
import SecaoVideos from "../../components/SecaoVideos"
import React, { useState, useEffect } from 'react';
import './Home.css'

const Home = () =>{

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
          try {
            const response = await fetch('http://localhost:3000/videos');
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
            <SecaoVideos videos={ frontend } />
            <SecaoVideos videos={ backend } />
            <SecaoVideos videos={ inovação } />
            <SecaoVideos videos={ gestao } />
        </div>
    )
}

export default Home