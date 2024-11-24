fetch("https://my-json-server.typicode.com/giwazai/LessonRobocode1/db")
    .then(async function (responce) {
        console.log(await responce.json())
    })