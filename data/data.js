export const initialState = [{
  id: "search-" + 0,
  completed: false,
  value: {
    filter1: "",
    filter2: "",
    filter3: ""
  }
}]
export const tickBoxValues:string[] = [
  'Usertitle', 'Comments', 'Deleted comments', 'Deleted topics',
  'Questions solved', 'Topics', 'Usergroup', 'Secundary', 'Registration',
  'Last login', 'Location', 'Interest', 'Profession', 'Signature', 'Notes',
  'Badges', 'Reputation received', 'Reputation given', 'Followers', 'Following',
]
export const userData:object = {
  selected:[],
  headers: [
    {
      id: 'header-1',
      text: 'Username',
      reverse: true,
      type: 'string',
      cssClass: 'table-header-link selected-asc',
    },
    {
      id: 'header-2',
      text: 'Comments',
      reverse: false,
      type: 'string',
      cssClass: 'table-header-link',
    },
    {
      id: 'header-3',
      text: 'Topics',
      reverse: false,
      type: 'string',
      cssClass: 'table-header-link',
    },
    {
      id: 'header-4',
      text: 'Usergroup',
      reverse: false,
      type: 'string',
      cssClass: 'table-header-link',
    },
    {
      id: 'header-5',
      text: 'Registration date',
      reverse: false,
      type: 'date',
      cssClass: 'table-header-link',
    },
    {
      id: 'header-6',
      text: 'Last login',
      reverse: false,
      type: 'date',
      cssClass: 'table-header-link',
    },
    {
      id: 'header-7',
      text: 'Last comment',
      reverse: false,
      type: 'date',
      cssClass: 'table-header-link',
    }
  ],
  list: [
    {
      id: 'user-1',
      username: 'Amber H.',
      img: 'amber.png',
      comments: 64,
      topics: 9,
      usergroup: 'Registered user',
      'registration date': '19-mar-12 12:00',
      'last login': '16-aug-12 12:00',
      'last comment': '16-aug-12 16:10',
      selected: false,
    },
    {
      id: 'user-2',
      username: 'Bart Pineapple',
      img: 'bart.png',
      comments: 37,
      topics: 0,
      usergroup: 'Registered user',
      'registration date': '20-mar-11 13:57',
      'last login': '15-may-12 17:34',
      'last comment': '14-may-12 20:01',
      selected: false,
    },
    {
      id: 'user-3',
      username: 'Caitlyn Appleseed',
      img: 'caitlyn.png',
      comments: 189,
      topics: 13,
      usergroup: 'Registered user',
      'registration date': '13-aug-12 22:09',
      'last login': '13-aug-12 22:10',
      'last comment': '13-aug-12 23:50',
      selected: false,
    },
    {
      id: 'user-4',
      username: 'Carmen Candy',
      img: 'carmen.png',
      comments: 411,
      topics: 22,
      usergroup: 'Moderator',
      'registration date': '01-jan-11 11:21',
      'last login': '15-aug-12 17:17',
      'last comment': '15-aug-12 18:13',
      selected: false,
    },
    {
      id: 'user-5',
      username: 'Dolf Dreamer',
      img: 'dolf.png',
      comments: 282,
      topics: 0,
      usergroup: 'Super user',
      'registration date': '18-jan-11 12:08',
      'last login': '16-aug-12 13:12',
      'last comment': '16-aug-12 14:22',
      selected: false,
    },
    {
      id: 'user-6',
      username: 'Edgar Enders',
      img: 'edgar.png',
      comments: 37,
      topics: 0,
      usergroup: 'Registered user',
      'registration date': '12-dec-11 08:55',
      'last login': '05-apr-12 08:08',
      'last comment': '04-apr-12 23:59',
      selected: false,
    },
    {
      id: 'user-7',
      username: 'Jane Blackswan',
      img: 'jane.png',
      comments: 189,
      topics: 13,
      usergroup: 'Registered user',
      'registration date': '04-feb-12 14:34',
      'last login': '16-aug-12 12:11',
      'last comment': '14-aug-12 07:33',
      selected: false,
    },
    {
      id: 'user-8',
      username: 'Jennifer Appleseed',
      img: 'jennifer.png',
      comments: 75,
      topics: 2,
      usergroup: 'Moderator',
      'registration date': '16-mar-12 18:12',
      'last login': '15-may-12 17:34',
      'last comment': '16-aug-12 16:10',
      selected: false,
    },
    {
      id: 'user-9',
      username: 'John Doe',
      img: 'john-doe.png',
      comments: 111,
      topics: 0,
      usergroup: 'Registered user',
      'registration date': '30-jan-12 21:00',
      'last login': '13-aug-12 22:10',
      'last comment': '13-aug-12 23:50',
      selected: false,
    },
    {
      id: 'user-10',
      username: 'John Foe',
      img: 'john-foe.png',
      comments: 189,
      topics: 3,
      usergroup: 'Super user',
      'registration date': '07-may-12 04:14',
      'last login': '05-apr-12 08:08',
      'last comment': '14-may-12 20:01',
      selected: false,
    }
  ]
}
export const category:string[] = ['Comments', 'Registration Date', 'Usergroup']
export const ltgt:string[] = ['is less than', 'is greater than', 'is equal to']
export const baos:string[] = ['before', 'after', 'on']

export const footerSelect1:string[] = ['Registered user', 'Super user', 'Moderator']

export const rowSelect:string[] = ['10 Rows', '25 Rows', '50 Rows', '100 Rows', 'All Rows'];
export const options2:object[] = [
  {
    label: 'Group 1',
    options: [
      {
        label: "Option #1 for group 1",
        value: "Option #1 for group 1"
      },
      {
        label: "Option #2 for group 1",
        value: "Option #2 for group 1"
      },
      {
        label: "Option #3 for group 1",
        value: "Option #3 for group 1"
      },
    ]
  },
  {
    label: 'Group 2',
    options: [
      {
        label: "Forum",
        value: "Forum"
      },
      {
        label: "Ipsum",
        value: "Ipsum"
      },
      {
        label: "Dorol",
        value: "Dorol"
      },
    ]
  },
]
