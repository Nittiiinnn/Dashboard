import React from 'react'
import { FaYoutube } from 'react-icons/fa'
function Cards({title,value,color,url,stats,image}) {
    
    const bg = {
        red: 'bg-red-500',
        gray: 'bg-gray-500',
        blue: 'bg-blue-500',
        pink: 'bg-pink-500'
    }
  
  
    return (
    <>
        <a href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='"group block bg-white rounded-xl border border-gray-200 p-6 shadow hover:shadow-xl transition-all duration-300 hover:scale-105 dark:bg-[#3C424D] dark:hover:border-white dark:hover:border-4 dark:text-gray-100'
        >
        <div className='flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300'>{image}</div>
        <h4  className='text-base md:text-lg text-gray-800 font-semibold group-hover:text-white dark:text-gray-100'>{title}</h4>
        {/* <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Youtube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> */}
        {stats ? (
            <ul className="mb-4 text-gray-600 text-sm group-hover:text-gray-100 dark:text-gray-300">
                {Object.entries(stats).map(([label, number]) => (
                    <li key={label}>
                        <strong>{label}:</strong> {number}
                    </li>
                ))}
            </ul>
        ) : (
        <p className="text-gray-900 text-sm mb-4 group-hover:text-gray-100 animate-pulse dark:text-gray-300">Loading Stats...</p>
      )}
            <p className='text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100'>{value}</p>
            <div className={`h-1 mt-2 w-full flex items-center ${bg[color]} rounded-full`}/>
        </a>
    </>
  )
}

export default Cards