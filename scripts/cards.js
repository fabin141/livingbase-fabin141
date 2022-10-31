import { getNews } from "./requests.js"

export const createCard = (e) => {
  const li = document.createElement("li")
  li.classList.add("card")

  li.innerHTML = `
    <div class="img-card">
      <img src="${e.image}" alt="${e.title}">
    </div>
    <h3 class="font-3 grey-100">
      ${e.title}
    </h3>
    <p class="font-4-regular grey-200">
      ${e.description}
    </p>
  `

  const button = document.createElement("button")
  button.innerText = "Acessar conteúdo"
  button.classList.add("btn-card")

  button.addEventListener("click", () => {
    localStorage.setItem("postId", e.id)

    window.location.replace("./pages/post/index.html")
  })

  li.appendChild(button)

  return li
}

export const renderCards = async (category, page) => {
  const cardsWrapper = document.querySelector(".cards-wrapper")
  
  const news = await getNews(page)

  let newsToShow = [...news]

  if (category != "Todos") {
    newsToShow = news.filter(e => e.category == category)
  }

  newsToShow.forEach(e => cardsWrapper.appendChild(createCard(e)))
}