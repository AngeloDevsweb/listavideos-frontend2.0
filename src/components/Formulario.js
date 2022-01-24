import React, { useState } from 'react'
import axios from 'axios'

const Formulario = () => {

    const valoresIniciales = {
        titulo:'',
        descripcion:'',
        url:''
    }

    const [videos, setVideos] = useState(valoresIniciales)

    const onchanged = (e)=>{
        const {name, value} = e.target;
        setVideos({...videos, [name]: value})
    } 

    const onsubmit = async(e)=>{
        e.preventDefault()
        const newVideo = {
            titulo: videos.titulo,
            descripcion: videos.descripcion,
            url: videos.url
        }
        await axios.post('http://localhost:4000/api/listavideos', newVideo)
        setVideos({...valoresIniciales})
    }

    return (
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center mb-4 text-white">Ingresa el link</h2>
        <div className="card card-body">
          <form onSubmit={onsubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="ingresa el titulo"
                name="titulo"
                value={videos.titulo}
                onChange={onchanged}
                required
              />
            </div>

            <div className="form-group mt-2">
              <textarea
                name="descripcion"
                className="form-control"
                rows="4"
                placeholder="Descripcion"
                onChange={onchanged}
                value={videos.descripcion}
                required
              ></textarea>
            </div>

            <div className="form-group mt-2">
              <input
                type="text"
                placeholder="ingresar la URL del video"
                className="form-control"
                name="url"
                onChange={onchanged}
                value={videos.url}
                required
              />
            </div>

            <button className="btn btn-primary mt-2 form-control">
              Guardar
            </button>
          </form>
        </div>
      </div>
    );
}

export default Formulario
