# North/West Northamptonshire Council Website

This repository contains the frontend and backend code for the North Northamptonshire & West Northamptonshire unitary 
councils serving Wellingborough, Corby, Daventry, East Northants, Kettering, Northampton, Northamptonshire County and 
South Northants.

## Branch structure

The environments for each website are made up of the following 4 branches;

- **prod_frontend** - The live, production frontend environment 
- **prod_backend** - The live, production backend environment 
- **preprod_frontend** - Used for testing new features during evolutionary development of the frontend.
- **preprod_backend** - Used for testing new features during evolutionary development of the backend.

## Setup README files

- Frontend - https://github.com/FutureNorthants/northants-website/blob/preprod_frontend/frontend/README.md
- Backend - https://github.com/FutureNorthants/northants-website/blob/preprod_backend/backend/README.md

## Development work

All future work should be branched from the `preprod_*` branches for either the frontend or backend.

When working on new development work using feature branch should be named as follows:

`feature/TICKET-ID-my-ticket-title-FRONTENDorBACKEND`

For example;

- `feature/123-my-ticket-title-frontend` for work on the frontend branched from the `preprod_frontend` branch
- `feature/123-my-ticket-title-backend` for work on the backend branched from the `preprod_backend` branch

Once work is completed a pull request must be created going back in to `preprod_frontend` or `preprod_backend` for peer 
review.

For additional information on decisions and process please read the Solutions Architecture Definition document.