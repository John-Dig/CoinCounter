const wordReverser = (string) => {
  if (string === '') {
    return '';
  }
  else {
    return wordReverser(string.substring(string.indexOf(" ")))
  }
}