

const possible = [
    'RIGHT',
    'BOTTOM',
    'LEFT_BOTTOM',
    'LEFT_TOP_RIGHT',
    'TOP_RIGHT',
    'LEFT_TOP_BOTTOM',
    'LEFT_TOP',
    // 'ALL',
    // 'UPPERLEFT_CENTER_BOTTOMRIGHT',
    'LEFT_BOTTOM_RIGHT'
]
/* 
possible.forEach((p) => {
    const lc = p.toLowerCase()
    const x = `function getRadicals_${lc}() { 
        return filterByType(${p})
    }`
    console.log(x)
})
console.log("// ............")

console.log("// ............")


possible.forEach((p) => {
    const lc = p.toLowerCase()
    const x = `getRadicals_${lc}_test()`
    console.log(x)
})
*/

possible.forEach((p) => {
    const lc = p.toLowerCase()
    const x = `function getRadicals_${lc}_test() { 
        const actual = getRadicals_${lc}(${p}) 
        const isOk1 = actual.length > 0
        const isOk2 = actual[0].p === ${p}
        const isOk = isOk1 === true && isOk2 === true
        if ( isOk === true ) {
            console.log( "PASS getRadicals_${lc}_test " + actual.length )
        } else {
            console.log( "FAIL getRadicals_${lc}_test " + actual.length )
        }
        return isOk
    }`
    console.log(x)
})

