var jsonData = "teas.json",
    imageLink = "images/ancient-happiness.jpg";

function addDataSet(data) {
  var x = document.querySelectorAll("product-image");
  // var x = document.querySelectorAll(".product-image")[2].dataset.name;
  // console.log(x);
  for (var i=0; i<document.querySelectorAll(".product-image").length; i++) {
    // console.log(document.querySelectorAll(".product-image")[i].dataset.name);
    var dataName = document.createAttribute("data-name");  
    dataName.value = data[i].name; 
    document.querySelectorAll(".product-image")[i].setAttributeNode(dataName);  
  }
}

// console.log(document.querySelector("input").value);
// console.log(document.getElementById("quantity").value);
// console.log(document.querySelector("input").value * 11.50);
// console.log(document.querySelector("#submit-btn").value)

function displayItem(data, targetElement) {
    var output = "";
    // console.log(data);
    // console.log(targetElement);

    for(var i=0; i< data.length; i++) {
        if (data[i].name === targetElement) {
        document.getElementById("selected-item").style.display = 'block';
        output += "<div class='selected-item2' data-name='" + data[i].name + "'>"
        +"<div class='col-lg-9 product-section'>"
        +"<p id='close-button'>Close</p>"
        +"<div class='col-lg-12 product-box'>"
        +"<div class='col-lg-5'>"
        +"<img id='" + data[i].idName + " class='product-image-new-window' src='" + data[i].imgUrl + "'></div>"
        +"<div class='col-lg-7 product-description'>"
        +"<h1 id='product-name' data-name=" + data[i].name + "class='serif product-name'>" + data[i].name + "</h1>"
        +"<p>" + data[i].description + "</p>"
        +"<input type='number' id='quantity' name='quantity'" +"data-name=" + data[i].name + " value='1' min='1' max='5'>"
        + "<label for='quantity'><p>2 oz. <span data-name=" + data[i].name + " id='price'>" + data[i].priceA + "</span></p></label>"
        + "<br/>"
        + "<input id='submit-btn' class='btn btn-warning' type='submit' value='Submit'>"
        +"</div></div></div></div>"
        }
    }
    document.getElementById("selected-item").innerHTML = output;
    closeButton();
    showSubmitButton();
    closeBackground();
    document.getElementById("close-background").style.display = 'block';
}

// JSON Data
function getJSON(url, callback) {
    var _xhr = new XMLHttpRequest();
    _xhr.open('GET', url, true);
    _xhr.responseType = 'json';
    _xhr.onload = function () {
        var _status = _xhr.status;
        if (_status === 200) {
            callback(null, _xhr.response);
        } else {
            callback(_status, _xhr.response);
        }
    };
    _xhr.send();
}

function getJsonData() {
    getJSON(jsonData, function (error, data) {
        if (error !== null) {
            console.log('error!');
        } else {
          addDataSet(data);
            document.querySelectorAll('.product-image').forEach(item => {
                item.addEventListener('click', event => {
                  //handle click
                //   console.log(event.target.id)
                //   console.log(event.target.nodeName);
                //   console.log(productImage.className);
                //   var targetElement = event.target.id;
                var targetElement = event.target.dataset.name;
                  displayItem(data, targetElement);
                  displayCart();
                })
              });
        }
    })
}

function closeButton() {
    document.getElementById('close-button').addEventListener("click", function () {
        document.getElementById("selected-item").style.display = 'none';
        document.getElementById("close-background").style.display = 'none';
    });
}

function closeBackground() {
  document.getElementById('close-background').addEventListener("click", function () {
    document.getElementById("selected-item").style.display = 'none';
    event.target.style.display = 'none';
});
}

