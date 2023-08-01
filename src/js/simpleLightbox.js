import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';

 function simpleLightbox() {
  let gallery = new SimpleLightbox('.gallery a',
    {
      fadeSpeed: 300,
      animationSpeed: 250,
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
    });
}



export {simpleLightbox};