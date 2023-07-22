"use client"

import React from 'react'
import { useState } from 'react'
import service from "@/services/servirComentarios";
import Swal from 'sweetalert2';
import { Add } from '@mui/icons-material';
const ModalAddNew = () => {
    // estados
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    const [name, setName] = useState('')
    const [anonymous, setAnonymous] = useState(false)


    // funciones
    const handleChangeSomething = (e, setSomething) => {
        setSomething(e.target.value)
    }
    const handleAnonimous = (e) => {
        if (e.target.checked) {
 
            setAnonymous(true)
            setName("")
        }else{

            setAnonymous(false)
        }
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newComment = {
            titulo: title,
            contenido: comment,
            nombre: name 
        }

        if (title === '' || comment === '') {
          AddComment.close()
          setTitle('')
          setComment('')
          setName('')
          setAnonymous(false)
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo de titulo y el comentario son obligatorios!',
            timer: 2500
           
          })
        }
        
        service.create(newComment)

        
        
        AddComment.close()
        setTitle('')
        setComment('')
        setName('')
        setAnonymous(false)

      
    }


  return (
    <div className=" fixed bottom-4 right-4 ">
    {/* Open the modal using ID.showModal() method */}
    <button
      className="btn py-1 px-3 rounded-full hover:bg-green-500 hover:text-white transition duration-200 ease-in-out border-none hover:shadow-lg hover:shadow-green-900"
      onClick={() => window.AddComment.showModal()}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

    </button>
    <dialog
      id="AddComment"
      className="modal">
      <form
        method="dialog"
        className="modal-box bg-green-950 bg-opacity-80 backdrop-blur-xl shadow-2xl">
        <h3 className="text-lg font-bold text-center my-5">¿Algo que quieras comentar o compartir con tus compañeros?</h3>
        <div className='flex flex-col gap-2 '>
            <div className='flex gap-2 w-full items-center my-4'>
                <span className='font-bold'>Título: </span> <input type="text" value={title} onChange={(e) => handleChangeSomething(e, setTitle)}  placeholder="Añade un titulo..." className="input input-bordered shadow-lg bg-transparent border-green-950 mx-auto w-full max-w-xs" />
            </div>
            <div className='flex gap-2 w-full items-center my-4'>
                <span className='font-bold'>Comentario: </span> <textarea value={comment} onChange={(e)=> handleChangeSomething(e, setComment)} className="textarea flex-grow textarea-bordered bg-transparent border-green-950 shadow-lg" placeholder="Escribe tu comentario..."></textarea>
            </div>
            
            {!anonymous && <div className='flex gap-2 w-full items-center my-4'>
                <span className='font-bold'>¿Cúal es tu nombre?</span> <input value={name} onChange={(e) =>handleChangeSomething(e, setName)} type="text" placeholder="John Doe..." className="input bg-transparent shadow-lg border-green-950 input-bordered mx-auto w-full max-w-xs" />
            </div> }
             

            <div className='flex gap-2 w-full items-center my-4'>
                <span> ¿ O quieres que sea anónimo?</span> <input type="checkbox" id='test' onChange={handleAnonimous}  />
            </div>

            
        </div>
     
        
        <p className="py-4">Presiona la tecla ESC para salir. O haz click en cualquier lado.</p>
        
        <div className='card-actions justify-end'>

        <button type='submit' className="btn bg-white text-black hover:bg-green-700 duration-200 hover:text-white " onClick={handleSubmit}>
          Añadir
        </button> 
        </div>

        

                     
      </form>

      <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
     
    </dialog>
  </div>
  )
}

export default ModalAddNew