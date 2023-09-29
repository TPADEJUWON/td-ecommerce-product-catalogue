const link = document.querySelector('.link')
const humbugger = document.querySelector('.hamburger')
const links = document.querySelector('.center_link')
const productTab = document.querySelectorAll('input[name="tabset"]')
const catalogue = document.querySelectorAll('.catalogue')
const errorMessage = document.querySelector('.errorMessage')
const search = document.querySelector('.search_product')



// ==================================

// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.


humbugger.onclick = () =>{
    links.classList.toggle('hide')
    
}
// ==================================


// ==================================
// 2. Display products based on 
// All, Men or Female categories.
const displayCat = (tab) =>{
    catalogue.forEach(element =>{ // loop through the catalogue
        
        errorMessage.style.display = "none";  

const category = element.querySelector('.tag').textContent.toUpperCase(); 


const shouldDisplay = (tab === "ALL") || (category === tab);

    element.style.display = shouldDisplay ? "block" : "none";


    // Display error message if Babies tab is selected
    if (tab === "BABIES"){
        errorMessage.style.display ="block"
        errorMessage.textContent = "There is no product in the BABIES category"

    }


  });

    
};

// loop through the productTab and add event to each
productTab.forEach(input => {
    input.addEventListener('change', (e) => {
      displayCat(e.target.value.toUpperCase());
    });
  });

// ==================================






// ==================================
// 3. Display products based on 
// search keywords in the input fields.
const SearchProd = (input) => {
    let foundProduct = false; // Flag to track if any product is found
  
    catalogue.forEach(element => {
      element.style.display = "none";
  
      const name = element.querySelector('p').textContent.toUpperCase();
  
      if (name.includes(input)) {
        element.style.display = 'block';
        foundProduct = true; // Set the flag to true if a product is found
      }
    });
  
    // Display the error message only if no product is found
    if (!foundProduct) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Product Not Found";
    } else {
      errorMessage.style.display = "none";
    }
  }
  
  //Add event to the input field
  search.addEventListener('input', (e) => {
    SearchProd(e.target.value.toUpperCase());
  });
  
// =============================