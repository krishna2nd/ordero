const categories = [
	{
	  category: 'cafe',
	  title: "Cafe's",
	  icon: 'https://b.zmtcdn.com/images/search_tokens/app_icons/category_1.png',
	  image: "https://image.ibb.co/c8YJTG/unnamed_18.jpg",
	  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
	  items: []
	},
	{
	  category: 'non-veg',
	  title: "Non Veg",
	  icon:  'https://b.zmtcdn.com/images/search_tokens/app_icons/special_14.png',
	  image: "https://image.ibb.co/c8YJTG/unnamed_18.jpg",
	  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
	  items: []
	},
	{
	  category: 'veg',
	  title: "Vegetarion",
	  icon:  'https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png',
	  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
	  items: []
	},
	{
	  category: 'beverages',
	  title: "Beverages",
	  icon:  'https://b.zmtcdn.com/images/search_tokens/app_icons/category_3.png',
	  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
	  items: []
	},
	{
	  category: 'salad',
	  title: "Salad",
	  icon:  'https://b.zmtcdn.com/images/search_tokens/app_icons/category_9.png',
	  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
	  items: []
	},
	{
	  category: 'deserts',
	  title: "Sweets / Deserts",
	  icon:  'https://b.zmtcdn.com/images/search_tokens/app_icons/category_5.png',
	  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
	  items: []
	}];

const randomString = (length, chars) => {
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

const randomId = () => randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

function randomItem() {
	const cost =Math.floor(Math.random(500)*100);
	const tax = (cost * .16).toFixed(2);
	const sCharge = (cost * .08).toFixed(2);
	const price = (cost+(+tax)+(+sCharge)).toFixed(2);
	const objCategory = categories[Math.floor(Math.random(categories.length)*categories.length)]
	const item = {
		id: randomId(),
		category: objCategory.category,
		title: "Item name in detail log its some dummy",
		info: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,

		media: {
			cover: "http://drop.ndtv.com/albums/COOKS/corngallery/creolecorngallery.jpg",
			thumbs: [
				"http://drop.ndtv.com/albums/COOKS/corngallery/creolecorngallery.jpg",
				"http://drop.ndtv.com/albums/COOKS/corngallery/creolecorngallery.jpg",
				"http://drop.ndtv.com/albums/COOKS/corngallery/creolecorngallery.jpg"
			],
			large: [],
			video: []
		},
		recipie: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`,
		nutrition: [
						{calories: 'Saturated fat', quantity: 0, value: 0},
						{calories: 'Polyunsaturated fat', quantity: 0, value: 0},
						{calories: 'Monounsaturated fat', quantity: 0, value: 0},
						{calories: 'Cholesterol', quantity: 0, value: 0},
						{calories: 'Sodium', quantity: 0, value: 0},
						{calories: 'Potassium', quantity: 0, value: 0},
						{calories: 'Carbohydrate', quantity: 0, value: 0},
						{calories: 'Dietary fiber', quantity: 0, value: 0},
						{calories: 'Sugar', quantity: 0, value: 0},
						{calories: 'Vitamin A', quantity: 0, value: 0},
						{calories: 'Vitamin B-12', quantity: 0, value: 0},
						{calories: 'Protein', quantity: 0, value: 0},
						{calories: 'Vitamin B-6', quantity: 0, value: 0},
						{calories: 'Vitamin C', quantity: 0, value: 0},
						{calories: 'Iron', quantity: 0, value: 0},
						{calories: 'Magnesium', quantity: 0, value: 0}
					],
		like: Math.floor(Math.random(1000) * 1000),
		dislike: Math.floor(Math.random(100) * 100),
		price: price,
		priceTable: [
			{particulars: 'Item cost', price: `$ ${cost}`},
			{particulars: 'Tax', price: `$ ${tax}`},
			{particulars: 'Service charge', price: `$ ${sCharge}`},
			{particulars: '', price: `$ ${price}`},
		],
		offer: `OFF ${Math.floor((Math.random(25)*100))}%`
	};

	objCategory.items.push(item);
	return item;
}

const items = [];

for (let i = 0; i < 100; i++) {
	items.push(randomItem());
}

const order = {
	items: []
}

export  {
	items,
	categories,
	order
}