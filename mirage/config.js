export default function() {

  this.namespace='/mockapi'

  this.get('/leaves',function(){
    return {
      data:[{
        "leaves": [{
          "id": 1,
          "remainingLeaves": 123,
          "leaves": [1] }],
          "leaves": [{
          "id": 1,
          "date": "2018-05-28T08:25:04.747Z",
          "reason": "foo",
          "from": "2018-05-28T08:25:04.747Z",
          "to": "2018-05-28T08:25:04.747Z",
          "leaveType": "foo",
          "status": "foo" }]
      }]}
  });

  this.get('/issues',function(){
    return {
      data:[{
        id: '123',
        type: 'issues',
        attributes: {
          title: 'setup docker',
          'issue-type':'Infra',
          description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          comments:[
            {
              date: "13-may-2018",
              'posted-by': "umashankar",
              'comment-text': ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip'
            },
            {
              date: "13-may-2018",
              'posted-by': "umashankar",
              'comment-text': ' please provide approval'
            },
            {
              date: "13-may-2018",
              'posted-by': "umashankar",
              'comment-text': ' please provide approval'
            }
          ],
          date: '12-jan-2018',
          status: 'open'
        }
        
      },
      {
        id: '124',
        type: 'issues',
        attributes: {
          title: 'setup docker',
          'issue-type':'Infra',
          description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          comments:[
            {
              date: "13-may-2018",
              'posted-by': "umashankar",
              'comment-text': ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip'
            },
            {
              date: "13-may-2018",
              'posted-by': "umashankar",
              'comment-text': ' please provide approval'
            },
            {
              date: "13-may-2018",
              'posted-by': "umashankar",
              'comment-text': ' please provide approval'
            }
          ],
          date: '12-jan-2018',
          status: 'open'
        }
        
      },
      {
        id: '125',
        type: 'issues',
        attributes: {
          title: 'setup docker',
          'issue-type':'Infra',
          description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          comments:[
            {
              date: "13-may-2018",
              'posted-by': "umashankar",
              'comment-text': ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip'
            },
            {
              date: "13-may-2018",
              'posted-by': "umashankar",
              'comment-text': ' please provide approval'
            },
            {
              date: "13-may-2018",
              'posted-by': "umashankar",
              'comment-text': ' please provide approval'
            }
          ],
          date: '12-jan-2018',
          status: 'open'
        }
        
      }]
    };
  })

  this.patch('issues/:id', function(request){
    return request;
  });
  
  this.get('/issues/:id',function(schema, request){
    var id = request.params.id;
    return {
      id: id,
      type: 'issues',
      attributes: {
        title: 'setup docker',
        'issue-type':'Infra',
        description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        comments:[
          {
            date: "13-may-2018",
            'posted-by': "umashankar",
            'comment-text': ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip'
          },
          {
            date: "13-may-2018",
            'posted-by': "umashankar",
            'comment-text': ' please provide approval'
          },
          {
            date: "13-may-2018",
            'posted-by': "umashankar",
            'comment-text': ' please provide approval'
          }
        ],
        date: '12-jan-2018',
        status: 'open'
      }
    }
  });

  this.get('/rentals', function() {
    return {
      data: [{
        type: 'rentals',
        id: 'grand-old-mansion',
        attributes: {
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          "property-type": 'Estate',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'rentals',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          "property-type": 'Condo',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'rentals',
        id: 'downtown-charm',
        attributes: {
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          "property-type": 'Apartment',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }]
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
