window.onload = function showAlert() {
  document.getElementById("personal").style.display = " block";
  document.getElementById("stepnumber").style.backgroundColor =
    "hsl(229, 24%, 87%)";
  document.getElementById("stepnumber").style.color = "hsl(213, 96%, 18%)";
  document.getElementById("stepnumber").style.fontFamily = "myFont";
  document.getElementById("plan").style.display = "none";
  document.getElementById("pick").style.display = "none";
  document.getElementById("goBack").style.visibility = "hidden";
  document.getElementById("finish").style.display = "none";
  document.getElementById("thankyou").style.display = "none";
};
let isFirstPageIsValidated;
let isSecondPageIsValidated;
let isThirdPageIsValidated;
let isFourthPageIsValidated;

function showPage() {
  validateName();
  validateEmail();
  validatePhone();
  isFirstPageIsValidated = firstpagevalidation();
  isSecondPageIsValidated = secondPageValidation();
  isThirdPageIsValidated = thirdpagevalidation();
  isFourthPageIsValidated = fourthpagevalidation();
  console.log(isSecondPageIsValidated);
  console.log(isFirstPageIsValidated);
  console.log(isThirdPageIsValidated);
  console.log(isFourthPageIsValidated);
  if (isFirstPageIsValidated) {
    document.getElementById("personal").style.display = "none";
    document.getElementById("plan").style.display = "block";
    document.getElementById("goBack").style.visibility = "visible";
    document.getElementById("goBack").style.color = "hsl(231, 11%, 63%)";
    document.getElementById("goBack").style.fontFamily = "myFont";
    document.getElementById("stepnumber1").style.backgroundColor =
      "hsl(229, 24%, 87%)";
    document.getElementById("stepnumber1").style.color = "hsl(213, 96%, 18%)";
    document.getElementById("stepnumber1").style.fontFamily = "myFont";
    document.getElementById("stepnumber").style.backgroundColor =
      "hsl(243, 100%, 62%)";
    document.getElementById("stepnumber").style.color = "hsl(0, 0%, 100%)";
    document.getElementById("stepnumber").style.fontFamily = "myFont";
  }
  if (isSecondPageIsValidated) {
    document.getElementById("plan").style.display = "none";
    document.getElementById("pick").style.display = "block";
    document.getElementById("stepnumber2").style.backgroundColor =
      "hsl(229, 24%, 87%)";
    document.getElementById("stepnumber2").style.color = "hsl(213, 96%, 18%)";
    document.getElementById("stepnumber2").style.fontFamily = "myFont";
    document.getElementById("stepnumber1").style.backgroundColor =
      "hsl(243, 100%, 62%)";
    document.getElementById("stepnumber1").style.color = "hsl(0, 0%, 100%)";
    document.getElementById("stepnumber1").style.fontFamily = "myFont";
  }
  if (isThirdPageIsValidated) {
    document.getElementById("finish").style.display = "block";
    document.getElementById("pick").style.display = "none";
    document.getElementById("stepnumber2").style.backgroundColor =
      "hsl(243, 100%, 62%)";
    document.getElementById("stepnumber2").style.color = "hsl(0, 0%, 100%)";
    document.getElementById("stepnumber2").style.fontFamily = "myFont";
    document.getElementById("stepnumber3").style.backgroundColor =
      "hsl(229, 24%, 87%)";
    document.getElementById("stepnumber3").style.color = "hsl(213, 96%, 18%)";
    document.getElementById("stepnumber3").style.fontFamily = "myFont";
  }
  if (isFourthPageIsValidated) {
    document.getElementById("finish").style.display = "none";
    document.getElementById("thankyou").style.display = "block";
  }
}
// if (currentPage === 1) {
//   document.getElementById("personal").style.display = "none";
//   document.getElementById("plan").style.display = "block";
//   document.getElementById("thankyou").style.display = "none";
//   pageHistory.push(currentPage);
//   currentPage++;
// } else if (currentPage === 2) {
//   document.getElementById("plan").style.display = "none";
//   document.getElementById("pick").style.display = "block";
//   document.getElementById("thankyou").style.display = "none";
//   pageHistory.push(currentPage);
//   currentPage++;
// } else if (currentPage === 3) {
//   document.getElementById("pick").style.display = "none";
//   document.getElementById("finish").style.display = "block";
//   document.getElementById("thankyou").style.display = "none";
//   pageHistory.push(currentPage);
//   currentPage++;
// } else if (currentPage === 4) {
//   document.getElementById("finish").style.display = "none";
//   document.getElementById("thankyou").style.display = "block";
//   currentPage++;
// }

