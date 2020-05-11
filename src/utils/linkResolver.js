export const linkResolver = doc => {
  if (doc.type === "plog") {
    return `/blog/${doc.uid}`
  }

  return "/"
}
