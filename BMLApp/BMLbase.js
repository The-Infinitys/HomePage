(function(){
    let HTMLDATA=document.createElement('html');
    HTMLDATA.innerHTML=`
    <!--Here to HTML-->
    `;
    document.body.appendChild(HTMLDATA);
    let CSSDATA=document.createElement('style');
    CSSDATA.innerHTML=`
    /*Here to CSS*/
    `;
    document.body.appendChild(CSSDATA);
    let JSDATA=document.createElement('script');
    JSDATA.innerHTML=`
    /*Here to JS*/
    `;
    document.body.appendChild(JSDATA);
    }())