// Show the Go Back button when not on the first page
// document.getElementById("goBack").style.visibility =
//   currentPage > 1 ? "visible" : "hidden";

// function goBack() {
//   if (pageHistory.length > 0) {
//     // Get the last page from the history
//     const lastPage = pageHistory.pop();

//     // Hide the current page
//     if (currentPage === 2) {
//       document.getElementById("plan").style.display = "none";
//       document.getElementById("personal").style.display = "block";
//       document.getElementById("finish").style.display = "none";
//       updateStepStyles(1, false);
//     } else if (currentPage === 3) {
//       document.getElementById("pick").style.display = "none";
//       document.getElementById("plan").style.display = "block";
//       document.getElementById("finish").style.display = "none";
//       //   document.getElementById("thankyou").style.display = "none";
//       updateStepStyles(2, false);
//     } else if (currentPage === 4) {
//       // Here we are going back from Finish page
//       document.getElementById("finish").style.display = "none"; // Hide Finish page
//       document.getElementById("pick").style.display = "block"; // Show Pick page
//       //   document.getElementById("thankyou").style.display = "none";
//       currentPage = 3; // Set currentPage to Pick page
//     } else if (currentPage === 5) {
//       // Going back from "Thank You" page
//       document.getElementById("thankyou").style.display = "none"; // Hide Thank You page
//       document.getElementById("finish").style.display = "block"; // Show Finish page
//       currentPage = 4; // Set currentPage to Finish page
//     }

//     // Update the current page to the last one
//     currentPage = lastPage;

//     // Update the "Go Back" button visibility
//     document.getElementById("goBack").style.visibility =
//       pageHistory.length > 0 ? "visible" : "hidden";
//   }
// }

// Helper function to update step styles
function updateStepStyles(stepNumber, isActive) {
  const stepElement = document.getElementById(`stepnumber${stepNumber}`);
  if (isActive) {
    stepElement.style.backgroundColor = "hsl(229, 24%, 87%)";
    stepElement.style.color = "hsl(213, 96%, 18%)";
    stepElement.style.fontFamily = "myFont";
  } else {
    stepElement.style.backgroundColor = "hsl(243, 100%, 62%)";
    stepElement.style.color = "hsl(0, 0%, 100%)";
    stepElement.style.fontFamily = "myFont";
  }
}

function firstpagevalidation() {
  if (
    document.getElementById("name")?.value &&
    document.getElementById("email")?.value &&
    document.getElementById("number")?.value
  ) {
    return true;
  } else {
    return false;
  }
}
let addOns;
function selectedpackservice(service) {
  addOns = service[0].id;
  console.log(addOns);
}
function secondPageValidation() {
  //   console.log(selectedPlan);
  if (selectedPlan?.name) {
    return true;
  } else {
    return false;
  }
}
function thirdpagevalidation(service) {
  if (addOns) {
    return true;
  } else {
    return false;
  }
}
function fourthpagevalidation() {
  if (selectedservice?.name) {
    return true;
  } else {
    return false;
  }
}

let selectedPlanType;
let selectedPlan;
let selectedservice;

