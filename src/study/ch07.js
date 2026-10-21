// 객체
class Student {
    name;
    age;
}

const s1 = new Student();
console.log(s1);

const s2 = {
    name: undefined,
    age: undefined,
} // 자바스크립트에서 객체 바로 생성 문법
console.log(s2);

class Teacher {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    } // 매개변수에 자료형X
}

const t1 = new Teacher("김준일", 33);
console.log(t1.name);

const t2 = {
    name: "김준일",
    age: 33
};

console.log(t2.age); // 변수 사용 불가능

// 참조방법
console.log(t2["name"]);
const key = "name";
console.log(t2[key]); // 변수 사용 가능
t2["address"] = "부산 부산진구"; // 새로운 값 추가 방법
console.log(t2);

const t3 = {
    ...t2,
    gender: "남",
};
console.log(t3);