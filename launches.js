let launchList = document.querySelector('#launches-list') 
let launchForm = document.querySelector('#launch-form') 
let feed = [];
let endpoint = '';

let fetchData = (params) => {
fetch('https://api.spacexdata.com/v3/launches?limit=15&order=desc'+ params)
.then(res => res.json())
.then((response) => {
    console.log(response)
    feed = response;
    populateFeed(feed);
})
.catch(err => console.log(err))
}

let populateFeed = (data) => {
    launchList.innerText = '';
    data.forEach((el) => {
        console.log(el.details)
        let div = document.createElement('div');
        div.setAttribute('class', 'card d-flex justify-content-between align-items-center');
        let h3 = document.createElement('h3');
        h3.setAttribute('class','card-title')
        h3.innerText = el.mission_name;
        let spanDetails = document.createElement('span');
        spanDetails.innerText = el.details;
        let spanDate = document.createElement('span');
        spanDate.innerText = moment(el.launch_date_utc);
        let imgList = document.createElement('ul')
        el.links.flickr_images.forEach((link) => {
            console.log(link)
            let imgLi = document.createElement('li')
            imgLi.innerHTML = `<a href=${link}>${link}</a>`;
            imgList.appendChild(imgLi);
        })

        div.appendChild(h3)
        div.appendChild(spanDetails)
        div.appendChild(spanDate)
        div.appendChild(imgList)
        launchList.appendChild(div)
    })
}

launchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let year_input = launchForm.querySelector('input[type="number"]');
    console.log(event)
    console.log(year_input.name)
    endpoint = `&${year_input.name}=${year_input.value}`
    console.log(endpoint)
    fetchData(endpoint);
})

fetchData(endpoint);