function toggleValue(event) {
  console.log(event);
  const toggleValue = document.getElementById("switch").checked;
  console.log(toggleValue);
  if (toggleValue) {
    selectedPlanType = "yearly";
    document.getElementById("selectparagraph1").innerHTML = "$90/yr";

    document.getElementById("selectparagraph2").innerHTML = "$120/yr";
    document.getElementById("selectparagraph3").innerHTML = "$150/yr";
  } else {
    selectedPlanType = "monthly";
    document.getElementById("selectparagraph1").innerHTML = "$9/mo";
    document.getElementById("selectparagraph2").innerHTML = "$12/mo";
    document.getElementById("selectparagraph3").innerHTML = "$15/mo";
  }
}
function selectplanarcade(arcadeplan, advancedplan, proplan) {
  console.log(arcadeplan);
  const arcadecontent = document.getElementById(arcadeplan);
  const planName = arcadecontent.querySelector(
    ".select-card-header"
  ).textContent;
  const planPrice = arcadecontent.querySelector(
    ".select-card-paragraph"
  ).textContent;
  const planDetails = arcadecontent.querySelector(
    ".select-card-paragraph2"
  ).textContent;

  selectedPlan = {
    name: planName,
    price: planPrice,
    details: planDetails,
  };

  console.log("Selected Plan:", selectedPlan);

  document.getElementById(arcadeplan).style.backgroundColor =
    "hsl(206, 94%, 87%)";
  document.getElementById(arcadeplan).style.border =
    "2px solid hsl(213, 96%, 18%)";
  document.getElementById(advancedplan).style.border =
    "1px solid hsl(231, 11%, 63%)";
  document.getElementById(advancedplan).style.backgroundColor =
    "hsl(0, 0%, 100%)";
  document.getElementById(proplan).style.border =
    "1px solid hsl(231, 11%, 63%)";
  document.getElementById(proplan).style.backgroundColor = "hsl(0, 0%, 100%)";
  document.getElementById("selectparagraph1").style.color =
    "hsl(213, 96%, 18%)";
}
function selectplanadvanced(advancedplan, proplan, arcadeplan) {
  console.log(advancedplan);
  const advancedcontent = document.getElementById(advancedplan);
  const planName = advancedcontent.querySelector(
    ".select-card-header"
  ).textContent;
  const planPrice = advancedcontent.querySelector(
    ".select-card-paragraph"
  ).textContent;
  const planDetails = advancedcontent.querySelector(
    ".select-card-paragraph2"
  ).textContent;

  selectedPlan = {
    name: planName,
    price: planPrice,
    details: planDetails,
  };

  console.log("Selected Plan:", selectedPlan);

  document.getElementById(advancedplan).style.backgroundColor =
    "hsl(206, 94%, 87%)";
  document.getElementById(advancedplan).style.border =
    "2px solid hsl(213, 96%, 18%)";
  document.getElementById(arcadeplan).style.border =
    "1px solid hsl(231, 11%, 63%)";
  document.getElementById(arcadeplan).style.backgroundColor =
    "hsl(0, 0%, 100%)";
  document.getElementById(proplan).style.border =
    "1px solid hsl(231, 11%, 63%)";
  document.getElementById(proplan).style.backgroundColor = "hsl(0, 0%, 100%)";
  document.getElementById("selectparagraph2").style.color =
    "hsl(213, 96%, 18%)";
}
function selectplanpro(proplan, arcadeplan, advancedplan) {
  console.log(proplan);
  const procontent = document.getElementById(proplan);
  const planName = procontent.querySelector(".select-card-header").textContent;
  const planPrice = procontent.querySelector(
    ".select-card-paragraph"
  ).textContent;
  const planDetails = procontent.querySelector(
    ".select-card-paragraph2"
  ).textContent;
  selectedPlan = {
    name: planName,
    price: planPrice,
    details: planDetails,
  };

  console.log("Selected Plan:", selectedPlan);

  document.getElementById(proplan).style.backgroundColor = "hsl(206, 94%, 87%)";
  document.getElementById(proplan).style.border =
    "2px solid hsl(213, 96%, 18%)";
  document.getElementById(advancedplan).style.border =
    "1px solid hsl(231, 11%, 63%)";
  document.getElementById(advancedplan).style.backgroundColor =
    "hsl(0, 0%, 100%)";
  document.getElementById(arcadeplan).style.border =
    "1px solid hsl(231, 11%, 63%)";
  document.getElementById(arcadeplan).style.backgroundColor =
    "hsl(0, 0%, 100%)";
  document.getElementById("selectparagraph3").style.color =
    "hsl(213, 96%, 18%)";
}
function selectservicearcade(
  arcadeservice,
  onlineservice,
  largerservice,
  totalservice
) {
  console.log(arcadeservice);
  arcadeservicecontent = document.getElementById(arcadeservice);
  serviceName = arcadeservicecontent.querySelector(
    ".select-card-header"
  ).textContent;
  servicePrice = arcadeservicecontent.querySelector(
    ".select-card-paragraph"
  ).textContent;

  selectedservice = {
    name: serviceName,
    price: servicePrice,
  };

  console.log("Selected service:", selectedservice);
}
function selectserviceonline(
  onlineservice,
  largerservice,
  totalservice,
  arcadeservice
) {
  console.log(onlineservice);
  onlineservicecontent = document.getElementById(onlineservice);
  serviceName = onlineservicecontent.querySelector(
    ".select-card-header"
  ).textContent;
  servicePrice = onlineservicecontent.querySelector(
    ".select-card-paragraph"
  ).textContent;

  selectedservice = {
    name: serviceName,
    price: servicePrice,
  };

  console.log("Selected service:", selectedservice);
}
function selectserviceonline(
  onlineservice,
  largerservice,
  totalservice,
  arcadeservice
) {
  console.log(onlineservice);
  onlineservicecontent = document.getElementById(onlineservice);
  serviceName = onlineservicecontent.querySelector(
    ".select-card-header"
  ).textContent;
  servicePrice = onlineservicecontent.querySelector(
    ".select-card-paragraph"
  ).textContent;

  selectedservice = {
    name: serviceName,
    price: servicePrice,
  };

  console.log("Selected service:", selectedservice);
}

