# Media.js

A functional micro-library for interacting with HTML5 Media objects!
Is it garbage? I don't think so. Probably because I made it (so I'm biased.)

## Usage

Basically, all you need is access to a media object (audio or video)

````js
var audio = document.getElementById('audio');
var video = document.getElementById('video');
````

And now we're off to the races!

## API

### `.is(media, prop)`

Determines whether or not the media object __is__ in some specific state.
This returns a boolean. Mostly for validation/existence checking.

#### examples
````js
media.is(audio, 'paused') // true if paused, false if playing
media.is(audio, 'muted') // true if volume is at 0
````

### `.has(media, prop)`

An alias for `media.is(media, prop)`, `media.has(media, prop)` is a more
user-friendly way for you to determine whether or not a media object __has__ some
property that _grammatically_ works better with `has()`

#### examples
````js
media.has(video, 'controls') // true if controls are enabled via HTML/JS
media.has(video, 'error') // true if an error occured
````

### `.prop(media, prop, value)`

A property getter/setter. If the `value` parameter is supplied, an attempt to set
the `prop` property on the `media` object is made. Otherwise, a value is just
returned. You're only going to be able to modify mutable values!

#### examples
````js
media.prop(audio, 'currentTime') // returns current seek time
media.prop(audio, 'currentTime', 50) // sets currentTime at 50 seconds

media.prop(video, 'muted', true) // mutes the video
media.prop(video, 'paused') // retrieved
````

### `.perform(media, command)`

This is a function that's used to call functions that are otherwise hardcoded into
the object, it's a simple interface that'll call the function you reference.

#### examples
````js
media.perform(audio, 'play')
media.perform(audio, 'pause')

media.perform(video, 'load')
````
EZPZ!

## Notes
Feel free to contribute to tests or if you have any suggestions on improvement in any way
I'd love to talk about it!
