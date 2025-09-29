// "use client"
// import { useState } from "react";

// import { truncate } from "fs";
// import { useEffect, useState } from "react"

// export default function Home()  {
//   const [name, setName] = useState("Hassaan")
//   const [age, setAge] = useState(24)
//   // let name = "Hassaan";
//   const changeName = () => {
//     // name = "Hassuu Khan";
//     setName("Hassuu Khan");
//     setAge(20)
//   }
//   return (
//     <>
//     <h2>Welcome To Functionality</h2>
//     <h4>Hassuu Bhai!</h4>
//     <br />
//     <p>He is {name} and his age is {age}</p>
//     <button onClick={changeName} className="border-[1px] border-solid border-white rounded-[6px] p-[4px] mt-[3px] ml-[30px] bg-green-500">Click Here!</button>
//     </>
//   )
// }


// "use client"

// import { useState, useEffect } from "react";


// export default function Home() {

// const [count, setCount] = useState(0)

// useEffect(()=> {
//   console.log("useEffect is called")
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// },[count])
// return (
//   <div>
//     <h1>Welcome Back</h1>
//     <h3>Web for Increment and Decrement</h3>
//     <br />
//     <h2 className="text-[100px]">:{count}</h2>
//     <div className="relative gap-[4px] space-x-5">
//       <button onClick={() => setCount(count+1)} className="relative text-[50px] border-[1px] border-solid rounded-[50px] p-[6px] pl-[8px] pr-[8px]">+</button>
//       <button onClick={() => setCount(count-1)} className="relative text-[50px] border-[1px] border-solid rounded-[50px] p-[6px] pl-[12px] pr-[12px]">-</button>
//     </div>
//   </div>
// )
// }

// "use client"
// import { useState } from "react"
// const Home = () => {
//     const [cond, setCond] = useState(true)
//   return (
//     <div>
//         <h2>Condition Based Question hone ja rha hai.</h2>
//         {
//             cond ? <h3>Tum Annual Dinner mn ja rhy...?</h3>
//             : <h3>Mtlb tum iss bar bhi koi topi dene waly....</h3>
//         }
//         <button onClick={()=> setCond(!cond)}>Click</button>
//     </div>
//   )
// }

// export default Home

//Server Side Fetching:
// import React from 'react'

// interface ITodo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

// const class_thirteen = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     const parsedResponse: ITodo[] = await response.json();
//     console.log("todos >>>", parsedResponse);
//   return (
//     <div>
//         {parsedResponse.map((todo, index) => (
//             <div key={index} className="flex flex-col gap-5 border border-white p-2">
//                 <p>userId: {todo.userId}</p>
//                 <p>id: {todo.id}</p>
//                 <p>Todo Title: {todo.title}</p>
//                 <p>Todo Completed: {`${todo.completed}`}</p>
//                 </div>
//         ))}
//     </div>
//   );
// };

// export default class_thirteen

//Client Side Fetching:
// "use client";
// import React from 'react';
// import { useState } from "react";
// import {useEffect} from "react";

// const CSR = () => {
//     const [loading, setloading] = useState(false);
//     useEffect(() => {
//         setloading(true)
//         setTimeout(() => {
//             console.log("This is running before the component bcz it is useEffect")
//             setloading(false)
//         }, 3000);
//     }, []);
//   return (
//     <div className='flex justify-center text-center items-center mt-[200px] text-[20px]'>{loading ? "Loading.....": "This is Website!"}</div>
//   );
// };

// export default CSR

// "use client"
// import React, { useEffect } from 'react'

// interface ITodo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

// const class_fourteen = () => {
//     const [todos, setTodos] = React.useState<ITodo[]>([]);

//     useEffect(() => {
//         const fetchTodos = async () => {
//             const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//             const parsedResponse: ITodo[] = await response.json();
//             console.log("todos >>>", parsedResponse);
//             setTodos(parsedResponse);
//         }
//         fetchTodos();
//     }, []);
//   return (
//     <div>
//         {todos.map((todo, index) => (
//             <div key={index} className="flex flex-col gap-5 border border-white p-2">
//                 <p>userId: {todo.userId}</p>
//                 <p>id: {todo.id}</p>
//                 <p>Todo Title: {todo.title}</p>
//                 <p>Todo Completed: {`${todo.completed}`}</p>
//                   </div>
//         ))}
//     </div>
//   );
// };

// export default class_fourteen


const getData = async () => {
    const res = await fetch("https://api.quotable.io/random?tags=technology",{
        cache: "force-cache" //For Static page
        //cache: "no-store" For dynamic page
    });
    const result = await res.json()
    return result;
};

interface Data{
    _id: string;
    content: string;
}

export default async function Home() {
    const data: Data = await getData();
    return (
        <main>
            <h1>Server Side Static and Dynamic Rendering</h1>
            <p>{data.content}</p>
        </main>
    );
};