function selectservicelarger(
  largerservice,
  onlineservice,
  totalservice,
  arcadeservice
) {
  console.log(largerservice);
  largerservicecontent = document.getElementById(largerservice);
  serviceName = largerservicecontent.querySelector(
    ".select-card-header"
  ).textContent;
  servicePrice = largerservicecontent.querySelector(
    ".select-card-paragraph"
  ).textContent;

  selectedservice = {
    name: serviceName,
    price: servicePrice,
  };

  console.log("Selected service:", selectedservice);
}
function selectservicetotal(
  totalservice,
  onlineservice,
  largerservice,
  arcadeservice
) {
  console.log(totalservice);
  totalservicecontent = document.getElementById(totalservice);
  serviceName = totalservicecontent.querySelector(
    ".select-card-header"
  ).textContent;
  servicePrice = totalservicecontent.querySelector(
    ".select-card-paragraph"
  ).textContent;

  selectedservice = {
    name: serviceName,
    price: servicePrice,
  };

  console.log("Selected service:", selectedservice);
}

function validateName() {
  const Name = document.getElementById("name")?.value;
  if (Name) {
    document.getElementById("name-error-message").style.visibility = "hidden";
    document.getElementById("name").style.borderColor = "hsl(231, 11%, 63%)";
  } else {
    document.getElementById("name-error-message").style.visibility = "visible";
    document.getElementById("name").style.borderColor = "hsl(354, 84%, 57%)";
  }
}
function validateEmail() {
  const email = document.getElementById("email")?.value;

  if (email) {
    document.getElementById("email-error-message").style.visibility = "hidden";
    document.getElementById("email").style.borderColor = "hsl(231, 11%, 63%)";
  } else {
    document.getElementById("email-error-message").style.visibility = "visible";
    document.getElementById("email").style.borderColor = "hsl(354, 84%, 57%)";
  }
}
function validatePhone() {
  const phnumber = document.getElementById("number")?.value;
  if (phnumber) {
    document.getElementById("number-error-message").style.visibility = "hidden";
    document.getElementById("number").style.borderColor = "hsl(231, 11%, 63%)";
  } else {
    document.getElementById("number-error-message").style.visibility =
      "visible";
    document.getElementById("number").style.borderColor = "hsl(354, 84%, 57%)";
  }
}

// function goStepTwo() {
//   checkName();
//   checkNum();
//   checkMail();
//   Achieve();
// }

// function backStepOne() {
//   stepInfo.style.display = "flex";
//   stepPlan.style.display = "none";
//   circle1.style.color = "black";
//   circle1.style.backgroundColor = "rgba(255, 255, 255)";
//   circle2.style.backgroundColor = "rgb(255, 255, 255, 0)";
//   circle2.style.color = "white";
// }

// function goStepThree() {
//   console.log(typeof document.getElementById("totalPrice").innerHTML);

