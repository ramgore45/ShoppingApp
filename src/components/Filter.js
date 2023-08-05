import React from 'react'

export const Filter = (props) => {

    let filterData= props.filterData
    let category = props.category
    let setCategory = props.setCategory

    function filterhandler(title){
        setCategory(title)
    }

  return (
    <div className="bg-[grey] flex justify-center  items-center py-[7px] gap-x-4">
        {
            filterData.map((data)=>{
                return (
                <button 
                className={`rounded-md px-2 py-1 bg-black border-2 hover:bg-opacity-50 borer-transparent
                ${category===data.title ? 
                    'bg-opacity-80 border-white':
                    'bg-opacity-40 borer-transparent'    
                }`}
                key={data.id} onClick={()=>filterhandler(data.title)}>{data.title}</button>
                )
            })
        }
    </div>
  )
}
