import React, { useState } from 'react'
import { Card } from './Card'

export const Cards = (props) => {
   let courses = props.courses
   let category = props.category
   const [likecourse, setLikecourse] = useState([])
   
   function getcourses(){

    if(category==='All'){
        let allcourses= ([])

        Object.values(courses).forEach((array)=>{
            array.forEach((course)=>{
                allcourses.push(course)
            })
        })
        console.log(allcourses)
        return allcourses
    }
    else{
        return courses[category]
    }
    
   }
   

  return (
    <div className='w-[300px] '>
        <div>
        {
            getcourses().map((course)=>{
               return (
               <div className='w-[300px]'>
                    <Card 
                        key={course.id} 
                        course={course}
                        likecourse={likecourse}
                        setLikecourse={setLikecourse}
                    />
               </div>
               
               )
            })
        }
        </div> 
    </div>
  )
}
