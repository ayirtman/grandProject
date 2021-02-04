const ul_1 = $(".option1");
const ul_2 = $(".option2");
const ul_3 = $(".option3");

var valueText = "";
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

$("#rangeInput").on('input', function() {
  $("#slider1value").text(this.value);
  $("#slider1value").css("left",(this.value*20) + "%");
})
