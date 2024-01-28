//movie rental

adduser(name){
    const user = new user (namw);
    this.user(name) = [];
    return user;
}
add movie(title, totalmovie){
    const id = this.movie.length -1;
    const movie = new movie(id, title, totalstock);
    this.movie.push(movie);
    return movie;
}

getmovie(){
    return this.movie.map(id, title, availablemovie) => (
        id,
        title,
        availablemovie,);
}
getmoviebyId(movieId){
    return this.movie.find(movie) => movie.Id === movieId0;
}
rentmovie|(user.movieId){
    const movie = this.getmoviebyId(movieId);
    if(movie && movie.availablemovie > 0){
        movie.available stock ==;
        this.user(username).push(movie);
        return (sucess:true, message: "move created suceessfully")
        else{return {sucess:false,message; "movie not available for rent or invald movie Id.";}}
    }
}