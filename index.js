theBeatlesPlay = (musicians, instruments) => {
    const arr = []
    for ( let i = 0; i < musicians.length; i++) {
        arr.push(`${musicians[i]} plays ${instruments[i]}`)  
    }
    return  arr
}

johnLennonFacts = (facts) => {
    const arr = []
    var i
    while (i < facts.length) {
        arr.push(`${facts[i]}!!!`)
    }
    return arr
}