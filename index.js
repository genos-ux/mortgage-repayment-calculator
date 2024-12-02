const btn = document.querySelector("button");
const div = document.querySelector(".has-text-centered");
const radioButtons = document.querySelectorAll('input[name="answer"]');
const amount = document.querySelector('input[name="amount"]');
const term = document.querySelector('input[name="term"]');
const rate = document.querySelector('input[name="rate"]');


btn.addEventListener("click",(event) =>
{
  event.preventDefault();
  // console.log(amount.value);
  // console.log(term.value);
  // console.log(rate.value);
  const header = document.createElement("h1");
  const para = document.createElement("p");
  const miniContainer = document.createElement("div");
  const miniPara = document.createElement("p");

  let mortgageType = "";
  for(const radioButton of radioButtons)
  {
    if(radioButton.checked)
    {
      mortgageType = radioButton.value;
      break;
    }
  }


  let monthlyPayment, principalAmount, interestRate,annualPayment, interestTerm = 0;

  if(mortgageType == "Interest")
  {
    interestRate = rate.value;
    principalAmount = amount.value;
    interestTerm = term.value * 12;

    monthlyPayment = principalAmount * interestRate;

    annualPayment = monthlyPayment * interestTerm;

  }

  else if(mortgageType == "Repayment")
  {
    interestRate = rate.value;
    principalAmount = amount.value;
    interestTerm = term.value;

    monthlyPayment = principalAmount * interestRate * Math.pow((1 + interestRate), interestTerm) / (Math.pow(1 + interestRate), interestTerm) - 1;

    annualPayment = monthlyPayment * interestTerm * 12;

  }



  div.textContent = "";
  div.style.cssText += "display : flex; flex-direction: column; align-items: start;border-top-right-radius: 14px;border-bottom-right-radius: 14px;"

  header.textContent = "Your results";
  header.style.cssText = "font-weight:700;color: hsl(202, 86%, 94%);"

  para.textContent = 'Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again';
  para.style.cssText = "font-size: 12px;text-align: justify;"

  miniContainer.style.cssText = "border: 1px solid hsl(200, 83%, 7%); padding: 10px;display: flex; flex-direction: column; align-items: start;justify-content: space-around;height: 62%;width: 86%;border-radius: 5px;background: hsl(200, 83%, 7%);border-top:3px solid hsl(61, 70%, 52%); margin-top: 13px;"
  miniContainer.innerHTML =
  `
    <div style="border-bottom: 1px solid white;width: 90%;padding: 10px 0 15px;margin-left:12px;">
      <p style="text-align: justify;font-size: 13px;color: hsl(202, 86%, 94%);">Your monthly repayments</p>
      <h1 style="text-align: justify;font-size: 2rem;font-weight: 700;color: hsl(61, 70%, 52%);">€${monthlyPayment.toFixed(3)}</h1>

    </div>

    <div style="margin-top: 20px;margin-left: 12px;">
      <p style="font-size:13px;">Total you will repay over the term</p>
      <h2 style="text-align:justify;font-weight: 700;">€${annualPayment.toFixed(3)}</h2>
    </div>
  `



  div.appendChild(header);
  div.appendChild(para);
  div.appendChild(miniContainer);

}
);








function ConvertToInt(value)
{
  if(typeof (value) != number)
  {
    alert("Enter a valid input.");
    return;
  }
  return parseInt(value);
}




//Set both columns to the same height
document.addEventListener("DOMContentLoaded", () => {
    const columns = document.querySelectorAll(".dynamic-height");
    let maxHeight = 0;

    // Find the tallest column
    columns.forEach(column => {
      const height = column.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    // Apply the tallest height to all columns
    columns.forEach(column => {
      column.style.height = `${maxHeight}px`;
    });
  });
