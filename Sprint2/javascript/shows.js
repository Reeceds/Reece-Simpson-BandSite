

let showsContainer = document.querySelector('.shows__container');


// Load premaid headings at tablet width
let showHeaders = () => {
    // Creates shows headers container
    let showsHeadersContainer = document.createElement("div");
    showsHeadersContainer.classList.add("shows-headers");
    showsContainer.appendChild(showsHeadersContainer);
    // Creates tablet date header
    let tabletDateHeader = document.createElement("h5");
    tabletDateHeader.innerText = "DATE";
    showsHeadersContainer.appendChild(tabletDateHeader);
    // Creates tablet venue header
    let tabletVenueHeader = document.createElement("h5");
    tabletVenueHeader.innerText = "VENUE";
    showsHeadersContainer.appendChild(tabletVenueHeader);
    // Creates tablet location header
    let tabletLocationHeader = document.createElement("h5");
    tabletLocationHeader.innerText = "LOCATION";
    showsHeadersContainer.appendChild(tabletLocationHeader);
    // Creates tablet location header
    let tabletEmptyHeader = document.createElement("h5");
    tabletEmptyHeader.innerText = "";
    showsHeadersContainer.appendChild(tabletEmptyHeader);
}

showHeaders();
    


//Load API shows ot hte page
let uploadShows = (show) => {
    if (show.date && show.place && show.location) {

        // Creates container for each show
        let showsDetailsContainer = document.createElement("div");
        showsDetailsContainer.classList.add("shows-details");
        showsContainer.appendChild(showsDetailsContainer);

        // Creates date information container
        let showsDateContainer = document.createElement("div");
        showsDateContainer.classList.add("shows-date");
        showsDetailsContainer.appendChild(showsDateContainer)
        // Creates date header
        let showsDateHeader = document.createElement("h5");
        showsDateHeader.classList.add("shows-date-title");
        showsDateHeader.innerText = "DATE";
        showsDateContainer.appendChild(showsDateHeader);
        // Creates date
        let showsDate = document.createElement("h4");
        showsDate.innerText = show.date;
        showsDateContainer.appendChild(showsDate);

        // Creates venue information container
        let showsVenueContainer = document.createElement("div");
        showsVenueContainer.classList.add("shows-venue");
        showsDetailsContainer.appendChild(showsVenueContainer)
        // Creates venue header
        let showsVenueHeader = document.createElement("h5");
        showsVenueHeader.classList.add("shows-venue-title");
        showsVenueHeader.innerText = "VENUE";
        showsVenueContainer.appendChild(showsVenueHeader);
        // Creates venue
        let showsVenue = document.createElement("p");
        showsVenue.innerText = show.place;
        showsVenueContainer.appendChild(showsVenue);

        // Creates location information container
        let showsLocationContainer = document.createElement("div");
        showsLocationContainer.classList.add("shows-location");
        showsDetailsContainer.appendChild(showsLocationContainer)
        // Creates location header
        let showsLocationHeader = document.createElement("h5");
        showsLocationHeader.classList.add("shows-location-title");
        showsLocationHeader.innerText = "LOCATION";
        showsLocationContainer.appendChild(showsLocationHeader);
        // Creates location 
        let showsLocation = document.createElement("p");
        showsLocation.innerText = show.location;
        showsLocationContainer.appendChild(showsLocation);

        // Creates form for button
        let showsFormButtonContainer = document.createElement("form");
        showsFormButtonContainer.classList.add("shows-buy-tickets");
        showsDetailsContainer.appendChild(showsFormButtonContainer);
        // Creates button
        let showsFormButton = document.createElement("button");
        showsFormButton.classList.add("shows-button");
        showsFormButton.innerHTML = "<h2>BUY TICKETS</h2>";
        showsFormButtonContainer.appendChild(showsFormButton);

    }
}


// **************
// Requests API shows
const requestShows = () => {
    axios.get("https://project-1-api.herokuapp.com/showdates?api_key=99510a2b-a1cf-4d45-8227-74f5e67d2ecd")
  .then(response => {
      response.data.forEach(eachShow => {
        uploadShows(eachShow);
      })
  })
  .catch(function (error) {
    console.log(error);
  });
}

requestShows()
// **************
