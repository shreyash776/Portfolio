import React from 'react'

const Links = () => {
    const items=["Homepage","Services","portfolio","Contact","About"];
  return (
    <div className='links'>
      {
        items.map((item) => {
          return <a href={`#${item}`} key={item}>{item}</a>;
        })
      }
    </div>
  )
}

export default Links
