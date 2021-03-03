# Northants Web Frontend

This is the Northants web frontend.
It is built in [Next.js](https://nextjs.org) and [Apollo graphql](https://www.apollographql.com/)

This application combines data from the northants cms [TODO add link]() and theming from [northants design system](https://github.com/FutureNorthants/northants-design-system) in a web application.

## Getting Started

This project is intended to be used in conjuction with the Northants CMS (TODO: add link). The CMS should be configured and running before this project.

First, copy the `.env.example` file to `.env.local` (not `.env`) and update values as necessary.

Next, update you `/etc/hosts` file for the Drupal backend and add:

```bash
127.0.0.1 core-cms.northants.localhost
```

Next, install the required packages:

```bash
yarn
```

Now, generate up-to-date graphQL types for communication with the CMS (the CMS must be running for this to work):

Start the project:

```bash
yarn dev
```

Open a new terminal and perform code generation:

```bash
yarn codegen
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## External Dependencies

These URL locations must always exist as these are used by Capita

```
https://www.westnorthants.gov.uk/WNU-logo.png
https://www.northnorthants.gov.uk/NNC-logo.png
```