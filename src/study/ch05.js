const r1 = 10 && 20 && 30; // &&가 전부 true면 마지막 값 채택
console.log(r1);
const r2 = 10 || 20 || 30; // 가장 먼저 나온 true 값 채택
console.log(r2);

const data = null;
const r3 = data ?? 20; //data의 값이 null 이면 대체, ?? 는 null인 경우에만
console.log(r3);

