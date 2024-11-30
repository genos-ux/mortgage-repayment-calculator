const btn = document.querySelector("button");
const div = document.querySelector(".has-text-centered");

// btn.addEventListener("click",changeDiv());

// function changeDiv()
// {
//   const header = document.createElement("h1");
//   const para = document.createElement("p");
//   const miniContainer = document.createElement("div");


//   div.appendChild(header);
//   header.textContent = "Your results";

//   div.appendChild(para);

//   para.textContent += "Your results are shown based on your results you provided.To adjust the result, edit the form and click calculate repayments again.";
//   para.style.fontSize = "12px";


// }

div.textContent = "";
div.style.cssText += "display : flex; flex-direction: column; align-items: start;"

btn.addEventListener("click",changeDiv());

function changeDiv()
{
  const header = document.createElement("h1");
  const para = document.createElement("p");
  const miniContainer = document.createElement("div");
  const miniPara = document.createElement("p");

  header.textContent = "Your results";

  para.textContent = 'Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again';
  para.style.cssText = "font-size: 12px;text-align: justify;"

  miniContainer.style.cssText = "border: 1px solid white; padding: 10px;display: flex; flex-direction: column; align-items: start;height: 62%;"
  miniContainer.innerHTML =
  `
    <div>
      <p>Your monthly repayments</p>
      <h1 style="text-align: justify">$1,798.98 </h1>

    </div>

    <div>
      <p>Total you will repay over the term</p>
      <h3 style="text-align:justify">$2323.232</h3>
    </div>
  `



  div.appendChild(header);
  div.appendChild(para);
  div.appendChild(miniContainer);

}













// //Set both columns to the same height
// document.addEventListener("DOMContentLoaded", () => {
//     const columns = document.querySelectorAll(".dynamic-height");
//     let maxHeight = 0;

//     // Find the tallest column
//     columns.forEach(column => {
//       const height = column.offsetHeight;
//       if (height > maxHeight) {
//         maxHeight = height;
//       }
//     });

//     // Apply the tallest height to all columns
//     columns.forEach(column => {
//       column.style.height = `${maxHeight}px`;
//     });
//   });
