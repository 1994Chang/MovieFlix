import axios from "axios";


const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;
// console.log(apiKey,"apikey")
 export  const getMovielist = async(movieName) =>{
        try {

            const res = await axios(`${apiUrl}/?s=${movieName}&apikey=${apiKey}&page=1`);
            console.log(res,"resorce in api")
            return res;
        } catch (error) {
            console.log(error);
        }
    }


export const getMovieDetail = async(movieId) =>{
    console.log(movieId,"movieId in api")
    try{
        const res = await axios(`${apiUrl}/?i=${movieId}&apikey=${apiKey}`);
        // console.log(res,"res in moviedetail");
        return res;
    } catch(error){
        console.log(error);
    }
}