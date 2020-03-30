# Kartar's React App

## Lessons learned

### 1) Function references

I could not remove a todo from state because I did not understand the difference between function calls and references. I aim to make this clear to you here.

**Note this way is incorrect and will not work.**

```javascript
// What I did wrong - reference
<button onClick={deleteTodo}><button>
```

Above I was expecting the `deleteTodo` function to delete the todo when clicked, but I wasn't passing a `todo` to be deleted!

Here is the **correct** way:

```javascript
<button onClick={(() => deleteTodo(todo)></button> // we MUST call function (with parameter), not just reference
```

Can you see the difference? Hopefully it's easy to understand, relatively simple yes, but I can see how a beginner like me would not think to do this when making their React components use functions like this to manipulate the DOM.

### In Summary

We should reference functions like the first example if the expected output stays the same, the second example should be used when we want to do something that could vary, like which todo can be removed.
