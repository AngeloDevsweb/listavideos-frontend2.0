import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const ListaVideos = () => {
   
    const [vid, setVid] = useState([])

    useEffect(()=>{
        const getVid = async()=>{
            const res = await axios.get('http://localhost:4000/api/listavideos')
            setVid(res.data)
        }
        getVid();
    }, [vid])


    const deleteVideo = async(id)=>{
        await axios.delete('http://localhost:4000/api/listavideos/' + id)
    }

    return (
        <div>
            <h2 className="text-center text-white">Lista de Videos</h2>
            {
                vid.map(video => (
                    <div className="card mt-3" key={video._id}>
                        <div className="card-header">
                            <div className="flexbox">
                                <h4>{video.titulo}</h4>
                                <button className="btn btn-danger" onClick={()=>deleteVideo(video._id)} >
                                    X
                                </button>
                            </div>
                            
                        </div>

                        <div className="card-body player-wrapper">
                            <ReactPlayer
                                className='react-player'
                                url={video.url}
                                width='100%'
                                height='100%'
                            />
                        </div>

                        <div className="card-footer">
                            <p>{video.descripcion}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListaVideos
