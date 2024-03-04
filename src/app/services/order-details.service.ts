import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"special kitfo",
      foodDetails:"Ethiopian kitfo made with different spices and fresh butter, along with gomen ayib as side dishes",
      foodPrice:200,
      foodImg:"https://www.tastingtable.com/img/gallery/flavorful-clarified-butter-is-the-key-that-makes-ethiopian-kitfo-unique/l-intro-1681224668.jpg"
    },
    {
      id:2,
      foodName:"kitfo combo",
      foodDetails:"kitfo,shiro,gomen,curd,meat stew,grilled meat and pea stew with out chillie powder",
      foodPrice:369,
      foodImg:"https://th.bing.com/th/id/R.71567d14b2b16e40bc0605c50f82f68a?rik=6175i53L6plVnw&pid=ImgRaw&r=0"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"panner",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"peperoni pizza",
      foodDetails:"peperoni pizza with extra cheese and olives",
      foodPrice:140,
      foodImg:"https://th.bing.com/th/id/OIP.8txKO_QDRc2V2bEZqSXSWAHaGH?w=700&h=578&rs=1&pid=ImgDetMain"
    },
    {
      id:5,
      foodName:"cheesy grean bean casarole",
      foodDetails:"Green Bean Casserole with extra cheese",
      foodPrice:105,
      foodImg:"https://handletheheat.com/wp-content/uploads/2018/11/best-green-bean-casserole-SQUARE-1536x1536.jpg"
    },
    {
      id:6,
      foodName:"club sandwich",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://th.bing.com/th/id/R.878b71f86dcf6b9005fa1c4424c9a86c?rik=AvaCqHqZpP68AQ&riu=http%3a%2f%2flife-in-the-lofthouse.com%2fwp-content%2fuploads%2f2014%2f06%2fclub-sandwiches-dixe-ultra-.jpg&ehk=%2fW5%2bBWvU1YG%2fPQOTG6PjyKN5BH3JIuz57S7KpuzK%2fF0%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      id:7,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:8,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:9,
      foodName:"special",
      foodDetails:"panner",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:10,
      foodName:"kitfo",
      foodDetails:"Ethiopian kitfo made with different spices and fresh butter",
      foodPrice:140,
      foodImg:"https://th.bing.com/th/id/OIP.2sEm5yhrkKk8U2x1cH68SAHaFj?rs=1&pid=ImgDetMain"
    },
    {
      id:11,
      foodName:"kikil",
      foodDetails:"ethiopian traditional kikil with lamb meat",
      foodPrice:105,
      foodImg:"https://4.bp.blogspot.com/-1bV1Wvye-p8/UO8r_bhYPsI/AAAAAAAADXw/xnACqRR-io8/s640/9156243.jpg"
    },
    {
      id:12,
      foodName:"Ethiopian doro wat",
      foodDetails:"Ethiopian doro wat with eggs and chicken legs",
      foodPrice:419,
      foodImg:"https://photos.smugmug.com/Africa/Eritrea/Asmara/i-JQbn78M/0/35cd7948/L/Canva%20-%20Ethiopian%20Doro%20Wot-min-L.jpg"
    }

  ]


  

}
