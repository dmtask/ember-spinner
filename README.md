# ember-spinner

https://www.npmjs.org/package/ember-spinner

A simple Ember CLI Spinner with up-to-date dependencies. Cloned from ember-cli-spinner (https://github.com/ajainvivek/ember-cli-spinner).

## Installation
- `ember install ember-spinner` (Is the easyed way...)
- `yarn install ember-spinner` (alternative way)

## Usage
1. Add `{{ember-spinner id="uniq-123"}}` to one of your templates, usually in `application.hbs` or View or Components
2. Specify `id` attribute to uniquely identify spinner wrapper.
3. Inject the `spinner` service
4. Show, Hide & Set Animation Type for the spinner
5. For components or child view spinner loading ensure parent position is set to `relative`

## Example
```handlebars
{{ember-spinner id="demo-spinner" type="wave" height="40px" width="40px" bgColor="transparent" color="dark-red"}}
```

```js
import {Component, inject} from 'ember';

export default Component.extend({
  spinner: inject.service('spinner'),

  actions: {
    showSpinnerWithTimeout() {
      this.get('spinner').show('demo-spinner', { //Provide the unique id
        timeout: 3000
      });
    },
    showSpinner() {
      this.get('spinner').show('demo-spinner');
    },
    hideSpinner() {
      this.get('spinner').hide('demo-spinner');
    }
  }
});
```

Animation types available:

- Pulse -> (pulse)
- Circles -> (circles)
- Fading Circles -> (fading-circle)
- Wave -> (wave)
- Double Bounce -> (double-bounce)
- Rotating Plane -> (rotating-plane)
- Folding Cube -> (folding-cube)
- Wandering Cubes - (wandering-cubes)
- Chasing Dots - (chasing-dots)
- Three Bounce - (three-bounce)
- Three Bounce Horizontal - (three-bounce-horizontal)
- Cube Grid - (cube-grid)

Spinner color class available are:

- White -> (white) //default
- Black -> (black)
- Light Green -> (light-green)
- Green -> (green)
- Dark Green -> (dark-green)
- Magenta -> (magenta)
- Purple -> (purple)
- Dark Purple - (dark-purple)
- Darken - (darken)
- Light Blue - (light-blue)
- Blue - (blue)
- Dark Blue - (dark-blue)
- Yellow - (yellow)
- Orange - (orange)
- Dark Orange - (dark-orange)
- Red - (red)
- Dark Red - (dark-red)

### API's

1. show(id, options) //provide unique id for spinner wrapper
2. hide(id) //provide unique id for spinner wrapper
3. setAnimation(id, type) //type from available types
4. setHeight(id, height) //height in px or em
5. setWidth(id, width) //width in px or em
6. setColor(id, color) //colors from available colors
7. setBgColor(id, color) //color can be hex or rgba value
