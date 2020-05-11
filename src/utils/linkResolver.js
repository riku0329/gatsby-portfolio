export const linkResolver = doc => {
  if (doc.type === "blog") {
    return `/${doc.uid}`
  }

  return "/"
}
