$(".date-picker").datepicker();

function openForm() {
  let isOpen = false;
  $("#open-add-form").click(function () {
    if (isOpen === false) {
      $(".add-new-pill").slideDown(500);
      $(this).html(`<i class="fas fa-minus fz-18"></i>`);
      isOpen = true;
    } else {
      $(".add-new-pill").slideUp(500);
      $(this).html(`<i class="fas fa-plus fz-18"></i>`);
      isOpen = false;
    }
  });
}

openForm();

function modalForm() {
  const modal = document.querySelector(".modal-form");

  if (modal) {
    const btnOpen = document.getElementById("open-modal-form");
    const filter = document.getElementById("filter");
    const btnClose = modal.querySelector("button.close");

    btnOpen.addEventListener("click", () => {
      filter.style.display = "block";
      modal.style.display = "block";
      modal.style.animation = "scaleOut 0.5s both";

      window.addEventListener("click", (e) => {
        if (e.target === filter) {
          filter.style.display = "";
          modal.style.display = "";
          modal.style.animation = "";
        }
      });
    });

    btnClose.addEventListener("click", () => {
      filter.style.display = "";
      modal.style.display = "";
      modal.style.animation = "";
    });
  }
}

modalForm();
