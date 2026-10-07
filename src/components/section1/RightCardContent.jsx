import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  flex flex-col justify-between p-8">
    <h2 className=" bg-white rounded-full h-10 w-10 flex justify-center items-center font-semibold text-2xl">{props.id+1}</h2>
    <div>
      <p className="text-xl leading-normal mb-10 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        tenetur ab quaerat iure totam?
      </p>
      <div className=" flex justify-between">
        <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-full">Satisfied</button>
        <button className="bg-blue-600 text-white font-medium px-3 py-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  )
}

export default RightCardContent
