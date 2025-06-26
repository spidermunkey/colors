export const conditionalClassList = (classList) => {
  return classList.filter(Boolean).join(' ')
}

export const cc = conditionalClassList
