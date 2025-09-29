const sideWall = 'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIWFRUVFRcXFxUXFxcXFxcXFRcXFxUXFxUYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg8NDysZFRkrKzcrKzcrKysrNzcrLSsrLS0rLSsrNzcrNy03NzcrKysrLTctKy0tNysrLSsrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAmEAEBAQEAAAMHBQAAAAAAAAAAEQHwAmHRITFBUXGBkRKhweHx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APtZmpVcW1olAAQFqBUFpUw0F3BAFBAVUAEADFABKAColBpIYACGIpuGACppgAm4oCQWAKVmlUaoyoKIAogIlaxAVQACoAtEoC1KioKIKECpUF8QG6ooICoKBgVANAiBQIAKA54YmKK0MtKgM1QaKzSgpmoVFazRmgLuiYURaVABalMBaJgCmJpQXRAGkEBrDdSgGKAAKoiooAAOGNMVUaaKgC4qAiiAKVmrgqiUoCoIijNUA0M3yBcIgo1oyoKMrQUxAFKmKCiANCAKJQFogDjVzWKtRWisqo0VnNAVWSoKJTNBaVKUFEoClQ/UDVKzmlBrNM1KgNVWc0oNDIDVGb5FBrFZq0FEpVFVmlBpEq0FQQHDNXdZzVxFXNVmqI1gyA0M7qUGs03UqUGislBrNGd1QKqJqDRmn4L1UUxKYDSJQGis1QWmalQGqrNM0GhKAqsrQFrNUDdVAHnxWGhWs01nTNoNau6zTNBdKzVBaVkBaJSoNUrJQapUpm/IRrdNZqg1SsqopWQGsKhQaqVKAq1laDVSoUGhlQVayUF73CUB56tZXNRWtXMZzVUazU3xJUoGKxe77LUGkSlUXDdS+0qC4BgLVZwoNCUBqlZwoNFZzVqo1UrIDVKyZqDdKzVzVGis1aCrWcWgtKlSg1REBwWs4eHUVsqVN3u72AulZz593qnx3e+ANbvnhn8puqBVwTd+PqC6mrmEAVAFKhQW+ZSoDVTd1Cg0JUqjVGRBqmakFGioCNKzmrgLSpSgpWaAu6rKg81axnwatRpo1nF+YFVM3v8AVwFS1KvoIu73fcwzU8INahpgAigCYd5gtAA0IgKYmKCgKC1CguKzi0RaIA0lSoDVKiAtQ/UA5YAjRm71W9iYuALv2Te/r1W95ewFAz4iBO76Ju93vAXDO78iApmlANDQCqmGAuioACgioKCooBiKIAAqFSgqVCgUSgMYUEaMaoCIvh1QF7v3S99dADFoAG6ACACiAKAB3RYAEAVFQABAFKgCiABUAKACUAH/2Q==")';

const wallColor = [sideWall, 'url("./ChatGPT\ Image\ 27\ сент.\ 2025\ г.\,\ 00_24_17.png")', sideWall, 'url("./ChatGPT\ Image\ 27\ сент.\ 2025\ г.\,\ 00_33_57.png")'];

const floorColor = ['url("https://www.lenmarket.ru/image/cache/catalog/laminat/kaindl/kaindl-laminat-classic-touch-standart-buk-svaran-k4368-1-720x720.jpg")', 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRakuD-NFd7TFcUXkAXPXRapmlNdVbcYy_BXM27QukQUJt0K4VVQ5SYy-6XAP-5jS2CyG0&usqp=CAU")'];
let currentFloor = false;

console.log(window.screen.height, window.screen.width);

let currentWallColor = [0, 1, 2, 3];

const center = document.querySelector("#center");
const left = document.querySelector("#left");
const right = document.querySelector("#right"); 
const floor = document.querySelector("#floor"); 

document.querySelector("#leftArr").addEventListener("click", () => {

    currentWallColor.forEach((el, i) => {
        if (currentWallColor[i] === 3) {
            currentWallColor[i] = 0;
        } else {
            currentWallColor[i] = currentWallColor[i] + 1;
        }
    })

    currentFloor = !currentFloor;

    left.style.backgroundImage = wallColor[currentWallColor[0]];
    center.style.backgroundImage = wallColor[currentWallColor[1]];
    right.style.backgroundImage = wallColor[currentWallColor[2]];
    floor.style.backgroundImage = floorColor[Number(currentFloor)];
});

document.querySelector("#rightArr").addEventListener("click", () => {

    currentWallColor.forEach((el, i) => {
        if (currentWallColor[i] === 0) {
            currentWallColor[i] = 3;
        } else {
            currentWallColor[i] = currentWallColor[i] - 1;
        }
    })

    currentFloor = !currentFloor;

    left.style.backgroundImage = wallColor[currentWallColor[0]];
    center.style.backgroundImage = wallColor[currentWallColor[1]];
    right.style.backgroundImage = wallColor[currentWallColor[2]];
    floor.style.backgroundImage = floorColor[Number(currentFloor)];
});