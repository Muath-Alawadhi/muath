/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var photos;


photos = ['https://sm.ign.com/t/ign_in/photo/b/best-anime/best-anime-series-on-netflix-right-now-june-2022_1ym8.1280.jpg', 'https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2022/06/10/5276d02e-5217-4f55-91a2-7d60186a6038_162e016e.jpg?itok=Ix2IN-4F&v=1654844323', 'https://img4.hulu.com/user/v3/artwork/c7a08df6-d0d5-4dd3-afff-d1f90133cd4e?base_image_bucket_name=image_manager&base_image=31f90904-d759-496c-82e2-b4c9c145f36a&size=1200x630&format=jpeg'];


document.getElementById('next').addEventListener('click', (event) => {
  let element_images = document.getElementById('images');
  element_images.setAttribute("src", photos.shift());
  photos.push(photos[0]);

});

document.getElementById('back').addEventListener('click', (event) => {
  let element_images2 = document.getElementById('images');
  element_images2.setAttribute("src", photos.pop());
  photos.unshift(photos.slice(-1)[0]);

});
