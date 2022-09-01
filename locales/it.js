export default async () => {
  const content = await fetch(
    `https://api.json-generator.com/templates/R5qFiRdfT63A/data?access_token=oonyhompojrop7sdaygplqveqy31qn31igjoz9sc`
  )

  const data = await content.json()
  return data
}
