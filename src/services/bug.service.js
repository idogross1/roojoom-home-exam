import { httpService } from './http.service'

export const bugService = {
  add,
}

async function add(bug) {
  const addedBug = await httpService.post(`bug`, bug)
  return addedBug
}
