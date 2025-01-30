const markAll = document.querySelector('#mark-all');
const numberElement = document.querySelector('#number');
const posts = document.querySelectorAll('.post');
const updateNotifications =  () => {
    const notReadElementsActual = document.querySelectorAll('.not-read');
    numberElement.innerText = notReadElementsActual.length;
}
posts.forEach(post => {
    post.addEventListener('click', () => {
        post.querySelector('.status').classList.remove('not-read');
        updateNotifications()
        })
    })
markAll.addEventListener('click', () => {
   const notReadElements = document.querySelectorAll('.not-read')
   console.log(notReadElements.length)
   notReadElements.forEach(element => {
      element.classList.remove('not-read')
   })
   updateNotifications()


}) 

