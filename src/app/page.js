"use client"

import ModalAddNew from "@/components/ModalAddNew";

export default function Home() {
  return (
    <>
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
        <div className=" card mx-auto w-64 bg-green-950 bg-opacity-70 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>
              If a dog chews shoes whose shoes does he choose? If a dog chews
              shoes whose shoes does he choose? If a dog chews shoes whose shoes
              does he choose? If a dog chews shoes whose shoes does he choose?
              If a dog chews shoes whose shoes does he choose? If a dog chews
              shoes whose shoes does he choose? If a dog chews shoes whose shoes
              does he choose?
            </p>
            <div className="card-actions justify-end">
              <div className="flex w-fit gap-1 rounded-lg border-b-2 border-green-500 px-1 py-1 duration-200 hover:bg-green-500 ">
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
                Anonimo
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalAddNew />

   
    </>
  );
}
