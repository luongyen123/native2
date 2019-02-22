import {NetInfo,AsyncStorage} from 'react-native';

const check_internet = ()=>{
    NetInfo.isConnected.fetch().then(isConnected=>{
        if(isConnected !== true){
          alert("Vui long kiem tra");
        }
    });
}
const check_token = (Actions)=>{
    AsyncStorage.getAllKeys((err,keys)=>{
      // alert(keys.length);
      if(keys.length ==0){
        Actions.tutorial();
        
      }else{
        AsyncStorage.multiGet(keys,(err,stores)=>{
          stores.map((result,i,store)=>{
            if(store[i][0] == 'tutorial' & store[i][1] === '1'){
              Actions.login();
            }
            if(store[i][0] == 'token'){
              Actions.profile();
            }
          });
        })
      }
  });
}
export {
  check_internet,
  check_token
} ;
