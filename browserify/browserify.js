import { readDirStructure } from 'wrote'
import { resolve } from 'path'
import watch from './watch'

const from = resolve(__dirname, '../src/scripts')
const to = resolve(__dirname, '../src/static/scripts')

export default async () => {
  const { content } = await readDirStructure(from)
  const files = Object.keys(content).filter(k => {
    const { type } = content[k]
    return type == 'File'
  })
  files.forEach((f) => {
    const path = resolve(from, f)
    const output = resolve(to, f)
    watch(path, output, f)
  })
}
