    const divBar = document.querySelector(".search");
    const frame = document.querySelector('.frame')
    const websiteFrame = document.querySelector('.websiteFrame')
    divBar.style.marginTop = "20%";
    const bar = document.querySelector(".searchBar");
    // const awsDomain = 'https://scamDetection.ap-south-1.elasticbeanstalk.com'; 
    // const uploadURL = `${awsDomain}/upload`;
    bar.addEventListener("keypress", function(e)
    {
        if(e.key === 'Enter')
        {
            // TO DO IF VALID
            console.log(frame.src)
            console.log(bar.value)
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
                    frame.src = '/proxy?url=' + encodeURIComponent('https://' + bar.value);
                }
                
            });
        }
    });

    function modifyLinksInIframe() {
        
        const iframe = document.querySelector('.frame');
        console.log(frame.src)
        iframe.contentWindow.document.querySelectorAll('a').forEach(link => {
            const currentHref = link.getAttribute('href');
            if (currentHref && currentHref.startsWith('/')) {
                // Modify links with a leading slash to be absolute URLs
                link.setAttribute('href', 'https://' + bar.value + currentHref);
            }
        });
    }

    frame.addEventListener('load', () => {
        console.log('hehe')
        modifyLinksInIframe();
    });
