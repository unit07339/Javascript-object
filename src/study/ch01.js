console.log("출력!!");
console.log("출력!!");
console.log(0/0);
console.log("출력!!");

let name = "김준일";
console.log(name);
name = 123;
console.log(name); //타입리스 언어
name = [1,2,3,4,5,6,7]
console.log(name);
name = {
    "a": [1,2,3,4],
    "b": "김준일",
    "c": 1234
};
console.log(name);
console.log(name["b"]);
console.log(name.c);

let data = [
    {
        class1: {
            student1: {
                id: 1,
                object: {
                    name: "김준일",
                    address: "서울"
                },
                createdAt: new Date("2025-10-19")
            },
            student2: {
                id: 2,
                object: {
                    name: "김준이",
                    address: "서울"
                },
                createdAt: new Date("2025-10-20")
            }
        }
    },
    {
        class2: {
            student1: {
                id: 1,
                object: {
                    name: "김준일",
                    address: "부산"
                },
                createdAt: new Date("2025-10-19")
            },
            student2: {
                id: 2,
                object: {
                    name: "김준이",
                    address: "부산"
                },
                createdAt: new Date("2025-10-20")
            }
        }
    }
] // 오브젝트

console.log(JSON.stringify(data));

console.log(data[1].class2.student1.object.name); // 맵을 먼저 꺼내고 class2를 꺼내야지 안의 데이터를 ...
console.log(data[0].class1.student2.object.name);