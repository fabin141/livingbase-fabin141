import { getCurrentNews } from "./requests.js";

export const mainPost = async (id) => {
  const post = await getCurrentNews(id)

  const sectionPost = document.querySelector(".main-post")

  sectionPost.innerHTML = `
    <div class="post-header">
      <div class="container">
        <h2 class="font-1 grey-100">
          ${post.title}
        </h2>
        <p class="font-4-regular grey-200">
          ${post.description}
        </p>
      </div>
    </div>
    <div class="container">
      <div class="post-img">
        <img src="${post.image}" alt="${post.title}">  
      </div>
    </div>
    <div class="post-body container">
      <p class="font-4-regular grey-200">
        ${post.content}
      </p>
    </div>
  `
}