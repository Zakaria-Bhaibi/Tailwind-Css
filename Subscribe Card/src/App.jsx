
import './App.css'

function App() {

  return (
    <>
     {/* Card*/}
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        {/* Flex Container*/}
        <div className="flex flex-col md:flex-row rounded-l-xl">
        {/* Image*/}
          <img src="src/assets/Social.jpg" 
          alt="img" 
          className='object-fit rounded-xl h-80 md:h-70 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200' />
        {/* Text*/}
          <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl-font-medium text-center text-white md:text-left">
              Get Everything About New Jobs Opportunites In Your Inbox
            </h2>
            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
            Stay updated on job opportunities with our newsletter! Subscribe now to receive the latest news, openings, and career insights directly in your inbox. Don't miss out on valuable information that could shape your professional future. Sign up today!
            </p>
            <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input type="text" placeholder='Enter Your Email Adress' 
              className='p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none' />
              <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
