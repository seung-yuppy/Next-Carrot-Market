export default function Home() {
  return (
    <main
      className="bg-gray-300 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 
      xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5"
    >
      <div
        className="bg-white shadow-lg p-5 rounded-3xl w-full 
        max-w-screen-sm flex flex-col gap-3"
      >
        {["Song", "Me", "You", "Yourself", ""].map((person, index) => (
          <div
            className="flex items-center gap-5 p-3             
            border-b-2 pb-5 
            last:pb-0 last:border-0
            group"
            key={index}
          >
            <div className="size-7 bg-blue-400 rounded-full" />
            <div
              className="text-lg font-medium 
              empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-300
              group-hover:text-red-400"
            >
              {person}
            </div>
            <div
              className="size-6 bg-red-500 text-white 
              flex items-center justify-center rounded-full
              relative"
            >
              <span className="z-10">{index}</span>
              <div className="size-6 bg-red-500 rounded-full absolute animate-ping" />
            </div>
          </div>
        ))}
        <div className="group flex flex-col">
          <input
            type="text"
            placeholder="Write your Email"
            className="bg-gray-100 w-full"
          />
          <span className="group-focus-within:block hidden text-red-500">Make Sure your E-mail</span>
          <button className="bg-purple-500 rounded-sexy-name m-tomatozz`">Submit</button>
          <button className="btn">Hello</button>
          <a href="#">AAAA</a>
        </div>
      </div>
    </main>
  );
}
