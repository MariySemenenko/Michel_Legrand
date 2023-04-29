// const container = document.querySelector('.container');
// console.log(container.dataset.type);

const main = document.querySelector('#main');

//create element

const title = document.createElement('h1');
const figure = document.createElement('figure');
const img = document.createElement('img');
const figcaption = document.createElement('figcaption');
//add atribute

title.id = 'title';
figure.id = "img-div";
img.id = 'image';
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_YAZhHYXgSpy4IjimjTG2zg3H9SxaiEp8iQ&usqp=CAU';
img.alt = 'Michel Legrand conduction his orcherstra!';
figcaption.id = "img-caption";
//add text content

title.textContent = '-Michel Legrand-';
figcaption.textContent = 'Michel Legrand conduction his orcherstra!';
//insert to page

main.append(title);
main.append(figure);
figure.append(img);
figure.append(figcaption);
//-----------------------------------
const article = `
<article id="tribute-info">
            <div id="intro">
                <p>&bull;Michel Legrand (1932 2019) was is a famous French musicant&bull;</p>
            </div>
                <p><u>Here are some major facts about him:</u></p>
                <ul>
                    
                </ul>
                <blockquote id="quote">
                    <p> Alan Bergman would recall that after Michel Legrand had written eight melodies which were somehow not viable for the film, Marilyn Bergman suggested the opening line "What are you doing the rest of your life?", and Legrand then completed the song's melody based on that phrase. </p>
                    <cite>-Michel Legrand-</cite>
                </blockquote>
                <hr>
                <p>To find more about him on <a id="tribute-link" href="https://en.wikipedia.org/wiki/What_Are_You_Doing_the_Rest_of_Your_Life%3F" target="_blank">wikipedia</a></p>

        </article>`;

        //innerHTML видаляє усі попередні данні перед тим як вставити нові
        // main.innerHTML = article;
        main.insertAdjacentHTML('beforeend', article);


        //li вставляємо через reduce
        const items = [
            'Hi born 24 th, 1932.',
            'Three-time &egrave; Oscar-winning composer, songwriter and pianist Michel Legrand died Saturday at his home in France.',
            'He was 86.',
            'The conservatory-trained musician worked across genres but was best known as a prolific composer of film scores, including .',
            'Windmills of Your Mind and I Will Wait For You.',
 ];
 const createList = (items) => 
     items.reduce((acc, item) => acc + `<li>${item}</li>`, '');
     //достукуємось до  ul

     const list = document.querySelector('ul');
     list.insertAdjacentHTML('beforeend', createList(items));
     console.log(createList(items));
 
