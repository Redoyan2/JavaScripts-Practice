// give a array of friend list and get the gretest number of friend 


let friendList = ['jamal', 'namaly', 'abdul abdussalam', 'mehedy hasan rony', 'alam ahammed alomgir']

function findLargeNameFriend(){
    let largeName = friendList[0];
    for (let i = 0; i < friendList.length; i++){
        if(friendList[i].length>largeName.length){
            largeName = friendList[i];
        }
    }
    console.log(largeName);
}





findLargeNameFriend();