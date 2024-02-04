# Test Plan for React Components

This test plan outlines the strategy and test cases for testing React components in our project. It covers different types of tests for individual components and provides guidance on ensuring the reliability and correctness of our components.

## Components

### 1. Header Component

#### Type of Tests
- **Unit Tests:**
  - Verify rendering of the component.
  - Test interactions with the input element.
  - Validate the `addItem` callback on form submission.

#### Test Cases
1. Ensure that the header is rendered correctly.
2. Test if the input field is present.
3. Simulate form submission and validate the `addItem` callback.

### 2. Footer Component

#### Type of Tests
- **Unit Tests:**
  - Validate rendering of filters and clear completed button.
  - Test interactions with navigation links.
  - Validate the `removeCompleted` callback.

#### Test Cases
1. Verify that the footer is rendered properly.
2. Test if navigation links are highlighted based on the current route.
3. Validate that the item count is displayed correctly.
4. Test the `removeCompleted` callback on the "Clear completed" button click.

### 3. Main Component

#### Type of Tests
- **Unit Tests:**
  - Test rendering of the main section.
  - Validate the rendering and behavior of the toggle-all checkbox.
  - Test the `toggleAll` callback.

#### Test Cases
1. Verify that the main section is rendered correctly.
2. Test the rendering and behavior of the toggle-all checkbox.
3. Validate the `toggleAll` callback when the checkbox is clicked.

### 4. Item Component

#### Type of Tests
- **Unit Tests:**
  - Test rendering of individual todo items.
  - Validate interactions like toggling completion and removing an item.
  - Test the `handleDoubleClick`, `handleBlur`, and `handleUpdate` callbacks.

#### Test Cases
1. Ensure that individual todo items are rendered correctly.
2. Test the toggling of completion on checkbox click.
3. Validate the behavior of double-clicking on a todo item.
4. Test the `handleBlur` callback on input blur.
5. Test the `handleUpdate` callback on updating a todo item.

### 5. App Component

#### Type of Tests
- **Integration Tests:**
  - Validate the integration of Header, Main, and Footer components.
  - Test the overall rendering and behavior.

#### Test Cases
1. Ensure that Header, Main, and Footer components are rendered within App.
2. Validate the integration of state management between App and its child components.

## Running Tests

- Use the following command to run tests: `npm test`.
- For coverage reports, use: `npm test -- --coverage`.

## Test coverage summary
![Screenshot 2024-02-04 221829](https://github.com/Sharath-44/React-test-sei-Housewear/assets/93254961/cad82cc9-0f98-4d94-986a-333cd6c4cdea)
