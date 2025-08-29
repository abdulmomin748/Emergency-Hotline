const callTimeData = [];
let callsHisContainer;
const callF = () => {
    const callBtns = document.querySelectorAll('.call-btn');

    for (const btn of callBtns) {
        btn.addEventListener('click',function(){

            const icons = parseInt(document.getElementById('total-coin').innerText);
            let iconMinus = icons - 20;
            if(icons < 20){
                alert ("you don't have credential to call");
                return;
            }
            document.getElementById('total-coin').innerText = iconMinus;

            const title = btn.parentNode.parentNode.children[0].innerText;
            const subTitle = btn.parentNode.parentNode.children[1].innerText;
            const emergencyNumb = btn.parentNode.parentNode.children[2].innerText;
            alert(`📞 Calling on ${subTitle} \n🔢 Number: ${emergencyNumb}`);
            
            const date = new Date();
            const getYear =  date.toLocaleDateString(); 
            const getTime = date.toLocaleTimeString("en-BD");
            
            callTimeData.push({title,emergencyNumb,getYear,getTime});
            console.log(callTimeData);
            
            callsHisContainer = document.getElementById('call-items-cntlr');
            callsHisContainer.innerText = '';

            for (const singleData of callTimeData) {
                const div = document.createElement('div');
                div.innerHTML = `<div class="static bg-[#fafafa] p-3 mb-4">
                <div>
                    <h4 class="font-semibold">${singleData.title}</h4>
                    <span>${singleData.emergencyNumb}</span>
                </div>
                <div>
                    <span>${singleData.getTime}-</span>
                    <span>${singleData.getYear}</span>
                </div>
            </div>`
            callsHisContainer.appendChild(div);

            }
           
        })
    }

}
callF();

// clear call history
document.getElementById('clear-btn').addEventListener('click', () => {
    alert('hi')
    callsHisContainer.innerText = '';
})

// toggle function
function toggleImage() {
    let hearts = document.querySelectorAll('.heart-parent');
    
    for (const heartItem of hearts) {
        const img = heartItem.querySelector('.heart');
        let count = document.getElementById('heart-copy');
        
        heartItem.addEventListener('click', () =>{
            
        let counNumber = parseInt(count.innerText);

        if (img.getAttribute("src") === "assets/heartD.png") {
            img.setAttribute("src", "assets/heart-copy.png");
            count.innerHTML = counNumber + 1;
            console.log(count,counNumber);
            
        } else {
            img.setAttribute("src", "assets/heartD.png");
            count.innerHTML = counNumber - 1;
            console.log(count,counNumber);
        }
    })
    }
    
}toggleImage();