"use client";
import Head from "next/head";

import ModalAddNew from "@/components/ModalAddNew";
import { useState, useEffect } from "react";
import service from "@/services/servirComentarios";

export default function Home() {
  const handleDelete = (id) => {
    service.deleteComentario(id).then((response) => {
      console.log(response);
    });
  };
  const [comentarios, setComentarios] = useState([]);
  useEffect(() => {
    service.getAll().then((response) => {
      setComentarios(response);
    });
  }, [comentarios]);

  return (
    <>
      <Head>
        <title>Colón 4.0</title>
      </Head>
      <section className=" mt-5 flex h-full w-full flex-col items-center justify-center px-2">
        <h1 className="bg-gradient-to-r from-[#204E5C] to-green-700  bg-clip-text text-center text-4xl font-bold tracking-wide text-transparent md:text-6xl">
          ¡Bienvenidos compañeros!
        </h1>
        <p className="mt-3 text-center  text-base font-semibold italic text-black md:text-xl lg:text-2xl">
          Este es el lugar donde puedes dejar tus comentarios, opiniones o
          recursos sobre el curso de
          <span className="bg-gradient-to-r from-[#204E5C] to-green-700 bg-clip-text text-transparent">
            {" "}
            Programación FullStack.{" "}
          </span>
          ¡Deja tu comentario!
        </p>
      </section>
      <section className="overpx-2 mt-5 grid h-full w-full grid-cols-1 items-center justify-center gap-3  md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {comentarios.length == 0 ? (
          <h2 className="my-20 flex h-full w-[99vw] items-center justify-center text-center text-4xl font-semibold text-green-950">
            Aún no hay comentarios para mostrar... ¡Se el primero!
          </h2>
        ) : (
          comentarios?.map((comentario) => (
            <div
              key={comentario.id}
              className=" card col-span-2 overflow-hidden mx-auto w-64 md:w-fit bg-green-950 bg-opacity-70 shadow-xl ">
              <div className="card-body">
                <h2 className="card-title whitespace-normal">{comentario.titulo}</h2>
                <p>{comentario.contenido}</p>
                <div className="card-actions justify-end">
                  <div className="flex w-fit gap-1 rounded-lg border-b-2 border-green-500 px-1 py-1 duration-200 hover:bg-green-500 ">
                    {comentario.nombre ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                        />
                      </svg>
                    )}

                    {comentario.nombre ? comentario.nombre : "Anónimo"}
                    {/* para borrar las casillas más facilmente */}
                    {/* <button
                      className="btn "
                      onClick={() => handleDelete(comentario.id)}>
                      borrar
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
      <ModalAddNew />
    </>
  );
}
