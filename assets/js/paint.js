function configureListeners() {
    let images = document.querySelectorAll('img')
    // select img elements  


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
        const image = document.querySelector(`#${images[i].id}`)
        image.addEventListener('mouseover', addOpacity, false)   
        image.addEventListener('mouseout', removeOpacity, false)   
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    if(!this.classList.contains('dim')){
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     if(this.classList.contains('dim')){
        this.classList.remove('dim')
    }
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price  
            price = '$14.99'
            colorName = 'Lime Green'
            updatePrice(colorName, price)   
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price
            price = '$11.14'
            colorName = 'Medium Brown'
            updatePrice(colorName, price)       
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price
            price = '$22.99'
            colorName = 'Royal Blue'
            updatePrice(colorName, price)        
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price 
            price = '$13.42'
            colorName = 'Red'
            updatePrice(colorName, price)       
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price      
            price = '$21.98'
            colorName = 'White'
            updatePrice(colorName, price)       
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price     
            price = '$4.99'
            colorName = 'Black'
            updatePrice(colorName, price)         
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '$8.22'
            colorName = 'Cyan'
            updatePrice(colorName, price)      
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price 
            price = '$11.99'
            colorName = 'Purple'
            updatePrice(colorName, price)        
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$14.99'
            colorName = 'Yellow'
            updatePrice(colorName, price)      
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.querySelector('#color-price')// select element with corresponding id
        // display price
        colorPrice.textContent = price
        
        let color = document.querySelector('#color-name')// select element with corresponding id
        //display color name
        color.textContent = colorName
    }
    
}
