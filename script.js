const paragraf = document.querySelector('.p');
const list = document.querySelector('.l');

paragraf.addEventListener('click', function() {
    const tagP = document.querySelector('.pp');
    tagP.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam dicta ipsum possimus nisi illo earum quaerat illum blanditiis, ad dolorem deserunt! Harum itaque sint neque necessitatibus debitis optio nobis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam vero assumenda laborum mollitia odit, inventore consectetur veritatis laudantium provident necessitatibus unde quis sapiente aliquam reiciendis sed nobis architecto, dicta ipsum!';
});

list.addEventListener('click', function() {
    const tagList = document.querySelector('.ll');
    tagList.innerHTML = '<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, quidem!</li><li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolor!</li><li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, libero.</li><li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, laudantium!</li>'
});