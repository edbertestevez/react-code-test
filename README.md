# Ombori React Code Test
___

What the test app should do:

* Display a custom loading component for 3 seconds
* Fetch user data from https://reqres.in/
* Display those users in a scrollable view that lazy loads more users when you've reached the bottom of the list, if there are no more users to load it should indicate that there are no more users.
* Be responsive, look great and work well on different devices, especially various mobile screens
___

The application was built with ReactJS + Typescript for a coding exam.
  - Test Environments:
      - Desktop (Windows) - Chrome, Firefox, Edge.
      - Mobile (Android) - Chrome
  - No iOS/Mac device available to test.
  - IE11 not supported on this version.

<img src="screenshots/user-list.jpg" height="400"/>
___

## Features
  - Custom Loader
  - Get Users List
  - View User Details

### Additional Info
  - Typescript
  - React Hooks
  - Eslint + Prettier
  - React Hooks
  - Redux Toolkit
  - Lodash
  - Infinite Scrolling (Pagination)
  - Unit Testing (Soon)
  
## Local Setup
```bash
1. Clone the repository

2. Go to app directory
cd <project path>

3. Install packages
npm install

4. Run the application
npm start

## Folder Structure
```
project
└───public                                  # Public react files
└───src                                     # Main application folder
│   └─── assets                             # Application assets like images, etc
│   └─── config                             # Configuration files like routes, api, defaults, etc.
│   └─── constants                          # Constants files (currently empty)
│   └─── components                         # Application components
│          └─── common                      # Reusable components on modules
│          └─── containers                  # Application modules screens
│             └─── <Module>
│                   └─── ...<components>    # Module related components
│   └─── store                              # Redux related directory
│       └─── slices                         # Module reducer files
│       └─── index.tsx                      # Main redux store definition/compiler
│   └─── styles                             # Reusable styles
│   └─── tests                              # App test definitions (currently not updated)
│   └─── types                              # Type definitions
│   └─── utils                              # Utils such as service workers, common functions, etc.
│   └────index.tsx                          # Root application renderer
│   └────Main.tsx                           # Main application component
└───package.json                            # Dependencies and other app info
└───tsconfig.json                           # Typescript environment configuration file
```
