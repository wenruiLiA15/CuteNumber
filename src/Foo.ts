export class Foo {
  bar() {
    return 'bar'
  }
}
export function isCuteNumberGreaterThan10(numbers:number[]): boolean {

  const evennumbers = findEvenNumber(numbers)
  const maxnumber = findMaxNumber(evennumbers)

  return isCreaterThan10(maxnumber)
}
function findEvenNumber(numbers: number[]): number[] {
  return numbers.filter(number => number%2 === 0)
}

function findMaxNumber(numbers: number[]): number{
  return Math.max(...numbers)
}

function isCreaterThan10(number:number): boolean {
  return number>10
}

