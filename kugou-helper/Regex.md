## [Regex](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
---
### 创建方式
* `字面量创建方式 ` ( var reg = /pattern/flags)
* `实例创建方式 ` (var reg = new RegExp(pattern [, flags]))
* `工厂符号` (RegExp(pattern [, flags]))
---
### 实例方法
* `test`
* `exec`
* `toString`
---
### [字符串方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
* `match`
* `replace`
* `split`
* `join`
---
### flags
* `/m` 多行匹配
* `/i` 匹配时不区分大小写
* `/g` 全局匹配 尽可能多的匹配
---
### [字符](https://www.cnblogs.com/chenmeng0818/p/6370819.html)
* `\` 转义字符
* `|` A or B,指明两项之间的一个选择
  - 量词限定符
    -
---
### 圆括号与方括号
* 圆括号
  - 提高优先级
  -  分组
---
### 特性
* `贪婪 ` 尽可能多的捕获（
* `非贪婪`
  - **？**
### 备注
* `pattern` 正则表达式
