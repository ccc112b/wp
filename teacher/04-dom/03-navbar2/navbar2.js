let main = document.querySelector('#main')

let pages = {
    '#aboutus':`
aboutus/
aboutus/
aboutus/
aboutus/
    `,
    '#example1':`
    <h1>註冊</h1>
    <input type="text" placeholder="姓名"/><br/>
    <input type="text" placeholder="帳號"/><br/>
    <input type="email" placeholder="email"/><br/>
    <input type="password" placeholder="密碼"/><br/>
    <input type="text" placeholder="血型"/><br/>
    <input type="date" placeholder="生日"/><br/>
    <input type="color" placeholder="喜歡的顏色"/><br/>
    `,
    '#example2':`example2`,
    '#example3':'example3',
}

window.onhashchange = function () {
    let hash = window.location.hash
    main.innerHTML = pages[hash]
}