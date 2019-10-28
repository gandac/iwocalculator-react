# I W O C A L C U L A T O R -- C H A L L E N G E

The Challenge was to build an UI for users to be able to see how much they will pay each month if they will credit in a custom period of time. 

## What I did acomplished in 4hrs 

- Set up React, Redux, Webpack, Axios and all needed dependencies. Initialise central store of data via Redux
- Separate all app contants in state/constants
- Prepare an utility function apiCall responsibile for any call to server
- Split application state in 3 different sections: [ Controls Configuration , Controls State , Results State ] 
- Split application actions in r sepparate sections for [config/controls/results] 
- Action to Fetch the server to get control configurations [min , max ] 
- Model the endpoint config data to match our needs
- Added Sliders as the amount control and period control for better UX. Succesfully limit the sliders with the config limits. Two way data binding between sliders controls, input controls [ for interest rate ] and Redux Store. 
- Add granulated components for every view files Eg [Index -> App -> Layout -> MainPage -> CalculatorResults-> ResultTabe -> ... ]. Here again we separate the UI Controllers for the UI Results
- Added UI Preloader for the server request, Page Container, Grids to have an organised way to view the table 
- Succesfully contruct the results state array. This array will have as items as the number of months, each item will be an object with date, principal,interest , total columns calculated. There are in fact two different arrays, that are holding the information for both of the tables. Each one are binded to amount and duration, and the interest is read independently. 
- Display the results in two different tables, each one for his correspondent data.

## What I did NOT accomplished in 4hrs

- Proper Styles for the Page, Proper styles for the Calculator , Tables . Also the UI gives minimal explanations. Text should be added.
- Automatic tests for the actions and the reducers
- Logic to disable one of the calculators in case of one of the limit exceedes
- Add 10% upfront fees and display in interest of the business array data.
- Display Table Footer calculating the total of each respective table
- Mark and display the limits within the sliders
- Fixing Bugs [ 2 maximum digits after decimal points, Payment due date should be final day of each month and ]

## My overall toughts

For me, to create all of these requirements in 4hrs felt like a race. There was so many things that needed a proper frontend design within the code, that became obvious I will not finish all in 4rhs.

I decided to build a React app using the Redux store, and total split of the code that is belonging to the data, from the code that is belonging to the views. 

The I decided to separate the data in it's 3 main categories [ configuration for the controls , the control values , the resulting values ]. For each of these 3 entities there had to have splitted the actions from the storing model.

I realised that are a lot of things to do just to have the data sorted, and a 4 hours would be insuficient; but I did this because I really think that the code in the end would be much easier to read, understand and maintain. 

Maybe it would have been a better idea to not let the views builing in the last half and hour of the 4hrs limit. I did not have time to proper display the tables , especially their meta information [ Title, What table is that, what purpose have the tables .. ] Also it would have been and idea to reserve 20min for styling and 20min to write few tests for the actions.

I think that the whole project would need another 3-4hrs of love in order to finish it with all the requirements, and add some explanations for the users and apply modern styles that highlights the controls / results. In this time a code curation and add documentation for parts of the code would also need to happen. 

That's why I've tagged the end of the 4hrs with a release tag : `0.1.0 Alpha - after 4hrs` because I think I could  finish the requirements and apply some proper styels to the view. You can always pull that release tag, to see where I was at 4hrs 

## DEMO

Demo link for the Project after 7hrs of work - [https://iwocalculator.web.app](https://iwocalculator.web.app) - Please pull the release tag alpha for the first 4hrs

## Available Scripts

The project is an ejected insance of create-react-app. You can run 

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Run all the tests

### `yarn build`

Builds production artifacts
