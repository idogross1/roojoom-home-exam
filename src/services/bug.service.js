import { httpService } from './http.service'

export const bugService = {
  add,
  query,
}

function query(filterBy) {
  return httpService.get('bug')
}

async function add(bug) {
  // console.log('add ~ bug', bug)
  const addedBug = await httpService.post(`bug`, bug)
  console.log('add ~ addedBug', addedBug)
  return addedBug
}

// ;(async () => {
//   console.log('hi')
//   const bugs = await query()
//   console.log('; ~ bugs', bugs)
// })()
