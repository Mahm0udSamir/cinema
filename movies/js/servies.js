  angular.module('myMovies', ['ngRoute']);
var customeService = function(){
    info =[{
         "id":1,
         "about":{
            "id":1,
            "title":"The Equalizer",
            "year":"2014",
            "type":"Action",
            "director":"Antoine Fuqua",
            "rating":5,
            "img":"1.jpg",
            "desc":"A man believes he has put his mysterious past behind him and has dedicated himself to beginning a new, quiet life. But when he meets a young girl under the control of ultra-violent Russian gangsters, he can't stand idly by - he has to help her.",
            "cinma":[{ 
                "id_cinma":1,
                "about_cinma":{
                    "name":"El Horya",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"close"},{"chair_id":7, "status":"close"}
                        
                    ]
                 }
            },{ 
                "id_cinma":2,
                "about_cinma":{
                    "name":"Donia",
                    "capacity":"full",
                    "img":"2.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"close"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"close"},{"chair_id":7, "status":"close"},
                        {"chair_id":8, "status":"close"}
                        
                    ]
                 }
            }]
          }},
         {
         "id":2,
         "about":{
            "id":2,
            "title":"Suicide Squad",
            "year":"2016",
            "type":"Comics",
            "director":"Ron Woods",
            "rating":3,
            "img":"2.jpg",
            "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor elit libero, nec dictum leo fringilla non. Donec viverra tempus erat vitae maximus. Aenean condimentum nec nulla eu egestas.",
              "cinma":[{ 
                "id_cinma":1,
                "about_cinma":{
                    "name":"El Horya",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"}
                        
                    ]
                 }
            },{ 
                "id_cinma":2,
                "about_cinma":{
                    "name":"Donia",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"},
                        {"chair_id":8, "status":"open"}
                        
                    ]
                 }
            }]
          }},
          {
          "id":3,
         "about":{
            "id":3,
            "title":"Doctor Strange",
            "year":"2016",
            "type":"Sci-Fi",
            "director":" Scott Derrickson",
            "rating":4,
            "img":"3.jpg",
            "desc":"While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
            "cinma":[{ 
                "id_cinma":1,
                "about_cinma":{
                    "name":"El Horya",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"}
                        
                    ]
                 }
            },{ 
                "id_cinma":2,
                "about_cinma":{
                    "name":"Donia",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"},
                        {"chair_id":8, "status":"open"}
                        
                    ]
                 }
            }]
          }},
          {
          "id":4,
          "about":{
            "id":4,
            "title":"La-la-land",
            "year":"2017",
            "type":"Drama",
            "director":"Jason Borges",
            "rating":3,
            "img":"4.jpg",
            "desc":"Suspendisse vel aliquet massa. Donec tristique sem erat. Mauris ipsum ante, interdum vitae nulla eu, mollis eleifend lectus. Pellentesque eget nibh et velit efficitur suscipit. Maecenas in sapien non ipsum convallis.",
            "cinma":[{ 
                "id_cinma":1,
                "about_cinma":{
                    "name":"El Horya",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"}
                        
                    ]
                 }
            },{ 
                "id_cinma":2,
                "about_cinma":{
                    "name":"Donia",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"},
                        {"chair_id":8, "status":"open"}
                        
                    ]
                 }
            }]
          }},
          {
          "id":5,
         "about":{
            "id":5,
            "title":"Last Samurai",
            "year":"2005",
            "type":"Action",
            "director":"Oliver Atom",
            "rating":4,
            "img":"5.jpg",
            "desc":"Cras a tortor pellentesque, interdum libero vel, hendrerit nunc. Donec aliquam nisi nunc, nec fringilla ante auctor a. Aliquam venenatis vitae neque quis convallis. Duis hendrerit, urna nec congue ultrices, felis orci rutrum orci, id finibus leo mi id elit.",
              "cinma":[{ 
                "id_cinma":1,
                "about_cinma":{
                    "name":"El Horya",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"}
                        
                    ]
                 }
            },{ 
                "id_cinma":2,
                "about_cinma":{
                    "name":"Donia",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"},
                        {"chair_id":8, "status":"open"}
                        
                    ]
                 }
            }]
          }},
          {
          "id":6,
         "about":{
            "id":6,
            "title":"Man on fire",
            "year":"2002",
            "type":"Action",
            "director":"Denzel Washington",
            "rating":2,
            "img":"6.jpg",
            "desc":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
            "cinma":[{ 
                "id_cinma":1,
                "about_cinma":{
                    "name":"El Horya",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"}
                        
                    ]
                 }
            },{ 
                "id_cinma":2,
                "about_cinma":{
                    "name":"Donia",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"},
                        {"chair_id":8, "status":"open"}
                        
                    ]
                 }
            }]
          }},
          {
          "id":7,
          "about":{
            "id":7,
            "title":"No country for old men",
            "year":"2004",
            "type":"Drama",
            "director":"Joe Satriani",
            "rating":5,
            "img":"7.jpg",
            "desc":"Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam.",
            "cinma":[{ 
                "id_cinma":1,
                "about_cinma":{
                    "name":"El Horya",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"}
                        
                    ]
                 }
            },{ 
                "id_cinma":2,
                "about_cinma":{
                    "name":"Donia",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"},
                        {"chair_id":8, "status":"open"}
                        
                    ]
                 }
            }]
          }},
          {
          "id":8,
          "about":{
            "id":8,
            "title":"Mad Max",
            "year":"2016",
            "type":"Action",
            "director":"George Miller",
            "rating":5,
            "img":"8.jpg",
            "desc":"A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.",
            "cinma":[{ 
                "id_cinma":1,
                "about_cinma":{
                    "name":"El Horya",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"}
                        
                    ]
                 }
            },{ 
                "id_cinma":2,
                "about_cinma":{
                    "name":"Donia",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"},
                        {"chair_id":8, "status":"open"}
                        
                    ]
                 }
            }]
          }},
          {
          "id":9,
          "about":{
            "id":9,
            "title":"Logan",
            "year":"2017",
            "type":"Action",
            "director":"James Mangold",
            "rating":4,
            "img":"9.jpg",
            "desc":"In the near future, a weary Logan cares for an ailing Professor X, somewhere on the Mexican border. However, Logan's attempts to hide from the world, and his legacy, are upended when a young mutant arrives, pursued by dark forces. ",
            "cinma":[{ 
                "id_cinma":1,
                "about_cinma":{
                    "name":"El Horya",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"}
                        
                    ]
                 }
            },{ 
                "id_cinma":2,
                "about_cinma":{
                    "name":"Donia",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"},
                        {"chair_id":8, "status":"open"}
                        
                    ]
                 }
            }]
          }},
          {
          "id":10,
          "about":{
            "id":10,
            "title":"Zootopia ",
            "year":"2016",
            "type":"Comedy",
            "director":" Byron Howard, Rich Moore",
            "rating":4,
            "img":"10.jpg",
            "desc":"In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
            "cinma":[{ 
                "id_cinma":1,
                "about_cinma":{
                    "name":"El Horya",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"}
                        
                    ]
                 }
            },{ 
                "id_cinma":2,
                "about_cinma":{
                    "name":"Donia",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"},
                        {"chair_id":8, "status":"open"}
                        
                    ]
                 }
            }]
          }},
          {
          "id":11,
          "about":{
            "id":11,
            "title":"Dumb and dumber",
            "year":"2000",
            "type":"Comedy",
            "director":"Dennis Quiad",
            "rating":3,
            "img":"11.jpg",
            "desc":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt.",
            "cinma":[{ 
                "id_cinma":1,
                "about_cinma":{
                    "name":"El Horya",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"}
                        
                    ]
                 }
            },{ 
                "id_cinma":2,
                "about_cinma":{
                    "name":"Donia",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"},
                        {"chair_id":8, "status":"open"}
                        
                    ]
                 }
            }]
          }},
          {
          "id":12,
          "about":{
            "id":12,
            "title":"Wonder Woman",
            "year":"2017",
            "type":"Action",
            "director":" Patty Jenkins",
            "rating":4,
            "img":"12.jpg",
            "desc":"When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
               "cinma":[{ 
                "id_cinma":1,
                "about_cinma":{
                    "name":"El Horya",
                    "capacity":"full",
                    "img":"1.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"}
                        
                    ]
                 }
            },{ 
                "id_cinma":2,
                "about_cinma":{
                    "name":"Donia",
                    "capacity":"full",
                    "img":"2.jpg",
                    "chair":[
                        {"chair_id":1, "status":"close"},{"chair_id":2, "status":"open"},{"chair_id":3, "status":"close"},
                        {"chair_id":4, "status":"open"},{"chair_id":5, "status":"close"},{"chair_id":6, "status":"open"},{"chair_id":7, "status":"open"},
                        {"chair_id":8, "status":"close"}
                        
                    ]
                 }
            }]
          }}
        ];
    this.getInfo = function(){
        return info;
    }
}
 angular.module('myMovies').service('customeService', customeService);
