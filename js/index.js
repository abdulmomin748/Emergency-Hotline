const callTimeData = [];
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
            
            const callsHisContainer = document.getElementById('call-items-cntlr');
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
callF()
