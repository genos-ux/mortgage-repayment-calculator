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
  header.style.cssText = "font-weight:700;"

  para.textContent = 'Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again';
  para.style.cssText = "font-size: 12px;text-align: justify;"

  miniContainer.style.cssText = "border: 1px solid hsl(200, 83%, 7%); padding: 10px;display: flex; flex-direction: column; align-items: start;justify-content: space-around;height: 62%;width: 86%;border-radius: 10px;background: hsl(200, 83%, 7%);border-top:3px solid hsl(61, 70%, 52%); "
  miniContainer.innerHTML =
  `
    <div style="border-bottom: 1px solid white;width: 90%;padding: 10px 0 15px;margin-left:12px;">
      <p style="text-align: justify;font-size: 13px;">Your monthly repayments</p>
      <h1 style="text-align: justify;font-size: 2rem;font-weight: 700;color: hsl(61, 70%, 52%);">$1,798.98 </h1>

    </div>

    <div style="margin-top: 20px;margin-left: 12px;">
      <p style="font-size:13px;">Total you will repay over the term</p>
      <h2 style="text-align:justify;font-weight: 700;">$223.232</h2>
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
