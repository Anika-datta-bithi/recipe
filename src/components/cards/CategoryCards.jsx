/* eslint-disable react/prop-types */
import React from 'react'

// eslint-disable-next-line react/prop-types
export default function CategoryCards({category}) {
  return (
    <div className="border px-5 py-3 rounded">
        
        <h1 className="text-center">CategoryCards{category?.title}</h1>
    </div>
  )
}
