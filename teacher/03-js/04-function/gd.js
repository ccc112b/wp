// 函數 f 對變數 k 的偏微分: df / dk
function df(f, p, k, h = 0.01) {
    const p1 = p.slice(); // 複製陣列以避免改變原始陣列
    p1[k] = p[k] + h;
    return (f(p1) - f(p)) / h;
}

// 函數 f 在點 p 上的梯度
function grad(f, p, h = 0.01) {
    const gp = p.slice(); // 複製陣列以避免改變原始陣列
    for (let k = 0; k < p.length; k++) {
        gp[k] = df(f, p, k, h);
    }
    return gp;
}

// 使用梯度下降法尋找函數最低點
function gradientDescendent(f, p0, h = 0.01, max_loops = 100000, dump_period = 1000) {
    let p = p0.slice(); // 複製陣列以避免改變原始陣列
    let i;
    var fp, gp, glen;
    for (i = 0; i < max_loops; i++) {
        fp = f(p);
        gp = grad(f, p, h); // 計算梯度 gp
        glen = Math.sqrt(gp.reduce((acc, val) => acc + val ** 2, 0)); // norm = 梯度的長度 (步伐大小)
        if (i % dump_period === 0) {
            console.log(`${i.toString().padStart(5, '0')}:f(p)= ${fp} p= [${p}] gp= [${gp}] glen= ${glen.toFixed(5)}`);
        }
        if (glen < 0.00001) { // 如果步伐已經很小了，那麼就停止吧！
            break;
        }
        const gh = gp.map(val => -1 * h * val); // gh = 逆梯度方向的一小步
        p = p.map((val, idx) => val + gh[idx]); // 向 gh 方向走一小步
    }
    console.log(`${i.toString().padStart(5, '0')}:f(p)= ${fp} p= [${p}] gp= [${gp}] glen= ${glen}`);
    return p; // 傳回最低點！
}

// 定義函數 f
function f(p) {
    const [x, y, z] = p;
    return Math.pow(x - 1, 2) + Math.pow(y - 2, 2) + Math.pow(z - 3, 2);
    // return Math.pow(x - 2, 2) + 3 * Math.pow(y - 0.5, 2) + Math.pow(z - 2.5, 2);
    // return x * x + 3 * y * y + z * z - 4 * x - 3 * y - 5 * z + 8;
}

// 初始化起始點
const p = [0.0, 0.0, 0.0];

// 呼叫梯度下降函數
gradientDescendent(f, p);