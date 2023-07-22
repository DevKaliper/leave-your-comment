import axios from "axios"

const baseUrl = "http://localhost:3001/api/comentarios"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
    
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => console.log(response)).catch(error => console.log(error))  
}

const deleteComentario = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response).catch(error => console.log(error)    )
}

export default {getAll, create, deleteComentario}