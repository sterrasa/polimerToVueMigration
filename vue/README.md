# NumberSelector Component

A Vue App to handle a web-component number-selector that allows users to select a number between a minimum and maximum value.

## Use the web component

```html

  <number-selector min-value="0" max-value="10">
    Please select a number!
  </number-selector>
```

## Props

| Prop | Type | Required | Description |
|---|---|---|---|
| minValue | Number | Yes | The minimum value that can be selected. |
| maxValue | Number | Yes | The maximum value that can be selected. |
| backgroundColor | String | No | The background color of the number-selector. |
| textColor | String | No | The text color of the number-selector. |
| radioSize | String | No | he size of the radio buttons. |


## Events

| Event | Description |
|---|---|
| selected | Emitted when a number is selected. The event payload is the selected number. |

## Example

```html
   <div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
      <number-selector min-value="5" max-value="20">
        Please select a number!
      </number-selector>
      <p>Current selection: <span id="currentSelection"></span></p>
   </div>

    <script type="module" src="/src/main.ts"></script>

    <script>
      // Define the handleSelected function
      document.querySelector('number-selector').addEventListener('selected', (event) => {
        const selectedNumber = event.detail;
        console.log('Number selected:', selectedNumber[0]);
        document.getElementById('currentSelection').textContent = selectedNumber;
      });
    </script>

```


This will render a number selector with a minimum value of 1 and a maximum value of 10. The slot placeholder can be used to provide additional text, such as a label or instructions.

## License

This component is licensed under the MIT License.


# Run Vue-App

- Follow these steps:

1 - Clone the repository  
2 - In the root directory run:

- The application can be accessed at http://localhost:5153/

```
npm install 

npm run dev 

```
3 - build Web-Component

```
npm run build

```

4 - execute test suites

```
npm run test

```

5 - execute test coverage report

```
npm run coverage

```


Task Done:

Change VS Code + Volar (and disable Vetur) + TypeScript Vue Plugin (Volar).

Improvements:

- Naming: Use PascalCase for NumberSelector.
- Variables: Improve readability by using descriptive names like minValue, maxValue, and selectableItems.
- Custom Element (ce): Add the ce (custom element) suffix to indicate custom web components.
- Destructuring: Use destructuring instead of props.value for concise and readable code.
- Message Slot: Pass the message as a slot to NumberSelector.ce.vue with a property message.
- Computed Property: Use a computed property for the range based on minValue or maxValue props to automatically update the items array.
- Accessibility: Add the aria-label attribute to the input for improved accessibility.
- Prop Validation: Include validation to warn if numbers are negative in minValue or maxValue.
- Component Descriptions: Add descriptions to the components for better code understanding.
- Component Registration: Register web components in main.ts.
- Styles: Update Vite style.css to apply styles to number-selector instead of #app.
- Unit Test: Add unit tests with Vitest and Chai.
- Coverage: Include code coverage for checking test coverage.
- Wrapper Component: Create a wrapper component (NumberSelectorWrapper.ce.vue) for testing in Vue project.
- Include Css dinamically

Other Possible Improvements:

- ESLint: Add ESLint for code linting.
- Prettier: Use Prettier for code formatting.
- Include more unit tests to check the new dynamic CSS approach.
