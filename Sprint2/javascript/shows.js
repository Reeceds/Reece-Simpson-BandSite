let shows = [
    {date: 'Mon Dec 17 2018', venue: 'Ronald Lane', location: 'San Fancisco, CA'},
    {date: 'Tue Jul 18 2019', venue: 'Pier 3 East', location: 'San Fancisco, CA'},
    {date: 'Fri Jul 22 2019', venue: 'View Loungue', location: 'San Fancisco, CA'},
    {date: 'Sat Aug 12 2019', venue: 'Hyatt Agency', location: 'San Fancisco, CA'},
    {date: 'Fri Sep 05 2019', venue: 'Moscow Center', location: 'San Fancisco, CA'},
    {date: 'Wed Aug 11 2019', venue: 'Pres Club', location: 'San Fancisco, CA'},
]

let showsContainer = document.querySelector('.shows__container');

//Load shows
let uploadShows = () => {

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


    shows.forEach(obj => {
        if (obj.date && obj.venue && obj.location) {

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
            showsDate.innerText = `${obj.date}`;
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
            showsVenue.innerText = `${obj.venue}`;
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
            showsLocation.innerText = `${obj.location}`;
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
    })
}

uploadShows()

