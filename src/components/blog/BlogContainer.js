export default function BlogContainer({children}){
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-2 max-w-4xl w-full mx-auto auto-cols-max">
      {children}
    </section>
  )
}