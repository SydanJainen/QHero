$(document).ready(function () {
  console.log("ready!");
  $('#myModal').modal({
    show: true
  })
  setTimeout(function () {
    $("#sketch-holder").find("canvas").css("width", "100%");
    $("#sketch-holder").css("margin-top", "200px");
  }, 100);
  getBobData();
});

function getBobData() {
  /*$.get("127.0.0.1:5000/request", function (data) {
    bob.states.push(data);
    setTimeout(function () {
      getBobData()
    }, 500);
  });*/
}