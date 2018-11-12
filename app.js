Relational DB Practice

// Twitter



// - users
      username
      password
      followers[user ids]
      tweets [tweet ids]
      likes [tweet ids]
// - tweets
      content
      date
      author ID

// - followers (within users)
// - favorites (within tweets)

// Airbnb

  // - users
      { username
      password
      homes: [ids]
      favorites [home ids]
      rental history [booking ids]
      reviews [booking ids]
      }
  // - homes
      {
          name: string
            address: {
              number: string
              street: string
              suite: string
              city: string
              zip: number
            }

          owner: ID (user ID)
      }
      price 
      reviews
      location

  // - bookings
// - when user reserves a home for time. 
//         has user and home. example of many to many.

//         relationships
//         {
//           //  a join table below, joins two different collections together.
//           user1ID: id
//           user2ID: id
//         }
          userId: id
          homeId: id
          startDate: date
          endDate: date  
          reviews[id] (of reviews)

  // - reviews
          {
            authorID: ID
            home: ID
            content: string
            
          }

Spotify
Users
Artists
Songs
Albums
Genres
favorites

Users{
  favSongs[ids]
  favArtists[ids]
  favGenres:[string]

}





Artists{
  genres: [string]

}



Songs {
genres: [string]

}


Albums {
  genres: [string]


}