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
    shows.forEach(obj => {
        if (obj.date && obj.venue && obj.location) {
            let showsContent =
            `<div class="shows-details">
                    <div class="shows-date">
                        <h5>DATE</h5>
                        <h4>${obj.date}</h4>
                    </div>
                    <div class="shows-venue">
                        <h5>VENUE</h5>
                        <p>${obj.vanue}</p>
                    </div>
                    <div class="shows-location">
                        <h5>LOCATION</h5>
                        <p>${obj.location}</p>
                    </div>
                    <form class="shows-buy-tickets">
                        <button class="shows-button"><h2>BUY TICKETS</h2></button>
                    </form>
            </div>`
            
            showsContainer.innerHTML += showsContent;
        }
    })
}

uploadShows()