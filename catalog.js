
let http=new XMLHttpRequest();
http.open('get','product_dummy_data.json',true);

http.send();

var stat=0
http.onload=function(){
    
    if(this.readyState==4 && this.status==200){
        var products=JSON.parse(this.responseText);
        
        let output="";
        console.log(products);
        
        
        
        for(let item of products.products)
        {
            output+=`<div class="pallet">
            <div class="image"><img src="${item.images[0]}" alt="" /></div>
            <div class="description">
            <h3 class="itemName">${item.title}</h3>
            <p>${item.description}</p>
            </div>
            </div>`
        }
        
        
        document.querySelector(".gallery").innerHTML=output;
    }
    
}





