[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Javascript](https://aleen42.github.io/badges/src/javascript.svg)
![React](https://aleen42.github.io/badges/src/react.svg)
![React-Router](https://aleen42.github.io/badges/src/router.svg)
![NodeJs](https://github.com/aleen42/badges/raw/master/src/node.svg)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <img src="./src/data/images/logonorris.png" alt="Logo" width="auto" height="80">
  <h1 align="center">Project 2 : "Norris Inc. E-commerce webapp"</h1>

  <p align="center">
    <i>
    A simple E-commerce web application created using React during a web developer Bootcamp by four awesome students that may already be full-fledged developers.
    </i>
    <br />
    <br />
    <a href="https://norris-e-commerce-app.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/Gabriellji/e-commerce-app#who-are-we">Contact</a>   
</p>
</br>



# Table of Contents
- [:microscope: About the code](#microscope-about-the-code)
    - [Hooks](#wrench-hooks)
    - [Context](#pushpin-context)
    - [APIs](#telephone_receiver-apis)
    - [`theme.js` and `textData.js`](#page_with_curl-`theme.js`-and-`textData.js`)
- [:floppy_disk: Installation](#floppy_disk-installation)
- [:thought_balloon: About the project](#thought_balloon-about-the-project)
    - [Some history](#seedling-some-history)
    - [Constraints](#lock-constraints)
    - [Scrum Team](#rugby_football-scrum-team)
    - [Unmet needs](#question-unmet-needs)
    - [Objectives](#money_with_wings-objectives)
    - [User personas](#walking-user-personas)
    - [Explorations + Decisions](#brain-explorations--decisions)
- [:link: Other information](#link-other-information)
    - [Epics (Scrum)](#japanese_goblin-epics-(scrum))
    - [Design guidelines and ressources](#nail_care-design-guidelines-and-ressources)
    - [Git and GitHub guidelines](#dizzy-git-and-github-guidelines)
- [:cop:License](#cop-license)

</br>
</br>

# :microscope: About the code
The following are the major frameworks and technologies that we used to build our project:
- React
- React Router
- Styled Components
- ...

[:top:](#table-of-contents)

## :wrench: Hooks
By exploiting the power of React Hooks, we were able to use functional components in most cases. For instance, in the rendering UI or for handling state and logic. This approach has many advantages : 
- Improved code reuse.
- Better code composition.
- Better defaults.
- Sharing non-visual logic with the use of custom hooks.
- Flexibility in moving up and down the components tree.

In our project we mainly used the `useState`, `useEffect`, `useRef` and `useContext` hooks.

[:top:](#table-of-contents)

## :pushpin: Context
In our project, we decided to use React Context because it allows us to share information with any component by storing it in a central place.

With this approach, it’s quite easy to provide data to any component in the React component tree, regardless of how deeply nested they may be.

To create a new Context, we used the React `createContext()`  function.

To access the context value, we used `useContext()` React hook.

[:top:](#table-of-contents)

## :telephone_receiver: APIs
We used the following APIs in our web application:

| API | ? |
|--|--|
| [Mapbox API](https://docs.mapbox.com/api/overview/ "https://docs.mapbox.com/api/overview/") | We used the Mapbox Maps Service to display a map with the location of the stores that sell on the web app. |
| [React Modal Library](https://reactcommunity.org/react-modal/ "https://reactcommunity.org/react-modal/") | This a modal dialog component for React.JS that we used in different places in our web app. |
| [Node.js UUID Library](https://www.npmjs.com/package/uuid "https://www.npmjs.com/package/uuid") | This library is used to create short non-sequential url-friendly unique ids |
| [Stripe API](https://stripe.com/docs "https://stripe.com/docs") | This API provides a payments infrastructure for the internet. We used it on the payment page. |
| [React Stripe Checkout Component](https://www.npmjs.com/package/react-stripe-checkout "https://www.npmjs.com/package/react-stripe-checkout") | Stripe is a cloud-based service that enables businesses and individuals to receive payments over the internet and offers both client-side libraries (JavaScript and native mobile) and server-side libraries (Java, Ruby, Node.js, etc.). |
| [Facebook Login](https://developers.facebook.com/docs/facebook-login/ "https://developers.facebook.com/docs/facebook-login/") | Facebook Login enables people to have private & secure experiences, from basic account creation to social networking, all with the click of a button--it is uniquely positioned to offer a seamless experience across platforms, devices, and operating systems. |
| [Google Sign-In](https://developers.google.com/identity/sign-in/web/sign-in#add_a_google_sign-in_button) | Google Sign-In enables users to sign into apps and authorize apps to use Google services. |
| [Finding API (eBay)](https://developer.ebay.com/DevZone/finding/Concepts/FindingAPIGuide.html) | Used to to retrieve a list of items from a given category to display in the shops. |
| [Shopping API (eBay)](https://developer.ebay.com/devzone/shopping/docs/Concepts/ShoppingAPIGuide.html) | Used to retrieve a single item to display in the shops. |
|

</br>

### About Stripe API
It would have been easier to make a fake payment form with HTML, or even copy and paste one of those cool animated payment forms you can find in *CodePen* but we wanted to learn how to do it for real as if it was an actual job and not just a Bootcamp exercise.

Out of the different solutions at our disposal, we chose the Stripe API because it’s well documented, which makes it easy to integrate into projects.

We are using it in *Testing mode* for this web application but it's also possible to make it receive real payments.

### About the eBay APIs
As with many other APIs, you need a key to use the ones from eBay. Rather than using a free and public API with images of items, we decided to try and send a request to the eBay Developer’s Program. Three days later we got a positive answer containing our very own access key :smile: . With it, we can make up to 5,000 API calls a day, more than enough for our purposes.

We also decided to make the API call from inside of a Context because of two reasons:
- To reduce the number of API calls produced by a single user.
- To improve the performance (the call will be made as soon as the landing page on the website is loaded).

What follows is a sample response we receive when using the Finding API with a specific *Category Id* :

    {"findItemsByCategoryResponse":[{"ack":["Success"],"version":["1.13.0"],"timestamp":["2021-01-05T16:48:02.158Z"],"searchResult":[{"@count":"1","item":[{"itemId":["124475001012"],"title":["Felco F-2 Pruner High Performance Pruning Shears"],"globalId":["EBAY-US"],"primaryCategory":[{"categoryId":["139871"],"categoryName":["Pruning Shears & Snips"]}],"galleryURL":["https:\/\/thumbs1.ebaystatic.com\/m\/mwnwIEW33HzUFiq3iwbG4jA\/140.jpg"],"viewItemURL":["https:\/\/www.ebay.com\/itm\/Felco-F-2-Pruner-High-Performance-Pruning-Shears-\/124475001012"],"paymentMethod":["PayPal"],"autoPay":["false"],"postalCode":["080**"],"location":["Burlington,NJ,USA"],"country":["US"],"shippingInfo":[{"shippingServiceCost":[{"@currencyId":"USD","__value__":"0.0"}],"shippingType":["Free"],"shipToLocations":["Worldwide"],"expeditedShipping":["false"],"oneDayShippingAvailable":["false"],"handlingTime":["3"]}],"sellingStatus":[{"currentPrice":[{"@currencyId":"USD","__value__":"36.99"}],"convertedCurrentPrice":[{"@currencyId":"USD","__value__":"36.99"}],"sellingState":["Active"],"timeLeft":["P1DT18H39M25S"]}],"listingInfo":[{"bestOfferEnabled":["true"],"buyItNowAvailable":["false"],"startTime":["2020-12-08T23:27:30.000Z"],"endTime":["2021-01-07T11:27:27.000Z"],"listingType":["FixedPrice"],"gift":["false"],"watchCount":["14"]}],"returnsAccepted":["true"],"condition":[{"conditionId":["1000"],"conditionDisplayName":["New"]}],"isMultiVariationListing":["false"],"topRatedListing":["false"]}]}],"paginationOutput":[{"pageNumber":["1"],"entriesPerPage":["1"],"totalPages":["123191"],"totalEntries":["123191"]}],"itemSearchURL":["https:\/\/www.ebay.com\/sch\/181033\/i.html?_ddo=1&_ipg=1&_pgn=1"]}]}

Once we get that response, we map through it to get all the data for each item, and then we store only what we need in our Context.

What follows is a sample response of the *Shopping API* :

    json:here

[:top:](#table-of-contents)

## :page_with_curl: `theme.js` and `textData.js`
To make our project scalable and maintainable, we opted to keep everything related to the style and text inside two files.

All texts and related information is stored inside a file called `textData.js`. This file contains the text strings that are injected into the code so that they are shown to the final user when the page is loaded.

`theme.js`, contains everything related to the style (colors, sizes, fonts, etc.).

We decided to take this approach to be able to maintain and update the project in a simpler, easier, and faster way. For most changes that we may need to do in the future, we only need access and edit these two files instead of looking through the huge react architecture to find the correct positioning of the one line of code that needs to be changed.

It took a bit of time to structure these files, but we believe it was worth it and it was a great learning opportunity.

[:top:](#table-of-contents)

# :floppy_disk: Installation
1. Clone the repo
```sh
   git clone https://github.com/Gabriellji/e-commerce-app.git
```
2. [Contact us](#linkedin-profiles) for guidance on how to get your own API keys.
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API keys in `.env`
5. Run or build the app with:
    - `npm start`\
    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
    The page will reload if you make edits.\
    You will also see any lint errors in the console.
    - `npm run build`\
    Builds the app for production to the `build` folder.\
    It correctly bundles React in production mode and optimizes the build for the best performance.\
    The build is minified and the filenames include the hashes.\
    Your app is ready to be deployed!\
    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
    - `npm run eject`\
    **Note: this is a one-way operation. Once you `eject`, you can’t go back!**\
    If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.\
    Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.\
    You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

[:top:](#table-of-contents)

# :thought_balloon: About the project
## :seedling: Some history
### Who are we?
We are [Yauheniya](https://www.linkedin.com/in/evgeniya-gabrikova/), [Jacopo](https://www.linkedin.com/in/jacopo-luri-1111081a2/),
[Mancini](https://www.linkedin.com/in/mancia08/) and [Carlos](https://www.linkedin.com/in/carlosaore/), four students of [Wild Code School](https://www.wildcodeschool.com/). At the moment these lines are being written, we are attending a ["Web developer"](https://www.wildcodeschool.com/en-GB/trainings/web-developer-full-time) Bootcamp that is 5 months long and is teaching us all the technical know-how and knowledge to develop interactive websites using HTML, CSS, JavaScript, so we can take a React and Node JS development project to completion.

### Why did we create this?
After learning the fundamentals of React, we were asked to team up and develop a simple web application with a few constraints. We had to use React for the user interface, use data that would be fetched from an API of our choosing and we had close to 48 hours of effective time, distributed in two months of calendar time. Other than that, we were given free rein to do whatever kind of app that we wanted in whatever style we wanted.

Despite coming from different backgrounds and from all over the world, we became friends very quickly, so we decided to form a team and work together on this project. After brainstorming and discussing, we ended up deciding to do a simple E-commerce web application following the current trends caused by the onset of the COVID-19 pandemic. We dreamed up a whole narrative about us being a Scrum Team working for a fictional company called “Norris Inc.”, and how we were asked to create the web app following a line of reasoning explained in the “Unmet needs” sections.

The project went very well, we were able to work together with little to no conflict and we succeeded in creating the web app that we wanted. We also learned a lot, both in terms of coding know-how and about working on a web development project. We started using Scrum for the project management and we even completed two short sprints but then we decided that it wasn't a good fit for us, as a team of students, and for such a time frame. So, even if we all liked very much to work with Scrum, we decided to switch to Kanban for the final leg of the project. We don't expect to always be switching the project management approach but, in this case, we felt that it was justified and it's also quite normal for students to want to experiment with new things.

All in all, it was a very fun project, we learned a lot from it, and we will all treasure the moments spent together working as a team. We hope that you will like it and if you have any questions, comments or you want to reach us, you can do so thru our...

### LinkedIn profiles
- [Habrykava Yauheniya](https://www.linkedin.com/in/evgeniya-gabrikova/)
- [Luri Jacopo](https://www.linkedin.com/in/jacopo-luri-1111081a2/)
- [Mancini](https://www.linkedin.com/in/mancia08/)
- [Carlos Orellana](https://www.linkedin.com/in/carlosaore/)

[:top:](#table-of-contents)

## :lock: Constraints
- Use Scrum as best as possible to manage the project.
- Must use React.
- It has to be some kind of web application that uses data coming from an API.
- Time-boxed: 2 months of calendar time but just ~48 effective hours (We may have worked for a bit more).
- Only 4 students as developers, no Scrum Master, no Product Owner, and no specific boundaries other than the constraint stated above.

## :rugby_football: Scrum Team
We are pretending to be a Scrum team working under a fictional company called “Norris Inc.” that sells workwear through a “direct-to-consumer” business model through an online E-commerce platform. The clothes are made by a third party to our specifications.

The company is located in a small but very populated European city (London) that has a lot of offices and businesses. In this city, there are a lot of environmental regulations that make having a big physical store unfeasible and unpractical. The better option is to ship directly to the consumer but, again, because of regulations and narrow streets it is not possible nor practical to use big trucks.

As a response, Norris Inc. has its own logistic and shipping system that utilizes small warehouses all around the city and a big network of delivery cyclists. Norris Inc. has won all the environmental and business design awards because of this.

## :question: Unmet needs
The COVID-19 pandemic has a lot of people confined in their homes. This has been going on for some time now and will not change in the foreseeable future because people in the city don’t trust Putin’s vaccine and also have taken a liking to stay at home with their cats, Netflix, wine, food, and pajamas. This is exactly what has disrupted our business model. Simply put, our customers no longer need work clothes to wear around the office because they are working from home in their cat hair covered pajamas.

The folks in the marketing department saw that we now have an underutilized logistic and shipping system and also that a lot of small shop owners around the city are trying to sell their products to customers that no longer go to their physical stores because they aren’t leaving their houses as much. These shops owner’s unmet need is our opportunity: Norris Inc. can provide the shipping service and charge for that.

But then there is a second unmet need. Turns out that most of these local stores around town have always sold from physical locations and have never needed (or wanted) to sell online until now. The pandemic is forcing everyone to adapt to this new world where nobody leaves the house. So, here again, the folks from marketing saw an opportunity. Since Norris Inc. already knows how to sell online, because that is what we do, we can also help the stores around the city to do it. This means that we have to provide an E-commerce platform for these shops, and we can also charge for this.

A third unmet need is that a lot of these small shops around the city pride themselves in offering top-notch customer service and a lot of after-sale service. They do it because they have cultivated a very long relationship with their clients. There are a lot of cases where a clientele has been shopping for the same products in the same shop for years and years. So, if we want to host these shops under our E-commerce platform, we must also provide a way for the customer service and after-sale service to happen. We have been told that meeting this “need” is paramount to the success of the project.

[:top:](#table-of-contents)

## :money_with_wings: Objectives
- Learn to work in a team.
- Learn about Scrum methodology or at least the Agile approach.
- Learn to use React.
- Make a simple but beautiful E-commerce web application.
- Have fun.
- Get hired in a job or internship after the Bootcamp.

[:top:](#table-of-contents)

## :walking: User personas
### Persona #1: Buyer
- 60 years old (old timer, old school).
- Born in the pre-internet era (boomer?).
- Does not know how to use technology that well so he/she has the habit of asking family members for help and calling customer service for assistance and guidance.
- Knows about eBay, Amazon, Etsy, and other E-commerce websites from newspaper articles and other family members and friends but does not use them or care about them particularly. He/she finds them too difficult to use, too crowded (information overload), and not user friendly especially because those sites don't have a number where you can call to get personalized assistance.
- Uses social media, particularly Facebook.
- He or she is a retiree so lots of disposable income (translation: not particularly looking for good deals but for quality products and specific products that he/she likes for whatever reason).
- Has a credit card but also likes to pay cash and to give tips.
- Struggles to use a smartphone.
- Has a smartphone but maybe with a small screen or it's an old model.
- Also has a desktop/laptop PC but it's an old one with a small screen that is used primarily for Facebook and emails.
- Lives in the outskirts, probably in a posh city area with very good pedestrian infrastructure and local shops so he/she is used to a ~15 min leisurely walk to the local shops.
- Has been going to the same shops for 20 years so he/she still wants to keep buying from them
- Currently cannot leave the house because of quarantine.
- Still wants to shop in the usual places but doesn't know how to do it through the internet.

### Persona #2: Seller
- Small local store, been there since forever.
- Mom and pop store.
- “Brick and mortar”.
- Does not sell food or other perishable items.
- Sells technology, clothes, toys, small electronics, small household appliances, etc. 
- Because of the pandemic they can't sell in person so to keep the business they want to sell online but I don't know how to do it.
- Provides a lot of after-sale service and customer service.
- Has an established clientele.
- Doesn't have warehouses or shipping services so there is trepidation about selling online.

## :brain: Explorations + Decisions
### Brainstorming
Since we were given very broad guidelines, we had to spend some time deciding what we want to do and how. During our initial brainstorming meeting, we kept circling back to an E-commerce application that would be used to sell something: flights? trips? clothes? pet food, supplies, and services? This was done in a conference call using a Google Jamboard for quickly jotting down ideas.

On a second meeting, we decided to try and figure out what would be our motivation, or justification for the project, which meant that we had to also figure out who we are in this scenario. This is where things started to get interesting and the idea kind of revealed itself to us (not unlike in a Scrum managed project, mind you). Then, we did a Joint Application Development (JAD) session to clearly define the need for the project (benefits, opportunities, problems, risks, etc.) and the scope (constraints, assumptions, success factors, etc.). We used the same tools as last time.

Finally, just to “iron out the details”, we met again and made some critical decisions about the personas that the project would be targeting, laid out epics and user stories, and prioritized them using the MoSCow methodology. For this, we switched to Google Slides and Mira. All of this sounds like a lot of work but it took place in only two days and it allowed us to work with very clear objectives and purposes.

### Scrum?
When it was time to begin working, we realized that we were not completely comfortable with Scrum so after talking about it we decided to run what we called a “mock sprint” with one team member acting as a "Scrum Master" and another one as a "Product Owner".

This "mock sprint" basically was a Sprint with a very small set of user stories that could be done in a couple of days. We started working without expecting very much of the result but trying to pay attention to the impediments and other kinds of issues. This ended up being a very smart decision because it allowed us to see some fundamental issues with our project idea and correct our workflow and behavior to better match the agile [principles](https://agilemanifesto.org/principles.html).

With the lessons learned from the “mock sprint” (laid out in a retrospective meeting), we quickly did a sprint planning session, poker planning, etc. and we started to work with complete confidence in our idea. This worked so well that the only real impediment we had from that point forward was scrum itself. The cost of adhering to the ceremonies, user story format, etc. started to be bigger than the benefits we were getting. In the context of the Bootcamp, this project is supposed to be a learning tool before getting to more serious projects. That’s why the allotted time was very short.

### The big change
At the end of that second sprint, we decided to experiment with a leaner and faster project management approach. In truth, we were hesitant to do such a drastic change in the middle of the project, but we also believed that, as students, we are supposed to try and experiment so we can learn from different sources. Also, it could be argued that we were organically following Agile principles: welcoming change, simplicity, result-oriented, etc. Again, this decision proved to be a smart one because we started to work a lot faster.

### Tools
We used Jira as our main tool to assist in the project management and Confluence to store and access all the documentation being produced (master project document, meeting notes, design guidelines, etc.) and Slack together with Google Meet as our platform for communication.

[:top:](#table-of-contents)

# :link: Other information
## :japanese_goblin: Epics (Scrum)
> These are the *epics* that we defined for our project. Because of time constraints and the actual scope of the exercise, we weren't able to do all of them but we believe it's interesting to see the full extent of our idea.

- As a buyer, I want to be able to pay for the products I selected so I can buy them
- As a seller, I want to access information about the payments I have received from my customers so I can use them for various purposes (accounting, marketing, inventory, etc.).
- As a buyer, I want to be able to get customer service and after-sale service through the website, so I keep shopping in the same places I did before the pandemic.
- As a seller, I want to access information about the buyers so I can give them after-sale service.
- As a buyer, I want to be able to write reviews about the shops and their after-sales service so other potential shoppers can know what are the best stores.
- As a buyer, I want to be able to log in to the webpage so I can have a more personalized experience.
- As a seller, I want to be able to log in to the webpage so I can update and maintain my store and access useful information.
- As a seller, I want to implement marketing strategies in my shop so I can sell more products and earn more money.

[:top:](#table-of-contents)

## :nail_care: Design guidelines and ressources
> These are ressources and general guidelines that we decided to follow during the development of our web application.

### CSS coding guidelines
…

### UX/UI for the shops (buyer side)
- Maximum of 10 items per page on a shop’s page so users with phone or PC with small screens can comfortably browse and don’t get confused by an unending list of items.

- The shops' pages have to be simple, not cluttered, and devoid of sponsored products, advertisements, or suggestions of any kind.\
Our target demographic, more often than not, already knows exactly what product or service from what specific shop he/she is looking for. So, the reason to use our E-commerce app is to buy that specific item. It’s not to buy the “cheapest” pair of jeans from any random seller.\
Therefore, suggestions are intrusive and don’t bring any value to the user.

- As a corollary to the last bullet point, the buyer user may have issues locating the product inside the app (again, not selecting or deciding which one to buy) so a “search” functionality may be added inside each shop.

### UX/UI for the buying process
Give confirmation on every step of the buying process with a clear explanation text.
Examples:
- “Review the items you have selected here”
- “No purchase has been made yet”
- “Click here to proceed to the payment page”

[:top:](#table-of-contents)

## :dizzy: Git and GitHub guidelines
For our project we opted to follow those guidelines:
Small commits, to be able to find any problem easier and faster if we happen to encounter one.
- Commits with a significant name about the feature it’s implementing.
- Branches with a significant name about the feature it’s addressing.
- Pull requests done often with small but complete features rather than far apart with very big changes to the code.
- All pull requests are to be reviewed and approved by at least one person before being merged into the main branch.

[:top:](#table-of-contents)

# :cop: License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).

[:top:](#table-of-contents)