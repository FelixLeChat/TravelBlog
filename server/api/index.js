const express = require('express');
const cache = require('memory-cache');
const models = require('../data');
const utils = require('../utils/utils');

const minute = 60 * 1000;
const hour = minute * 60;
const day = hour * 24;

const router = express.Router();

// Get Destination details
router.get('/destination/:destination', (req, res) => {
  const destinationName = req.params.destination;
  const cacheKey = `destination_details_${destinationName}`;

  let result = cache.get(cacheKey);
  if (result) {
    // eslint-disable-next-line
    console.log(`Cache hit with : ${cacheKey}`);
    res.json(result);
  } else {
    const currentDestination = models.Destinations.find(x => x.name === destinationName);
    if (currentDestination != null) {
      const articles = models.Articles.filter(x => x.destination_id === currentDestination.id);
      const gallery = models.GalleryImages.filter(x => x.destination_id === currentDestination.id);
      result = {
        id: currentDestination.id,
        destination: currentDestination.name,
        description: currentDestination.description,
        hero: currentDestination.image,
        articles,
        images: gallery,
      };

      // set cache
      cache.put(cacheKey, result, 7 * day);

      // send result
      res.json(result);
    }
    res.status(404).send('Not found');
  }
});

// Get Article
router.get('/article/:article', (req, res) => {
  const articleSlug = req.params.article;
  const cacheKey = `article_${articleSlug}`;

  let result = cache.get(cacheKey);
  if (result) {
    // eslint-disable-next-line
    console.log(`Cache hit with : ${cacheKey}`);
    res.json(result);
  } else {
    const currentArticle = models.Articles.find(x => x.slug === articleSlug);
    if (currentArticle != null) {
      const relatedArticles = models.Articles.filter(x => x.destination_id === currentArticle.destination_id && x.id !== currentArticle.id);

      if (relatedArticles.length > 4) {
        const similarThemeArticles = models.Articles.filter(x => x.theme_id === currentArticle.theme_id && x.id !== currentArticle.id).slice(0, 4 - relatedArticles.length);
        result = {
          article: currentArticle,
          relatedArticles: relatedArticles.concat(similarThemeArticles),
        };

        // set cache
        cache.put(cacheKey, result, 7 * day);

        // send result
        res.json(result);
      } else {
        result = {
          article: currentArticle,
          relatedArticles,
        };

        // set cache
        cache.put(cacheKey, result, 7 * day);

        // send result
        res.json(result);
      }
    } else {
      res.status(404).send('Not found');
    }
  }
});

// Get home details
router.get('/home', (_req, res) => {
  const cacheKey = 'home_details';

  let result = cache.get(cacheKey);
  if (result) {
    // eslint-disable-next-line
    console.log(`Cache hit with : ${cacheKey}`);
    res.json(result);
  } else {
    const articles = models.Articles;
    if (articles.length > 0) {
      result = {
        articles,
      };

      // set cache
      cache.put(cacheKey, result, 7 * day);

      // send result
      res.json(result);
    } else {
      res.status(404).send('Not found');
    }
  }
});

// Get Themes
router.get('/themes', (req, res) => {
  const cacheKey = 'themes';

  let result = cache.get(cacheKey);
  if (result) {
    // eslint-disable-next-line
    console.log(`Cache hit with : ${cacheKey}`);
    res.json(result);
  } else {
    const themes = models.Themes;
    if (themes.length > 0) {
      result = {
        themes,
      };

      // set cache
      cache.put(cacheKey, result, 7 * day);

      // send result
      res.json(result);
    } else {
      res.status(404).send('Not found');
    }
  }
});

// Get Destinations
router.get('/destinations', (_req, res) => {
  const cacheKey = 'destinations';

  let result = cache.get(cacheKey);
  if (result) {
    // eslint-disable-next-line
    console.log(`Cache hit with : ${cacheKey}`);
    res.json(result);
  } else {
    const destinations = models.Destinations;
    if (destinations.length > 0) {
      result = {
        destinations,
      };

      // set cache
      cache.put(cacheKey, result, 7 * day);

      // send result
      res.json(result);
    } else {
      res.status(404).send('Not found');
    }
  }
});

// Get Gallery
router.get('/gallery', (req, res) => {
  const cacheKey = 'gallery';

  let result = cache.get(cacheKey);
  if (result) {
    // eslint-disable-next-line
    console.log(`Cache hit with : ${cacheKey}`);

    result.imageGallery = utils.getRandoms(result.imageGallery, 7);
    res.json(result);
  } else {
    const images = models.GalleryImages;
    if (images.length > 0) {
      result = {
        imageGallery: images,
      };

      // set cache
      cache.put(cacheKey, result, 7 * day);

      // send result
      result.imageGallery = utils.getRandoms(result.imageGallery, 7);
      res.json(result);
    } else {
      res.status(404).send('Not found');
    }
  }
});

module.exports = router;
