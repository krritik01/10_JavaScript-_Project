const requestUrl = 'https://api.github.com/users/krritik01'
    const xhr= new XMLHttpRequest()
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
        if(xhr.readyState===4){
            // const data = this.responseText;
            // console.log(typeof data) //it will be string, so we have to convert it into JSON format by using the method JSON.parse()
            const data = JSON.parse(this.responseText);
            console.log(typeof data)
            console.log(data.followers);
            console.log(data.bio);
            console.log(data.twitter_username);
            console.log(data.public_repos);
        }
    }
    xhr.send();










