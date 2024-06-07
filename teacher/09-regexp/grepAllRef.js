var html = `
<html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" type="text/css" href="/fe6.css">
    </head>
    <body>
      <header>
        <div>
          <span class="toggler">
            <a onclick="toggleSidebar()">≡</a>
          </span>
          <span class="title"><a href="/blog/Home">Home</a>&nbsp;</span>
          <span class="menu">
             
            
            <a href="/user/login">登入</a> &nbsp;
            <a href="/">首頁</a> &nbsp;
          </span>
        </div>
      </header>
      <aside>
        <div>
          <h6> <a href="/blog/陳鍾誠/課程" alt="">課程</a></h6>
    <ul>
        <li><a href="/blog/陳鍾誠/課程/網頁設計" alt="">網頁設計</a></li>
        <li><a href="/blog/陳鍾誠/課程/網站設計進階" alt="">網站設計進階</a></li>
        <li><a href="/blog/陳鍾誠/課程/計算機結構" alt="">計算機結構</a></li>
        <li><a href="/blog/陳鍾誠/課程/系統程式" alt="">系統程式</a></li>
        <li><a href="/blog/陳鍾誠/課程/人工智慧" alt="">人工智慧</a></li>
        <li><a href="/blog/陳鍾誠/課程/軟體工程與演算法" alt="">軟體工程與演算法</a></li>
    </ul>
    <h6> <a href="/blog/陳鍾誠/書籍" alt="">書籍</a></h6>
    
    <ul>
        <li><a href="/blog/陳鍾誠/書籍/JavaScript" alt="">JavaScript</a></li>
        <li><a href="/blog/陳鍾誠/書籍/C語言" alt="">C語言</a></li>
        <li><a href="/blog/陳鍾誠/書籍/Python" alt="">Python</a></li>
        <li><a href="/blog/陳鍾誠/書籍/Verilog" alt="">Verilog</a></li>
    </ul>
    <h6> <a href="/blog/Home" alt="">陳鍾誠</a></h6>
    <ul>
        <li><a href="/blog/陳鍾誠/程式" alt="">程式</a> : <a href="https://github.com/ccc-js" alt="">js</a> / <a href="https://github.com/ccc-c" alt="">c</a></li>
        <li><a href="/blog/陳鍾誠/作品" alt="">作品</a> : <a href="/blog/陳鍾誠/作品/十分鐘系列" alt="">slide</a> / <a href="/blog/陳鍾誠/作品/小說" alt="">novel</a></li>
        <li><a href="/blog/陳鍾誠/技能" alt="">技能</a> : <a href="/blog/陳鍾誠/技能/git" alt="">git</a> / <a href="/blog/陳鍾誠/技能/shell" alt="">shell</a></li>
        <li><a href="/blog/陳鍾誠/蒐藏" alt="">蒐藏</a> : <a href="/blog/陳鍾誠/蒐藏/video" alt="">video</a> / <a href="/blog/陳鍾誠/蒐藏/course" alt="">course</a></li>
        <li><a href="/blog/陳鍾誠/授權" alt="">授權</a> : <a href="https://creativecommons.org/licenses/by-sa/4.0/" alt="">CC:BY-SA</a></li>
    </ul>
        </div>
      </aside>
      <main>
        <h1> 陳鍾誠</h1>
    
    <table>
    <tr><th>主題  </th><th> 內容</th></tr>
    
    <tr><td><a href="https://www.cakeresume.com/f5611f" alt="">履歷</a> </td><td> <a href="http://www.nqu.edu.tw/" alt="">金門大學</a> / <a href="http://www.nqu.edu.tw/educsie/index.php" alt="">資訊工程系</a> / <a href="http://www.nqu.edu.tw/educsie/index.php?act=blog&code=list&ids=4" alt="">助理教授</a> </td></tr>
    <tr><td><a href="./陳鍾誠/課程" alt="">課程</a> </td><td> <a href="./陳鍾誠/課程/網頁設計" alt="">網頁設計</a> / <a href="./陳鍾誠/課程/網站設計進階" alt="">網站設計進階</a> / <a href="./陳鍾誠/課程/計算機結構" alt="">計算機結構</a> / <a href="./陳鍾誠/課程/系統程式" alt="">系統程式</a> / <a href="./陳鍾誠/課程/軟體工程與演算法" alt="">軟體工程與演算法</a> / <a href="./陳鍾誠/課程/人工智慧" alt="">人工智慧</a></td></tr>
    <tr><td><a href="./陳鍾誠/書籍" alt="">書籍</a> </td><td> <a href="./陳鍾誠/書籍/nand2tetris" alt="">nand2tetris</a> / <a href="./陳鍾誠/書籍/機率統計" alt="">機率統計</a> / <a href="./陳鍾誠/書籍/科學計算" alt="">科學計算</a> / <a href="./陳鍾誠/書籍/微積分" alt="">微積分</a> / <a href="./陳鍾誠/書籍/C＃程式設計" alt="">C# 程式設計</a></td></tr>
    <tr><td><a href="./陳鍾誠/技能" alt="">技能</a> </td><td> <a href="./陳鍾誠/書籍/JavaScript" alt="">JavaScript</a> / <a href="./陳鍾誠/書籍/C語言" alt="">C 語言</a>  / <a href="./陳鍾誠/書籍/Verilog" alt="">Verilog</a> / <a href="./陳鍾誠/書籍/Python" alt="">Python</a> / <a href="./陳鍾誠/技能/git" alt="">git</a> / <a href="./陳鍾誠/技能/markdown" alt="">markdown</a> / <a href="./陳鍾誠/技能/shell" alt="">Shell</a> / <a href="./陳鍾誠/技能/linux" alt="">Linux</a></td></tr>
    <tr><td><a href="./陳鍾誠/程式" alt="">程式</a> </td><td> <a href="https://github.com/ccc-js/js6" alt="">js6</a> / <a href="https://github.com/ccc-js/pp6" alt="">pp6</a> / <a href="https://github.com/ccc-js/j6" alt="">j6</a> / <a href="https://github.com/ccc-js/scijs" alt="">scijs</a> / <a href="https://github.com/ccc-c/c0c" alt="">c0c</a> / <a href="https://github.com/cccbook/c2verilog" alt="">c2verilog</a></td></tr>
    <tr><td><a href="./陳鍾誠/作品" alt="">作品</a> </td><td> <a href="./陳鍾誠/論文" alt="">論文</a> / <a href="./陳鍾誠/作品/散文" alt="">散文</a> / <a href="./陳鍾誠/作品/小說" alt="">小說</a> / <a href="./陳鍾誠/作品/十分鐘系列" alt="">十分鐘系列</a></td></tr>
    <tr><td><a href="./陳鍾誠/帳號" alt="">帳號</a> </td><td> <a href="https://github.com/ccckmit" alt="">Github</a> / <a href="https://gitlab.com/ccckmit/" alt="">Gitlab</a> / <a href="https://www.youtube.com/user/ccckmit" alt="">YouTube</a> / <a href="http://www.slideshare.net/ccckmit/" alt="">SlideShare</a>  / <a href="https://medium.com/@ccckmit" alt="">Medium</a> / <a href="https://www.facebook.com/ccckmit" alt="">Facebook</a> / <a href="mailto://ccckmit@gmail.com" alt="">Gmail</a></td></tr>
    <tr><td><a href="./陳鍾誠/蒐藏" alt="">蒐藏</a> </td><td> <a href="./陳鍾誠/蒐藏/video" alt="">影片</a> / <a href="./陳鍾誠/蒐藏/book" alt="">書籍</a> / <a href="./陳鍾誠/蒐藏/code" alt="">程式</a> / <a href="./陳鍾誠/蒐藏/article" alt="">文章</a> / <a href="./陳鍾誠/蒐藏/course" alt="">課程</a> / <a href="./陳鍾誠/蒐藏/tool" alt="">工具</a> / <a href="./陳鍾誠/蒐藏/site" alt="">網站</a> / <a href="./陳鍾誠/書籍/圖靈獎" alt="">圖靈獎年表</a></td></tr>
    </table>
    <p></p>
    <p></p>
    
      </main>
      <script src="/fe6.js"></script>
      <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
      </script>
    </body>
    </html>
`

var r = /<a\s+href\s*=\s*"(.+?)"/g

// console.log(html.match(r))

var m
while ((m = r.exec(html))) {
  console.log(m[1])
}

