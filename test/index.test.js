import Add from '../src/index'

describe('String calculator kata', () => {
  test('it should be 0 when is an empty string', () => {
    const result = Add('')
    expect(result).toBe(0)
  })

  test('it should be 1 when "1" is provided', () => {
    const result = Add('1')
    expect(result).toBe(1)
  })

  test('it should be 2 when "2" is provided', () => {
    const result = Add('2')
    expect(result).toBe(2)
  })

  test('it should be 3 when "1,2" is provided', () => {
    const result = Add('1,2')
    expect(result).toBe(3)
  })

  test('it should be 4 when "1,3" is provided', () => {
    const result = Add('1,3')
    expect(result).toBe(4)
  })


  test.each`
      result  | input       
      ${3}    | ${'1,2'}  
      ${4}    | ${'2,2'}  
    `('When $result , then $input', ({ result , input }) => {
      expect(Add(input)).toBe(result)
    })


  test('it should be 10 when "1,2,3,4" is provided', () => {
    const result = Add('1,2,3,4')
    expect(result).toBe(10)
  })

  test('it should be 10 when "1,2,3,4,5,6,7,8,9" is provided', () => {
    const result = Add('1,2,3,4,5,6,7,8,9')
    expect(result).toBe(45)
  })

  test('it should be 6 when "1\\n2,3" is provided', () => {
    const result = Add('1\n2,3')
    expect(result).toBe(6)
  })
  test('it should be 6 when "1\\n2\\n3" is provided', () => {
    const result = Add('1\n2\n3')
    expect(result).toBe(6)
  })
  test('it should be 10 when "1\\n2,3\\n4,5,6,7,8\\n9" is provided', () => {
    const result = Add('1\n2,3\n4,5,6,7,8\n9')
    expect(result).toBe(45)
  })

  test('it should be 3 when "//;\\n1;2" is provided', () => {
    const result = Add('//;\n1;2')
    expect(result).toBe(3)
  })

  test('it should be 7 when "//.\\n4.3" is provided', () => {
    const result = Add('//.\n4.3')
    expect(result).toBe(7)
  })
})