//   if (document.getElementById("totalPrice").innerHTML == "") {
//     console.log(document.getElementById("totalPrice").innerHTML);
//     document.getElementById("totalPrice").innerHTML = "0";
//     console.log(document.getElementById("totalPrice").innerHTML);
//   }
//   checkPlan();
// }
// function backSteptTwo() {
//   stepPlan.style.display = "flex";
//   stepAddOn.style.display = "none";
//   circle2.style.color = "black";
//   circle2.style.backgroundColor = "rgba(255, 255, 255)";
//   circle3.style.backgroundColor = "rgb(255, 255, 255, 0)";
//   circle3.style.color = "white";
// }

// function goStepFour() {
//   stepSummary.style.display = "flex";
//   stepAddOn.style.display = "none";
//   circle3.style.color = "white";
//   circle3.style.backgroundColor = "rgba(255, 255, 255, 0)";
//   circle4.style.backgroundColor = "rgb(255, 255, 255)";
//   circle4.style.color = "black";

//   const adOnnPrice = document.getElementsByName("adOnn").forEach((radio) => {
//     if (radio.checked) {
//       console.log(radio.value);
//       console.log(document.getElementById("totalPrice").innerHTML);
//       const planPrice = document.getElementById("totalPrice").innerHTML;
//       console.log(planPrice);
//       document.getElementById("totalPrice").innerHTML =
//         parseInt(planPrice) + parseInt(radio.value);
//     }
//   });
// }

// function backStepThree() {
//   stepSummary.style.display = "none";
//   stepAddOn.style.display = "flex";
//   circle3.style.color = "black";
//   circle3.style.backgroundColor = "rgba(255, 255, 255)";
//   circle4.style.backgroundColor = "rgb(255, 255, 255, 0)";
//   circle4.style.color = "white";

//   const adOnnPrice = document.getElementsByName("adOnn").forEach((radio) => {
//     if (radio.checked) {
//       console.log(radio.value);
//       console.log(document.getElementById("totalPrice").innerHTML);
//       const planPrice = document.getElementById("totalPrice").innerHTML;
//       console.log(planPrice);
//       document.getElementById("totalPrice").innerHTML =
//         parseInt(planPrice) - parseInt(radio.value);
//     }
//   });
// }

// function goFromFourToTwo() {
//   stepSummary.style.display = "none";
//   stepPlan.style.display = "flex";
//   circle2.style.color = "black";
//   circle2.style.backgroundColor = "rgba(255, 255, 255)";
//   circle4.style.backgroundColor = "rgb(255, 255, 255, 0)";
//   circle4.style.color = "white";

//   const adOnnPrice = document.getElementsByName("adOnn").forEach((radio) => {
//     if (radio.checked) {
//       console.log(radio.value);
//       console.log(document.getElementById("totalPrice").innerHTML);
//       const planPrice = document.getElementById("totalPrice").innerHTML;
//       console.log(planPrice);
//       document.getElementById("totalPrice").innerHTML =
//         parseInt(planPrice) - parseInt(radio.value);
//     }
//   });
// }
// function goToStepThankYou() {
//   console.log(document.getElementById("modeResume").innerHTML);
//   if (document.getElementById("modeResume").innerHTML == "Choose a plan") {
//     stepSummary.style.display = "flex";
//     stepThankYou.style.display = "none";
//   } else {
//     stepSummary.style.display = "none";
//     stepThankYou.style.display = "flex";
//   }
// }

