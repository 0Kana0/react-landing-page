import React from 'react'
import "./Content.css"

const Content = () => {
  return (
    <div className='container'>
      <section  className='content-con'>
        <div className="content-l">
          <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="content-r">
          <h2>Some Title</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sed nesciunt, corrupti dignissimos blanditiis autem, tempora quasi, quis laudantium nam facere id! Voluptatibus quia veniam nostrum ea? Quam, perferendis voluptatem.</p>
        </div>
      </section>
      <section  className='content-con'>
        <div className="content-r">
          <h2>Some Title</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sed nesciunt, corrupti dignissimos blanditiis autem, tempora quasi, quis laudantium nam facere id! Voluptatibus quia veniam nostrum ea? Quam, perferendis voluptatem.</p>
        </div>
        <div className="content-l">
          <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </section>
      <section  className='content-con'>
        <div className="content-l">
          <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="content-r">
          <h2>Some Title</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sed nesciunt, corrupti dignissimos blanditiis autem, tempora quasi, quis laudantium nam facere id! Voluptatibus quia veniam nostrum ea? Quam, perferendis voluptatem.</p>
        </div>
      </section>
    </div>
  )
}

export default Content