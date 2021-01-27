# wf-utils

支持 UMD/CommonJS 的工具库。

**安装**

```bash
$ npm install wf-utils --save
# OR
$ yarn add wf-utils
```

**使用样例**

Node.js 使用样例：

```javascript
const {FileUtils} = require('wf-utils')
console.log(FileUtils.formatSize(643562924))  // 613.75MB
```

浏览器 ES6 使用样例：

```javascript
import {FileUtils} from 'wf-utils'
console.log(FileUtils.formatSize(19040))  // 18.59KB
```

