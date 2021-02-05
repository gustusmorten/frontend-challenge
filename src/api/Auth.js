import { createServer, Server } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
    const users =[
        {
            username: "harry",
            password: "harry",
            userInfo: {
                name: "Harry Potter" ,
                house: "Gryffindor",
                isStaff: false,
                isStudent: true,
                email: "harry"
            }
        },
        {
            username: "severus",
            password: "severus",
            userInfo: {
                name: "Severus Snape" ,
                house: "Slytherin",
                isStaff: true   ,
                isStudent: false,
                email: "severus"
            }
        },
        {
            username: "luna",
            password: "luna",
            userInfo: {
                name: "Luna Lovegood" ,
                house: "Ravenclaw",
                isStaff: false   ,
                isStudent: true,
                email: "luna"
            }
        },
        {
            username: "cedric",
            password: "cedric",
            userInfo: {
                name: "Cedric Diggory" ,
                house: "Hufflepuff",
                isStaff: false   ,
                isStudent: true,
                email: "cedric"
            }
        },
        {
            username: "minerva",
            password: "minerva",
            userInfo: {
                name: "Minerva McGonagal" ,
                house: "Gryffindor",
                isStaff: true   ,
                isStudent: false,
                email: "minerva"
            }
        },
    ];

    let server = new Server({
        routes() {
            this.post("/api/auth", (schema, request) => {
              let credentials = JSON.parse(request.requestBody);
              let user = users.filter((item) =>{
                  return (item.username == credentials.username || item.password == credentials.password)
              });
                return {user: user[0].userInfo}
            })
            this.passthrough();
            this.passthrough('http://hp-api.herokuapp.com/api/*');
          },
          // keep this line, it allows all other API requests to hit the real server
        
    })

    return server
};