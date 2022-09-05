import fs from 'fs'

export const loadJson = async (filename: string): Promise<any> => { // TODO: returned value cannot be any!!
    const rawData = fs.readFileSync(filename, 'utf8')
    try {
        return JSON.parse(rawData)
    } catch(error) {
        console.log(error)
    }
}
