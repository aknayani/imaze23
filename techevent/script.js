async function fetch_data() {
  let data = await fetch(
    "http://3.109.100.118:8000/api/v1/user/events/category"
  );
  let resp = await data.json();
  return resp.data;
}
async function showevents(type) {
  let data =  await fetch_data();
  var events;
  var section;
  if (type == "Tech") {
    events = data.Tech;
    section = document.querySelector(".tech-container");
    console.log("tech:",events);
    console.log("tech:",section);
  }
  if (type == "Nontech") {
    events = data.NonTech;
    section = document.querySelector(".non-tech-container")
    console.log("non tech",events);
    console.log("non tech:",section);
  }
  if(type === "Workshop"){
    events = data.Workshop;
    section = document.querySelector(".workshop-container");

  }
  let rows = events.length / 3;
  let index = 0;
  for (let i = 0; i < rows; i++) {
    let count = 0;
    const crow = document.createElement("div");
    crow.classList.add("crow");
    while (count < 3 && index < events.length) {
      const ccol = document.createElement("div");
      ccol.classList.add("ccol");
      ccol.innerHTML = `
        <div class="ccard">
                <div class="content">
                    <div class="back">
                    <div class="back-content">
                    <img src="../iphoto/${events[index].name}.png" alt="${events[index].name} logo" style="width: 200px; height: 200px;">
                    </div>
                    </div>
                    <div class="front">
                    <div class="cimg">
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <p class="ka" style="text-align: justify; margin: 0 25px; font-size: 14px;">${events[index].title}</p>
                    <br>   
                    </div>
                    <div class="front-content">
                    <div class="description">
                    <div class="title">
                    <p class="title">
                    <center><strong class="ak" style="color: #00e4ff; font-size: 17px;">${events[index].name}</strong></center>
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
      count++;
    }
    section.appendChild(crow);
  }
}
showevents("Tech");
showevents("Nontech");
showevents("Workshop");



