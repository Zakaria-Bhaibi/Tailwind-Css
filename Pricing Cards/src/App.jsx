
import "./App.css";

function App() {
  

  return (
    <>
      {/* Inner Container*/}
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
        {/* Col 1 */}
        <div className="bg-slate-700 rounded-xl text-white">
          {/* upper Container */}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800 text-center">
            <div className="text-center uppercase">Basic</div>
            <h2 className="mt-10 font-serif text-5xl text-center">100GB</h2>
            <h3 className="mt-2 text-center">$1.99/Month</h3>
            <a
              href="#"
              className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration:200"
            >
              Purchase
            </a>
          </div>
          {/* border */}
          <div className="border-t border-slate-700"></div>
          {/* Lower Container */}
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            {/* List Container */}
            <div className="flex flex-col space-y-2">
              {/* List Item 1 */}
              <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-sm ml-1">100GB of storage</span>
              </div>
              {/* List Item 2 */}
              <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-sm ml-1">option to add members</span>
              </div>
              {/* List Item 3 */}
              <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-sm ml-1">extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
        {/* Col 2 */}
        <div className="bg-violet-600 rounded-xl text-white">
          {/* upper Container */}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800 text-center">
            <div className="text-center uppercase">Standard</div>
            <h2 className="mt-10 font-serif text-5xl text-center">200GB</h2>
            <h3 className="mt-2 text-center">$3.99/Month</h3>
            <a
              href="#"
              className="inline-block px-10 py-3 my-6 text-center border bg-violet-600 border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration:200"
            >
              Purchase
            </a>
          </div>
          {/* border */}
          <div className="border-t border-slate-700"></div>
          {/* Lower Container */}
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            {/* List Container */}
            <div className="flex flex-col space-y-2">
              {/* List Item 1 */}
              <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-sm ml-1">200GB of storage</span>
              </div>
              {/* List Item 2 */}
              <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-sm ml-1">option to add members</span>
              </div>
              {/* List Item 3 */}
              <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-sm ml-1">extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
        {/* Col 3 */}
        <div className="bg-slate-700 rounded-xl text-white">
          {/* upper Container */}
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800 text-center">
            <div className="text-center uppercase">premium</div>
            <h2 className="mt-10 font-serif text-5xl text-center">2 TB</h2>
            <h3 className="mt-2 text-center">$8.99/Month</h3>
            <a
              href="#"
              className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration:200"
            >
              Purchase
            </a>
          </div>
          {/* border */}
          <div className="border-t border-slate-700"></div>
          {/* Lower Container */}
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            {/* List Container */}
            <div className="flex flex-col space-y-2">
              {/* List Item 1 */}
              <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-sm ml-1">2 TB of storage</span>
              </div>
              {/* List Item 2 */}
              <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-sm ml-1">option to add members</span>
              </div>
              {/* List Item 3 */}
              <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                <span className="text-sm ml-1">extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
