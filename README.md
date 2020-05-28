# web-project
This project is meant to inform TEC community and anyone who is interested knowing Mexico statistics
related to COVID19 in Mexico. The development of the pandemic has currently moved fast, and it is
hard to track due to the government data which its deployed daily by state with confirm cases and
suspicious cases. It is going to track the change in data every single day and get the visualization by state.

## end-points
- /region/data/states
  - POST {}
  - response [] ex. 0: {id: "CDMX",…} data: [{x: "3/15/2020", y: "0.2"}, ...}
- /user/team
  - GET {}
  - response investigadores: [,…], equipo: [,…]
- /user/all
  - GET {}
  - response 0: {_id: "5ecccc43874390a5dc98c798", username:...}
- /user/find
  - POST {username: "admin@admin.com"}
  - response 0: {username: "admin@admin.com", nombre: "Admin"...}