// checkBox = document
//   .getElementById("switch")
//   .addEventListener("click", (event) => {
//     if (event.target.checked) {
//       planYear.style.display = "flex";
//       planMonth.style.display = "none";
//       addonAnnee.style.display = "flex";
//       addonMois.style.display = "none";
//     } else {
//       planYear.style.display = "none";
//       planMonth.style.display = "flex";
//       addonAnnee.style.display = "none";
//       addonMois.style.display = "flex";
//     }
//   });
// checkBox = document
//   .getElementById("moisArcade")
//   .addEventListener("click", (event) => {
//     moisArcade.style.backgroundColor = "hsl(217, 100%, 97%)";
//     moisArcade.style.border = " solid 1px hsl(213, 96%, 18%)";
//     moisAdvenced.style.backgroundColor = "white";
//     moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
//     moisPro.style.backgroundColor = "white";
//     moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneeArcade.style.backgroundColor = "white";
//     anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneeAdvenced.style.backgroundColor = "white";
//     anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneePro.style.backgroundColor = "white";
//     anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
//     document.getElementById("modeResume").innerHTML = "Arcade (monthly)";
//     document.getElementById("priceResume").innerHTML = "9$/mo";
//     document.getElementById("modeTotal").innerHTML = "Total (per month)";
//   });
// checkBox = document
//   .getElementById("moisAdvenced")
//   .addEventListener("click", (event) => {
//     moisAdvenced.style.backgroundColor = "hsl(217, 100%, 97%)";
//     moisAdvenced.style.border = " solid 1px hsl(213, 96%, 18%)";
//     moisArcade.style.backgroundColor = "white";
//     moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
//     moisPro.style.backgroundColor = "white";
//     moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneeArcade.style.backgroundColor = "white";
//     anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneeAdvenced.style.backgroundColor = "white";
//     anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneePro.style.backgroundColor = "white";
//     anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
//     document.getElementById("modeResume").innerHTML = "Advenced (monthly)";
//     document.getElementById("priceResume").innerHTML = "12$/mo";
//     document.getElementById("modeTotal").innerHTML = "Total (per month)";
//   });
// checkBox = document
//   .getElementById("moisPro")
//   .addEventListener("click", (event) => {
//     moisPro.style.backgroundColor = "hsl(217, 100%, 97%)";
//     moisPro.style.border = " solid 1px hsl(213, 96%, 18%)";
//     moisAdvenced.style.backgroundColor = "white";
//     moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
//     moisArcade.style.backgroundColor = "white";
//     moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneeArcade.style.backgroundColor = "white";
//     anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneeAdvenced.style.backgroundColor = "white";
//     anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneePro.style.backgroundColor = "white";
//     anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
//     document.getElementById("modeResume").innerHTML = "Pro (monthly)";
//     document.getElementById("priceResume").innerHTML = "15$/mo";
//     document.getElementById("modeTotal").innerHTML = "Total (per month)";
//   });
// checkBox = document
//   .getElementById("anneeArcade")
//   .addEventListener("click", (event) => {
//     anneeArcade.style.backgroundColor = "hsl(217, 100%, 97%)";
//     anneeArcade.style.border = " solid 1px hsl(213, 96%, 18%)";
//     moisArcade.style.backgroundColor = "white";
//     moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
//     moisPro.style.backgroundColor = "white";
//     moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
//     moisAdvenced.style.backgroundColor = "white";
//     moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneeAdvenced.style.backgroundColor = "white";
//     anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneePro.style.backgroundColor = "white";
//     anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
//     document.getElementById("modeResume").innerHTML = "Arcade (yearly)";
//     document.getElementById("priceResume").innerHTML = "90$/yr";
//     document.getElementById("modeTotal").innerHTML = "Total (per year)";
//   });
// checkBox = document
//   .getElementById("anneeAdvenced")
//   .addEventListener("click", (event) => {
//     anneeAdvenced.style.backgroundColor = "hsl(217, 100%, 97%)";
//     anneeAdvenced.style.border = " solid 1px hsl(213, 96%, 18%)";
//     moisAdvenced.style.backgroundColor = "white";
//     moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
//     moisPro.style.backgroundColor = "white";
//     moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
//     moisArcade.style.backgroundColor = "white";
//     moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneeArcade.style.backgroundColor = "white";
//     anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneePro.style.backgroundColor = "white";
//     anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
//     document.getElementById("modeResume").innerHTML = "Advenced (yearly)";
//     document.getElementById("priceResume").innerHTML = "12O$/yr";
//     document.getElementById("modeTotal").innerHTML = "Total (per year)";
//   });
// checkBox = document
//   .getElementById("anneePro")
//   .addEventListener("click", (event) => {
//     anneePro.style.backgroundColor = "hsl(217, 100%, 97%)";
//     anneePro.style.border = " solid 1px hsl(213, 96%, 18%)";
//     moisArcade.style.backgroundColor = "white";
//     moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
//     moisPro.style.backgroundColor = "white";
//     moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
//     moisAdvenced.style.backgroundColor = "white";
//     moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneeArcade.style.backgroundColor = "white";
//     anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
//     anneeAdvenced.style.backgroundColor = "white";
//     anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
//     document.getElementById("modeResume").innerHTML = "Pro (yearly)";
//     document.getElementById("priceResume").innerHTML = "150$/yr";
//     document.getElementById("modeTotal").innerHTML = "Total (per year)";
//   });

