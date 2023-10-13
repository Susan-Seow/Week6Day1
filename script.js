$(document).ready(function() {
   
    const storeItems = [
        {
            name: 'TV',
            price: 800.00,
            inStock: true,
            details: '4K Ultra HD'
        },
        {
            name: 'Phone',
            price: 700.00,
            inStock: false,
            details: '5G'
        },
        {
            name: 'Game Console',
            price: 300.00,
            inStock: true,
            details: 'The latest and greatest'
        },
        {
            name: 'Laptop',
            price: 1200.00,
            inStock: true,
            details: '16GB RAM 1TB SSD'
        },
        {
            name: 'Smart Watch',
            price: 200.00,
            inStock: false,
            details: 'Counts your steps'
        },
        {
            name: 'Headphones',
            price: 100.00,
            inStock: true,
            details: 'Clearest music to be heard'
        },
        {
            name: 'Keyboard',
            price: 100.00,
            inStock: true,
            details: 'Types for you'
        },
        {
            name: 'HDMI Cord',
            price: 100.00,
            inStock: true,
            details: 'HDMI to USB type C'
        },
        {
            name: 'Monitor',
            price: 300.00,
            inStock: true,
            details: '4K Ultra HD'
        },
        {
            name: 'Speaker',
            price: 200.00,
            inStock: true,
            details: 'Clearest music to be heard'
        },
        {
            name: 'Video Game',
            price: 60.00,
            inStock: true,
            details: 'Enjoy for hours'
        },
    ];
    function createProductCard(product) {
        return `
            <div class="product-card">
                <div class = "product info">
                <h2>${product.name}</h2>
                <p>Price: $${product.price.toFixed(2)}</p>
                <p>${product.details}</p>
            </div>
           <p>${product.inStock ? 'In Stock' : 'Out of Stock'}</p>
        `;
    }                           
       // Function to display products on the webpage
    function displayProducts() {
        const $productList = $('#product-list');
            $productList.empty();

        //Filter out of stock items
        const inStockItems = storeItems.filter(function(product) {
            return product.inStock;
        })

        // Create and append product cards for in stock items
        inStockItems.forEach(function(product) {
            $productList.append(createProductCard(product));
        });
    }
       displayProducts();

    // Handle the Dark Mode Click event
    $('#clickMe').click(function() {
        $('#contentContainer').toggleClass('darkMode');
        $('product-card').toggleClass('dark-mode');
        $('.product-card').toggleClass('dark-mode');

        if ($('style#darkModeStyles').length === 0) {
            const darkModeStyles = `
                .dark-mode {
                    background-color: #333;
                    color: #fff;
                }
                #product-list.dark-mode {
                    background-color: #dark-grey;
                    color: #fff;
                }
                #contentContainer.dark-mode {
                    background-color: #black;
                    color: #fff;
                }
                #body.dark-mode {
                    background-color: black;
                }
            `;
            $('head').append(`<style id="darkModeStyles">${darkModeStyles}</style>`);
        }
    });
});