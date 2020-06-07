let capsulesList = document.querySelector('#capsules-list') 
let capsulesForm = document.querySelector('#capsules-form') 
let feed = [];
let endpoint = '';

let fetchData = (params) => {
fetch('https://api.spacexdata.com/v3/capsules?limit=15&order=desc'+ params)
.then(res => res.json())
.then((response) => {
    console.log(response)
    feed = response;
    populateFeed(feed);
})
.catch(err => console.log(err))
}