// checkBox = document
//   .getElementById("onlineMois")
//   .addEventListener("click", (event) => {
//     if (event.target.checked) {
//       document.getElementById("onlinePrice").innerHTML = "+1$/mo";
//       document.getElementById("modeTotal").innerHTML = "Total (per month)";
//     } else {
//       document.getElementById("onlinePrice").innerHTML = "+0$";
//     }
//   });
// checkBox = document
//   .getElementById("storageMois")
//   .addEventListener("click", (event) => {
//     if (event.target.checked) {
//       document.getElementById("storagePrice").innerHTML = "+2$/mo";
//       document.getElementById("modeTotal").innerHTML = "Total (per month)";
//     } else {
//       document.getElementById("storagePrice").innerHTML = "+0$";
//     }
//   });
// checkBox = document
//   .getElementById("customizableMois")
//   .addEventListener("click", (event) => {
//     if (event.target.checked) {
//       document.getElementById("customizablePrice").innerHTML = "+2$/mo";
//       document.getElementById("modeTotal").innerHTML = "Total (per month)";
//     } else {
//       document.getElementById("customizablePrice").innerHTML = "+0$";
//     }
//   });
// checkBox = document
//   .getElementById("onlineAnnee")
//   .addEventListener("click", (event) => {
//     if (event.target.checked) {
//       document.getElementById("onlinePrice").innerHTML = "+10$/yr";
//       document.getElementById("modeTotal").innerHTML = "Total (per year)";
//     } else {
//       document.getElementById("onlinePrice").innerHTML = "+0$";
//     }
//   });
// checkBox = document
//   .getElementById("storageAnnee")
//   .addEventListener("click", (event) => {
//     if (event.target.checked) {
//       document.getElementById("storagePrice").innerHTML = "+20$/yr";
//       document.getElementById("modeTotal").innerHTML = "Total (per year)";
//     } else {
//       document.getElementById("storagePrice").innerHTML = "+0$";
//     }
//   });
// checkBox = document
//   .getElementById("customizableAnnee")
//   .addEventListener("click", (event) => {
//     if (event.target.checked) {
//       document.getElementById("customizablePrice").innerHTML = "+20$/yr";
//       document.getElementById("modeTotal").innerHTML = "Total (per year)";
//     } else {
//       document.getElementById("customizablePrice").innerHTML = "+0$";
//     }
//   });
// function reset() {
//   document.getElementById("onlineMois").checked = false;
//   document.getElementById("storageMois").checked = false;
//   document.getElementById("customizableMois").checked = false;
//   document.getElementById("onlineAnnee").checked = false;
//   document.getElementById("storageAnnee").checked = false;
//   document.getElementById("customizableAnnee").checked = false;
//   document.getElementById("onlinePrice").innerHTML = "+0$";
//   document.getElementById("storagePrice").innerHTML = "+0$";
//   document.getElementById("customizablePrice").innerHTML = "+0$";
//   document.getElementById("onlinePrice").innerHTML = "+0$";
//   document.getElementById("storagePrice").innerHTML = "+0$";
//   document.getElementById("customizablePrice").innerHTML = "+0$";
//   document.getElementById("modeResume").innerHTML = "Choose a plan";
//   document.getElementById("priceResume").innerHTML = "0$";
//   moisArcade.style.backgroundColor = "white";
//   moisArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
//   moisPro.style.backgroundColor = "white";
//   moisPro.style.border = " solid 1px hsl(229, 24%, 87%)";
//   moisAdvenced.style.backgroundColor = "white";
//   moisAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
//   anneeArcade.style.backgroundColor = "white";
//   anneeArcade.style.border = " solid 1px hsl(229, 24%, 87%)";
//   anneeAdvenced.style.backgroundColor = "white";
//   anneeAdvenced.style.border = " solid 1px hsl(229, 24%, 87%)";
//   anneePro.style.backgroundColor = "white";
//   anneePro.style.border = " solid 1px hsl(229, 24%, 87%)";
// }

// const planPrice = "0";
// console.log(planPrice);

// function getPrice1() {
//   const planPrice = "9";
//   console.log(planPrice);
//   document.getElementById("totalPrice").innerHTML = planPrice;
// }

