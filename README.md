1-install dependencies with npm install
2-install axios with npm install axios
3-install react-int with npm install react-intl --save
4- Run the backend with npm run and in the main.ts add the app.enableCors(); line in order to enable the connection
5- Change the port of the banckend to 8000 in the main.ts file
5- Run the frontend with npm run

Routes are found in the App.js file
Login page is in /login
Book cards are shown in the /libreria route

Solution

The main pages are in the pages folder, where Login and Libreria are the principal or the parent components. Libreria 
uses an state to save the information coming form the backend using axios, whose job is to bring all information from 
the backend in res.data, and finally passing it to the libros state with setLibros function.
Then, in the return, I put a parent container and then two child containers. The left container is for putting the cards, and the right container is to put the detail of the card once it is clicked on it. With libros.map, I loop all the books this variable has from the backend. In components, LibreriaCard is the child of Libreria, and there I pass all the props from Libreria and put it into a card for them to display. I put some styles of css and the cards are shown. For the detail when a card is clicked, I use the function handleClick and the state selected,useSelected. When a card is clicked, using axios I bring the data from the backend and put it into the setSelected state with the corresponding id, that is going to change depending of the selected card.

For the login page, there is the Login page and two other components named input and button. For the login,I use states for the user, password and for errors. Then I use a validate function, and use the state variables to verify the inputs from the user. I use the sendData function to send to the backend a Post to verify the user and password. In the return I
call the input and botton components to renderize them in the main login page. The register page is not done, but I put it to make it look more as a register page.

All the page is localized and for it I used the locales folder in two languages. English and Spanish. All the words that were "quemadas" are in both languages. 


Jairo Nicolás Gómez - 202020414
