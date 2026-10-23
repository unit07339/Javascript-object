async function getRequest() {
    try{
        // fetch 작업이 끝날 때까지 기다렸다가 response 변수에 담음
    const response = await fetch("http://localhost:8080/servlet_study_war_exploded/first");
    // 본문 텍스트 변환이 끝날 때까지 기다림
    const responseData = await response.text();
    console.log(responseData); // 응답데이터 출력
    } catch (error) {
        console.log(error); // 에러 발생 시 처리
    }
}
getRequest();

// 체이닝 방식
// Promise 객체의 비동기 처리가 완료되면 .then() 안의 콜백 함수가 실행되는 방식
function getRequest2 () {
    fetch("http://localhost:8080/servlet_study_war_exploded/first")
        .then(response => {
            response.text()
                .then(responseData => {
                    console.log(responseData); // 응답 데이터 출력
                })
        })
}
getRequest2();





// fetch("http://~~~") 를 실행하면
// 1. 요청 송신 : 브라우저가 해당 URL로 GET 요청 전송
// 2. 서블릿 수신 : Tomcat이 요청을 받아서 해당 URL과 매핑된 FirstServlet의 doGet() 메서드 실행
// 3. 응답 전송 : 서블릿이 "응답데이터"라는 문자열과 상태 코드 400을 담아 응답
// 4. 자바스크립트 수신 : fetch가 응답 객체(response)를 받아 .text()로 본문 데이터("응답데이터")를 읽어온 뒤 console.log()로 출력



// 자바스크립트(fetch)가 서블릿 주소로 요청을 보내고, 서블릿(doGet)이 응답 데이터를 쏘아주면, 자바스크립트가 받아 콘솔에 출력하는 관계