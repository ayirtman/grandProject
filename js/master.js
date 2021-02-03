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
      console.log(index);
      $(".q" + index).css("display","block");
  }
  console.log(index);
});
