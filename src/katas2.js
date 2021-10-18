// comece a criar a sua função add na linha abaixo
function add(x, n){
    return x+n
}
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(x, n){
    let output=0
    for(let i=1; i<=x; i++) output = add(output,n)
    return output
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, n){
    let output = 1
    for(let i=1; i<=n; i++) output = multiply(output,x)
    return output
}
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(n){
    let result = 1
    for (let i=n; i > 1; i--){
        result = multiply(result,i)
    }
    return result
}
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');
/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(x) {
    let aux = 0
    let result = 1
    let ax = result
    while (ax<x){
        ax = result
        result = add(result,aux)
        aux = ax 
    }
    return result
}
// descomente a linha seguinte para testar sua função
console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
