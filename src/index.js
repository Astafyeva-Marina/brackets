module.exports = function check(str, bracketsConfig) {
  const bracketsEqual = {} 
  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsEqual[bracketsConfig[i][1]] = bracketsConfig[i][0]
  } // получить [')']:'('

  let stack = []

  // перебрать исходную строку
  for (let i = 0; i < str.length; i++) {
    let bracketsPeak = str[i]
    let bracketsNew = stack[stack.length - 1]
    // запомнить текущий элемент и верхний в стеке
    if (stack.length === 0) {
      stack.push(bracketsPeak ) // записываем первый элемент
    } else {
      if (bracketsEqual[bracketsPeak] === bracketsNew) {
        stack.pop() // если скобка закрывает скобку в стеке - удаляется
      } else {
        stack.push(bracketsPeak)
      } // если скобка не закрывает - добавить в стек
    }
  }
  return stack.length === 0
  // если стек пустой true, иначе false
}