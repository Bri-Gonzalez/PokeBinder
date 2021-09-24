# Project Overview

## PokéBinder

## Project Description

This app will allow the user to upload their favorite Pokémon cards to a virtual binder. The user will be able to add Pokémon cards, edit their Pokémon cards, and delete their Pokémon cards. This allows the user to easily share out their collection with friends, family, and ultimately, whoever they want.

## Wireframes

[Wireframes](https://whimsical.com/pokebinder-xFDxtwiLXAYUroyLqfZZP)

## Component Hierarchy

[Component Hierarchy](https://whimsical.com/pokebinder-xFDxtwiLXAYUroyLqfZZP)

## API and Data Sample

[Airtable API](https://airtable.com/shrV1yiFezYgBsKqU)

```json
'{
  "records": [
    {
      "fields": {
        "title": "Special Delivery Pikachu",
        "date": "12/2020",
        "obtained": "purchased",
        "type": "lightning",
        "description": "This card was a special time offer for buying from Pokemon Center during December of 2020.",
        "image": "https://product-images.tcgplayer.com/fit-in/400x558/227646.jpg",
        "name": "Pikachu",
        "set": "SWSH Promo"
      }
    },
```

### MVP/PostMVP

#### MVP

- Homepage with clickable Pokémon card names that route to each respective Pokémon.
- Get and post Pokémon cards from Airtable.
- Use a form to add Pokémon cards and update Airtable.
- Create a modal for the form.
- Delete Pokémon cards from the collection and Airtable.

#### PostMVP

- Pagination for homepage.
- Allow user to upload an image taken on phone to app ---OR--- Use a [Pokémon TCG API](https://dev.pokemontcg.io/) to display the card images from rather than having the user upload an image URL.
- Allow user to add a tag if the Pokécard is up for trade
- Logic for setting the background color of the Pokémon's type to match the element color (example "Lightning" => yellow)
- Add a search bar to allow user to search for a specific Pokémon card.
- Add cards to favorite

## Project Schedule

| Day         | Deliverable                                                   | Status     |
| ----------- | ------------------------------------------------------------- | ---------- |
| Sept. 16    | Prompt / Wireframes / Proposal Approval                       | Complete   |
| Sept. 17    | Component Hierarchy / Timeframes / Core Application Structure | Complete   |
| Sept. 20    | Pseudocode / Actual Code                                      | Complete   |
| Sept. 21    | Sept. 20 cont'd / Begin CSS                                   | Complete   |
| Sept. 22    | Initial Clickable Model / CSS Styling                         | Incomplete |
| Sept. 23    | Complete MVP / Begin Post MVP                                 | Incomplete |
| Sept. 24    | Post MVP Items                                                | Incomplete |
| Sept. 25-26 | Completing App / Cleaning Code                                | Incomplete |
| Sept. 27    | Presentations                                                 | Incomplete |

## Timeframes

| Component                   | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                    |    H     |      3hrs      |     3hrs      |    3hrs     |
| Airtable Setup              |    H     |      1hr       |      1hr      |     1hr     |
| Setting up Components       |    H     |      1hrs      |     .5hrs     |    .5hrs    |
| Getting API Info to Page    |    H     |      1hrs      |     .5hrs     |    .5hrs    |
| Clickable Card Names        |    H     |      2hrs      |      1hr      |     1hr     |
| Card Details Page           |    H     |      3hrs      |      1hr      |     1hr     |
| Form Creation               |    H     |      3hrs      |     3hrs      |    3hrs     |
| Add Card Button             |    H     |      1hr       |      1hr      |     1hr     |
| Edit Card Function          |    H     |      2hrs      |     2hrs      |    2hrs     |
| Edit Card Button            |    H     |      1hr       |     .5hrs     |    .5hrs    |
| Delete Card Function        |    H     |      3hrs      |    1.5hrs     |   1.5hrs    |
| Delete Card Button          |    H     |      1hrs      |     .5hrs     |    .5hrs    |
| CSS Style Navbar            |    H     |      3hrs      |     2hrs      |    2hrs     |
| CSS Style Homepage          |    H     |      3hrs      |     5hrs      |    5hrs     |
| Working Modal for Form      |    H     |      3hrs      |     5hrs      |    5hrs     |
| CSS Style Form & Modal      |    H     |      2hrs      |     2hrs      |    2hrs     |
| CSS Style Card Details Page |    H     |      3hrs      |     5hrs      |    5hrs     |
| Responsive App              |    H     |      2hrs      |      1hr      |     1hr     |
| --POST MVP BELOW--          |   ---    |      ----      |     ----      |    ----     |
| Pagination for Homepage     |    M     |      3hrs      |     5hrs      |    5hrs     |
| Confirmation Delete Modal   |    M     |      2hrs      |     2hrs      |    2hrs     |
| Total                       |          |     43hrs      |      --       |     --      |

## Dependencies:

- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [axios](https://www.npmjs.com/package/axios)
- [react-modal](https://www.npmjs.com/package/react-modal)
- [react-spinners](https://www.npmjs.com/package/react-spinners)
- [Font Awesome](https://fontawesome.com/v5.15/icons?d=gallery&p=2)

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
