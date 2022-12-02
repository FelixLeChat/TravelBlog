import { getRandoms } from "../utils";

import models from './content';

export const getDestination = (destinationName: string) => {
  const currentDestination = models.Destinations.find(x => x.name === destinationName);
  if (currentDestination != null) {
    const articles = models.Articles.filter(x => x.destination_id === currentDestination.id);
    const gallery = models.GalleryImages.filter(x => x.destination_id === currentDestination.id);
    return {
      id: currentDestination.id,
      destination: currentDestination.name,
      description: currentDestination.description,
      hero: currentDestination.image,
      articles,
      images: gallery,
    };
  }

  return null;
}
  
export const getArticle = (articleSlug: string) => {
  const currentArticle = models.Articles.find(x => x.slug === articleSlug);
  if (currentArticle != null) {
    const relatedArticles = models.Articles.filter(x => x.destination_id === currentArticle.destination_id && x.id !== currentArticle.id);

    if (relatedArticles.length > 4) {
      const similarThemeArticles = models.Articles.filter(x => x.theme_id === currentArticle.theme_id && x.id !== currentArticle.id).slice(0, 4 - relatedArticles.length);
      return {
        article: currentArticle,
        relatedArticles: relatedArticles.concat(similarThemeArticles),
      };
    } else {
      return {
        article: currentArticle,
        relatedArticles,
      };
    }
  }
  return null;
}
  
export const getHomeDetails = () => {
  const articles = models.Articles;
  if (articles.length > 0) {
    return articles;
  }
  return null;
}
  
export const getThemes = () => {
  const themes = models.Themes;
  if (themes.length > 0) {
    return themes;
  }
  return null;
}
  
export const getDestinations = () => {
  const destinations = models.Destinations;
  if (destinations.length > 0) {
    return destinations;
  } 
  return null;
}
  
export const getGallery = () => {
  const images = models.GalleryImages;
  if (images.length > 0) {
    return getRandoms(images, 7);
  } 
  return null
}