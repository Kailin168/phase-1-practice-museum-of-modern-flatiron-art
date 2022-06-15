let ticketBoughtCount = 0;

fetch('http://localhost:3000/current-exhibits')
  .then((res) => res.json())
  .then((data) => {
    const exhibitTitle = document.querySelector('#exhibit-title');
    const exhibitDescription = document.querySelector('#exhibit-description');
    const exhibitImage = document.querySelector('#exhibit-image');
    const commentForm = document.querySelector('#comment-form');
    // const commentContainers = document.querySelector('.comments-container');
    const commentSection = document.querySelector('#comments-section');
    const buyButton = document.querySelector('#buy-tickets-button');
    const ticketBought = document.querySelector('#tickets-bought');

    exhibitImage.src = data[0].image;
    exhibitTitle.textContent = data[0].title;
    exhibitDescription.textContent = data[0].description;
    ticketBought.textContent = `${data[0].tickets_bought} Tickets Bought`;
    ticketBoughtCount = data[0].tickets_bought;

    // commentContainers.textContent = data[0].comments;

    data[0].comments.forEach((comment) => {
      const commentDiv = document.createElement('div');
      commentDiv.textContent = comment;
      commentDiv.style.margin = '10px 0px';
      commentSection.appendChild(commentDiv);
    });

    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const inputBox = event.target['comment-input'];
      // const inputBox = document.getElementsByTagName('input')[0];
      const newDiv = document.createElement('div');
      newDiv.textContent = inputBox.value;
      newDiv.style.margin = '10px 0px';
      commentSection.append(newDiv);
      commentForm.reset();
    });

    buyButton.addEventListener('click', (event) => {
      ticketBoughtCount += 1;
      ticketBought.textContent = `${ticketBoughtCount} Tickets Bought`;
    });
  });