var shoppingCart = (function() {
    // =============================
    // Private methods and properties
    // =============================
    cart = [];
    
    // Constructor
    function Item(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
    
    // Save cart
    function saveCart() {
      sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
      console.log(cart);
      displayCart()
    }
    
      // Load cart
    // function loadCart() {
    //   cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    // }
    // if (sessionStorage.getItem("shoppingCart") != null) {
    //   loadCart();
    // }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to cart
    obj.addItemToCart = function(name, price, count) {
      console.log(name);
      console.log(name,price,count);
      
      var quantity = document.getElementById("quantity").value;
      var _quantity = JSON.parse(quantity)
      for(var i=0; i< cart.length; i++){
      // for(var item in cart) {
        console.log(cart[i].name)
        console.log(name);
        if(cart[i].name === name) {
          var newCount = JSON.parse(cart[i].count);
          console.log(_quantity);
          console.log(count);
          count += _quantity;
          saveCart();
          return;
        }
        console.log(cart);
      }
      var item = new Item(name, price, count);
      console.log(item);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function(name, count) {
      // for(var i in cart) {
      console.log('setCountForItem');
      for (var i=0; i< cart.length; i++){
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(name) {
        // for(var item in cart) {
        console.log('removeItemFromCart');
        for (var i=0; i< cart.length; i++){
          if(cart[i].name === name) {
            cart[i].count --;
            if(cart[i].count === 0) {
              cart.splice(i, 1);
              removeStarOnCart();
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
      console.log('removeItemFromCartAll');
      // for(var item in cart) {
      for (var i=0; i< cart.length; i++){
        if(cart[i].name === name) {
          cart.splice(i, 1);
          removeStarOnCart()
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      console.log('totalCount');
      var totalCount = 0;
      // for(var item in cart) {
        for (var i=0; i< cart.length; i++){  
        totalCount += cart[i].count;
      }
      return totalCount;
    }
  
    // Total cart
    obj.totalCart = function() {
      console.log('totalCart');
      var totalCart = 0;
      // for(var item in cart) {
      for (var i=0; i< cart.length; i++){
        totalCart += cart[i].price * cart[i].count;
        console.log(cart[i].name);
      }
      console.log(totalCart);
      if (totalCart > 0) {
        console.log('star added');
        addStarToCart();
      }
      return Number(totalCart.toFixed(2));
    }
  
    // List cart
    obj.listCart = function() {
      console.log('listCart');
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
  
    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
})();



// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
    output += "<tr>"
      + "<td>" + cartArray[i].name + "</td>" 
      + "<td>(" + cartArray[i].price + ")</td>"
      + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
      + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      + " = " 
      + "<td>" + cartArray[i].total + "</td>" 
      + '<div>Total price: $<span id="total-cart"></span></div>'
      +  "</tr>";
      console.log(cartArray[i].name);
  }
  $('.show-cart').html(output);
  console.log(cartArray)
  var totalCart = $('#total-cart').html(shoppingCart.totalCart());
  console.log(totalCart);
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var name = $(this).data('name')
  console.log(name);
  shoppingCart.addItemToCart(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

// if anything is in cart, * will appear next to cart icon
function addStarToCart() {
 document.getElementById('cart-button').innerHTML = 'CART <span class="cart-star">*</span>';
}

function removeStarOnCart() {
  document.getElementById('cart-button').innerHTML = 'CART';
 }


// Displays shopping cart
document.getElementById('cart-button').addEventListener("click", function () {
  document.querySelector('.shopping-cart-display').style.display = 'block';
  document.querySelector('#cart-close-background').style.display = 'block';
  closeCartBackground();
});

// Close shopping cart
document.getElementById('close-cart').addEventListener("click", function () {
  document.querySelector('.shopping-cart-display').style.display = 'none';
  document.getElementById('cart-close-background').style.display = 'none';
});

// click background to close shopping cart screen
function closeCartBackground() {
  document.getElementById('cart-close-background').addEventListener("click", function () {
    document.querySelector('.shopping-cart-display').style.display = 'none';
    event.target.style.display = 'none';
});
}




// Add item button test
// $('#submit-btn').click(function(event) {
//   event.preventDefault();
//   var name = document.getElementById("product-name").dataset.name;
//   var price = document.getElementById("price").innerHTML;
//   var quantity = document.getElementById("quantity").value;
//   shoppingCart.addItemToCart(name, price, quantity);
//   // console.log(price)
//   // displayCart();
// });

function showSubmitButton() {
  document.getElementById('submit-btn').addEventListener("click", function (event) {
    event.preventDefault();
    var name = document.getElementById("product-name").dataset.name;
    var price = document.getElementById("price").innerHTML;
    var quantity = document.getElementById("quantity").value;
    shoppingCart.addItemToCart(name, price, quantity);
    console.log(price)
    // displayCart();
  });
}



function init() {
    getJsonData();
};

init();