import React from 'react'

interface CardProps {
  row: boolean;
  image: string;
  h1: string;
  p: string;
  authorImage: string;
  firstName: string;
  lastName: string;
  role: string;
}

export const Card: React.FC<CardProps> = ({ 
  row,
  image, 
  h1,
  p,
  authorImage,
  firstName,
  lastName,
  role,
}) => {
  return(
    <div className={`my-5 ${row ? 'flex' : null}`}>
      <img 
        src={image}
        alt="Article"
        className={`${row ? 'max-w-[30rem] my-auto' : null}`}
      />
      <div className={`mt-3 ${row ? 'flex flex-col justify-between ml-10' : null} p-2`}>
        <div>
          <h1 className="text-4xl font-extrabold">{h1}</h1>
          <p className="mt-2">{p}</p>
        </div>
        <div className="flex items-center mt-3">
          <img 
            src={authorImage}
            alt="user avatar icon"
            className="h-16"
          />
          <div className="ml-3">
            <h1 className="font-semibold text-lg -mb-1">{firstName} {lastName}</h1>
            <p>{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}