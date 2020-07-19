# Money Pot - Testing details

[Main README.md file](README.md)

[View website in GitHub Pages]()

## Table of Contents ##

## Automated Testing ##

### Validation Services ###

The following validation services and linter were used to check the validity of the website code.
- [W3C Markup Validation]( https://validator.w3.org/) was used to validate HTML.
- - [W3C CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate CSS.
- [JSHint](https://jshint.com/) was used to validate JavaScript.

### Client stories testing

## Manual testing

### Testing undertaken on desktop

### Testing undertaken on tablet and phone devices

### Bugs discovered

#### Solved bugs

**1. Dev tools were throwing an error in console**

- Fix: all audio buttons were given const and removed let.

```javascript
const soundOff = true;
const soundOn = true
```

**2. Event listener was not registering addCoinAudio**

- Fix: migrated addCoinAudio event listener into setGame function.

#### Unsolved bugs

## Further testing
