fetch("https://randomuser.me/api/?results=9")
.then((res)=> res.json())
.then((data) => {
  data.results.forEach((user)=> {
    
const card = document.createElement('div');
card.className = 'max-w-sm mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden';

const paddingWrapper = document.createElement('div');
paddingWrapper.className = 'p-6';

const flexContainer = document.createElement('div');
flexContainer.className = 'flex items-center';

const img = document.createElement('img');
img.className = 'w-12 h-12 rounded-full';
img.src = user.picture.large; 
img.alt = 'User Avatar';

const textContainer = document.createElement('div');
textContainer.className = 'ml-4';

const name = document.createElement('h2');
name.className = 'text-xl font-semibold text-white';
name.textContent = user.name.first+ " " + user.name.last; // Use the user's name from the API response

const role = document.createElement('p');
role.className = 'text-gray-300';
role.textContent = 'Software Engineer';

textContainer.appendChild(name);
textContainer.appendChild(role);

flexContainer.appendChild(img);
flexContainer.appendChild(textContainer);

paddingWrapper.appendChild(flexContainer);

card.appendChild(paddingWrapper);

document.querySelector(".user-cards").appendChild(card);
  })
});