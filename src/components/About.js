// eslint-disable-next-line
import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
  const a= useContext(noteContext)
  useEffect=(()=>{
    a.update()
  },[])
  return (
    <div>
      This is About 
    </div>
  )
}

export default About
