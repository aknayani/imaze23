async function fetch_data() {
    let data = await fetch(
      "http://3.109.100.118:8000/api/v1/user/events/category"
    );
    let resp = await data.json();
    return resp.data;
}

//flagship events
async function showFlagshipEvent(){
    let name = (window.location.href).split('?')[1];
    console.log(name);
    let data = await fetch_data();
    let events;
    let ideathon = data.Ideathon;
    let happystreet = data.HappyStreet;
    let ITK = {toyothon:data.ITK_toyothon,exhibition:data.ITK_exhibition,sa:data.ITK_sa,workshop:data.ITK_workshop};
    const section = document.querySelector(".flagship-event-container");
    if(name === "Ideathon"){
        events = ideathon;
    }
    if(name === "HappyStreet"){
        events = happystreet;
    }
    if(name === "sa"){
        events = ITK.sa;
    }
    if(name === "exhibition"){
        events = ITK.exhibition;
    }
    if(name === "workshop"){
        events = ITK.workshop;
    }
    if(name === "toyothon"){
        events = ITK.toyothon;
    }
    const crow = document.createElement("div");
    crow.classList.add("crow");
    let index = 0;
    while (index < events.length) {
      const ccol = document.createElement("div");
      ccol.classList.add("ccol");
      ccol.innerHTML = `
        <div class="ccard">
                <div class="content">
                    <div class="back">
                        <div class="back-content">
                            <img src="./iphoto/${events[index].name}.png" alt="${events[index].name} logo" style="width: 200px; height: 200px;">
                        </div>
                    </div>
                    <div class="front">
                        <div class="cimg">
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <p class="ka" >${events[index].title}</p>
                            <br>   
                        </div>
                        <div class="front-content">
                            <div class="description">
                                <div class="title">
                                <p class="title">
                                    <center><strong class="ak" >${events[index].name}</strong></center>
                                </p>
                            </div>
                        </div>
                        <a href="techevent/description.html?${events[index]._id}" class="view">View More>></a>
                    </div>
                </div>
            </div>
                    </div>
                    `;
      crow.appendChild(ccol);
      index++;
    }
    section.appendChild(crow);
}
showFlagshipEvent();
  