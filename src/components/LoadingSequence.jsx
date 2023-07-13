import React, { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function LoadingSequence() {
  const [delay, setDelay] = useState(3000)
  const [loading, setLoading] = React.useState(false)
  const [sequence, setSequence] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
 
  const sentanceArray = 
  ['Initializing page', 'Taking dogs for a walk', 'Watering plants', 
   'Quanting computer', 'Rending cycle complete', 'Enjoy']

  useEffect(() => {
    setLoading(prevLoad => !prevLoad)
    setTimeout(() => {
      setLoading(prevLoad => !prevLoad)
    }, 3000);
  }, [])

  const loadingElements = sentanceArray.map(item =>
                                          <LoadingScreen
                                              key={item} 
                                              text={item}
                                              delay={40}
                                              isFlicker={false}
                                              />        
  )
  
  useEffect(() => {
    setTimeout(() => {
      setDelay(200)
    }, 3000);
  })

  useEffect(() => {
   setTimeout(() =>{
    if (currentIndex < loadingElements.length){
        const timer = setTimeout(() => {
        setSequence(prevSeq => [...prevSeq, loadingElements[currentIndex]])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, 500)

      return () => {
        clearTimeout(timer)
      }}
    }, delay)
  }, [currentIndex])

  return (
    <section className="loading-sequence">
     {loading ? 
     <LoadingScreen 
        text="Loading.." 
        delay={50}
        isFlicker={true}
        /> 
        : 
        sequence
        }
    </section>
  )
}