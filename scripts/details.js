let detail_arr=JSON.parse(localStorage.getItem("details"))||[]

console.log(detail_arr)

function Display(data){
    data.forEach(ele => {
        let div=document.createElement("div")
        div.className="child"
        let div2=document.createElement("div")
        div2.className="details"
       let div3=document.createElement("div")
       div3.className="pricediv"
        let img=document.createElement("img")
        img.src=ele.img
        let title=document.createElement("h3")
        title.innerText=ele.title
        title.className="title"
        let location=document.createElement("p")
        location.style.color="grey"
        location.innerText=ele.title
        location.className="loc"
        let refund=document.createElement("p")
        refund.innerText=ele.refund
        refund.style.color="#297a97"
        refund.className="ref"
        let price=document.createElement("h2")
        price.innerText=ele.price
        price.className="price"
        let total=document.createElement("p")
        total.innerText=ele.total+" total"
        total.className="tprice"
        let review=document.createElement('p')
        review.innerText=ele.review
        review.className="rev"
        div3.append(price)
        div2.append(title,location,refund,review)
        div.append(img,div2,div3)
        container.append(div)
        let check=document.getElementById("check")
        check.innerText=ele.total
    });
}

Display(detail_arr)