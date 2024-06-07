const h = 0.01;

// 我們想找函數 f 的最低點
function f(p) {
    const [x, y] = p;
    return x * x + y * y;
}

// df(f, p, k) 為函數 f 對變數 k 的偏微分: df / dp[k]
// 例如在上述 f 範例中 k=0, df/dx, k=1, df/dy
function df(f, p, k) {
    const p1 = p.slice(); // 複製陣列以避免改變原始陣列
    p1[k] += h;
    return (f(p1) - f(p)) / h;
}

// 函數 f 在點 p 上的梯度
function grad(f, p) {
    const gp = p.slice(); // 複製陣列以避免改變原始陣列
    for (let k = 0; k < p.length; k++) {
        gp[k] = df(f, p, k);
    }
    return gp;
}

const [x, y] = [1, 3];
console.log('x=', x, 'y=', y);
console.log('df(f(x,y), 0) = ', df(f, [x, y], 0));
console.log('df(f(x,y), 1) = ', df(f, [x, y], 1));
console.log('grad(f)=', grad(f, [x, y]));
