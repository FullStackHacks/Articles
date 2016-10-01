Markdown 101
===========


What is Markdown?
----------------

Markdown is a unique markup language that can easily be compiled to HTML. Markdown 
was designed to be easy to write, but also easy to read in its raw form; meaning 
that markdown is great for publishing content on the internet with.
[John Gruber][John Gruber Wiki] invented markdown and intiailly released it
in about 2004, he has a great blog called [Daring Fireball][Daring Fireball]. 
[Aaron Swartz][Aaron Swartz Wiki] had a lot of influence of the syntax of markup.
For those who don't know who Aaron Swartz is, he was one of the founders of Reddit.
Swartz is also one of the most well known Hacktavist and has incredibly sad story.
There is a great documentary on his life that I highly recommend called [The Internet's
Own Boy] [Internet's Own Boy].


Basic Syntax
------------

Markdown makes doing all the things needed for online publish extermely easy.

### Headers ###

Headers can be declared in a several ways. Using # like this

```markdown
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

Alternatively these headers can eb escaped like this.

```markdown
# h1 #
## h2 ##
### h3 ###
#### h4 ####
##### h5 #####
###### h6 ######
```

That line would then be complied to

```html
<h1> h1 </h1>
<h2> h2 </h2>
<h3> h3 </h3>
<h4> h4 </h4>
<h5> h5 </h5>
<h6> h6 </h6>
```

Alternatively h1 tags can be with "=" used as an underline and h2 can be declared
with '-'

```markdown
h1
==
h2
--
```

That line would then be complied to

```html
<h1> h1 </h1>
<h2> h2 </h2>
```

### Links ###

One of the most useful features of markdown is the ability to easily write link
text. In HTML if I wanted to add a link around text it would look something like
this

```html
<p> click this to go to <a href="http://www.foo.com/super/duper/long/url"> Foo </a> </p>
```

Anchor tags become quite cumbersome, and markdown is all about making your life easier.
In markdown you can simply surround the text that you want to link in square brackets
and then follow it with parenthesis containing the desired link. That means the
markdown equivalent of the above html snippet would be

```markdown
click this to go to [Foo](https://www.foo.com/suprer/uper/long/url)
```

While this is much better than writing anchor tags it can get even cleaner.
Links can be given an ID and then referenced using that ID and square brackets.
To give you an example of what I mean. The above text could be changed to

```markdown
click this to go to [Foo][bar]

[bar]: https://www.foo.com/suprer/uper/long/url
```

This makes it easy to save a list of all links at the bottom of your text, and
then reference them in your text. When reading through the text later it is then
much easier to remember where the links are pointing to, especially when you have
many links to the same website or non-descriptive urls. 

##### Images #####

Images have the same syntax as links, except the link is prepended with an \!

```markdown
![Foo](beautiful image)

[beautiful image]: https://www.foo.com/image.jpg
```
> An important thing to note all link IDs are __not__ case sensitive and can contain
  a combination of spaces or punctuation.

### Code Blocks ###

Often markdown is used to write about programming, and there's an easy way to include
code blocks with syntax highlighting. By opening a block with three back-ticks (\`\`\`\)
and closing with the same three back-ticks a code block can be declared

    ```
    my code blcok
    ```

To incorporate syntax highlighting add the name of the language next to the back-ticks
like so

    ```javascript
    var hello = "world"
    ```
This will then be displayed as

```javascript
var hello = "world"
```

### Lists ###

##### Unordered ######

Unordered list can be declared by using \+, \*, or \-. The example being

```markdown
- item 1
- item 2
- item 3
```


```markdown
* item 1
* item 2
* item 3
```

```markdown
+ item 1
+ item 2
+ item 3
```

All three would output

- item 1
- item 2
- item 3


##### Ordered #####

Ordered list can be declared by using writing (number)(period). Example

```markdown
1. item1
2. item2
3. item3
```

> Note the number doesn't matter, so something like this would output the same thing
> ```markdown
> 1. item1
> 1. item2
> 1. item3
> ```

### Extra ###

There's a lot more you can do with markdown that wasn't covered in this article.
If you interested in learning more about markdown [this is the best article I found
on the markdup language][Daring Fireball Markdown Syntax]; it's writtne by John Gruber
and goes deeper into the little intricices of markdown. Another great reference
is [this cheat sheet][Cheat sheet]


### Vim Tips ####

If you're a die hard vim user, like me, then you'll enjoy this [plugin][Vim Instant Markdown Plugin].
It will run a web server on localhost port 8090 which serves a live
version of the markdown file you're currently editing in chrome.

Happy Hacking,

Adam Collins



[John Gruber Wiki]: https://en.wikipedia.org/wiki/John_Gruber
[Aaron Swartz Wiki]: https://en.wikipedia.org/wiki/Aaron_Swartz
[Daring Fireball Markdown Intro]: https://daringfireball.net/projects/markdown/
[Daring Fireball Markdown Editor]: https://daringfireball.net/projects/markdown/dingus
[Daring Fireball Markdown Syntax]: https://daringfireball.net/projects/markdown/syntax#overview
[Daring Fireball]: http://daringfireball.net/
[Internet's Own Boy]: https://www.youtube.com/watch?v=aahlupnq8NQ
[Cheat sheet]: https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet
[Vim Instant Markdown Plugin]: https://github.com/suan/vim-instant-markdown
