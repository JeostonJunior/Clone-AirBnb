var today = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
);
$("#startDate").datepicker({
  uiLibrary: "bootstrap4",
  iconsLibrary: "fontawesome",
  minDate: today,
  maxDate: function () {
    return $("#endDate").val();
  },
});
$("#endDate").datepicker({
  uiLibrary: "bootstrap4",
  iconsLibrary: "fontawesome",
  minDate: function () {
    return $("#startDate").val();
  },
});
