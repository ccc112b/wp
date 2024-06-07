function sub(a, b) {
    var i, j, c = []
    for (i=0; i<a.length; i++) {
        c[i] = []
        for (j=0; j<a[i].length; j++) {
            c[i][j] = a[i][j] - b[i][j]
        }
    }
    return c
}

console.log(sub([[1,2],[3,4]], [[1,1],[1,1]]))
