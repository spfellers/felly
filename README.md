# Felly.dev

## Ideas:

* Have Component list of small project-esque things
* List of components will contain:
    * Title
    * Description
    * Github link to module readme
* Each of the components will be a separate feature module
* Routes:
    * / => main dashboard with component list
    * /projectX => projectX (lazy-loaded)

## TODOS:

* Get HTTPS setup with cloudflare

## Questions:

* Is it worth it to e2e test
    * probably not, the plan as of now is to have all the feature modules be independent
    * also its super timely for a silly app that I have limited time to write

* scss vs. css
    * css is lighter, more widespread
    * use scss at job so will build a better understanding of differences
    * can always go css => scss, going back would take time

## Standards:

* Dark Mode ONLY (for now)
    * Color Palette:
        * ![#E1ADFB](https://placehold.it/15/E1ADFB/000000?text=+) `#E1ADFB`
        * ![#8158FC](https://placehold.it/15/8158FC/000000?text=+) `#8158FC`
        * ![#212121](https://placehold.it/15/212121/000000?text=+) `#212121`
* Everything must be Prettier'd