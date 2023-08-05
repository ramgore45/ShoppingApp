import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify'

export const Card = (props) => {

    const course= props.course
    const likecourse=props.likecourse
    const setLikecourse=props.setLikecourse

    function likehandler(){
        if(likecourse.includes(course.id)){
            setLikecourse((prev)=> prev.filter((cid)=> (cid!==course.id)))
            toast.warning('Removed Liked Course')
        }
        else{
            if(likecourse.length===0){
                setLikecourse([course.id])
                toast.success('Added liked Course')
            }
            else{
                setLikecourse((prev)=>[...prev , course.id])
                toast.success('Added liked Course')
            }
        }
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md flex flex-wrap mx-[0px]'>
        <div className='relative'>
            <img className='relative' src={course.image.url}></img>
            <button 
            className='absolute bottom-[-15px] right-1.5 h-50px w-50px bg-white rounded-full justify-center item-center p-[6px]'
            onClick={likehandler}>
                {
                    (likecourse.includes(course.id))? (<FcLike font-size='30px'/>):(<FcLikePlaceholder font-size='30px'/>)
                }
            </button>
        </div>
        <div>
            <p>{course.title}</p>
            <p>
                {
                    course.description.length>100? 
                    (course.description.substring(0,100)+'...') 
                    : (course.description)
                }
            </p>
        </div>
    </div>
  )
}
