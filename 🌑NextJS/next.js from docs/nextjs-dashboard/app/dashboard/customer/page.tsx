// animated the text with tailwind css don't use framer motion

export default function Customers(){
  return(
    <div
    className="w-full flex-1 flex-col items-center justify-center gap-20 text-xl md:text-3xl lg:text-5xl text-center"
    >
      <h1
      className="text-4xl font-bold animate-pulse text-blue-500 "
      >Customers Page</h1>
      <p>This is the customers page</p>
    </div>
  )
}