const totalCost = document.querySelector("#total-cost");
const totalCostRange = document.querySelector("#total-cost-range");

const setValue = () => {
    totalCost.value = totalCostRange.value;
  };
setValue();

totalCostRange.addEventListener("input", () => {
      setValue();
      
    });
  
  
  
