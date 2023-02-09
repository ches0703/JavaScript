// import : 외부의 JS파일의 내용을 가져올 수 있음

// Import From node_modules
import _ from "lodash"
console.log(_.camelCase("camel case"))


// 모듈의 Default 내용만 가져올 때 : 따로 이름을 지정하여 사용
import D from "./09_Export"
D()


// Named통로를 통해 여로개의 내용을 가져올 때 : 
// "{}"사이에 가져 올 내용의 이름을 명시, export한 파일에서 정한 이름을 사용
// 단 as 키워드로 사용자가 따로 이름을 지정할 수 있음
import {namedFunc, user as User} from "./09_Export"
namedFunc()
console.log(User.name)


// 모든 내용을 가져올 때 : * as [사용자 지정 이름]
// default 및 Named내용을 사용할 수 있음
import * as E from "./09_Export"

E.default()     // default 내용 사용
E.namedFunc()   // Named 내용 사용