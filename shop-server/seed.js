const Product = require("./model//model.js");
const connect = require("./mongos/Connect.js");
connect();
const productData = [
  {
    title: "MEN'S BETTER THAN NAKED&trade; JACKET",
    description:
      "Zip front hooded faux leather, faux down filled jacket, with contrast collar, lining and trim",
    filename:
      "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
    price: 145.0,
    qty: 7,
  },
  {
    title: "WOMEN'S BETTER THAN NAKED&trade; JACKET",
    description: "Classic mid weight textured faux leather motorcycle jacket",
    filename:
      "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png",
    price: 150.0,
    qty: 5,
  },
  {
    title: "WOMEN'S SINGLE-TRACK SHOE",
    description:
      "Soft and supportive, these Reebok Princess shoes are perfect for all-day wear. The cushioned midsole protects feet, and the high-abrasion rubber outsole delivers traction. Available in wide sizing.Reebok was founded for one of the best reasons possible: athletes wanted to run faster. So in the 1890s, Joseph William Foster made some of the first known running shoes with spikes in them. By 1895, he was in business making shoes by hand for top runners; and before long his fledgling company, J.W. Foster and Sons, developed an international clientele of distinguished athletes",
    filename:
      "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png",
    price: 99.0,
    qty: 8,
  },
  {
    title: "Enduro Boa&reg; Hydration Pack",
    description:
      "Breathable and Lightweight Backpack: The hydration backpack is made of lightweight, breathable and quick-dry materials which make it the best choice for accompanying even in where heat and high humidity are a daily struggle. Adjustable shoulder and chest straps allow to secure the backpack to the body. And the reflective strips on the bag provide safety in the evening",
    filename:
      "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png",
    price: 22.0,
    qty: 2,
  },
  {
    title: "Brown eggs",
    type: "dairy",
    description: "Raw organic brown eggs in a basket",
    filename:
      "https://cdn.pixabay.com/photo/2019/03/16/23/08/egg-4059957_960_720.jpg",
    price: 28.01,
    qty: 4,
  },
  {
    title: "Sweet fresh stawberry",
    type: "fruit",
    description: "Sweet fresh stawberry on the wooden table",
    filename:
      "https://cdn.pixabay.com/photo/2014/02/07/04/13/strawberry-260687_960_720.jpg",
    price: 29.45,
    qty: 5,
  },
  {
    title: "Asparagus",
    type: "vegetable",
    description: "Asparagus with ham on the wooden table",
    filename:
      "https://cdn.pixabay.com/photo/2015/04/26/13/42/vegetable-740446_960_720.jpg",
    price: 18.95,
    qty: 3,
  },
  {
    title: "Green smoothie",
    type: "dairy",
    description:
      "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    filename:
      "https://cdn.pixabay.com/photo/2015/05/15/19/01/green-juice-769129_960_720.jpg",
    price: 17.68,
    qty: 4,
  },
  {
    title: "Raw legums",
    type: "vegetable",
    description: "Raw legums on the wooden table",
    filename:
      "https://cdn.pixabay.com/photo/2018/12/07/15/20/string-bean-3861864_960_720.jpg",
    price: 17.11,
    qty: 2,
  },
  {
    title: "Baking cake",
    type: "dairy",
    description:
      "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
    filename:
      "https://cdn.pixabay.com/photo/2014/08/25/15/32/cream-puffs-427181_960_720.jpg",
    price: 11.14,
    qty: 4,
  },
];

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productData);
    console.log("insersion success");
  } catch (error) {
    console.log(error.message);
  }
};

importData();
