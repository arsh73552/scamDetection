const divBar = document.querySelector(".search");
const frame = document.querySelector('.frame')
const websiteFrame = document.querySelector('.websiteFrame')
divBar.style.marginTop = "20%";
const PORT = 8080;
const bar = document.querySelector(".searchBar");
// const awsDomain = 'https://scamDetection.ap-south-1.elasticbeanstalk.com'; 
// const uploadURL = `${awsDomain}/upload`;
bar.addEventListener("keypress", function(e)
{
    if(e.key === 'Enter')
    {
        // TO DO IF VALID
                
        divBar.style.marginTop = "2%";
        websiteFrame.style.display = 'flex';
        bar.value = bar.value.replace(/^https:\/\//, '');
        frame.src = 'loading.html'
        const responseData = fetch('/upload', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                websiteURL: bar.value
            })
        }).then(response => response.json())
        .then(response => {
            const res = response.phishingWebsite;
            if(res){
                frame.src = 'invalid.html'
            }
            else{
                if(bar.value.substring(0, 5) != "https")
                    frame.src = "https://" + bar.value; 
                else
                    frame.src = bar.value;
            }
            
        });
    }
   
});