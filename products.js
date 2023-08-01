const items = [{
    img: 'images/OnePlusNordBudsCETrulyWireless.jpg',
    name: 'OnePlus Nord Buds CE Truly Wireless',
    disp: '2,299.00',
    cost:2299,
    quantity:0
},
{
    img: 'images/AmericanTouristerBLACKLaptopBackpack.jpg',
    name: 'American Tourister Black Laptop Backpack',
    disp: '1,299.00',
    cost:1299,
    quantity:0
},
{
    img: 'images/OnePlusNordCE.jpg',
    name: 'OnePlus Nord CE',
    disp: '19,999.00',
    cost:19999,
    quantity:0
},
{
    img: 'images/FireBoltNinjaSmartWatch.jpg',
    name: 'FireBolt Ninja Smart Watch',
    disp: '1,299.00',
    cost:1299,
    quantity:0
},
{
    img: 'images/MI80cm(32inches).jpg',
    name: 'MI 80cm (32inches)',
    disp: '13,999.00',
    cost:13999,
    quantity:0
    
},
{
    img: 'images/boatairdopes.jpg',
    name: 'Boat Airdopes',
    disp: '1,399.00',
    cost:1399,
    quantity:0
}
,
{
    
    img: 'images/GrandTheftAutoV.jpg',
    name: 'Grand Theft Auto V',
    disp: '1,699.00',
    cost:1699,
    quantity:0
    
}
,
{
    
    img: 'images/MIPowerBank3i20000mAh.jpg',
    name: 'MI Power Bank 20000mAh',
    disp: '2,199.00',
    cost:2199,
    quantity:0
    
}
,
{
    img: 'images/iQOOZ6Lite5G.jpg',
    name: 'iQOO Z6 Lite 5G',
    disp: '14,499.00',
    cost:14499,
    quantity:0
},
{
    img: 'images/boAtRockerz450BluetoothHeadphones.jpg',
    name: 'boAt Rockerz 450 Bluetooth Headphones',
    disp: '1,499.00',
    cost:1499,
    quantity:0
}
,
{
    img: 'images/EchoDot(3rdGen).jpg',
    name: 'Echo Dot (3rd Gen)',
    disp: '2,999.00',
    cost:2999,
    quantity:0
}
,
{
    img: 'images/FireTVStick4KMax.jpg',
    name: 'Fire TV Stick 4K Max',
    disp: '6,499.00',
    cost:6499,
    quantity:0
},
{
    img: 'images/OnePlus108cm(43inches).jpg',
    name: 'OnePlus 108cm (43inches)',
    disp: '24,999.00',
    cost:24999,
    quantity:0   
}
,
{
    img: 'images/LogitechB170WirelessMouse.jpg',
    name: 'Logitech B170 Wireless Mouse',
    disp: '495.00',
    cost:495,
    quantity:0
    
},
{
    img: 'images/NoiseBluetoothCallingSmartWatch.jpg',
    name: 'Noise Bluetooth Calling Smart Watch',
    disp: '1,499.00',
    cost:1499,
    quantity:0
}
,
{
    img: 'images/SamsungOriginal25WType-CFastCharger.jpg',
    name: 'Samsung Original 25W Type-C Fast Charger',
    disp: '1,299.00',
    cost:1299,
    quantity:0
}
// ,
// {
//     img: 'images/OnePlus Nord CE.jpg',
//     name: 'OnePlus Nord CE',
//     cost: '19,999'
// },
// {
//     img: 'images/OnePlus Nord CE.jpg',
//     name: 'OnePlus Nord CE',
//     cost: '19,999'
// },
// {
//     img: 'images/OnePlus Nord CE.jpg',
//     name: 'OnePlus Nord CE',
//     cost: '19,999'
// }
];

let html = '';

items.forEach((i)=>{
    html += `<div class="grid-item">
    <img src= ${i.img} alt=${i.name}>
    <div class="item-name">${i.name}</div>
    <div class="cost">₹${i.disp}</div>
    <select name="no-of-items" id="num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
    </select>
    <button class="btn btn-warning cart-btn">Add to Cart</button>
</div>`;
});

