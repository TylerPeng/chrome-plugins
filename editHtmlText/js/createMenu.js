/**
 * Created by TylerLiu on 2016/1/13.
 */
chrome.contextMenus.create({
    type:"normal",
    title:"edit Html text",
    id:"edit",
    onclick:edit
})

function edit(){
    chrome.tabs.executeScript(null, {file: "js/edit.js"});
}