let calculateBMI = (height, weight) => {
  const bmi = weight / (height * height);
  return bmi;
}

/*let onCalBMIPress = () => {
  let height = document.getElementById("height-m").value;
  let weight = document.getElementById("weight-m").value;
  let bmi = calculateBMI(height, weight);
  console.log(bmi);
  
  $("#results").html("Your BMI is: "+ bmi);
  bmi = parseInt(Math.round(bmi));
  switch(bmi){
    case bmi < 18:
      $("#status").html("You are Underweight");
      break;
      
    case bmi < 24:
      $("#status").html("You are Healthy");
      break;
      
    case bmi < 100:
      $("#status").html("You are OVERWEIGHT. GO EXERCISE!!!");
      break;
      
    default:
      $("#status").html("You are NOT a HUMAN. GO EXERCISE!!!");
      break;
  };
  return bmi;
};


let CalcBMIPress = () => {
  let height = $("#height-m").val();
  let weight = $(`#weight-m`).val();
  let bmi = calculateBMI(height, weight);
  $(`#results`).append(`Your BMI is: ${bmi}`);
  $(`#results`).append(`Hello, You are the fatest person i have ever seen.`);
}
*/
let onCalBMIPress = () => {
  let height = document.getElementById("height-m").value;
  let weight = document.getElementById("weight-m").value;
  let bmi = calculateBMI(height, weight);
  console.log(bmi);

  $("#results").empty();
  bmi = parseInt(bmi.toFixed(1))
  $("#results").append("<p class='mb-0'>Your BMI is: "+ bmi  +"</p>");
  
    if (bmi < 18){
      $("#results").append("You are Underweight").addClass("bg-danger");
    }
    else if (bmi < 24){
      $("#results").append("You are Healthy").addClass("bg-success");
    }
      
    else if (bmi < 39){
      $("#results").append("You are OVERWEIGHT. GO EXERCISE!!!").addClass("bg-warning");
    }

  else{
    $("#results").append("You are OVERWEIGHT. GO EXERCISE!!!").addClass("bg-danger");
  }

  return bmi;
};
