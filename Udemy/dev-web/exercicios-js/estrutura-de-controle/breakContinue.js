const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break //pare o laço quando chegar no índice '5'
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) {
        continue //quando chegar no índice '5' pule.
    }
    console.log(`${y} = ${nums[y]} `)
}

externo: for (let a in nums) { // não use o rótulo, mas existe
    for ( let b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}` )
    }
}
