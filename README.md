## Test development assessment:

This app was developed in 3 part-time days of active development, instead of the available 7, due to overlapping responsabilities with my current job. No excuses, just facts.

### POSITIVES

- Overall layout following prototype;
- Great script to generate the team formation layout, quite proud of it;
- I came up with a great setup to implement Bootstrap classes (or any other CSS framework, really), alonside CSS Modules;
- ESLint and Typescript;
- Some good implementation of generic UI components;

### NEGATIVES

- Started development desktop-first, then saw the requirement for it to be responsive. Couldn't make good responsiveness changes due to lack of time.
- Didn't implement the search for players functionality;
- No players, hence no drag and drop;
- Didn't implement UPDATE and DELETE teams, though the skeleton of the redux actions were there. CREATE team is functional;
- Didn't like how I implemented the forms, had some issues with the validation because it was all in one huge a\*\* component. I tried to be fast, because I was running out of time, and ended up not handling state very well.
- No tests;

## CONCLUSION

I can only say that I'm proud of the work I did in 3 part-time days. The code is mostly clean and I tried my best to implement some great stuff in it. With an extra 4 days, I'm very confident that I'd have finished the task and would've been able to even add some extra flair to it.

## create-react-app generated instructions below:

#

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
