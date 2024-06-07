# restdb api

## 每個資料庫都有一個專屬的 API

例如： https://ccckmit-a577.restdb.io/rest/_jsapi.doc#order

```
<!-- First JQuery, Bootstrap, etc, ... -->
<script src="https://ccckmit-a577.restdb.io/rest/_jsapi.js"></script>
<script>
var db = new restdb("your-apikey-here | jwt token", options);
var obj = new db.order(properties);
var instance = new db.order({"shop": "value", ...});
obj.save(function(err, res){
  if (!err){
    console.log(err)
  }
});
</script>
```