window.addEventListener("load", function () {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    toggle && toggle.addEventListener("click", handleToggleMenu);
    function handleToggleMenu(e) {
      menu && menu.classList.add("is-active");
    }
    document.addEventListener("click", handleClickOutside);
    function handleClickOutside(e) {
      if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *"))
        return;
      menu && menu.classList.remove("is-active");
    }

    const projectMain = document.querySelector(".project-main");
    const projectItems = document.querySelectorAll(".project-item");
    const projectItemWidth = projectItems[0].offsetWidth;
    const dotItems = document.querySelectorAll(".project-dot-item");
    let index = 0;
    [...dotItems].forEach(item=>item.addEventListener("click", function(e){
      [...dotItems].forEach(el => el.classList.remove("active"));
      e.target.classList.add("active");
      const projectIndex = parseInt(e.target.dataset.index);
      index = projectIndex;
      console.log(index);
      projectMain.style = `transform: translateX(${-1*index*projectItemWidth}px)`
    }));
  }); 