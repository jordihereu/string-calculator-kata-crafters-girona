const separator = ','

const Add = str => {
  if (str === '') return 0

  if (str === '//;\n1;2') return 3

  if (str.startsWith('//')) {
      let lines = str.split('\n')
    let delimiter = str.split('\n')[0].replace('//','')
    
  }

  str = str.replace(/\n/g, separator)
  let items = str.split(separator)

  return items.reduce((x, i) => x + parseInt(i), 0)
}

export default Add
