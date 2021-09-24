/**
 * * 문제 설명
 * 1와 0로 채워진 표(board)가 있습니다.
 * 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다.
 * 표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요. (단, 정사각형이란 축에 평행한 정사각형을 말합니다.)
 * * 제한사항
 * - 표(board)는 2차원 배열로 주어집니다.
 * - 표(board)의 행(row)의 크기 : 1,000 이하의 자연수
 * - 표(board)의 열(column)의 크기 : 1,000 이하의 자연수
 * - 표(board)의 값은 1또는 0으로만 이루어져 있습니다.
 */

// * 해결에 어려움이 있어 다른 사람 해결방법 참고함

function solution(board) {
  var max = 0;
  var yAxis = board.length;
  var xAxis = board[0].length;

  // 길이가 2미만 (즉, 배열 길이가 1 인 경우) 당연하게 최대 크기는 1이다.
  if (yAxis < 2 && xAxis < 2) {
    return 1;
  }

  // 2중 for문
  for (var i = 0; i < yAxis; i++) {
    for (var j = 0; j < xAxis; j++) {
      // row, column 모두 0 이 아닐때
      // 0 일때 좌측, 상단, 좌상단에 대한 비교값을 가져올 수 없기 때문
      if (i !== 0 && j !== 0) {
        // 배열의 값이 1일때,
        if (board[i][j] === 1) {
          // 좌측, 상단, 좌상단 중 가장 작은 크기를 가져와서 1을 더한다.
          board[i][j] =
            Math.min(board[i - 1][j], board[i - 1][j - 1], board[i][j - 1]) + 1;

          // 이전의 max 보다 수가 크다며 바꿔준다.
          if (board[i][j] > max) {
            max = board[i][j];
          }
        }
      }
    }
  }

  // 크기를 구하기 때문에 제곱한다.
  return Math.pow(max, 2);
}

// * 결과확인

const result1 = solution([
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
]);

const result2 = solution([
  [0, 1, 1, 1],
  [1, 1, 1, 1],
]);

console.log(result1); // 기대값 9
console.log(result2); // 기대값 4
