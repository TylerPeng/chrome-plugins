/**
 * Created by TylerLiu on 2016/1/13.
 */
if(document.body.getAttribute("contenteditable") === null){
    document.body.setAttribute("contenteditable","");
}else{
    document.body.removeAttribute("contenteditable");
}