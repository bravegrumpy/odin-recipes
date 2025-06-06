# Odin Recipes

This is the first "project" in [The Odin Project Foundations course](https://theodinproject.com/paths/foundations/courses/foundations).  So far, the the course has coverd basics, such as how to open a browser, how basic `WSL` [^1] works, and basic `git` [^2] commands.

I am *whizzing* through the course material, becasue I don't really want to spend a ton of time practicing git commands, when I've made thousands of commits. Take a look at [my github profile](https://github.com/bravegrumpy). While I don't have a ton of "public" projects, you should look at the [bravegrumpy project](https://github.com/bravegrumpy/bravegrumpy.website)[^3], where I store all of the sourcecode for [my personal website](https://www.bravegrumpy.com).  I am going through [The Odin Project](https://theodinproject.com) as an excercise of finding the *right* information for my needs. I'm also going through it so I can colate the resources I actually deem useful. 

## Goals for *This* Project

- [x] Make an HTML Page
- [x] Store it on github
- [x] Publish on Github Pages
- [x] Create a logical commit history
- [x] Create a basic HTML web page
- [x] Include the following
    - [x] links to another page
    - [x] images
    - [x] unordered lists
    - [x] ordered lists
- [ ] Have fun with the project
    - [ ] Do as many as possible of the following.
        - [x] Use a color scheme, make it using [coolors.co](https://coolors.co)
            - I intentionally used a "bad" color scheme, to try and replicate conditions that might be seen if a client were to see this.
        - [x] Use responsive design principles
        - [x] Make the index has a card based layout, and take advantage of the new mosaic grid layout
        - [ ] ~~Experiment with scroll-snap, and customizing scrollbars~~
        - [ ] ~~Use a custom cursor image~~
        - [ ] ~~Focus on micro-interactions on hover.~~
        - [x] Since I'm not using a framework, take advantage of media queries[^4] for elements that should not be visible at certain widths

In general, I am aiming to treat this project a bit as the "What do you currently know" litmus test. I will be adhering to some rules as I make this project.  The goal is to stay within the spirit of "learning webdev" while still allowing myself to have the creative freedom to have fun with it. Because this is also aiming to be part of a "porfolio" of sorts, I want it to be somethign I'm proud to put my name on.

**Rules**

- Do not do a whole new "tutorial"
- Don't use a web framework
- You can look up API / syntax considerations
- No `npm install`, `gem install` or `pip install`. If I want to use it, it must be through a CDN. 
    - This inherently limits tailwind usage.
- publish using gitub pages
- anything you can link to using a cdn and an link in the `<head>` is kosher.
- Do Google info, so long as its just for API esque concepts
- ChatGPT is allowed for quick "WTF is wrong", but once the concept is understood, it is not to be used again.

## Outcome

I ultimately made a version of the project that I am okay with. I don't love the way I used color, but it is acceptable. It is functional, and looks consistent across screen sizes as small as a smartwatch and as large as a desktop. 


## Footnotes

[^1]: Windows Subsystem for Linux, the "Linux" for Windows users. I do have ZorinOS installed, but I did not actually partition enough space for the OS for it to be useful, and I'm not super sure how to "un partition" a hardrive once it is partitioned.
[^2]: The version control system that "won". 
[^3]: I made it using sveltekit
[^4]: This project ended up being the project for practing media queries. I stopped when I got bored.