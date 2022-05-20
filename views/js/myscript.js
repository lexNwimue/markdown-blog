const form = document.getElementById("form");

document.getElementById("clear-btn").addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {};
  data.title = form.title.value;
  data.author = form.author.value;
  data.body = form.body.value;

  fetch("/blogs/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
