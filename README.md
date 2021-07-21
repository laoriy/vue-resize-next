# vue-resize-next

Detect DOM element resizing based on Vue3.x

<br>

# Installation

```
npm install --save vue-resize-next

with yarn 

npm install --save vue-resize-next
```

Then import the package and install it into Vue:

```javascript
import VueResize from 'vue-resize-next'
app.use(VueResize)
// or in a component
// components: { VueResize }
```

# Usage

Add the `<vue-resize>` inside a DOM element and make its position to something other than `'static'` (for example `'relative'`), so that the observer can fill it.

Listen to the `notify` event that is fired when the above DOM element is resized.

# Example

```html
<template>
  <div class="demo">
    <h1>Hello world!</h1>
    <vue-resize @notify="handleResize" />
  </div>
</template>

<script>
export default {
  methods: {
    handleResize ({ width, height }) {
      console.log('resized', width, height)
    }
  }
}
</script>

<style scoped>
.demo {
  position: relative;
}
</style>
```

---
