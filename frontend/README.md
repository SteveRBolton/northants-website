# Northants Web Frontend

This is the Northants web frontend.
It is built in [Next.js](https://nextjs.org) and uses [Apollo GraphQL](https://www.apollographql.com/)

## Dependencies.

You will need [Node](https://nodejs.org/) and [yarn](https://yarnpkg.com/lang/en/) installed globally on your development machine. Assuming you are using a Mac then these can be installed using [Homebrew](https://brew.sh/) with `brew install node yarn`

If correctly setup then `which yarn` should return a file path to an executable.

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

Now, generate up-to-date GraphQL types for communication with the CMS (the CMS must be running for this to work):

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

These URL locations must always exist as these are used by ModernGov

```
https://www.westnorthants.gov.uk/west_frame/index.html
https://www.northnorthants.gov.uk/north_frame/index.html
```

## Required environment variables
| Name        | Type        | Value |
| ----------- | ----------- | ----------- |
| CMS_GRAPHQL_ENDPOINT      | URI       | The url to the Drupal GraphQL endpoint |
| NEXT_PUBLIC_BASE_URL  | URI        | The frontend website URL (https://www.westnorthants.co.uk/) **must contain trailing slash** |
| NEXT_PUBLIC_FEDERATED_GRAPHQL_ENDPOINT  | URI        | The url to the federated GraphQL endpoint |
| NEXT_PUBLIC_GTM_CODE  | String        | The Google Tag Manager code for the website |
| NEXT_PUBLIC_SITEMAP_ENDPOINT  | URI        | The url to the sitemap.xml file in Drupal |
| NEXT_PUBLIC_THEME  | String        | The design system theme name i.e. west, lb_theme_west, etc |
| NEXT_PUBLIC_WEBSITE  | String        | The website it is on i.e. west, north | 