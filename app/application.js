$(document).ready(function() {
    // Add item to cart
    $(document).on('click', '.cancel-item', function() {
        $(this).parent().parent().remove();
        updateTotalPrice();
    });

    $(document).on('input', '.quantity-input', function() {
        updateItemTotal($(this));
        // updateTotalPrice();
    });

    // TODO:
    // changing item cost should also trigger updateItemTotal

    $('#add-item').click(function() {
        addItemToCart();
        // updateTotalPrice();
    });

    $('#calculate-prices').click(function() {
        updateTotalPrice();
        totalBudget();
    });

    function addItemToCart() {
        $('#cart-body').append(`
            <tr>
                <td><input type="text" class="form-control item-name" value="Add Item Here"></td>
                <td><input type="number" class="form-control item-cost" value="0"></td>
                <td><input type="number" class="form-control  quantity-input" value="0"></td>
                <td><button class="btn btn-outline-danger active cancel-item">Cancel</button></td>
                <td class="item-total">0</td>
            </tr>
        `);
    }
    
    
    //let fooTd = $('td.item-total');
    //console.log(fooTd.length);

    function updateItemTotal(inputElement) {
        console.log(inputElement)
        const quantity = Number(inputElement.val());
        const cost = Number(inputElement.parent().prev().find('.item-cost').val());
<<<<<<< HEAD
        const total = quantity * cost;
=======
        const total = (quantity * cost).toFixed(2); //round total to 2 decimals
>>>>>>> develop
        inputElement.parent().next().next().text(total);
        console.log(quantity);
        console.log(cost);
        console.log(total);
        
    }

    function updateTotalPrice() {
        console.log("Updating total price...");
        let totalPrice = 0;
        $('.item-total').each(function() {
            console.log($(this).text());
            totalPrice += Number($(this).text());
        });
        totalPrice = totalPrice.toFixed(2); //round the totalPrice to 2 dec1mals
        console.log("Total price:", totalPrice);
        $('#total-price').text(totalPrice);
    }

    function totalBudget(ele) {
        const shopBudget = parseFloat($(ele).children('.shopping-budget input').val());
        console.log("Shopping Budget: " + shopBudget);
        $(ele).children('#test').html(shopBudget);
        
    }

    
});