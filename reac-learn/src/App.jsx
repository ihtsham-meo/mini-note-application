// import React from 'react'
// import Navbar from './components/Navbar';
// import Card from './components/Card'
// import { Bookmark } from 'lucide-react';
// import Footer from './components/Footer';

// const App = () => {

//   const jobOpenings = [
//   {
//     brandLogo: "https://cdn.tickerlogos.com/google.com",
//     companyName: "Google",
//     datePosted: "2 days ago",
//     position: "Senior Software Engineer",
//     tag1: "Full Time",
//     tag2: "Senior Level",
//     wages: "$185/hr",
//     location: "Mountain View, USA"
//   },
//   {
//     brandLogo: "https://cdn.tickerlogos.com/amazon.com",
//     companyName: "Amazon",
//     datePosted: "5 days ago",
//     position: "Senior UI/UX Designer",
//     tag1: "Part Time",
//     tag2: "Senior Level",
//     wages: "$120/hr",
//     location: "Mumbai, India"
//   },
//   {
//     brandLogo: "https://cdn.tickerlogos.com/meta.com",
//     companyName: "Meta",
//     datePosted: "1 day ago",
//     position: "Product Manager",
//     tag1: "Full Time",
//     tag2: "Mid-Senior",
//     wages: "$160/hr",
//     location: "London, UK"
//   },
//   {
//     brandLogo: "https://cdn.tickerlogos.com/microsoft.com",
//     companyName: "Microsoft",
//     datePosted: "3 days ago",
//     position: "Frontend Developer",
//     tag1: "Full Time",
//     tag2: "Junior Level",
//     wages: "$75/hr",
//     location: "Hyderabad, India"
//   },
//   {
//     brandLogo: "https://cdn.tickerlogos.com/apple.com",
//     companyName: "Apple",
//     datePosted: "4 days ago",
//     position: "iOS Engineer",
//     tag1: "Full Time",
//     tag2: "Senior Level",
//     wages: "$190/hr",
//     location: "Cupertino, USA"
//   },
//   {
//     brandLogo: "https://cdn.tickerlogos.com/netflix.com",
//     companyName: "Netflix",
//     datePosted: "6 days ago",
//     position: "Data Scientist",
//     tag1: "Contract",
//     tag2: "Senior Level",
//     wages: "$210/hr",
//     location: "Los Gatos, USA"
//   },
//   {
//     brandLogo: "https://cdn.tickerlogos.com/nvidia.com",
//     companyName: "NVIDIA",
//     datePosted: "1 week ago",
//     position: "AI Researcher",
//     tag1: "Full Time",
//     tag2: "Expert Level",
//     wages: "$250/hr",
//     location: "Bengaluru, India"
//   },
//   {
//     brandLogo: "https://cdn.tickerlogos.com/tesla.com",
//     companyName: "Tesla",
//     datePosted: "2 days ago",
//     position: "Autopilot Engineer",
//     tag1: "Full Time",
//     tag2: "Senior Level",
//     wages: "$175/hr",
//     location: "Austin, USA"
//   },
//   {
//     brandLogo: "https://cdn.tickerlogos.com/adobe.com",
//     companyName: "Adobe",
//     datePosted: "5 days ago",
//     position: "Graphic Designer",
//     tag1: "Part Time",
//     tag2: "Junior Level",
//     wages: "$55/hr",
//     location: "San Jose, USA"
//   },
//   {
//     brandLogo: "https://cdn.tickerlogos.com/salesforce.com",
//     companyName: "Salesforce",
//     datePosted: "3 days ago",
//     position: "Solution Architect",
//     tag1: "Full Time",
//     tag2: "Mid Level",
//     wages: "$145/hr",
//     location: "Singapore"
//   },
//   {
//     brandLogo: "https://cdn.tickerlogos.com/salesforce.com",
//     companyName: "PSEB",
//     datePosted: "6 days ago",
//     position: "SE Intern",
//     tag1: "Full Time",
//     tag2: "JUnior Level",
//     wages: "$14/hr",
//     location: "Gujranwala"
//   }
// ];

//   return (
//     <>
//     <Navbar />
//     <div className='parent'>
//       {jobOpenings.map(function(elem){
//         return <Card logo = {elem.brandLogo} company={elem.companyName} post={elem.datePosted} position={elem.position} tag1 = {elem.tag1} tag2  = {elem.tag2} wages = {elem.wages} location = {elem.location}/>
//       })}
//     </div>
//       <Footer />
//    </>
//   )

// }

// export default App

// import React from "react";

// const App = () => {
//   function typing(elem) {
//     if(elem.deltaY > 0){
//       console.log("Sedhaa")
//     }
//     else {
//       console.log("Ulta");

//     }
//   }
//   return (
//     <div className="h-screen bg-amber-200 px-20 " onWheel={typing}>￼
//       <input className="h-10 w-100 m-15 border-mist-700 border-4 border-solid bg-white px-4 py-7 rounded-2xl" type="date" placeholder="Enter something"
//       />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);

//   const increase = () => {
//     setNum(num+1);
//   };

//   const decrease = () => {
//     setNum(num-1);
//   };

//   const upby5 = () => {
//     setNum(num+5);
//   };

//   const downby5 = () => {
//     setNum(num-5);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center text-amber-50 bg-black">
//       <div className=" max-w-lvh bg-gray-600 px-25 py-25">
//         <h1 className="pb-8 text-4xl font-bold"> Value of num is {num}</h1>
//         <div className="justify-center 50 w-87">
//           <button className="btn" onClick={increase}>
//             Increase
//           </button>
//           <button className="btn" onClick={decrease}>Decrease</button>
//           <button className="btn" onClick={upby5}>Increase by 5</button>
//           <button className="btn" onClick={downby5}>Decrease by 5</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [username, setUsername] = useState("Ali");
//   const [inputvalue, setInputvalue] = useState("");

//   const updatename = () => {
//     if (inputvalue.trim() !== "") {
//       setUsername(inputvalue);
//       setInputvalue("");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center text-amber-50 bg-black">
//       <h1 className="text-2xl font-bold">Hello, {username}!</h1>
//       <div className="p-6 rounded-lg flex flex-col gap-4 ">
//         <input
//           value={inputvalue}
//           onChange={(e) => setInputvalue(e.target.value)}
//           className="input"
//           type="text"
//           placeholder="Change your name"
//         />
//         <button onClick={updatename} className="btn">
//           Update
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [arr, setArr] = useState([1, 92, 7, 41, 10, 3])

//   const change = () => {
//     const newArr = [...arr]
//     newArr.push(109)
//     newArr.sort(function(a, b) {return a - b})
//     setArr(newArr)

//     console.log(newArr);

//   }

//   return (
//     <div className='d'>
//       <h1>Array ......!</h1>
//       <h3>THe value of array is {arr[arr.length-2]} </h3>
//       <button className='btn' onClick={change}>Click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form is submitted");

    setName(" ");
  };

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          className="input"
          value={name}
          type="text"
          placeholder="Enter your name"
          onChange={(elem) => {
            setName(elem.target.value);
          }}
        />
        <button className="btn">Click</button>
      </form>
    </div>
  );
};

export default App;
