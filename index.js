// console.log(document)
// const btnPlus=document.getElementsByClassName("plus")
// console.log(btnPlus)

// console.log(total)
// const buttons=document.getElementsByTagName("i")
// console.log(buttons)
// const plusElement=document.querySelector("#total")
// console.log(plusElement)
// const all=document.querySelectorAll("i")
// console.log(all)
const btnPlusArray=document.getElementsByClassName("plus")
const btnMinusArray=document.getElementsByClassName("minus")
const checkedArray=document.getElementsByClassName("check")
const deleteArray=document.getElementsByClassName("delete")
const likeArray=document.getElementsByClassName("like")
for(var i=0;i<btnPlusArray.length;i++){
    btnPlusArray[i].addEventListener("click",increment)
    btnMinusArray[i].addEventListener("click",decrement)
    checkedArray[i].addEventListener("change",total)
    deleteArray[i].addEventListener("click",deleterow)
    likeArray[i].addEventListener("click",like)
}
function increment(event){
    const btn=event.target
    const divElt=btn.parentElement
    const quantityTag=divElt.querySelector("p")
    var quantityValue=parseInt(quantityTag.innerHTML)
    quantityValue++
    quantityTag.innerHTML=quantityValue
    const trElement=divElt.parentElement.parentElement
    const unitePriceValue=Number(trElement.querySelector(".unitePrice").innerHTML)
    const priceTag=trElement.querySelector(".price")
    var priceValue=Number(priceTag.innerHTML)
    priceValue=quantityValue*unitePriceValue
    priceTag.innerHTML=priceValue
}
function decrement(event){
    const btn=event.target
    const divElt=btn.parentElement
    const quantityTag=divElt.querySelector("p")
    var quantityValue=parseInt(quantityTag.innerHTML)
    if(quantityValue>0){
        quantityValue--;
    }
    quantityTag.innerHTML=quantityValue
    const trElement=divElt.parentElement.parentElement
    const unitePriceValue=Number(trElement.querySelector(".unitePrice").innerHTML)
    var priceTag=trElement.querySelector(".price")
    var priceValue=Number(priceTag.innerHTML)
    priceValue=quantityValue*unitePriceValue
    priceTag.innerHTML=priceValue
    
}
function total(e){
    const checkbox=e.target
    const trElt=checkbox.parentElement.parentElement
    const priceTag=trElt.querySelector(".price")
    var priceValue=parseInt(priceTag.innerHTML)    
    var totalTag= document.getElementById("total")
    var totalValue=parseInt(totalTag.innerHTML)
    const btnPlus=trElt.querySelector(".plus")
    const btnMinus=trElt.querySelector(".minus")
    if(checkbox.checked===true){
        totalValue+=priceValue
        btnPlus.setAttribute("disabled",true)
        btnMinus.setAttribute("disabled",true)
    }
    else{
        btnPlus.removeAttribute("disabled")
        btnMinus.removeAttribute("disabled")
        totalValue-=priceValue
    }
    totalTag.innerHTML=totalValue
}
function deleterow(event){
    const btn=event.target
    const divElt=btn.parentElement
    const deletebtn=divElt.querySelector(".delete")
    const row=btn.parentNode.parentNode.parentNode
    console.log(row)
    // btn.parentElement.parentElement.remove()
    row.parentNode.removeChild(row);
    console.log(row)
  
}
function like(event){
    const btn=event.target
    btn.setAttribute('style','color:red;')
    console.log(btn)
}