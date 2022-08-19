"strict";
const ourProducts = document.querySelector(".theoptionsofallo");
const optionProducts = document.querySelector(".theoptions");
//the hide siderbar script
optionProducts.classList.add("realhidden");
ourProducts.addEventListener("click", function () {
  optionProducts.classList.remove("realhidden");
  ourProducts.classList.add("hidden");
});
//the contact us scroll
//the article observer
//variables
const articleObserver = document.querySelector(".production__article");
articleObserver.classList.add("sectioarticle");
//the command
const observeFunction = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  else {
    entry.target.classList.remove("sectioarticle");
    observer.unobserve(entry.target);
  }
};
const observeObject = {
  root: null,
  threshold: 0.2,
};

const artObserver = new IntersectionObserver(observeFunction, observeObject);
artObserver.observe(articleObserver);
