# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




//====================================================================================================================================
        START->[1]                                                folder structure 
//====================================================================================================================================

project/
│
├── src/                               # Main source code of your React app
│   │
│   ├── assets/                        # Images, icons, videos, fonts, static assets
│   │   ├── images/                    # PNG, JPG, SVG files
│   │   ├── icons/                     # SVG icons
│   │   ├── fonts/                     # Custom fonts
│   │   └── animations/                # Lottie JSON files / GIFs
│   │
│   ├── components/                    # Reusable components (small UI pieces)
│   │   ├── ui/                        # Buttons, Inputs, Cards, Modals (atomic components)
│   │   └── shared/                    # Navbar, Footer, Sidebar, Hero, Layout widgets
│   │
│   ├── pages/                         # Page-level components (React Router pages)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── NotFound.jsx
│   │
│   ├── layouts/                       # Page layouts (Wrapper UI)
│   │   ├── MainLayout.jsx             # Navbar + Footer + Outlet
│   │   └── DashboardLayout.jsx        # Sidebar + Topbar + Outlet
│   │
│   ├── hooks/                         # Custom hooks for logic reuse
│   │   ├── useFetch.js
│   │   ├── useAuth.js
│   │   └── useDebounce.js
│   │
│   ├── context/                       # Global state management using Context API
│   │   ├── AuthContext.jsx            # Auth state provider
│   │   ├── ThemeContext.jsx           # Dark/Light mode
│   │   └── AppProvider.jsx            # Wrapped provider
│   │
│   ├── services/                      # API calls (Axios/Fetch)
│   │   ├── api.js                     # Axios instance
│   │   ├── authService.js             # Login/Register API
│   │   ├── userService.js             # Users CRUD
│   │   └── productService.js          # Products CRUD
│   │
│   ├── utils/                         # Helper functions & pure logic
│   │   ├── validators.js              # Form validation functions
│   │   ├── formatter.js               # Currency/date formatting
│   │   └── helpers.js                 # Reusable utility code
│   │
│   ├── constants/                     # App-wide constants & config
│   │   ├── routes.js                  # Route paths
│   │   ├── appConfig.js               # App global config
│   │   └── messages.js                # App messages used in UI
│   │
│   ├── styles/                        # Global CSS, theme CSS, Tailwind config
│   │   ├── global.css                 # Global styles
│   │   ├── variables.css              # CSS variables
│   │   └── mixins.css                 # Reusable CSS patterns
│   │
│   ├── types/                         # TS interfaces & types (if using TypeScript)
│   │   ├── user.d.ts
│   │   ├── product.d.ts
│   │   └── common.d.ts
│   │
│   └── app/                           # App entry (Next.js 13+ only)
│       ├── layout.jsx                 # Root layout
│       ├── page.jsx                   # Home route
│       └── (routes)/                  # Nested routes
│
├── public/                            # Public static files (served directly)
│   ├── index.html                     # Main HTML template (Vite/CRA)
│   └── robots.txt                     # SEO file
│
├── tests/                             # Jest / vitest / RTL test cases
│   ├── App.test.js
│   └── components/
│
├── .env                               # Environment variables (API keys, URLs)
├── .gitignore                         # Files to ignore in Git
├── package.json                       # Project scripts & dependencies
├── README.md                          # Project documentation
└── tsconfig.json / jsconfig.json       # Path aliases & project config





//====================================================================================================================================
        END->                                               folder structure 
//====================================================================================================================================
