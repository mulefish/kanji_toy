

const possible = ['RIGHT',
'BOTTOM',
'LEFT_BOTTOM',
'LEFT_TOP_RIGHT',
'TOP_RIGHT',
'LEFT_TOP_BOTTOM',
'LEFT_TOP',
'ALL',
'UPPERLEFT_CENTER_BOTTOMRIGHT',
'LEFT_BOTTOM_RIGHT'
]

possible.forEach((p)=>{
    const lc = p.toLowerCase()
    const x = `function getRadicals_${lc}() { 
        return filterByType(${p})
    }`
    console.log(x)
})

possible.forEach((p)=>{
    const lc = p.toLowerCase() 
    const x = `function getRadicals_${lc}_test() { 
        const actual = getRadicals_${lc}(${p}) 
        const verdict = actual.length > 0 ? "PASS " : "FAIL "; 
        console.log( verdict + "getRadicals_${lc}_test " + actual.length )
    }`
        console.log(x)
})