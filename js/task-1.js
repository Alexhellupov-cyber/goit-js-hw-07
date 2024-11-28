const categoriesList = document.querySelector('#categories');
const categoriesItem = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(item => {
    const category = item.querySelector('h2').textContent;
    const element = item.querySelectorAll('li').length;

    console.log(`Category: ${category}`);
    console.log(`Elements: ${element}`); 
});

