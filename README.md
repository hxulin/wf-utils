# wf-utils

支持 UMD/CommonJS 的工具库。

Node.js 使用样例：

```javascript
const {fileUtils} = require('wf-utils')
console.log(fileUtils.formatSize(643562924))  // 613.75MB
```

浏览器 ES6 使用样例：

```javascript
import {fileUtils} from 'wf-utils'
console.log(fileUtils.formatSize(19040))  // 18.59KB
```

