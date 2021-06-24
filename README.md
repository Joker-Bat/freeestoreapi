# Free E-Store API

[Free E-Store API](https://freeestoreapi.herokuapp.com/) is a free and open source API where you can get list of products data in JSON format to practice your front end skills when you decided to build a E-Commerce project.

## Why?

#### Not interested in story just skip this 😅

When i learned some basics in frontend, then i decided to make a project. So i searched on internet like all. Top projects to practice frontend skills, and get hired? most of the results suggest to make a E-Commerce website. The hard thing about it, when you decided to build a basic E-Commerce website is to collect all the data and images. so i decided to share this simple data to practice your skills without spending much time on collecting data.

## What i can do?

Here all routes are GET request only, so simple make a GET request to the route and you will get a response in a JSON format.

## Get all products

```
https://freeestoreapi.herokuapp.com/api/v1/products
```

The above request will give you all requests with all fields.

# Important Note !!!

In the response you'll get array of images as string, when using it in a src attribute of img tag you should use it like below

> ex: you get a image as "test.webp"

```html
<img
  src="https://freeestoreapi.herokuapp.com/images/products/test.webp"
  alt="test"
/>
```

## Tip !!!

Set a base url in head of the HTML as `<base href="https://freeestoreapi.herokuapp.com" />` and use only `/images/products/test.webp` in src attribute of img tag.

## For More

For more details about available routes and its response please check it out in the official documentation [Free E-Store API](https://freeestoreapi.herokuapp.com/docs)

## Want to contribute

Since it is an open source if you find any bug or willing to make it better, then fork this project and make changes and make a pull request then i'll consider your request and respond to you.

## Is it worth the time i spend to build it?

If you find it useful then give a ⭐ and share it with your friends.
