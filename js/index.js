const divBar = document.querySelector(".search");
const frame = document.querySelector('.frame')
const websiteFrame = document.querySelector('.websiteFrame')
divBar.style.marginTop = "20%";

const bar = document.querySelector(".searchBar");
bar.addEventListener("keypress", function(e)
{
    if(e.key === 'Enter')
    {
        // TO DO IF VALID
                
        divBar.style.marginTop = "2%";
        websiteFrame.style.display = 'flex';
        if(bar.value.substring(0, 5) != "https")
            frame.src = "https://" + bar.value; 
        else
            frame.src = bar.value;
        const responseData = fetch('http://localhost:8080/upload', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                websiteURL: bar.value
            })
        });
    }
   
});
