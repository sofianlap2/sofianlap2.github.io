const posts = [

{
    title:"Liquid Batching Automated",

    date:"July 2026",

    description:"Automated Liquid Batching System Siemens S7-1200 PLC | KTP700 HMI | PROFINET | SCL Programming",

    youtube:"https://www.youtube.com/watch?v=bf9yCLkUwGU"
},

];

function getVideoId(url){

    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]{11})/;

    const match = url.match(regExp);

    return match ? match[1] : "";
}

const container = document.getElementById("posts");

posts.forEach(post=>{

    const videoId = getVideoId(post.youtube);

    container.innerHTML += `

    <div class="post">

        <div class="post-header">

            <h2 class="post-title">${post.title}</h2>

            <div class="post-date">${post.date}</div>

            <div class="post-description">

                ${post.description}

            </div>

        </div>

        <div class="video-container">

            <iframe

                src="https://www.youtube.com/embed/${videoId}"

                title="${post.title}"

                loading="lazy"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                allowfullscreen>

            </iframe>

        </div>

        <div class="post-footer">

            <a class="watch"

                href="${post.youtube}"

                target="_blank">

                <i class="fa-brands fa-youtube"></i>

                Open on YouTube

            </a>

        </div>

    </div>

    `;
});