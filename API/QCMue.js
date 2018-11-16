export function getQCMue () {
  const url = 'http://mat.planchot.free.fr/?a=ue'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}