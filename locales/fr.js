export default async () => {
  const content = await fetch(
    `https://api.json-generator.com/templates/-ggqdFqP8ctx/data?access_token=oonyhompojrop7sdaygplqveqy31qn31igjoz9sc`
  )

  const data = await content.json()
  console.log(data)
  return data
}
