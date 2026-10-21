function main() {
    console.log("메인함수 호출");
    let student = {
      name: "김준일",
      age: 33, // , 안지워도 됨
      address: ["부산시", "부산진구", "부암동",],
    }; //let : 변수, student{} : 객체
    console.log(student);

    // let student2; // 타입이 undefined임
    let student2 = 0/0;
    console.log(student2); // 대입이 되는 값에 의해서 타입이 자동으로 정해짐

    const PI = 3.14; // 상수 (자바final)

}

main();