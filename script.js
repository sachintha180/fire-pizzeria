document.addEventListener("DOMContentLoaded", (ready) => {

    // initialize an array for pizza data
    pizza_data = [
        {
            "title": "Classic Margherita",
            "alt": "Traditional Margherita Pizza with fresh tomatoes, mozzarella, and basil",
            "description": "Experience the timeless allure of our Margherita pizza, featuring a perfect harmony of fresh tomatoes, creamy mozzarella, and aromatic basil. A true Italian classic.",
            "src": "images/pizza_images/margherita.jpg",
            "attribution": "Photo by Abigail Lepp",
            "attribution-link": "https://www.flickr.com/photos/nwongpr/8561917865"
        },
        {
            "title": "Gourmet Truffle Delight",
            "alt": "Indulgent Truffle Delight Pizza featuring truffle-infused oil, wild mushrooms, and creamy truffle cream",
            "description": "Indulge in luxury with our Gourmet Truffle Delight, where truffle-infused oil, wild mushrooms, and decadent truffle cream come together for an exquisite flavor symphony.",
            "src": "images/pizza_images/truffle.jpg",
            "attribution": "Photo by Michele Ursino",
            "attribution-link": "https://www.flickr.com/photos/micurs/8128971823"
        },
        {
            "title": "Mediterranean Feast",
            "alt": "Vibrant Mediterranean Feast Pizza loaded with sun-kissed tomatoes, olives, feta, and fresh vegetables",
            "description": "Embark on a veggie delight with our Mediterranean Feast. Loaded with sun-kissed tomatoes, olives, feta, and a medley of fresh vegetables, it's a taste of the Mediterranean in every bite.",
            "src": "images/pizza_images/vege.jpg",
            "attribution": "Photo by Amarand Agas",
            "attribution-link": "https://www.flickr.com/photos/theamarand/3761702673"
        },
        {
            "title": "Spicy BBQ Chicken",
            "alt": "Savor the heat with Spicy BBQ Chicken Pizza, topped with succulent chicken, tangy barbecue sauce, and jalapeños",
            "description": "Ignite your taste buds with our Spicy BBQ Chicken Fusion. Succulent chicken, tangy barbecue sauce, red onions, and jalapeños create a perfect balance of heat and sweetness.",
            "src": "images/pizza_images/bbq.jpg",
            "attribution": "Photo by avlxyz (Alpha)",
            "attribution-link": "https://www.flickr.com/photos/avlxyz/132554707"
        }
    ]

    // iterate through pizza data array
    for (const pizza of pizza_data) {

        // initialize item div
        item = document.createElement("div")

        // initialize item title
        title = document.createElement("p")
        title.setAttribute("class", "title")
        title.innerHTML = pizza["title"]

        // initialize item image
        img = document.createElement("img")
        img.setAttribute("src", pizza["src"])
        img.setAttribute("alt", pizza["alt"])
        img.setAttribute("height", 200)

        // initialize item attribution
        attribution = document.createElement("a")
        attribution.setAttribute("class", "attribution")
        attribution.setAttribute("href", pizza["attribution-link"])
        attribution.innerHTML = pizza["attribution"]

        // initialize item description
        description = document.createElement("p")
        description.setAttribute("class", "description")
        description.innerHTML = pizza["description"]

        // add components to initialized div
        item.appendChild(title)
        item.appendChild(img)
        item.appendChild(attribution)
        item.appendChild(description)

        // add div to items container
        document.querySelector("#menu-items").appendChild(item)
    }
})