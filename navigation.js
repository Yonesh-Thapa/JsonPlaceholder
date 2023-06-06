// navigation.js

// Define the navigation items
const navigationItems = [
    { label: 'Home', url: 'index.html' },
    { label: 'TO DO', url: 'todo.html' },
    { label: 'Users', url: 'users.html' },
  ];
  
  // Function to generate the navigation bar
  function generateNavigationBar() {
    const navContainer = document.createElement('nav');
    
    navigationItems.forEach(item => {
      const link = document.createElement('a');
      link.href = item.url;
      link.textContent = item.label;
      navContainer.appendChild(link);
    });
  
    return navContainer;
  }
  
  // Insert the navigation bar into the document
  window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const nav = generateNavigationBar();
    body.insertBefore(nav, body.firstChild);
  });
  