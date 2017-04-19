# Drawing with CSS

  You all went thru foundation year; can you recall color mixing exercises?
  What were your constraints? three primary colors: red, yellow, and blue.
  So what was the purpose of that exercise (besides creating a strong pigment economy)? to learn the behavior of the medium and how the power of combination **overcome constraints**.

## The Toolkit

  - Pseudo elements
  - Shapes
  - Multiples of the same shape / box-shadow
  - Gradients
  - Visualize!


## Pseudo elements

```
  div { background: red; }
  div:before { background: yellow; }
  div:after { background: blue; }
```

Remember these? It is easier to think of these as sequentially stacked layers within
an element.

```
<div>
  ::before
  <span class="sliver">something</span>
  ::after
</div>
```

## Shapes
This is where Geometry class helps.
Using width and height properties to create squares/rectangles, border-radius to create circles/ellipses, and border to create triangles/trapezoids

```
```

These are the easiest to create and manipulate, but there are more.

## Multiples of the same shape / box-shadow

CSS allows you to create multiple box-shadows. You can vary size, color, and blur of a shape to create many versions of the same shape.  Offsetting them on the x- and y-axes gives us almost endless multiples.

```
```

## Gradients

Add shading and depth by implying a light source. Combining multiple background-images allows us to use many, layered gradients to achieve more complex shading and even more shapes.

```
div {
    background-image: linear-gradient(to right, gray, white, gray, black);
}

div:after {
    background-image: radial-gradient(circle, yellow 50%, transparent 50%),
                      linear-gradient(to right, blue, red);
}
```

#Let's Draw


# sources
https://hacks.mozilla.org/2014/09/single-div-drawings-with-css/
https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient

briefly end with: https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/
