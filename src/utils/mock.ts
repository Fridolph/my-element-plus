import axios from 'axios'

export async function Get(url: string) {
  const rawData = await axios.get(url)
  return rawData
}