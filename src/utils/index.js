function startsWithIgnoreCase(str, prefix) {
  return str.toLowerCase().startsWith(prefix.toLowerCase())
}

function pause(seconds = 500) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds)
  })
}

export { startsWithIgnoreCase, pause }
