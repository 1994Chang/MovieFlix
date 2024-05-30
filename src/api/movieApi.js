import axios from "axios";


const apiKey = process.env.REACT_APP_API_KEY;
console.log(apiKey,"apikey")
 export  const getMovielist = async(movieName) =>{
        try {

            const res = await axios(`https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}&page=1`);
            console.log(res,"resorce in api")
            return res;
        } catch (error) {
            console.log(error);
        }
    }
