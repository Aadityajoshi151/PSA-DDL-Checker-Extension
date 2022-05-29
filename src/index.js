var urlbox = document.getElementById("urlbox");
urlbox.focus();

document.getElementById("open_all_btn").addEventListener("click", function(){
    urls = getURLs();
    openAll(urls);
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
    //urls = []
    urls = window.getSelection().toString().split("\n");
    if (urls != ""){
        openAll(urls);
    }
    else{
        alert("Please select links");
    }
})

hoster_btns = document.getElementsByClassName("btn-warning")
for(i=0; i<hoster_btns.length;i++)
{
    hoster_btns[i].addEventListener("click",function(){
        openSpecefic(this.innerHTML);
    })
}
function openSpecefic(hoster){
    urls = getURLs();
    for (i=0; i<urls.length;i++)
    {
        if (urls[i].includes(hoster.toLowerCase()))
        {
            openURL(urls[i])
        }
    }
}
function getURLs()
{
    var urls = urlbox.value.split("\n");
    return urls;

}
function openAll(urls){
    for(i=0; i<urls.length; i++)
    {
        openURL(urls[i]);
    } 
}
function openURL(url){
    //This is the function that opens a URL in a new tab
    chrome.tabs.create({
        active: false,
        url,
    });
}
