---
type: blog
slug: how-to-create-a-button-with-a-div-in-react-and-why-you-shouldn-t-1743
title: How to create a <button> with a <div> in React (and why you shouldn't)
publishDate: 2020-01-06
reactions: 37
---
As web developers, we are often tasked with creating various interactive components in our web applications. On occasion, it might seem like a tempting solution to add a click handler to an existing `div`, or to create a custom `<Button/>` component out of non-semantic elements.
<br/><br/>
In this article I hope to illustrate the "hidden" bugs that are created by _not_ using a `button` as a button and the amount of code that is required to overcome these deficits. 


# 1. onClick handler

This is the obvious first step to add an interaction to a `div`. But, as its name suggests, the `onClick` handler on a `div` only supports mouse click events (`onClick` with a `button` does much more). Unfortunately, only supporting mouse events leaves keyboard and screen reader users in the dark. They are not informed that this has become an actionable element and they are also not able to trigger the interaction with the keyboard.

```jsx
//DO NOT USE: non-accessible implementation
const Button = () => {
  const onClick = () => console.log('clicked');

  return <div onClick={onClick}>My Button</div>
}

```

# 2. Adding a Role, tabindex

We can inch towards and accessible solution by adding a [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) and a role to the `div`. The [button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) will tell screen readers to announce this element as a button, and hint that it is actionable. Setting the `tabindex="0"` (`tabIndex={0}` in React), allows this element to be focused by the keyboard. Even so, our custom `div` can still not be triggered by the keyboard.

```jsx
//DO NOT USE: non-accessible implementation
const Button = () => {
  const onClick = () => console.log('clicked');

  return <div role="button" tabIndex={0} onClick={onClick}>My Button</div>
}
```

# 3. Keyboard events

When a `button` is focused, it can be triggered by either the `SPACE` or `ENTER` key. To bring this functionality to our `div` button, we need to implement `onKeyPress` and watch for those specific events. Then, we can manually forward matching events to our `onClick` handler.

By implementing these first three steps, our `div` button is now mostly accessible. 

```jsx
const Button = () => {
  const onClick = () => console.log("clicked");

  const onKeyPress = e => {
    const enterOrSpace =
      e.key === "Enter" ||
      e.key === " " ||
      e.key === "Spacebar" ||
      e.which === 13 ||
      e.which === 32;
    if (enterOrSpace) {
      e.preventDefault();
      onClick(e);
    }
  };
  return (
    <div
      role="button"
      onClick={onClick}
      tabIndex={0}
      onKeyPress={onKeyPress}
    >
      My Button
    </div>
  );
};
```

# 4. Disabled state

Oftentimes, the [`disabled`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled) attribute is used for preventing user interaction with a `button`. We can add that same functionality to our `div` button by setting the `tabindex` to `-1` (which removes it from keyboard focus) and by ignoring any clicks in our `onClick` handler while the button is disabled.

```jsx
const Button = ({ disabled }) => {
  const onClick = () => {
    if (disabled) {
      return;
    }
    console.log("clicked");
  };

  const onKeyPress = e => {
    const enterOrSpace =
      e.key === "Enter" ||
      e.key === " " ||
      e.key === "Spacebar" ||
      e.which === 13 ||
      e.which === 32;
    if (enterOrSpace) {
      e.preventDefault();
      onClick(e);
    }
  };
  return (
    <div
      className={disabled ? "btn disabled" : "btn"}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={onClick}
      onKeyPress={onKeyPress}
    >
      My div Button
    </div>
  );
};
```

# 5. Button Styles

If we also want to style our `div` to look like a `button` we can steal the default styles from Chrome (not recommended).

```css
//DO NOT USE: browser-specific styles
.btn {
  display: inline-block;
  -webkit-appearance: button;
  padding: 1px 7px 2px;
  cursor: default;
  font: 400 11px system-ui;
  color: buttontext;
  background-color: buttonface;
}
.btn.disabled {
  color: rgb(170, 170, 170);
}
```

# Conclusion

I think that the easiest way to illustrate the differences between creating a button out of a `div` and using an _actual_ `button` is to show the amount of code required to implement all of the above (and more) with the following `button` snippet.

```jsx
// PLEASE USE: most accessible solution
const Button = props => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <button
      onClick={onClick}
      {...props}
    >
      My button Button
    </button>
  );
};
```