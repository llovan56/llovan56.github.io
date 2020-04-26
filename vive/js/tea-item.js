var jsonData = "teas.json",
    imageLink = "images/ancient-happiness.jpg";

    var shoppingCart = (function() {
        // =============================
        // Private methods and propeties
        // =============================
        cart = [];
        
        // Constructor
        function Item(name, price, count) {
          this.name = name;
          this.price = price;
          this.count = count;
        }
    });

// changes tea name
function changeTeaName() {
    document.getElementById("ancient-happiness-name").innerHTML = "Paragraph changed!";
}

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
        +"<h1 class='serif product-name'>" + data[i].name + "</h1>"
        +"<p>" + data[i].description + "</p>"
        +"<label class='container'><p>" + data[i].priceA + "</p>"
        +"<input type='checkbox'>"
        +"<span class='checkmark'></span></label>"
        +"<label class='container'><p>" + data[i].priceB + "</p>"
        +"<input type='checkbox'>"
        +"<span class='checkmark'></span>"
        +"</label>"
        +"<label class='container'><p>" + data[i].priceC + "</p>"
        +"<input type='checkbox'>"
        +"<span class='checkmark'></span>"
        +"</label>"
        +"<button type='button' class='btn btn-warning'>Buy Now</button>"
        +"</div></div></div></div>"
        }
    }
    document.getElementById("selected-item").innerHTML = output;
    closeButton();
    closeBackground();
    document.getElementById("close-background").style.display = 'block';
}

function changeTeaImage(data) {
    var _idNumber = JSON.parse(idNumber);
    console.log(idNumber);

    for (var i =0; i < data.length; i++) {
        imageLink = data[i].imgUrl;
        // console.log(imageLink);
    }
    document.querySelector(".product-image").src = imageLink;
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
                  displayItem(data, targetElement)
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
    // Private methods and propeties
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
    }
    
      // Load cart
    function loadCart() {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
      loadCart();
    }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to cart
    obj.addItemToCart = function(name, price, count) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count ++;
          saveCart();
          return;
        }
      }
      var item = new Item(name, price, count);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function(name, count) {
      for(var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(name) {
        for(var item in cart) {
          if(cart[item].name === name) {
            cart[item].count --;
            if(cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart.splice(item, 1);
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
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
  
    // Total cart
    obj.totalCart = function() {
      var totalCart = 0;
      for(var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    }
  
    // List cart
    obj.listCart = function() {
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

// Add item
$('.add-to-cart').click(function(event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    // displayCart();
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
        +  "</tr>";
    }
    console.log(cartArray[i]);
    console.log('added');
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }

function init() {
    // changeTeaName();
    getJsonData();
};

init();