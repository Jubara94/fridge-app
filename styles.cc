:root {
    --avocado: #87A922;
    --tomato: #FF6347;
    --eggshell: #F5F5DC;
    --olive: #6B8E23;
    --black: #333;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--eggshell);
    color: var(--black);
    margin: 0;
    padding: 0;
  }
  
  .app-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  header h1 {
    color: var(--olive);
    font-size: 2.5rem;
    margin: 0;
  }
  
  header p {
    color: var(--tomato);
    font-size: 1.1rem;
  }
  
  .input-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .upload-box, .manual-input {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .upload-box h3, .manual-input h3 {
    margin-top: 0;
    color: var(--avocado);
  }
  
  .btn {
    background: var(--avocado);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
  }
  
  .btn-primary {
    background: var(--tomato);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    margin-top: 10px;
  }
  
  .ingredient-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 10px 0;
  }
  
  .tag {
    background: var(--olive);
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.9rem;
  }
  
  .recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .recipe-card {
    background: white;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .recipe-card img {
    width: 100%;
    border-radius: 8px;
  }
  
  .placeholder {
    text-align: center;
    padding: 40px;
    color: var(--olive);
  }
  
  footer {
    text-align: center;
    margin-top: 40px;
    color: var(--olive);
  }
  
  footer a {
    color: var(--tomato);
    text-decoration: none;
  }
  /* Add to styles.css */
.placeholder {
    text-align: center;
    padding: 40px;
    color: var(--olive);
  }
  
  .loading-spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top: 4px solid var(--tomato);
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Add to styles.css */
.btn-small {
    background: var(--olive);
    padding: 5px 10px;
    font-size: 0.8rem;
  }