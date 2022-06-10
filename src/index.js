var urlbox = document.getElementById("urlbox");
urlbox.focus();

document.getElementById("open_all_btn").addEventListener("click", function(){
    openAll();
})

document.getElementById("clear_btn").addEventListener("click", function(){
    urlbox.value='';
    urlbox.focus();
})

document.getElementById("separator_btn").addEventListener("click", function(){
    urlbox.value+="\n*******************************************************\n"
    urlbox.focus();
})

document.getElementById("open_selected_btn").addEventListener("click", function(){
    openSelected();
})

hoster_btns = document.getElementsByClassName("btn-warning")
for(i=0; i<hoster_btns.length;i++)
{
    hoster_btns[i].addEventListener("click",function(){
        openSpecefic(this.innerHTML);
    })
}
function openSelected(){
    urls = window.getSelection().toString().split("\n");
    if (urls != ""){
        openAll(urls);
    }
    else{
        alert("Please select links");
    }
}
function openSpecefic(hoster){
    flag=true;
    urls = getURLs();
    if (urls.toString() != ""){
    for (i=0; i<urls.length;i++){
    if (urls[i].includes(hoster.toLowerCase())){
        flag=false;
        openURL(urls[i])
        }
        }
    if (flag){
        alert("No links with "+hoster+" found");
    }
    }
    }
    
function getURLs()
{
    var urls = urlbox.value.split("\n");
    return urls;

}
function openAll(selectedurls){
    if (!selectedurls){
        urls = getURLs();
    }
    else{
        urls = selectedurls;
    }
    if (urls.toString() != ""){
        for(i=0; i<urls.length; i++)
        {   
        if ((urls[i].includes("nitro.download") || urls.includes("nitroflare")) && document.getElementById("nitro_check").checked == true){

            continue;
        }
        openURL(urls[i]);
        } 
    }   
}
function openURL(url){
    //This is the function that opens a URL in a new tab
    chrome.tabs.create({
        active: false,
        url,
    });
}
