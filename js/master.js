const ul_1 = $(".option1");
const ul_2 = $(".option2");
const ul_3 = $(".option3");

var index = 1;
var quest = $(".q" + index);

const nextBtn = $(".next-button");
const prevBtn = $(".prev-button");

const q1 = $(".q1");
const q2 = $(".q2");
const q3 = $(".q3");

const survey = $(".survey");
const listItem = $(".list-group-item");
nextBtn.click(function(){
  $(".q" + index).css("display","none");
  index += 1;
  console.log(index);
  $(".q" + index).css("display","block");
});

prevBtn.click(function(){
  if (index < 2) {
    index = 1;
  } else {
      $(".q" + index).css("display","none");
      index -= 1;
      $(".q" + index).css("display","block");
  }
  console.log(index);
});

$(".list-group-item").click(function(event){
  $(this).css("opacity","1.0");
  console.log($(this).html());
});

function opacityChanger(key){
  switch (key) {
    case "green-box":
      $(".green-box").css("opacity","1.0");
      $(".yellow-box").css("opacity","0.5");
      break;
    case "yellow-box":
      $(".green-box").css("opacity","0.5");
      $(".yellow-box").css("opacity","1.0");
      break;
    default:
      $(".green-box").css("opacity","0.5");
      $(".yellow-box").css("opacity","0.5");
  }
}

$(".container").children().click(function(event){
  var clase = $(this).attr("class");
  opacityChanger(clase);
});
