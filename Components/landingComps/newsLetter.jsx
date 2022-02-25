import React from 'react'

export default function NewsLetter() {
  function handleNavigate(params) {
    window.open('https://www.tiktok.com/@simplytech0')
  }

  return (
    <div
      className="rounded-lg bg-white p-10 text-center  "
      style={{ marginBottom: '-262px' }}
    >
      <h1 class=" mt-20 w-full text-xl font-bold md:text-3xl lg:text-3xl  ">
        NewsLetter
      </h1>
      <p className="text-1xl mt-3 ">
        Be the first to know when breaking news releases or new in depth guides!
      </p>
      <div class="mb-4">
        <input
          class="focus:shadow-outline mt-10 w-2/5 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="username"
          type="text"
          placeholder="Enter your email address"
        />
        <button
          class="focus:shadow-outline ml-2 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
        >
          Send Message
        </button>
      </div>
      <p className="text-1xl mt-3 mb-20 ">
        Take a look at how and why the most popular collections came about!
        <br></br>
        <span
          style={{
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={handleNavigate}
        >
          {' '}
          Follow us on tiktok
        </span>
      </p>
    </div>
  )
}
