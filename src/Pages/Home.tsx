function Home() {
  return (
    <div className='text-center max-w-6/10 m-auto'>
      <h2 className='text-4xl m-4'>Welcome</h2>
      <p className=' text-xl border-b-2 border-b-emerald-700 pb-4 '>
        to learning project of React. Here you can get info on:
      </p>
      <ul className='my-4 text-left text-lg'>
        <li className='mb-4'>-General gem pricing with filtering </li>
        <li className='mb-4'>
          -Expected value of putting different collor gems in Lab Font for
          maximum profit
        </li>
        <li className='mb-4'>
          -Expected value of corrupting gem and math info on it
        </li>
      </ul>
    </div>
  )
}

export default Home
