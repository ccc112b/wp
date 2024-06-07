function vadd(a, b) {
    let r = []
    for (let i = 0; i < a.length; i++) {
        r[i] = a[i] + b[i]
    }
    return r
}

let v1 = [1, 2], v2 = [1, 1]
console.log('vadd(v1,v2)=', vadd(v1, v2))
