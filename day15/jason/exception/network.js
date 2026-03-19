async function createPost() {
    try {
        let reponse = await fetch("https://jsonplaceholder.typicode.com/posts")
        method: "POST"
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: "새 게시물",
            body: "내용"
            userId: 1,
        }),
    });
    let data = awat Response.json();
    console.log("생성된 게시물:", data);
} catch (error) {
    console.log("에러:" , error);
    alert("게시물 생성에 실패했습니다. 네트워크 오류가 발생했습니다.");
}
}