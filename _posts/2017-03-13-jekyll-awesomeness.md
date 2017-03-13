---
date: 2017-03-13
excerpt: Here comes the Jekyll!
layout: post
author: Corrado Canepari
title: Jekyll Awesomeness
---

Let's say you want to make a blog, or a forum, but don't want to go through the pain of setting up a backend API.

If that description matches you, than Jekyll is the right tool.

### Jekyll describes itself as a Simple, Static and Blog-aware site generator.
#### But what does that even mean?

Basically, with the help of **Black Ruby Magic**, it builds a static website from your files.

The framework also has these so called `liquid tags`, which give it templating engine like features: in facts, thanks to these, you'll be able to include another file's content into your main HTML file, or acces variables with different scopes, and even use basic logic operations (like if statements) and loops.

Without further ado, let's dig in!

## Setting up Jekyll

---

First of all, you'll want to install Ruby, since it's what Jekyll is based on.

To learn how to install it, you can look up the [official Ruby documentation](https://www.ruby-lang.org/en/documentation/installation/) and follow the instructions. After that, you'll need to add Ruby and Ruby Gems to your Path. You can easiy do it on Windows by using the Control Panel, but on Mac and Linux it's a bit more complicated (at least in my experience). On a UNIX based Operative System you'll need to edit your shell's configuration file. Unless you changed your shell, the file will be called `.bashrc`, and it will be in your home directory.

To make Ruby Gems work you'll need to append the following lines to it:

<div class="multiline">
<pre>
GEM_HOME=$(ls -t -U | ruby -e 'puts Gem.user_dir')
GEM_PATH=$GEM_HOME
export PATH=$PATH:$GEM_HOME/bin
export GEM_HOME=$(ruby -e 'print Gem.user_dir')
</pre>
</div>

After Ruby and Ruby Gems are set up, it's time to install Jekyll itself. Open the terminal and type the command `gem install jekyll`
and press enter.

Once the command finishes installing Jekyll, you can create your first Jekyll website by running the command `jekyll new my-website`

If you get any errors, at this point, it is most likely to be a problem with Ruby not being in your path. Try looking at the official [documentation](https://www.ruby-lang.org/en/documentation/installation) to solve the problem.

After this, you'll have a new directory, which will contain all the starter files for yout site. If you want to see what the template looks like, navigate to that directory and run the command `jekyll serve`

At this point you just need to open your browser and go to `localhost:4000`

Cool! Now that you got this template set up, let's take a look at the core files!
<div class="multiline">
<pre>
.
├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.md
|   └── on-simplicity-in-technology.md
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
|   ├── _base.scss
|   └── _layout.scss
├── _site
├── .jekyll-metadata
└── index.html
</pre>
</div>

The `_config.yml` file serves as a configuration for Jekyll, and it contains all the site wide variables, but it also tells Jekyll  how to build and serve the site, indicating stuff like the input and output folder.

The _drafts folder contains all of the drafts for post, which won't be published.

The `_includes` folder contains all of the modules you'll be able to include in your pages with liquid templating tags.

The `_layouts` folder will come in really handy for writing templates for posts and other pages, since each page can use a layout, which dinamically displays content based on the page variables.

The `_posts` folder contains all of the posts and articles for your site. Their name should be formatted like this: `YYYY-MM-DD-post-title`, and they can either be Markdown or HTML files.

The `_sass` folder contains all of the stylesheets, which automatically get compiled from sass/scss to css.

The compiled site will be outputted to the `_site` folder (or whatever folder you indicate in your `_config.yml` file).

All the pages should be in the root directory and, based on their content, they will be placed in a subfolder of the `_site` directory.

## The config file

---

The config file is the most important file in your project. It lets you choose options regarding:

- Global configuration
- Build options
- Serve options

If you want to change something about how Jekyll behaves, chances are it will be configurable in here. You should read the [Jekyll documentation](https://jekyllrb.com/docs/configuration/) extensively, since discussing all of the properties you can set here would take pages and pages.

## The Front Matter

---

You'll see that, in the example, the index file begins with a section which contains some information regarding it:

<div class="multiline">
<pre>
---
permalink: /
layout: index
---
</pre>
</div>

This is called a Front Matter, and it basically sets page wide variables, which are often used by Jekyll itself to categorize pages and posts.

In an article's page, for example, you would want to set variables such as `author`, `date`, `title` and `cathegory`, while you wouldn't really want to do that for your site's About page.

To discover what default variables you can use, read the official [documentation](https://jekyllrb.com/docs/frontmatter/).

## Styling

---

For styling, as I mentioned above, you can use Sass, which is automatically compiled into css. Generally I create many subfolders in the `_sass` directory, and I divide them into numbered categories, such as `0-plugins`, `1-modules` and `2-pages`, and I usually put a SASS file which includes every file in the directory into each one of those, following the pattern set by th YouTuber [DevTips](https://www.youtube.com/user/devtipsfordesigners).

I then create another folder, called `assets`, where I put my main SASS file, which has `@includes` for each folder I previeously created. 

This `assets` folder is also where I put all the images, fonts and JavaScript files for the site.

## Liquid Tags

---

Liquid tags are a core part of Jekyll. They should feel familiar to you, if you ever worked with a templating engine such as HandleBars.

You can use them to incude partials contained in the `_includes` folder, reference variables, create if statements and even loop through arrays.

This is an example of a liquid tag to include a file:

`{% raw %}{% include partial.html %}{% endraw %}`

While this creates a header with the page's title, referencing a page-scoped variable:

{% raw %}`<h1> {{ page.title }} </h1>`{% endraw %}

As I mentioned above, liquid tags can also work for loops.

For example like this:
{% raw %}
<div class="multiline">
<pre>
&lt;ul>
	{% for post in site.posts %}
	&lt;li> {{ post.title }} &lt;/li>
	{% endfor %}
&lt;/ul>
</pre>
</div>
{% endraw %}

But this is not even close to everything Liquid can do.

You can embed (Gists)[https://gist.github.com] in your page through the gist tag:

{% raw %}`{% gist gist/url %}`{% endraw %}.

You can use the {% raw %}`{% raw %}`{% endraw %} tag to ignore all liquid syntax between the opening and enditing tag.

You can also create `if` statements like so:

{% raw %}`{% if condition %} Do stuff`{% endraw %}

You can read the official [documentation](https://jekyllrb.com/docs/templates/) about Liquid and templating on the Jekyll site, as well.

## Variables and Data

---

Variables are also a big part of Jekyll. You can reference a variable like you would in JavaScript. For example:

{% raw %}`{{ site.baseurl }}`{% endraw %}

You can also reference a page wide variable, like the above mentioned

{% raw %}`{{ page.title }}`{% endraw %}

But sometimes site-wide and page-wide variables are not enough, and for that you can use another crucial directory in Jekyll: `_data`.

Once you create that folder, you can put any data file in it (Jekyll comes preconfigured to read both CSV and YML).
You can then referene any of this data throughout your site by using a liquid tag, for example like this:

{% raw %}`{{ site.data.site-title }}`{% endraw %}

## Wrapping up

---

In conclusion, Jekyll really is an awesome framework, and it definitely deserves more attention. It is even natively supported by [Github Pages](pages.github.com). It includes a templating engine, it has SASS support and it avoids you all the trouble of setting up a task runner to compile your markdown files and programming a smart and efficient Backend.

## Useful Links:

---

- [The official documentation](https://www.jekyllrb.com)
- [Build a blog with Jekyll](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/)
- [Github Pages + Jekyll](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)
- [Setting up your GitHub Pages locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)