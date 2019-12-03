# Simple Neural

## About
This is my first entry into the neural network world. I am pretty fascinated at machine learning
and neural networks so I thought I would start learning about them.

What you see in the UI is the final generation output. ([See Road map](#road-map))

The purpose of this neural network is for the AI to guess/estimate if the plotted point is
in the positive (point above svg line) or negative (point below svg line). If it thinks the
x and y coordinates are above it will be assigned a 1, or below a -1, which values are used
to determine if the color should be assigned the above color or below color.

This is built from a Fun Fun Function tutorial on youtube
https://www.youtube.com/watch?v=o98qlvrcqiU
However he uses Observable, and the code for that can
be found in the description of his youtube tutorial video.
I followed the tutorial, but coded in plain JS and cleaned the code up
in this repo to have each function in its own module component.

## Install
`yarn` - Installs dependencies
`yarn start` - Starts dev server and loads code on `localhost` and watches for changes
`yarn build` - builds out HTML and JS external file
`yarn watch` - Builds HTML and external JS and watches for changes

## Code
Entry can be found in `./src/index.js`

Values that are re-used through the components can be found in `./src/utils/config.js`

Training of the Neural network starts in `./src/modules/trainedWeights.js` which calls
the function from `/src/modules/train.js`. The function `guess` holds the algorythm that 
uses the plotted points to give the best guess if the points are above or below the line.
First time looped through produces a very bad guess, but each time the AI gets better at
guessing and after looping through the all the coordinates, the lifetime porduces a pretty
close guess.

## Road Map
- Better UI, probably put into React and better plot each generation and show each generation through the UI.
- Show coordinates through hover