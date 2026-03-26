import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Array "mo:core/Array";

actor {
  public type Category = {
    id : Text;
    name : Text;
    emoji : Text;
  };

  public type Product = {
    id : Nat;
    categoryId : Text;
    name : Text;
    price : Nat; // price in paise
    unit : Text;
    imageUrl : Text;
  };

  let categories : [Category] = [
    {
      id = "grocery";
      name = "Grocery Staples";
      emoji = "🥖";
    },
    {
      id = "snacks";
      name = "Snacks & Packaged Food";
      emoji = "🍪";
    },
    {
      id = "beverages";
      name = "Beverages";
      emoji = "🥤";
    },
    {
      id = "personalcare";
      name = "Personal Care";
      emoji = "🧴";
    },
    {
      id = "household";
      name = "Household Items";
      emoji = "🏠";
    },
  ];

  let products : [Product] = [
    {
      id = 1;
      categoryId = "grocery";
      name = "Urban Basket Wheat Atta 1kg";
      price = 5500;
      unit = "1kg";
      imageUrl = "https://example.com/images/atta1kg.jpg";
    },
    {
      id = 2;
      categoryId = "snacks";
      name = "Lay's Chips Small";
      price = 1000;
      unit = "35g";
      imageUrl = "https://example.com/images/lays_small.jpg";
    },
    {
      id = 3;
      categoryId = "beverages";
      name = "Bisleri Water Bottle 1L";
      price = 2500;
      unit = "1L";
      imageUrl = "https://example.com/images/bisleri1l.jpg";
    },
    {
      id = 4;
      categoryId = "personalcare";
      name = "Colgate Toothpaste 100g";
      price = 4500;
      unit = "100g";
      imageUrl = "https://example.com/images/colgatetoothpaste.jpg";
    },
    {
      id = 5;
      categoryId = "household";
      name = "Lifebuoy Handwash 200ml";
      price = 6000;
      unit = "200ml";
      imageUrl = "https://example.com/images/lifebuoy.jpg";
    },
    {
      id = 6;
      categoryId = "grocery";
      name = "Fortune Basmati Rice 1kg";
      price = 7000;
      unit = "1kg";
      imageUrl = "https://example.com/images/basmati1kg.jpg";
    },
    {
      id = 7;
      categoryId = "snacks";
      name = "Monaco Biscuits";
      price = 1500;
      unit = "65g";
      imageUrl = "https://example.com/images/monaco.jpg";
    },
    {
      id = 8;
      categoryId = "beverages";
      name = "Frooti Mango Drink";
      price = 2000;
      unit = "1L";
      imageUrl = "https://example.com/images/frooti1l.jpg";
    },
    {
      id = 9;
      categoryId = "personalcare";
      name = "Dove Soap Bar";
      price = 3000;
      unit = "100g";
      imageUrl = "https://example.com/images/dovesoap.jpg";
    },
    {
      id = 10;
      categoryId = "household";
      name = "Vim Dishwash Bar";
      price = 2500;
      unit = "200g";
      imageUrl = "https://example.com/images/vimdish.jpg";
    },
    {
      id = 11;
      categoryId = "grocery";
      name = "Aashirvaad Salt 1kg";
      price = 2000;
      unit = "1kg";
      imageUrl = "https://example.com/images/salt1kg.jpg";
    },
    {
      id = 12;
      categoryId = "snacks";
      name = "Britannia Cake Rusk";
      price = 5000;
      unit = "150g";
      imageUrl = "https://example.com/images/cakerusk.jpg";
    },
    {
      id = 13;
      categoryId = "beverages";
      name = "Amul Taaza Milk";
      price = 4000;
      unit = "1L";
      imageUrl = "https://example.com/images/taaza.jpg";
    },
    {
      id = 14;
      categoryId = "personalcare";
      name = "Head & Shoulders Shampoo";
      price = 9000;
      unit = "180ml";
      imageUrl = "https://example.com/images/shampoo.jpg";
    },
    {
      id = 15;
      categoryId = "household";
      name = "Nirma Washing Powder";
      price = 6000;
      unit = "1kg";
      imageUrl = "https://example.com/images/nirma1kg.jpg";
    },
    {
      id = 16;
      categoryId = "grocery";
      name = "Tata Tea Premium";
      price = 5000;
      unit = "250g";
      imageUrl = "https://example.com/images/tatatea250g.jpg";
    },
    {
      id = 17;
      categoryId = "snacks";
      name = "Yummy Masala Namkeen";
      price = 2500;
      unit = "90g";
      imageUrl = "https://example.com/images/namkeen.jpg";
    },
    {
      id = 18;
      categoryId = "beverages";
      name = "Sprite Cold Drink";
      price = 4000;
      unit = "750ml";
      imageUrl = "https://example.com/images/sprite750ml.jpg";
    },
    {
      id = 19;
      categoryId = "personalcare";
      name = "Johnson's Baby Powder";
      price = 6000;
      unit = "100g";
      imageUrl = "https://example.com/images/babypowder.jpg";
    },
    {
      id = 20;
      categoryId = "household";
      name = "Harpic Toilet Cleaner";
      price = 7000;
      unit = "500ml";
      imageUrl = "https://example.com/images/harpic500ml.jpg";
    },
  ];

  public query ({ caller }) func getCategories() : async [Category] {
    categories;
  };

  public query ({ caller }) func getProducts() : async [Product] {
    products;
  };

  public query ({ caller }) func getProductsByCategory(categoryId : Text) : async [Product] {
    products.values().filter(func(p) { p.categoryId == categoryId }).toArray();
  };
};
