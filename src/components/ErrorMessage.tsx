
export default function ErrorMessage({children} : {children : React.ReactNode}) {
  return (
    <div
        className="bg-red-100 p-2 w-full text-red-600 text-center uppercase font-bold text-sm mb-10"
    >{children}</div>
  )
}
