export const host ='http://localhost:3000';
export  const environment={
  production:false,
  chooseUsers:{
    get: host + '/chooseUsers'
  },
listUsers:{
    get: host +'/listUsers'
},
allUsers:{
    get:host+'/allUsers'
},
  postsUsers:{
    get:host+ '/postsUsers'
  },
  nextUsers:{
    get:host +'/nextUsers'
  }
};
