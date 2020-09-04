$(".date-picker").datepicker();

function openForm() {
  let isOpen = false;
  $("#open-add-form").click(function () {
    if (isOpen === false) {
      $(".add-new-pill").slideDown(500);
      $(this).html(`<i class="fas fa-minus"></i>`);
      isOpen = true;
    } else {
      $(".add-new-pill").slideUp(500);
      $(this).html(`<i class="fas fa-plus fz-18"></i>`);
      isOpen = false;
    }
  });
}

openForm();
