# HackRice X | First Timer's Track

## Track Description

Websites and webpages are the building blocks of the internet and currently, there exists a website for almost any entity in existence, so in light of recent events, our challenge for you is to create one to support social justice! In this track, your goal is to create a website/webpage related to social justice, we’ll leave the specifics of the purpose to your desire.

## Introduction

Welcome to HackRice X! This track is intended for teams in which a majority (at least 2) of members have little to no experience with software development. We'll help you get started by providing instructions on how to set up your environment and providing some basic code for you to expand on. If you have attended previous hackathons, you're still welcome to use the provided code, but you won't be eligible to compete in the First Timers Track.

In this track, you'll create a website related to (raising awareness of) social justice. You can create whatever in your opinion is going to support social justice (and racial equality). We're providing you with boiler plates, but feel free to build from scratch

## Tools Needed

You'll need a basic text editor - We recommend [VS Code](https://code.visualstudio.com) or any other text editor with a live server extension. 

## The Basics<sup>1</sup>

All websites, at their most basic, are just a bunch of files that are stored on a computer called a server. This server is connected to the internet. You can then load that website through a browser (like Chrome, Firefox, or Safari) on your computer or your phone.

### HTML
HTML, or HyperText Markup Language, is the foundation of all websites. It’s the main file type that is loaded in your browser when you look at a website. The HTML file contains all the content on the page, and it uses tags to denote different types of content. For example, you can use tags to create headline titles, paragraphs, bulleted lists, images, and so on. HTML tags by themselves do have some styles attached, but they are pretty basic, like what you would see in a Word document.

### CSS
CSS, or Cascading Style Sheets, lets you style that HTML content so it looks nice and fancy. You can add colors, custom fonts, and layout the elements of your website however you want them to look. You can even create animations and shapes with CSS! There is a lot of depth to CSS, and sometimes people tend to gloss over it so they can move on to things like JavaScript. However, I can’t overestimate the importance of understanding how to convert a design into a website layout using CSS. If you want to specialize in front-end, it’s essential to have really solid CSS skills.

### JavaScript
JavaScript is a programming language that was designed to run in the browser. Using JavaScript, you can make your website dynamic, meaning it will respond to different inputs from the user, or other sources. For example, you can build a “Back to Top” button that when the user clicks it, they’ll scroll back up to the top of the page. Or you can build a weather widget that will display today’s weather based on the user’s location in the world.

## Vue.js<sup>2</sup>

While you can definitely create a stunning website using only HTML, CSS, and JavaScript. We wanted to make things interesting by challenging you to learn a web development framework, Vue.js. Vue.js is a progressive JavaScript framework designed for building frontend user interfaces.

So, what is a JavaScript framework? At their most basic, JavaScript frameworks are collections of JavaScript code libraries (see below) that provide developers with pre-written JavaScript code to use for routine programming features and tasks—literally a framework to build websites or web applications around. Think of building websites and web apps like building a house—when you set out to build a house, you could create all of your own building materials from scratch and start building without any schematics, but that approach would be incredibly time-consuming and doesn’t make a lot of sense. It’s more likely that you would purchase pre-manufactured building materials (wood, bricks, countertops, etc.) and then assemble them based on a blueprint to fit your specific needs. 

Coding is very similar. When you set out to code a website, you could code every aspect of that site from scratch, but there are certain common website features that make more sense to apply from a template—if you need a wheel, for instance, it’s a lot more sensible to buy one than it is to reinvent it. And that’s where JavaScript frameworks come into play.

We have selected Vue.js for this track because it is well-documented with widely-available tutorial and resources on the Internet. However, do not feel compelled that you have to use Vue.js simply because it is in the starter code. Feel free to use other frameworks like React, Angular, or just plain, vanilla JavaScript. 

## Project Structure 

##### index.html
The index.html file contains the contents of the template. Some important things that you need to know are 
* `<script></script>` tag: used to embed a client-side script. There are two `<script></script>` tags. The first one links to the external Vue.js library (Think of it as the `import` statement in Python). The second one links to app.js, which we will explain below. 
* `<link></link>` tag: used to link to external style sheets. We have it linked to style.css. 

##### app.js
The app.js file contains the JavaScript code. We have created a Vue instance with two variables – `username` and `greeting` and a function that concatenates "Hi" with the username. This is what allows the website to greet the user after they type in their name. Note that `#hrx_starter` specifies which component of the webpage the Vue instance controls. In our template, `#hrx_starter` refers to the division with ID `hrx_starter` in index.html. 

##### style.css
The style.css file is left empty on purpose. We want you to use your imagination to make your website look fresh and aesthetic. 

## Loading Your Website

There are ways to load your website. 
* Open the index.html file with Google Chrome or another browser of choice. 
* Use the live server extension of VSCode or another text editor of choice. 

## Resources 
* [Vue.js Tutorial](https://www.youtube.com/watch?v=5LYrN_cAJoA&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa): This is a very thorough tutorial on Vue.js from "Hello woulrd" to deploying your website using Firebase.
* [HTML Tutorial](https://html.com/): This tutorial covers the basics of HTML. 
* [CSS Tutorial](https://html.com/css/): This tutorial covers the basics of CSS.
* [Javascript Tutorial](https://www.htmldog.com/guides/javascript/): This simple and straightforward tutorial covers the basics of Javascript. Start by reading this [article](https://www.htmldog.com/guides/javascript/beginner/makingstuffhappen/) and then continue reading [here](https://www.htmldog.com/guides/javascript/intermediate/thedom/).
* [The Modern Javascript Tutorial](https://javascript.info/): This in-depth tutorial thoroughly covers Javascript.

## Footnotes

[1] https://coder-coder.com/learn-web-development/#:~:text=Steps%20to%20learn%20web%20development%20basics%3A&text=Basics%3A%20HTML%2C%20CSS%2C%20and,Servers%20and%20databases%2C%20programming%20language

[2] https://skillcrush.com/blog/what-is-a-javascript-framework/
 
