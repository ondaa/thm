/**
문제 설명
길이가 n인 배열에 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는지를 확인하려고 합니다.
1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는 경우 true를, 아닌 경우 false를 반환하도록 함수 solution을 완성해주세요.

제한사항
- 배열의 길이는 10만 이하입니다.
- 배열의 원소는 0 이상 10만 이하인 정수입니다.
 */

// * 내가 낸 답안 (통과)
function solution(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var v = arr[i];
    if (v > arr.length) {
      return false;
    }

    if (obj[v]) {
      return false;
    }
    obj[v] = 1;
  }

  return true;
}

// * 첫번째 제출한 답변 (통과 - 조금 더 느리다.)
// function solution(arr) {
//   var obj = {};
//   var sum = arr.reduce((p, c) => p + c, 0);
//   var sum2 = 0;

//   for (var i = 0; i < arr.length; i++) {
//     if (obj[i]) {
//       return false;
//     }
//     sum2 += i + 1;
//     obj[i] = 1;
//   }

//   if (sum !== sum2) {
//     return false;
//   }

//   return true;
// }

// * 해설 (근데 이게 시간초과됨)
// function solution(arr) {
//   var chk = [];
//   var n = arr.length;
//   for (var i = 0; i < n; i++) {
//     var v = arr[i];

//     if (v < 1 || v > n) {
//       return false;
//     }

//     if (!chk[v]) {
//       chk[v] = 0;
//     }

//     chk[v]++;

//     if (chk[v] > 1) {
//       return false;
//     }
//   }

//   return true;
// }

console.log(solution([4, 2, 3, 1]));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 8]));
console.log(solution([1, 4, 2, 3]));