// function getPrice2() {
//   const planPrice = "12";
//   console.log(planPrice);
//   document.getElementById("totalPrice").innerHTML = planPrice;
// }
// function getPrice3() {
//   const planPrice = "15";
//   console.log(planPrice);
//   document.getElementById("totalPrice").innerHTML = planPrice;
// }
// function getPrice4() {
//   const planPrice = "90";
//   console.log(planPrice);
//   document.getElementById("totalPrice").innerHTML = planPrice;
// }
// function getPrice5() {
//   const planPrice = "120";
//   console.log(planPrice);
//   document.getElementById("totalPrice").innerHTML = planPrice;
// }
// function getPrice6() {
//   const planPrice = "150";
//   console.log(planPrice);
//   document.getElementById("totalPrice").innerHTML = planPrice;
// }

// function checkName() {
//   let myNameInput = document.getElementById("infoName");
//   let myNameError = document.getElementById("errorName");
//   let myNameRegex = /^[a-zA-Z-\s]+$/;

//   if (myNameInput.value.trim() == "") {
//     myNameError.innerHTML = "This field is required";
//   } else if (myNameRegex.test(myNameInput.value) == false) {
//     myNameError.innerHTML = "Can't contain numbers or symbols";
//   } else if (myNameInput.value.trim() !== "") {
//     myNameError.innerHTML = "";
//   }
// }

// function checkNum() {
//   let myNumInput = document.getElementById("infoNumber");
//   let myNumError = document.getElementById("errorNum");
//   let myNumRegex = /^[0-9\s]+$/;

//   if (myNumInput.value.trim() == "") {
//     myNumError.innerHTML = "This field is required";
//   } else if (myNumRegex.test(myNumInput.value) == false) {
//     myNumError.innerHTML = "Must contain number";
//   } else if (myNumInput.value.trim().length !== 10) {
//     myNumError.innerHTML = "Invalid Phone Number";
//   } else {
//     myNumError.innerHTML = "";
//   }
// }

// function checkMail() {
//   let myMailInput = document.getElementById("infoMail");
//   let myNumError = document.getElementById("errorMail");
//   let myMailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//   if (myMailInput.value.trim() == "") {
//     myNumError.innerHTML = "This field is required";
//   } else if (myMailRegex.test(myMailInput.value) == false) {
//     myNumError.innerHTML = "Please enter a valid e-mail";
//   } else {
//     myNumError.innerHTML = "";
//   }
// }

// function Achieve() {
//   let myNumInput = document.getElementById("infoNumber");
//   let myNameInput = document.getElementById("infoName");
//   let myMailInput = document.getElementById("infoMail");
//   let myNameRegex = /^[a-zA-Z-\s]+$/;
//   let myNumRegex = /^[0-9\s]+$/;
//   let myMailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//   if (
//     myNumInput.value.trim().length === 10 &&
//     myNumRegex.test(myNumInput.value) == true &&
//     myMailInput.value.trim().length !== 0 &&
//     myMailRegex.test(myMailInput.value) === true &&
//     myNameInput.value.trim().length !== 0 &&
//     myNameRegex.test(myNameInput.value) === true
//   ) {
//     stepInfo.style.display = "none";
//     stepPlan.style.display = "flex";
//     circle1.style.color = "white";
//     circle1.style.backgroundColor = "rgba(255, 255, 255, 0)";
//     circle2.style.backgroundColor = "rgb(255, 255, 255)";
//     circle2.style.color = "black";
//   }
// }
// function checkPlan() {
//   if (document.getElementById("modeResume").innerHTML == "Choose a plan") {
//     stepInfo.style.display = "none";
//     stepPlan.style.display = "flex";
//     circle1.style.color = "white";
//     circle1.style.backgroundColor = "rgba(255, 255, 255, 0)";
//     circle2.style.backgroundColor = "rgb(255, 255, 255)";
//     circle2.style.color = "black";
//   } else {
//     stepPlan.style.display = "none";
//     stepAddOn.style.display = "flex";
//     circle2.style.color = "white";
//     circle2.style.backgroundColor = "rgba(255, 255, 255, 0)";
//     circle3.style.backgroundColor = "rgb(255, 255, 255)";
//     circle3.style.color = "black";
//   }
// }
