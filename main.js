/*------------------- home contents ----------------------*/
(() => {
  const homeSection = document.querySelector(".home-section"),
  projectContainer = document.querySelector(".project-tabs");

  projectContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")) {
      const target = event.target.getAttribute("data-target");
      // deactive existing active 'tab-item'
      projectContainer.querySelector(".active").classList.remove("active");
      // activate new 'tab-item'
      event.target.classList.add("active");
      // deactivate existing active 'home-content'
      homeSection.querySelector(".home-content.active").classList.remove("active");
      // activate new 'home-content'
      homeSection.querySelector(target).classList.add("active");
    }
  })
})();