export default function BlogHero(heading){
  return(
    <section className="container mx-auto text-center py-10">
      <h1 className="text-2xl mb-3">{heading.heading}</h1>
      <h3 className="text-lg">{heading.subheading}</h3>
    </section>
  )
}