// export async function generateStaticParams() {
//     const fetchUser = await fetch("https://jsonplaceholder.typicode.com/users");
//     const res = await fetchUser.json();
   
//     return res.map((user: any) => ({
//       id: user.id.toString(),
//     }));
//   }

// const page = async ({params} : any) => {
//     console.log(params.id);
//     const fetchUser = await fetch(`https://jsonplaceholder.typicode.com/users${params.id}`);
//     const res = await fetchUser.json();
//     return <div>{res.name}</div>;
    
// };
// export default page;
