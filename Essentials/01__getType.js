// typeof의 null, array, object를 object로 표현하는 단점으로 인해
// 다음과 같은 함수 사용
export default function getType(data){
    return Object.prototype.toString.call(data)
//  return Object.prototype.toString.call(data).slice(8, -1)
}