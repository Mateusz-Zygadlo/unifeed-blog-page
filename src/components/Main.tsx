import React, { useEffect } from 'react'
import { Card } from './Card'
import { MAIN_ARTICLE, ARTICLES } from '../content'
import {
  useWindowSize,
  useMeasure
} from '../hooks'

export const Main = () => {
  const { width, setWidth } = useWindowSize()
  const [rect, myRef]: any = useMeasure()

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])

  return(
    <div 
      className="mt-5 w-full" 
      ref={myRef}
    >
      <Card {...MAIN_ARTICLE} row={width > 1050} />
      <div className="article-grid">
        {ARTICLES.map((article, index: number) => (
          <Card 
            key={index}
            {...article} 
          />
        ))}
      </div>
    </div>
  )
}