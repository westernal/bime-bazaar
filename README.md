# Bime Bazaar's Task Documentation

#### CAUTION - 1: You may see a hydration error when you run the project in your browser it is because of the incompability of Next.js 15 and your browser's extensions, [Link to the issue](https://www.reddit.com/r/nextjs/comments/1gabiqn/hydration_error_when_installing_nextjs_15/?rdt=46729) 

#### CAUTION - 2: If you open the link on your iphone or any IOS device the post request wont work because of the httpOnly cookie that backend uses for post request and the backend and frontend url are not in the same origin.

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Technologies](#technologies)
4. [Project Structure](#project-structure)
5. [State Management](#state-management)
6. [Testing](#testing)
7. [Lint](#lint)
8. [FAQ](#faq)

## Introduction

Frontend interview task for Bime Bazaar.
Link: [Task](https://bime-bazaar.vercel.app/).

This task took me approximately 8 to 16 hours (Including writing tests and documentations).

## Getting Started

### Running Dev

To run the development server, execute the following commands:

sh
npm install
npm run dev


## Technologies
Next.JS, TypeScript, CSS modules, Zod, react-context

## Project Structure


```sh
/src
  /app
  /components
    /shared
    /ui
  /context  
  /functions
  /hooks
    /API
      /GET
      /POST
    /Context
  /interfaces  
  /utils
    /data
    /icons
  /views
```

### App

Each page has a page file in the app folder, and each page file in the app folder has a corresponding view stored in the views folder.

### Views

Each page has a view that serves as the component for that page.

### Components

This folder has two subfolders: shared and ui. The ui folder is for components used in UI design, such as buttons and inputs. The shared folder contains components shared between multiple views or components. Each component folder contains index.tsx and styles.module.css files.

### Context

This folder is for React Context. It contains the context creation codes.

### Hooks

This folder has the custom hooks that we made for our components. Near the normal hooks we have two folders called context and API each for context an API requests hooks, API folder has GET and POST folders.

### Functions

If we have general functions used in multiple modules, we add them in these folder such as a function to validate nationalId.

#### Utils

This folder is for general things for example we have an icons folder inside it for exporting our icons as svg, and data file is for static data that we have (carPlate number and insurance info) that does not come from API.

## State Management

We have a folder for contexts, which contains the creation of the contexts and for each context we have a hook inside /hooks/context to use the data.

## Testing

All the things that was mentioned in the task description was tested using cypress;

### End-to-End Tests

To run end-to-end tests, execute this command:

```sh
npm run cypress:open
```

## Lint
To run ESLint, execute the following commands:

```sh
npm run lint
```

## FAQ
### How to open a modal?
First you need to create the component inside the modal inside this path: /src/components/shared/Modal/ModalsContent you have to wrap your modal inside ModalWrapper component inside the same Modal path then you have to configure a url query for it inside the ModalManager component inside inside the same Modal path. Keep in mind that for better performance use lazy loading for your modal's component.

For example: 
```sh
const SelectAddress = dynamic(() => import("../ModalsContent/SelectAddress"), {
  loading: () => <Spinner />,
});

const ModalManager = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  return {modal === "address" && <SelectAddress />}
;
};

export default Options;
```
