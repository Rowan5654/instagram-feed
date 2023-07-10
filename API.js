let request = new XMLHttpRequest();

request.open("GET", "https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQVJWYUFGRThIZA3BlcnI4MjY2MVdLRGZALSEdJR3dtVEFscGZAxaE1rV3Y0Nl9CMU13eU5EVjRzYW5NZA2pCcHZATdWk5VWdlaDctRFZANOFdfSWVVOE9tR2ItRjczeGpza2pUdW1obGRaRGYwQzh2TFNlbklDV2ZA4RDcxTWs4");

request.onload = () => {
    console.log(request);
    if (request.status == 200) {
        console.log(JSON.parse(request.response));
    }
    else {
        console.log(`error ${ request.status } ${ request.statusText }`);
    }
}