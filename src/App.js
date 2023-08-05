import React , { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Filter } from "./components/Filter";
import { Cards } from "./components/Cards";
import { filterData, apiUrl } from "./data"
import { Loader } from "./components/Loader";
import {toast} from "react-toastify";

const App = () => {

 const [courses, setCourses] = useState([])
 const [loading, setLoading] = useState(true)
 const [category, setCategory] = useState(filterData[0].title)

 async function filtercourses(){
  setLoading(true)
  try{
    
    const response = await fetch(apiUrl)
    const output = await response.json()

    setCourses(output.data)
    console.log(courses)
  }
  catch(error){
    toast.error('There IS Something Error in Network')
  }

  setLoading(false)
 }
 
 useEffect(()=>{
  filtercourses()
 }, [] )

  return (
  <div className="text-white flex flex-col ">

    <div className="flex justify-center bg-bgDark items-center py-[5px]">
      <Navbar/>
    </div>

    <div >
      <Filter filterData={filterData} category={category} setCategory={setCategory}/>
    </div>

    <div className="cards bg-bgDark2">
      {
        loading ? (<Loader/>):(<Cards courses={courses} category={category}/>)
      }
      
    </div>
  </div>);
};

export default App;
