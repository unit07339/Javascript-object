// async / await

async function getUserById(id) {
        const users = [
            {id: 1, username: "user1"},
            {id: 2, username: "user2"},
            {id: 3, username: "user3"},
        ];
        const foundUser = users.find(user => user.id === id); // find 는 하나만 꺼내는 거, filter 는 배열로 여러 개 꺼냄
        if (!foundUser) {
            throw new Error("id와 일치하는 사용자가 존재하지 않습니다.");
        }
        return foundUser;
}

async function getPostsByUsername(username) {
        const posts = [
            {id: 1, content: "내용1", username: "user1"},
            {id: 2, content: "내용2", username: "user2"},
            {id: 3, content: "내용3", username: "user1"},
            {id: 4, content: "내용4", username: "user2"},
            {id: 5, content: "내용5", username: "user1"},
        ];
        const foundPosts = posts.filter(post => post.username === username);
        if (!foundPosts.length) {
            throw new Error("해당 username으로 검색된 게시글이 없습니다.");
        }
        return foundPosts;
}

function asyncFx2() {
    return new Promise((rs, rj) => {

    });
}

// 위 아래 코드는 같은 의미

async function asyncFx() {

}



async function run() { //  await 은 async function 에만 쓸 수 있음
    try {
        // let value = await new Promise((rs, rj) => {
        //     // rj(new Error("error"));
        // }); // await - rs 의 값을 바로 value로 줌
        // console.log(value);
        let foundUser = await getUserById(1); // await은 Promise앞에만 붙일 수 있음
        console.log(await getPostsByUsername(foundUser.username));
    } catch (error) {
        console.log(error); // await 쓸 때는 try catch 해야함
    }
}

run();