document.querySelector('.grid-container').innerHTML = html;

let select = document.querySelectorAll('select');

let quantity=0;
let cart = [];
let cart_html = '';


let x = document.querySelectorAll('.cart-btn');
let y = Array.from(x);
for (const i in y) {
    y[i].addEventListener('click',()=>{
        let cart_item = items[i];
        let check = 0;
        let item_id;

        if(cart.length == 0)
        {
                cart_item.quantity = Number.parseInt(select[i].value);
                cart.push(cart_item);
        }
        else{
            cart.forEach((val)=>{
                if(cart_item.name == val.name)
                {
                    // val.quantity += Number.parseInt(select[i].value);
                    check=1; 
                    item_id = val.id;
                }
                
            });

            if(check)
            {
                cart.forEach((val)=>{
                    if(item_id == val.id)
                    {
                        val.quantity += Number.parseInt(select[i].value);
                    }
                });
            }
            else{
                    cart_item.quantity = Number.parseInt(select[i].value);
                    cart.push(cart_item);
                }
        }
        
        let total_quantity = 0;
        for (const i of cart) {
            total_quantity += i.quantity;
        }
        quantity = total_quantity;
    
        document.querySelector('.quantity').innerHTML = total_quantity;
        
    });
}





document.querySelector('.cart-hover').addEventListener('click',()=>{
    // document.querySelector('items-container').innerHTML = cart_html;

    // <select name="Qty" id="Qty">
                //     <option value="1">1</option>
                //     <option value="2">2</option>
                //     <option value="3">3</option>
                //     <option value="4">4</option>
                //     <option value="5">5</option>
                //     <option value="6">6</option>
                //     <option value="7">7</option>
                //     <option value="8">8</option>
                //     <option value="9">9</option>
                //     <option value="10">10</option>
                // </select>

    let total_cost =0;
    let cart_page_html = '';
    cart.forEach((i)=>{
        cart_html += `<div class="item">
        <img src=${i.img} alt="item-image" class = "cart-item-img">
        <div class="item-content">
            <div class="cart-item-name">${i.name}</div>
            <h2>₹${i.disp}</h2>
            <div class="qty">
                <span>Quantity : ${i.quantity}</span>
            </div>
        </div>
    </div>`;
    total_cost += Number.parseInt(i.cost);
    });
    
    cart_page_html = `<div class="cart-page">
    <div class="shopping-cart">
        <h1>Shopping Cart</h1>
        <div class="items-container">
            ${cart_html}
        </div>
    </div>
    <div class="subtotal">
        <div id="free-delivery"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(8,126,99)" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg> Your Order is eligible for FREE Delivery.
        </div>
        <div class="cost-disp">Subtotal (${quantity} items):₹<strong>${total_cost}.00</strong></div>
        <div class="checkbox"><input type="checkbox" id="checkbox" name="checkbox"><label for="checkbox">This order contains a gift</label></div>
        <button class="place-order">Place order</button>
        
    </div>
    
</div>`;
document.querySelector('body').classList.add('cart-body');
document.querySelector('body').innerHTML = cart_page_html;

});

// document.querySelector(".back").addEventListener('click',()=>{
//     let prev_page = `<div class="bar">
//     <img class="logo" src="images/amazon-logo.png" alt="logo">
//     <div class="search-bar">
//         <input class="search" type="search" placeholder="Search Amazon.in">
//         <button class="btn btn-warning search-btn">
//             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
//               </svg>
//         </button>
//     </div>
//     <div class="returns-orders">
//             <div class="returns">Returns</div> <div class="orders"><strong>& Orders</strong></div>
//     </div>
//     <div class="cart">
        
//             <div class="quantity">0</div>
//             <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
//                 <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
//             </svg>
//         <span style="position: absolute; bottom: 0.4rem;"><strong>Cart</strong></span>
//     </div>
// </div>

// <div class="grid-container">
//    ${html}
// </div>`;

// document.querySelector('.x').innerHTML = prev_page;
// document.querySelector('.back').classList.add('hide');
// document.querySelector('.back').classList.remove('show');

// });

