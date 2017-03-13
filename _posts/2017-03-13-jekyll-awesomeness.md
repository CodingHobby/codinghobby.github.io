---
date: 2017-03-13
excerpt: Here comes the Jekyll!
layout: post
author: Corrado Canepari
title: Jekyll Awesomeness
---

Let's say you want to make a blog, or a forum, but didn't want to go through the pain of setting up a backend layer.

This is where Jekyll comes in.

### Jekyll describes itself as a Simple, Static and blog-aware static site generator.
#### But what does that even mean?

Basically, with the help of **Black Ruby Magic**, it builds a static website from your file.

The framework also has these so called `liquid tags`, which make Jekyll really similar to a templating engine: in facts they let you include other file's content into your main HTML file, or acces variables you defined either for the single page or for the whole website, and they also allow for basic logic operations (like if statements) and loops.

Without further ado, let's dig in!

## Setting up Jekyll

---

First of all, you'll want to install Ruby, since it's what Jekyll depends on.

To install learn how to install it, you can look up the [official Ruby documentation](https://www.ruby-lang.org/en/documentation/installation/) and follow the instructions. After that, you'll need to add Ruby and Ruby Gems to your Path. You can easiy do it on Windows by using the Control Panel, but on Mac and Linux it's a bit more complicated (at least in my experience). To do so on UNIX based Operative Systems, you need to edit your shell's configuration file. Unless you changed your shell, the file will be `~/.bashrc`.

To make Ruby Gems work you'll need to add the following lines to it:

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

If you get any errors, at this point, it is most likely to be a problem with Ruby not being in your path. Try looking at the official documentation to solve the problem.

After this, you'll have a new directory, which contains all the starter files for yout sites. If you want to see what the template looks like, navigate in that directory and run the command `jekyll serve`

At this point just open your browser and go to `localhost:4000`

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

The `_config.yml` file serves as a configuration for Jekyll, and it contains all the site wide variables, which are also used for building and serving the site.

The _drafts folder contains all of the drafts for post, which won't be published.

The `_includes` folder contains all of the modules you'll be able to include in your pages with liquid tags.

The `_layouts` folder will come in really handy for writing templates for posts and other pages.

The `_posts` folder contains all of the posts and articles for your site. They should be named following the convention: `YYYY-MM-DD-post-title`, and they can either be a Markdown or an HTML file.

The `_sass` folder contains all of the stylesheets, which automatically get compiled from sass/scss to css.

The site will be generated, and outputted to the `_site` folder.

All the pages should be in the root directory, and based on their content, they will be placed in a subfolder of the `_site` directory.

## The config file

---

The config file is the most important file of your project. It lets you choose options for:

- Global configuration
- Build options
- Serve options

If you want to change something about how Jekyll works, chances are it will be configurable in here. I'll refer you to the [Jekyll documentation](http://www.jekyllrb.com), since discussing it all here would take pages and pages.

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

To discover what default variables you can use, read the official documentation.

In the article pages, you can set other variables, such as `author`, `date`, `title` and `cathegory`.

## Styling

---

For styling, as I mentioned above, you can use Sass, which is automatically compiled into css. Generally I create many subfolders in the `_sass` directory, and I divide them into numbered categories, such as `0-plugins`, `1-modules` and `2-pages`, and I usually put a SASS file into each of those, which includes every file in the directory.

I then create another folder, called `assets`, where I put my main SASS file, where I include every stylesheet. This is also where I put the images, fonts and JavaScript files.

## Liquid Tags

---

Liquid tags are a core part of Jekyll. They mimic templating engines, which makes this framework extremily more awesome.

You can either use them to incude partials contained in the `_includes` folder or reference variables.

This is an example of a liquid tag to include a file:

`{% raw %}{% include partial.html %}{% endraw %}`

While this creates a header with the page's title:

`{% raw %}<h1> {{ page.title }} </h1>{% endraw %}`

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

You can embed gists in your page through the gist tag:

{% raw %}`{% gist url/url %}`{% endraw %}

You can use the {% raw %}`{% raw %}`{% endraw %} tag to ignore all liquid syntax between the opening and enditing tag.

You can also use `if` statements like so:

{% raw %}`{% if condition %} Do stuff`{% endraw %}

You can read the official documentation about it on the Jekyll site.

## Variables and Data

---

Variables are also a big part of Jekyll. At any point you can reference a site wide variable like you would in JavaScript. For example:

{% raw %}`{{ site.baseurl }}`{% endraw %}

You can also reference a page wide variable, like the above mentioned

{% raw %}`{{ page.title }}`{% endraw %}

But sometimes site-wide and page-wide variables are not enough, and for that you can use another folder in Jekyll: `_data`.

Once you create the folder, you can put any data file in it (Jekyll comes preconfigured to read both CSV and YML).
You can then referene any of this data throughout your site through a liquid tag, for example like this:

{% raw %}`{{ site.data.site-title }}`{% endraw %}