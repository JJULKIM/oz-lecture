const output = document.querySelector("#output");
const btnFetchPosts = document.querySelector("#fetchPosts");
const inputPostIds = document.querySelector("#postIds");

const clearOutput = () => {
  output.innerHTML = "";
  output.classList.remove("error");
};

const fetchPost = async (postId) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );

    if(!response.ok) {
        throw new Error ("게시물을 가져오지 못했습니다.");
    }

//     let post = await response.json();
//     return post;
//   } catch (error) {
//     document.getElementById("output").innerHTML =
//       `<p>에러: ${error.message}</p>`;
//     return null;
//   }
// };

    let post = await response.json();
    return post;
    } catch (error) {
    return {
        id:postId,
        error : `에러: ${error.message}`,
    };
 }
};

const fetchMultiplePosts = async (postIds) => {
  const posts = [];

  for (const postId of postIds) {
    const post = await fetchPost(postId);
    posts.push(post);
  }

  clearOutput();

  // posts 배열을 순회하며 post 정보 출력
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    if (post.error) {
        postDiv.textContent = `post${post.id} : ${post.error}`;
    } else {
        postDiv.textContent = `post${post.id}: ${post.title}`;
    }

    output.appendChild(postDiv);
  }

};

const handleClickSearch = async () => {
    try {
        clearOutput();
        btnFetchPosts.disabled = true;

      // inputPostIds에서 postIds 가져오기
      const rawValue = inputPostIds.value.trim();

      if (rawValue === "") {
        throw new Error("유효한 ID(1-100)를 입력하세요!");
      }

      const postIds = rawValue.split(",").map((item) => Number(item.trim()));

      if (postIds.length === 0) {
        throw new Error("유효한 ID(1-100)를 입력하세요!");
      }

      for (const id of postIds) {
        if (isNaN(id) || id <1 || id > 100) {
            throw new Error("유효한 ID(1-100)를 입력하세요!");
        }
      }

        await fetchMultiplePosts(postIds);
        } catch (error) {
            clearOutput();
            output.textContent = error.message;
            output.classList.add("error");
        } finally {
        btnFetchPosts.disabled = false;
        }
    };

btnFetchPosts.addEventListener("click", handleClickSearch);
