import axios from "axios";


 export  const getMovielist = async(movieName) =>{
    console.log(movieName,"movie name in api")
    const apiKey = 'e9a83e6b';
        try {

            const res = await axios(`http://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}&page=1`);
            console.log(res,"resorce in api")
            return res;
        } catch (error) {
            console.log(error);
        }
    }
