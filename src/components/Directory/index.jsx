import React from 'react'
import CategoryItem from '../categoryItem'
import './index.scss'
const Directory = ({categories}) => {
  return (
    <>
     <div className="directory-container">
        {categories.map(({title,imageUrl}) => {
          return (
            <CategoryItem title={title} imageUrl={imageUrl}/>
          );
        })}
      </div>
    </>
  )
}

export default Directory