import React from 'react'
import Data from '../Shared/Data'
function Category() {
  return (
<div className="mt-40">
    <h2 className="font-bold text-3xl text-center mb-6">Browse byTrype</h2>
    <div>
        {Data.Category.map((category,index)=>(
            <div>
                <img src={category.icon}  width={40} height={40}/>
            </div>
        ))}
    </div>
</div>
  )
}

export default Category