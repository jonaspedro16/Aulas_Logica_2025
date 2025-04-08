const prompt = require ('prompt-sync')
let filmes = ['Clube da luta', 'Seven', 'Laranja mecanica', 'O babadook', 'Coringa', 'Cruella', 'Mad Max estrada da furia']
console.log (filmes[0])
console.log (filmes[3])

filmes[6] = 'A bruxa'
console.log(filmes)

filmes.push ('A vila')
console.log(filmes)

filmes.splice(4, 0, 'Pokemon i chose you')
console.log(filmes)

filmes.shift()
console.log(filmes)

filmes.pop()
console.log(filmes)

console.log(filmes.slice (0, 3,))

console.log(filmes.slice (3, 7))

console.log(filmes.length)

filmes.reverse()
console.log(filmes)
