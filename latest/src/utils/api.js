export async function get(endpoint) {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch(error){
      console.log('error fetching resource', endpoint, error)
      return []
    }

}

export async function post(endpoint,data) {
    const response = await fetch(endpoint,{
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return response.json();

}
export async function add(endpoint, data){
  const response = await fetch(endpoint,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return response.json();
}

export async function search(endpoint,params){
  const response = await fetch(endpoint,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  })
  return response.json();
}

export async function destroy(endpoint, id){
  const response = await fetch(`${endpoint}/${id}`,{
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json'},
  })
  return response.json();
}

export async function update(endpoint, data){
  const response = await fetch(`${endpoint}/${data.id}`,{
    method: 'PUT',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
  return response.json()
}

export async function edit(endpoint, data){
  const response = await fetch(`${endpoint}/${data.id}`,{
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
  return response.json()
}
