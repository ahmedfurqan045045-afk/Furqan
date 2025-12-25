// const headers = {
//       "Content-Type": "application/json",
//       "x-api-key": "live_pAxxON9xYCpe0Q1Q8CAx838e9fOyZyZGxi7Rt4UuWCsXqSJfFnRbqvy034YTC70G"
//     };

//     const requestOptions = {
//       method: "GET",
//       headers: headers,
//       redirect: "follow"
//     };

//  window.addEventListener("DOMContentLoaded", () => { //dom cntact loaded   load hjae to aage km h

// fetch("https://api.thecatapi.com/v1/breeds",requestOptions).then((data)=>{
//     const list = document.getElementById("catList");

//     data.json().then((res)=>{
//         console.log('res: ', res);
//         res.forEach(cat=>{
// const li = document.createElement("ol");// create new tag  ynii apko kese create krna
//             li.textContent = cat.name;
//             list.appendChild(li);// append child over write nhi hga blke alg alg aya ga

//              if(cat.image && cat.image.url) {
//               const img = document.createElement("img");
//               img.src = cat.image.url;
//               img.alt = cat.name;
//               img.style.width = "150px";      // size adjust
//               img.style.height = "150px";
//               img.style.objectFit = "cover";
//               li.appendChild(img);
//             }

//             list.appendChild(li);

//         })


//     })
// })



//  })
const headers = {
      "Content-Type": "application/json",
      "x-api-key": "live_pAxxON9xYCpe0Q1Q8CAx838e9fOyZyZGxi7Rt4UuWCsXqSJfFnRbqvy034YTC70G"
    };

    const requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow"
    };

  window.addEventListener("DOMContentLoaded", () => {
      fetch("https://api.thecatapi.com/v1/breeds", requestOptions)
        .then(response => response.json())
        .then(result => {
          const container = document.getElementById("catContainer");

          result.forEach(cat => {
            const card = document.createElement("div");
            card.classList.add("catCard");

            // Name
            const para = document.createElement("p");
            para.textContent = cat.name;
            card.appendChild(para);

            // Image
            if(cat.image && cat.image.url) {
              const img = document.createElement("img");
              img.src = cat.image.url;
              img.alt = cat.name;
              card.appendChild(img);
            }

            container.appendChild(card);
          });
        })
        .catch(error => console.log("error", error));
    });

    
    

    