export async function getPlayers() {
  const res = await fetch('/players')
  const data = await res.json()
  return data
}

export async function getOnePlayer(userId) {
  const res = await fetch('/players/' + userId)
  const data = await res.json()
  return data;
}

export async function updatePlayer(user) {
  let response = await fetch('/players/' + user.id, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })

  response = await response.json()
  console.log(response);
}