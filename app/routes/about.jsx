export default function about(){
    return(
        <main>
            <div className="h-screen flex">
              <section className="bg-stone-200 font-serif w-1/2 h-full text-zinc-800">
                <div className="text-center">
                  <h1 className="text-black text-6xl pt-56">We're from the mountains.</h1>
                  <p className="text-xl w-9/12 mx-auto pt-2 pb-40">
                    We are people with a deep love for nature, animals and all life out there. Our team is made up of a group of professionals in different areas, who are prepared to work to protect our mountains and protected areas, for our planet, our home.
                  </p>
                </div>
              </section>

              <section className="bg-stone-200 font-serif w-1/2 h-full">
                <div className="felx flex-col">
                <img src="https://images.unsplash.com/photo-1502294624983-4ba589803a55" alt="Our people" className="ml-60 mt-14 w-96 h-2/3 rounded-md" />
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" alt="Working" className="-mt-4 w-96 h-2/3 rounded-md ml-96"/>
                <img src="https://images.unsplash.com/photo-1582298538104-fe2e74c27f59" alt="Enjoying the moment" className="h-96 rounded-md ml-36 -mt-40"/>
                <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b" alt="Planting trees" className="w-96 h-2/3 rounded-md ml-64 -mt-20"/>
                </div>
              </section>
            </div>

            <section className="font-serif bg-stone-200 text-zinc-800 pt-24 border-t-4 border-t-lime-800">
                <div className="text-center">
                  <h1 className="text-5xl">Meet Our Team</h1>
                </div>

                <div className="mt-14 grid gap-4 grid-cols-4 grid-rows-2 shadow-lg">
                  <div className="bg-stone-200">
                    <img src="https://images.unsplash.com/photo-1678986515371-893047863e81" alt="David" className="rounded-full w-48 h-48 mx-auto mt-8"/>
                    <h4 className="text-center mt-4">David.</h4>
                    <p className="text-center text-slate-600 mb-4">Project Our Mountains Manager</p>
                  </div>
                  <div className="bg-stone-200">
                    <img src="https://images.unsplash.com/photo-1604916865481-864c0d4be56b" alt="Alice" className="rounded-full w-48 h-48 mx-auto mt-8"/>
                    <h4 className="text-center mt-4">Alice.</h4>
                    <p className="text-center text-slate-600 mb-4">Ecology</p>
                  </div>
                  <div className="bg-stone-200">
                    <img src="https://images.unsplash.com/photo-1608927259970-d75a12b16a6e" alt="Oscar" className="rounded-full w-48 h-48 mx-auto mt-8"/>
                    <h4 className="text-center mt-4">Oscar.</h4>
                    <p className="text-center text-slate-600 mb-4">Biologist</p>
                  </div>
                  <div className="bg-stone-200">
                    <img src="https://images.unsplash.com/photo-1572076512378-f4c931d7ce1c" alt="Daniel" className="rounded-full w-48 h-48 mx-auto mt-8"/>
                    <h4 className="text-center mt-4">Daniel.</h4>
                    <p className="text-center text-slate-600 mb-4">Web Master</p>
                  </div>
                  <div className="bg-stone-200">
                    <img src="https://images.unsplash.com/photo-1552327359-d86398116072" alt="Clara" className="rounded-full w-48 h-48 mx-auto mt-8"/>
                    <h4 className="text-center mt-4">Clara.</h4>
                    <p className="text-center text-slate-600 mb-4">Community manager</p>
                  </div>
                  <div className="bg-stone-200">
                    <img src="https://images.unsplash.com/photo-1505866535066-ccebd6b2b98a" alt="Scott" className="rounded-full w-48 h-48 mx-auto mt-8"/>
                    <h4 className="text-center mt-4">Scott.</h4>
                    <p className="text-center text-slate-600 mb-4">Professional hiker</p>
                  </div>
                  <div className="bg-stone-200">
                    <img src="https://images.unsplash.com/photo-1669082072790-7414a67298dd" alt="Tom" className="rounded-full w-48 h-48 mx-auto mt-8"/>
                    <h4 className="text-center mt-4">Tom.</h4>
                    <p className="text-center text-slate-600 mb-4">Economics</p>
                  </div>
                  <div className="bg-stone-200">
                    <img src="https://images.unsplash.com/photo-1669460945339-d9f236a4bd0e" alt="Diana" className="rounded-full w-48 h-48 mx-auto mt-8"/>
                    <h4 className="text-center mt-4">Diana.</h4>
                    <p className="text-center text-slate-600 mb-4">Project assistant</p>
                  </div>
                </div>
              </section>

        </main>
    );
}