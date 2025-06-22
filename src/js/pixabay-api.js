import axios from "axios";

 export function getImagesByQuery(query) {
    const API_KEY = "50859517-961673cab883b3cd43a6fc51d";
      return axios.get("https://pixabay.com/api/", {
         params: {
             key: API_KEY,
             q: query,
             image_type: "photo",
             orientation: "horizontal",
             safesearch: true
         }
     })
         .then(response => {
             return response.data;
                          
         })
         .catch(error => {
             console.log(error);
        
         });
}