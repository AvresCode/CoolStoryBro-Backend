## Backend Set Up

1. Making your models and migrations (user -> spaces -> stories)
2. Create seed files (user -> spaces -> stories)
3. Add your relations
4. Test your relations (user include spaces, spaces include stories)

## Frontend Set Up

1. Add a new slice `spaces`

```js
const initialState = {
  spaces: [], `this should be null`
  spaceDetails: {} `this should be null`
}
```
2. Create `selectors.js` and `thunks.js`

## Feature 1 - Homepage

1. Write an endpoint that responds with a list of spaces
2. Create a component for the Spaces
3. Write thunk to fetch data and test it (import and dispatch in the component)
4. If thunk is working, dispatch an action to update the reducer
5. Write a selector and use it to display the data on the screen

## Feature 2 - Details Page

1. Write an endpoint that responds with one space and its stories
2. Create a component for the Space Details
3. Write thunk to fetch data and test it (import and dispatch in the component)
4. If thunk is working, dispatch an action to update the reducer
5. Write a selector and use it to display the data on the screen
