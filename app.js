// Progression 1: create a function and fetch the api using axios
async function fetchAndDisplayNews() {
    try {
      const response = await axios.get('https://gnews.io/api/v4/top-headlines?token=6b19f51a6f2c45c5169a18cf905eb740&lang=en');
      
      // Check if the request was successful
      if (response.status === 200) {
        const articles = response.data.articles;
        const newsContainer = document.getElementById('news-container');
        
        // Iterate through each article and create HTML cards
        articles.forEach((article, index) => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          const title = document.createElement('div');
          title.classList.add('card-title');
          title.textContent = article.title;
  
          const source = document.createElement('div');
          source.classList.add('card-source');
          source.textContent = `Source: ${article.source.name}`;
  
          const publishedAt = document.createElement('div');
          publishedAt.textContent = `Published At: ${article.publishedAt}`;
  
          const description = document.createElement('div');
          description.textContent = `Description: ${article.description}`;
  
          const url = document.createElement('a');
          url.href = article.url;
          url.textContent = 'Read more';
  
          const image = document.createElement('img');
          image.classList.add('card-img');
          image.src = article.image;
  
          card.appendChild(title);
          card.appendChild(source);
          card.appendChild(publishedAt);
          card.appendChild(description);
          card.appendChild(image);
          card.appendChild(url);
  
          newsContainer.appendChild(card);
        });
      } else {
        console.log('Failed to fetch news.');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }
  // Call the function to fetch and display news
  fetchAndDisplayNews();

  document.getElementById('article-search').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const articles = document.querySelectorAll('.card-title');
  
    articles.forEach(article => {
      const title = article.textContent.toLowerCase();
      if (title.includes(searchQuery)) {
        article.parentElement.style.display = 'block'; // Show matching articles
      } else {
        article.parentElement.style.display = 'none'; // Hide non-matching articles
      }
    });
  });
  