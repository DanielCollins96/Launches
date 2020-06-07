https://api.spacexdata.com/v3/history

let launchList = document.querySelector('#launches-list') 
let launchForm = document.querySelector('#launch-form') 
let feed = [];
let endpoint = '';


fetch('https://api.spacexdata.com/v3/history')
.then(res => res.json())
.then((response) => {
    console.log(response)
    feed = response;
    populateFeed(feed);
})
.catch(err => console.log(err))
